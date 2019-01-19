import React from "react";
import { Provider } from "mobx-react";
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

export default () => (
  <Provider moviesStore={moviesStore} loginFormStore={loginFormStore} userStore={userStore}>
    <Router>
      <Scene key="root">
        <Scene key="login" component={Login} initial hideNavBar />
        <Scene key="home" component={Home} title="Movies" hideNavBar />
        <Scene key="filters" component={Filters} title="Filters" />
        <Scene key="genres" component={Genres} title="Genres" />
      </Scene>
    </Router>
  </Provider>
);
