import React from "react";
import PropTypes from "prop-types";
import { FlatList, View } from "react-native";
import { observer, inject } from "mobx-react";

import { GenresItem } from "./GenresItem";

@inject("moviesStore")
@observer
class Genres extends React.Component {
  static propTypes = {
    moviesStore: PropTypes.object
  };

  componentDidMount() {
    this.props.moviesStore.genresDidMount();
  }

  render() {
    const {
      moviesStore: {
        genresList,
        checkedGenges,
        filters: { with_genres }
      }
    } = this.props;
    return (
      <View style={{ flex: 1 }}>
        <FlatList
          data={genresList}
          renderItem={({ item }) => (
            <GenresItem
              item={item}
              checked={with_genres.includes(Number(item.id))}
              onPress={checkedGenges}
            />
          )}
          keyExtractor={item => String(item.id)}
        />
      </View>
    );
  }
}

export { Genres };
