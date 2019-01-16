import React from "react";
import PropTypes from "prop-types";
import { View, Text } from "react-native";
import { observer, inject } from "mobx-react";

import { Picker } from "../Picker";
import styles from "./styles";

@inject("moviesStore")
@observer
class SortBy extends React.Component {
  static defaultProps = {
    options: [
      {
        label: "Популярные по убыванию",
        value: "popularity.desc"
      },
      {
        label: "Популярные по возростанию",
        value: "popularity.asc"
      },
      {
        label: "Рейтинг по убыванию",
        value: "vote_average.desc"
      },
      {
        label: "Рейтинг по возростанию",
        value: "vote_average.asc"
      }
    ]
  };

  static propTypes = {
    moviesStore: PropTypes.object,
    filters: PropTypes.object,
    sort_by: PropTypes.string,
    onChangeFilters: PropTypes.func,
    options: PropTypes.array
  };

  handleChangeSortBy = value => {
    this.props.moviesStore.onChangeFilters({
      target: {
        name: "sort_by",
        value: value
      }
    });
  };

  render() {
    const {
      moviesStore: {
        filters: { sort_by }
      },
      options
    } = this.props;
    return (
      <View>
        <Text style={styles.textDescription}>Сортировать по:</Text>
        <Picker items={options} onChange={this.handleChangeSortBy} value={sort_by} />
      </View>
    );
  }
}

export default SortBy;
