import React from "react";
import PropTypes from "prop-types";
import { View } from "react-native";
import RNPickerSelect from "react-native-picker-select";

import styles from "./styles";

const Picker = ({ items, onChange, value }) => (
  <View style={styles.pickerContainer}>
    <RNPickerSelect items={items} onValueChange={onChange} value={value} style={{ ...styles }} />
  </View>
);

Picker.propTypes = {
  items: PropTypes.array,
  onChange: PropTypes.func,
  value: PropTypes.string
};

export default Picker;
