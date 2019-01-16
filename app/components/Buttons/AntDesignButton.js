import React from "react";
import PropTypes from "prop-types";
import { TouchableOpacity, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";

const AntDesignButton = ({ style = null, onPress, color = "#fff", size = 32, name }) => (
  <View>
    <TouchableOpacity onPress={onPress} style={{ ...style }}>
      <AntDesign color={color} size={size} name={name} />
    </TouchableOpacity>
  </View>
);

AntDesignButton.propTypes = {
  onPress: PropTypes.func,
  color: PropTypes.string,
  size: PropTypes.number,
  name: PropTypes.string,
  style: PropTypes.object
};

export { AntDesignButton };
