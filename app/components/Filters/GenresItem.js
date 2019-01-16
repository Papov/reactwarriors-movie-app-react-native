import React from "react";
import { CheckBox } from "react-native-elements";

const GenresItem = ({ item, checked, onPress }) => (
  <CheckBox
    title={item.name}
    checked={checked}
    onPress={onPress({
      value: String(item.id),
      checked
    })}
  />
);

export default GenresItem;
