import React from "react";
import PropTypes from "prop-types";
import { StatusBar, View } from "react-native";

import { MoviesList } from "../components/Movies/MoviesList";
import { Header } from "../components/Header/Header";
import { Footer } from "../components/Footer/Footer";

class Home extends React.Component {
  static propTypes = {
    navigation: PropTypes.object
  };

  onPress = () => {
    this.props.navigation.navigate("Filters");
  };

  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center", width: "100%" }}>
        <StatusBar barStyle="light-content" translucent={false} />
        <Header onPress={this.onPress} />
        <MoviesList />
        <Footer />
      </View>
    );
  }
}

export { Home };
