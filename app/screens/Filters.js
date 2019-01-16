import React from "react";
import PropTypes from "prop-types";
import { View, StatusBar } from "react-native";

import { inject } from "mobx-react";
import { PrimaryReleaseYear } from "../components/Filters/PrimaryReleaseYear";
import { SortBy } from "../components/Filters/SortBy";
import { ButtonDefault } from "../components/Buttons/ButtonDefault";

@inject("moviesStore")
class Filters extends React.Component {
  static propTypes = {
    navigation: PropTypes.object,
    moviesStore: PropTypes.object
  };

  handleClickGenres = () => {
    this.props.navigation.navigate("Genres");
  };

  render() {
    return (
      <View style={{ paddingHorizontal: 10 }}>
        <StatusBar barStyle="default" translucent={false} />
        <SortBy />
        <PrimaryReleaseYear />
        <ButtonDefault
          title="Выбрать жанры"
          onPress={this.handleClickGenres}
          label="Выбрать необходимые жанры"
        />
        <ButtonDefault
          title="Все жанры"
          label="Показать все жанры"
          onPress={this.props.moviesStore.showAllGenres}
          color="#e2e2e2"
        />
        <ButtonDefault
          title="Сбросить фильтр"
          label=" "
          onPress={this.props.moviesStore.onReset}
          color="#e2e2e2"
        />
      </View>
    );
  }
}

export { Filters };
