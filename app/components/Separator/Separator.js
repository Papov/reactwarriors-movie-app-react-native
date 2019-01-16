import React from "react";
import PropTypes from "prop-types";
import { View } from "react-native";

import styles from "./styles";

const Separator = ({ margin = 0 }) => (
  <View style={{ ...styles.separator, marginVertical: margin }} />
);

Separator.propTypes = {
  margin: PropTypes.number
};

export default Separator;
