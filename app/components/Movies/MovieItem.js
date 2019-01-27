import React from "react";
import PropTypes from "prop-types";
import { observer } from "mobx-react";
import { View, Text, Animated } from "react-native";
import PercentageCircle from "react-native-percentage-circle";
import { Card } from "react-native-elements";

import styles from "./styles";

const noImageUrl =
  "https://upload.wikimedia.org/wikipedia/commons/7/75/No_image_available.png";

@observer
class MovieItem extends React.Component {
  static propTypes = {
    item: PropTypes.object,
    style: PropTypes.object
  };

  render() {
    const { item } = this.props;
    const image_available = !!(item.backdrop_path || item.poster_path);
    const image_src = image_available
      ? `https://image.tmdb.org/t/p/w500${item.poster_path ||
          item.backdrop_path}`
      : noImageUrl;
    return (
      <View style={styles.scrollPage}>
        <Animated.View style={this.props.style}>
          <Card
            imageStyle={styles.imageStyle}
            title={item.title}
            image={{ uri: image_src }}
            containerStyle={styles.containerStyle}
          >
            <View>
              <View style={styles.row}>
                <Text h4>Год: </Text>
                <Text style={styles.italic}>
                  {String(item.release_date).split("-")[0]}
                </Text>
              </View>
              <View style={styles.row}>
                <Text>Язык оригинала: </Text>
                <Text style={styles.italic}>{`${item.original_language}`}</Text>
              </View>
              <View style={styles.vote}>
                <PercentageCircle
                  radius={16}
                  percent={Number(item.vote_average) * 10}
                  color="lightgreen"
                />
              </View>
            </View>
          </Card>
        </Animated.View>
      </View>
    );
  }
}

export { MovieItem };
