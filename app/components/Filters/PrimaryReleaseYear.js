import React from "react";
import PropTypes from "prop-types";
import { View, Text } from "react-native";
import { observer, inject } from "mobx-react";

import { Picker } from "../Picker/Picker";
import styles from "./styles";

@inject("moviesStore")
@observer
class PrimaryReleaseYear extends React.Component {
  static propTypes = {
    onChangeFilters: PropTypes.func,
    primary_release_year: PropTypes.string,
    years: PropTypes.array,
    moviesStore: PropTypes.object,
    filters: PropTypes.object
  };

  static defaultProps = {
    years: [
      {
        label: "Все года",
        value: ""
      },
      {
        label: "2020",
        value: "2020"
      },
      {
        label: "2019",
        value: "2019"
      },
      {
        label: "2018",
        value: "2018"
      },
      {
        label: "2017",
        value: "2017"
      },
      {
        label: "2016",
        value: "2016"
      },
      {
        label: "2015",
        value: "2015"
      }
    ]
  };

  handleChangeReleaseYear = value => {
    this.props.moviesStore.onChangeFilters({
      target: {
        name: "primary_release_year",
        value: value
      }
    });
  };

  render() {
    const {
      moviesStore: {
        filters: { primary_release_year }
      },
      years
    } = this.props;
    return (
      <View>
        <Text style={styles.textDescription}>Выбрать год фильма:</Text>
        <Picker
          items={years}
          value={primary_release_year}
          onChange={this.handleChangeReleaseYear}
        />
      </View>
    );
  }
}

export { PrimaryReleaseYear };
