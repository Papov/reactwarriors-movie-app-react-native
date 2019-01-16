import React from "react";
import PropTypes from "prop-types";
import { View, FlatList, Text } from "react-native";
import { observer, inject } from "mobx-react";

import MovieItem from "./MovieItem";
import { Separator } from "../Separator";
import styles from "./styles";

@inject("moviesStore")
@observer
class MoviesList extends React.Component {
  static propTypes = {
    moviesStore: PropTypes.object,
    isLoading: PropTypes.bool,
    movies: PropTypes.array
  };

  componentDidMount() {
    this.props.moviesStore.getMovies();
  }

  render() {
    const {
      moviesStore: { isLoading, movies }
    } = this.props;
    return (
      <View style={styles.moviesListContainer}>
        {isLoading ? (
          <Text>...Loading</Text>
        ) : (
          <FlatList
            data={movies}
            renderItem={({ item }) => <MovieItem item={item} />}
            keyExtractor={item => `movie${item.id}`}
            ItemSeparatorComponent={Separator}
          />
        )}
      </View>
    );
  }
}

export default MoviesList;
