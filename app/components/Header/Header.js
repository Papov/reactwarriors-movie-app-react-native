import React from "react";
import PropTypes from "prop-types";
import { View } from "react-native";

import styles from "./styles";
import { AntDesignButton } from "../Buttons/AntDesignButton";

const Header = ({ onPress }) => (
  <View style={styles.container}>
    <AntDesignButton onPress={onPress} color="#fff" size={25} name="filter" style={styles.button} />
  </View>
);

Header.propTypes = {
  onPress: PropTypes.func
};

export { Header };
