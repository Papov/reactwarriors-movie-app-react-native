import React from "react";
import PropTypes from "prop-types";
import { Provider, observer, inject } from "mobx-react";
import EStyleSheet from "react-native-extended-stylesheet";
import { Router, Scene } from "react-native-router-flux";

import { loginFormStore } from "./stores/loginFormStore";
import { moviesStore } from "./stores/moviesStore";
import { userStore } from "./stores/userStore";
import { Home } from "./screens/Home";
import { Filters } from "./screens/Filters";
import { Genres } from "./screens/Genres";
import { Login } from "./screens/Login";

EStyleSheet.build({
  $border: "#424242",
  $mainPurple: "rgb(86,61,124)"
});

@inject("userStore")
@observer
class App extends React.Component {
  static propTypes = {
    userStore: PropTypes.object
  };

  render() {
    return (
      <Router>
        <Scene key="root">
          <Scene
            key="login"
            component={Login}
            initial
            hideNavBar
            type="reset"
          />
          <Scene
            key="home"
            component={Home}
            title="Movies"
            hideNavBar
            type="reset" /* have to find api */
            gesturesEnabled={false} /* dirty hack */
          />
          <Scene key="filters" component={Filters} title="Filters" />
          <Scene key="genres" component={Genres} title="Genres" />
        </Scene>
      </Router>
    );
  }
}

export default () => (
  <Provider
    moviesStore={moviesStore}
    loginFormStore={loginFormStore}
    userStore={userStore}
  >
    <App />
  </Provider>
);
