import { observable, action, flow } from "mobx";
import { Actions } from "react-native-router-flux";
import { Vibration, AsyncStorage } from "react-native";
import { userStore } from "./userStore";
import { CallApi } from "../config/api";

class LoginFormStore {
  messages = {
    username: "please, write your login",
    password: "please, write your password",
    base: "login or password is uncorrect"
  };

  @observable
  username = "vlad_link";

  @observable
  password = "Link0lnpassword";

  @observable
  errors = {};

  @observable
  submitAwait = false;

  @observable
  showLoginForm = false;

  @action
  checkErrorsOnBlur = name => () => {
    let length = this[name].length === 0;
    let errors = {};
    if (length) {
      switch (name) {
        case "username":
          errors.username = this.messages.username;
          break;
        case "password":
          errors.password = this.messages.password;
          break;
        default:
          break;
      }
      if (Object.keys(errors).length) {
        this.errors[name] = errors[name];
      }
    }
  };

  @action
  toogleLoginForm = () => {
    this.showLoginForm = !this.showLoginForm;
  };

  @action
  checkAllErrors = () => {
    const { username, password, messages } = this;
    const errors = {};
    if (username === "") {
      errors.username = messages.username;
    }
    if (password === "") {
      errors.password = messages.password;
    }
    if (Object.keys(errors).length) {
      Object.keys(errors).map(key => {
        this.errors[key] = errors[key];
      });
      return false;
    } else {
      return true;
    }
  };

  @action
  onHandleChange = name => text => {
    this[name] = text;
    this.errors[name] = null;
    this.errors.base = null;
  };

  onSubmit = flow(function*() {
    const { username, password } = loginFormStore;
    try {
      loginFormStore.submitAwait = true;
      const firstDataToken = yield CallApi.get("/authentication/token/new");
      const validateLoginToken = yield CallApi.post(
        "/authentication/token/validate_with_login",
        {
          body: {
            username: username,
            password: password,
            request_token: firstDataToken.request_token
          }
        }
      );
      const { session_id } = yield CallApi.post("/authentication/session/new", {
        body: {
          request_token: validateLoginToken.request_token
        }
      });
      userStore.session_id = session_id;
      const user = yield CallApi.get("/account", {
        params: {
          session_id: session_id
        }
      });
      loginFormStore.submitAwait = false;
      userStore.user = user;
      Actions.home();
      yield AsyncStorage.setItem("session_id", session_id);
    } catch (error) {
      loginFormStore.submitAwait = false;
      loginFormStore.errors.base = loginFormStore.messages.base;
      Vibration.vibrate(300);
    }
  });

  @action
  onSubmitClick = () => {
    const valid = this.checkAllErrors();
    if (valid) {
      this.onSubmit();
    } else {
      Vibration.vibrate(200);
    }
  };
}

export const loginFormStore = new LoginFormStore();
