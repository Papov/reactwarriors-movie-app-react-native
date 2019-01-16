import React from "react";
import PropTypes from "prop-types";
import { View } from "react-native";

import styles from "./styles";

const Separator = ({ margin = 0, color = "#c2c2c2" }) => (
  <View style={{ ...styles.separator, marginVertical: margin, color }} />
);

Separator.propTypes = {
  margin: PropTypes.number,
  color: PropTypes.string
};

export default Separator;
