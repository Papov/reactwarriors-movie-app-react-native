import React from "react";
import { StatusBar, View } from "react-native";
import { Actions } from "react-native-router-flux";

import { Login as LoginComponent } from "../components/Login/Login";

class Login extends React.Component {
  static propTypes = {};

  toFilterScreen = () => {
    Actions.filters();
  };

  render() {
    return (
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          width: "100%"
        }}
      >
        <StatusBar barStyle="light-content" translucent={false} />
        <LoginComponent />
      </View>
    );
  }
}

export { Login };
