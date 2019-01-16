import React from "react";
import PropTypes from "prop-types";
import { TouchableOpacity, View, Text } from "react-native";

import styles from "./styles";

const ButtonDefault = ({ onPress, title, label = null, color = "#fff" }) => (
  <View>
    {label && <Text style={styles.label}>{label}</Text>}
    <TouchableOpacity style={{ ...styles.button, backgroundColor: color }} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  </View>
);

ButtonDefault.propTypes = {
  onPress: PropTypes.func,
  title: PropTypes.string,
  color: PropTypes.string,
  label: PropTypes.string
};

export { ButtonDefault };
