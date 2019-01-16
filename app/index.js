import React from "react";
import { Provider } from "mobx-react";
import EStyleSheet from "react-native-extended-stylesheet";

import { moviesStore } from "./stores/moviesStore";
import Navigator from "./config/routers";

EStyleSheet.build({
  $border: "#424242"
});

export default () => (
  <Provider moviesStore={moviesStore}>
    <Navigator />
  </Provider>
);
