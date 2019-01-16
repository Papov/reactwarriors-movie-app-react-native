import React from "react";
import { View, StatusBar } from "react-native";
import { observer, inject } from "mobx-react";

import { Genres as GenresContainer } from "../components/Filters";

@inject("moviesStore")
@observer
class Genres extends React.Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <StatusBar barStyle="default" translucent={false} />
        <GenresContainer />
      </View>
    );
  }
}

export default Genres;
