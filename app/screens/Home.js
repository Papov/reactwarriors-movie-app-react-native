import React from "react";
import { StatusBar, View } from "react-native";
import { Actions } from "react-native-router-flux";

import { MoviesList } from "../components/Movies/MoviesList";
import { Header } from "../components/Header/Header";
import { Footer } from "../components/Footer/Footer";

class Home extends React.Component {
  static propTypes = {};

  toFilterScreen = () => {
    Actions.filters();
  };

  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center", width: "100%" }}>
        <StatusBar barStyle="light-content" translucent={false} />
        <Header onPress={this.toFilterScreen} />
        <MoviesList />
        <Footer />
      </View>
    );
  }
}

export { Home };
