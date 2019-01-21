import React from "react";
import PropTypes from "prop-types";
import { View, ActivityIndicator, Animated, Dimensions } from "react-native";
import { observer, inject } from "mobx-react";

import { MovieItem } from "./MovieItem";
import styles from "./styles";

const xOffset = new Animated.Value(0);
const SCREEN_WIDTH = Dimensions.get("window").width;

const transitionAnimation = index => {
  return {
    transform: [
      { perspective: 800 },
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
        rotateX: xOffset.interpolate({
          inputRange: [
            (index - 1) * SCREEN_WIDTH,
            index * SCREEN_WIDTH,
            (index + 1) * SCREEN_WIDTH
          ],
          outputRange: ["5deg", "0deg", "5deg"]
        })
      },
      {
        rotateY: xOffset.interpolate({
          inputRange: [
            (index - 1) * SCREEN_WIDTH,
            index * SCREEN_WIDTH,
            (index + 1) * SCREEN_WIDTH
          ],
          outputRange: ["-5deg", "0deg", "5deg"]
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
          <Animated.ScrollView
            scrollEventThrottle={16}
            showsHorizontalScrollIndicator={false}
            onScroll={Animated.event(
              [{ nativeEvent: { contentOffset: { x: xOffset } } }],
              { useNativeDriver: true }
            )}
            horizontal
            pagingEnabled
            style={{ width: SCREEN_WIDTH }}
          >
            {movies.map((item, index) => (
              <MovieItem
                key={item.id}
                item={item}
                index={index}
                style={transitionAnimation(index)}
              />
            ))}
          </Animated.ScrollView>
        )}
      </View>
    );
  }
}

export { MoviesList };
