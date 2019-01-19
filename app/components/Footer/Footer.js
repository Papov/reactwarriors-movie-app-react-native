import React from "react";
import PropTypes from "prop-types";
import { View, Text } from "react-native";
import { inject, observer } from "mobx-react";

import styles from "./styles";
import { AntDesignButton } from "../Buttons/AntDesignButton";

@inject("moviesStore")
@observer
class Footer extends React.Component {
  static propTypes = {
    moviesStore: PropTypes.object
  };

  previousPage = () => {
    let page = this.props.moviesStore.page;
    if (page === 1) {
      return;
    }
    this.props.moviesStore.onChangePage(page - 1);
  };

  nextPage = () => {
    let page = this.props.moviesStore.page;
    if (page < Number(this.props.moviesStore.total_pages)) {
      this.props.moviesStore.onChangePage(page + 1);
    }
    return;
  };

  render() {
    const { total_pages, page } = this.props.moviesStore;
    return (
      <View style={styles.container}>
        <AntDesignButton name="left" onPress={this.previousPage} size={25} />
        <Text style={styles.text}>{`${page} / ${total_pages}`}</Text>
        <AntDesignButton name="right" onPress={this.nextPage} size={25} />
      </View>
    );
  }
}

export { Footer };
