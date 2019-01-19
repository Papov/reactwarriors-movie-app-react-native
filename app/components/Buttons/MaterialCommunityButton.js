import React from "react";
import PropTypes from "prop-types";
import { TouchableOpacity, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const MaterialCommunityButton = ({
  style = null,
  onPress = null,
  color = "#fff",
  size = 32,
  name
}) => (
  <View>
    <TouchableOpacity onPress={onPress} style={{ ...style }}>
      <MaterialCommunityIcons color={color} size={size} name={name} />
    </TouchableOpacity>
  </View>
);

MaterialCommunityButton.propTypes = {
  onPress: PropTypes.func,
  color: PropTypes.string,
  size: PropTypes.number,
  name: PropTypes.string,
  style: PropTypes.object
};

export { MaterialCommunityIcons };
