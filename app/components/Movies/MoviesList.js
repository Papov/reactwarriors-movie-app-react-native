import React from "react";
import PropTypes from "prop-types";
import {
  View,
  ActivityIndicator,
  FlatList,
  Animated,
  Dimensions
} from "react-native";
import { observer, inject } from "mobx-react";

import { MovieItem } from "./MovieItem";
import styles from "./styles";

const AnimatedFlatList = Animated.createAnimatedComponent(FlatList);
const xOffset = new Animated.Value(0);
const SCREEN_WIDTH = Dimensions.get("window").width;

const transitionAnimation = index => {
  return {
    transform: [
      { perspective: 300 },
      {
        scale: xOffset.interpolate({
          inputRange: [
            (index - 1) * SCREEN_WIDTH,
            index * SCREEN_WIDTH,
            (index + 1) * SCREEN_WIDTH
          ],
          outputRange: [0.9, 1, 0.9]
        })
      },
      {
        rotateY: xOffset.interpolate({
          inputRange: [
            (index - 1) * SCREEN_WIDTH,
            index * SCREEN_WIDTH,
            (index + 1) * SCREEN_WIDTH
          ],
          outputRange: ["-10deg", "0deg", "10deg"]
        })
      }
    ]
  };
};

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
          <View>
            <ActivityIndicator color="#563d7c" size="large" />
          </View>
        ) : (
          <AnimatedFlatList
            data={movies}
            renderItem={({ item, index }) => (
              <MovieItem
                item={item}
                index={index}
                style={transitionAnimation(index)}
              />
            )}
            keyExtractor={item => String(item.id)}
            scrollEventThrottle={16}
            showsHorizontalScrollIndicator={false}
            onScroll={Animated.event(
              [{ nativeEvent: { contentOffset: { x: xOffset } } }],
              { useNativeDriver: true }
            )}
            horizontal
            pagingEnabled
            style={{ width: SCREEN_WIDTH }}
          />
        )}
      </View>
    );
  }
}

export { MoviesList };
