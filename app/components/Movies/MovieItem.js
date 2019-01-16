import React from "react";
import PropTypes from "prop-types";
import { observer } from "mobx-react";
import { Image, Text, View } from "react-native";
import { Card } from "react-native-elements";

import styles from "./styles";

const noImageUrl = "https://upload.wikimedia.org/wikipedia/commons/7/75/No_image_available.png";

@observer
class MovieItem extends React.Component {
  static propTypes = {
    item: PropTypes.object
  };

  render() {
    const { item } = this.props;
    const image_available = !!(item.backdrop_path || item.poster_path);
    const image_src = image_available
      ? `https://image.tmdb.org/t/p/w500${item.backdrop_path || item.poster_path}`
      : noImageUrl;
    return (
      <View>
        <Card title={item.title} image={{ uri: image_src }}>
          <View>
            <Text>dgfdsgsdfg</Text>
            <View>
              <Text>dgsdgfds 2222</Text>
            </View>
          </View>
        </Card>
      </View>

      // <View style={styles.movieItemContainer}>
      //   <View style={styles.leftContainer}>
      //     <Image source={{ uri: image_src }} style={styles.image} />
      //   </View>
      //   <View style={styles.rightContainer}>
      //     <Text style={styles.text}>{item.title}</Text>
      //     <Text style={styles.date}>{String(item.release_date).split("-")[0]}</Text>
      //     <View style={styles.vote}>
      //       <Text style={styles.voteText}>{item.vote_average}</Text>
      //     </View>
      //     <Text style={styles.overview}>{item.overview}</Text>
      //   </View>
      // </View>
    );
  }
}

export default MovieItem;
