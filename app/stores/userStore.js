import { observable, action, reaction, values } from "mobx";
import { AsyncStorage } from "react-native";
import { Actions } from "react-native-router-flux";
import { CallApi } from "../config/api";
import { moviesStore } from "./moviesStore";

class UserStore {
  @observable
  user = null;

  @observable
  popovnerOpen = false;

  @observable
  session_id = null;

  @observable
  favorite = [];

  @observable
  watchlist = [];

  @action
  toggleMenu = () => {
    this.popovnerOpen = !this.popovnerOpen;
  };

  @action
  exitFromAccount = async () => {
    const { session_id } = this;
    await CallApi.delete("/authentication/session", {
      body: {
        session_id: session_id
      }
    });
    console.log("EXIT IS SUCCESS");
    this.onLogOut();
  };

  @action
  updateAddedMovie = listName => {
    const { user, session_id } = this;
    const moviesId = [];
    let page = 1;
    const getAddedMovies = async () => {
      const responseApi = await CallApi.get(
        `/account/${user.id}/${listName}/movies`,
        {
          params: {
            language: "ru-RU",
            session_id: session_id,
            page: page
          }
        }
      );
      moviesId.push(...responseApi.results.map(item => item.id));
      if (responseApi.total_pages > page) {
        page++;
        getAddedMovies();
      } else {
        this[listName].replace(moviesId);
      }
    };
    getAddedMovies();
  };

  @action
  onLogOut = async () => {
    this.user = null;
    this.session_id = null;
    this.popovnerOpen = false;
    await AsyncStorage.clear();
    Actions.login();
  };

  @action
  getSessionIdFromCookie = async () => {
    const session_id = await AsyncStorage.getItem("session_id");
    if (session_id) {
      const user = await CallApi.get("/account", {
        params: {
          session_id: session_id
        }
      });
      this.session_id = session_id;
      this.user = user;
      Actions.home();
    }
  };

  @action
  addToMyList = ({ movieId, type, isAdd }) => async () => {
    if (this.session_id) {
      const queryParams = {
        session_id: this.session_id
      };
      const body = {
        media_type: "movie",
        media_id: movieId,
        [type]: !isAdd
      };
      await CallApi.post(`/account/${this.user.id}/${type}`, {
        params: queryParams,
        body: body
      });
      this.updateAddedMovie(type);
    }
  };
}

export const userStore = new UserStore();

reaction(
  () => userStore.user,
  user => {
    if (user) {
      userStore.updateAddedMovie("watchlist");
      userStore.updateAddedMovie("favorite");
    } else {
      userStore.favorite.clear();
      userStore.watchlist.clear();
    }
  }
);

reaction(
  () => values(userStore.favorite),
  favorite => {
    moviesStore.movies.forEach(movie => {
      movie.favorite = favorite.includes(movie.id);
    });
  }
);

reaction(
  () => values(userStore.watchlist),
  watchlist => {
    moviesStore.movies.forEach(movie => {
      movie.watchlist = watchlist.includes(movie.id);
    });
  }
);
