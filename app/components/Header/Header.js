import React from "react";
import PropTypes from "prop-types";
import { View, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";

import styles from "./styles";

const Header = ({ onPress }) => (
  <View style={styles.container}>
    <TouchableOpacity onPress={onPress} style={styles.button}>
      <AntDesign color="#434343" size={25} name="filter" />
    </TouchableOpacity>
  </View>
);

Header.propTypes = {
  onPress: PropTypes.func
};

export default Header;
