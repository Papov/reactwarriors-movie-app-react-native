import { StyleSheet } from "react-native";
import EStyleSheet from "react-native-extended-stylesheet";

const styles = EStyleSheet.create({
  container: {},
  button: {
    paddingTop: 13,
    paddingHorizontal: 10,
    paddingBottom: 12,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: "gray",
    borderRadius: 4,
    backgroundColor: "white",
    color: "black"
  },
  text: {
    fontSize: 16,
    fontWeight: "300",
    textAlign: "center"
  },
  label: {
    width: "100%",
    textAlign: "center",
    paddingVertical: 10,
    fontSize: 14,
    fontWeight: "300"
  }
});

export default styles;
