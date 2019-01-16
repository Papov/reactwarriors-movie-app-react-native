import { StyleSheet } from "react-native";
import EStyleSheet from "react-native-extended-stylesheet";

export default EStyleSheet.create({
  inputIOS: {
    fontSize: 16,
    paddingTop: 13,
    paddingHorizontal: 10,
    paddingBottom: 12,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: "gray",
    borderRadius: 4,
    backgroundColor: "white",
    color: "black"
  },
  inputAndroid: {
    fontSize: 16,
    paddingTop: 13,
    paddingHorizontal: 10,
    paddingBottom: 12,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: "gray",
    borderRadius: 4,
    backgroundColor: "white",
    color: "black"
  }
});
