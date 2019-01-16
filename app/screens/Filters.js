import React from "react";
import PropTypes from "prop-types";
import { View, StatusBar } from "react-native";

import { SortBy, PrimaryReleaseYear, styles } from "../components/Filters";
import { ButtonDefault } from "../components/Buttons";

class Filters extends React.Component {
  static propTypes = {
    navigation: PropTypes.object
  };

  handleClickGenres = () => {
    this.props.navigation.navigate("Genres");
  };

  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="default" translucent={false} />
        <SortBy />
        <PrimaryReleaseYear />
        <ButtonDefault
          title="Выбрать жанры"
          onPress={this.handleClickGenres}
          label="Выберете необходимые жанры"
        />
      </View>
    );
  }
}

export default Filters;
