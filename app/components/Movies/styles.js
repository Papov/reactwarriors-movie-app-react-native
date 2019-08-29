import { Dimensions, StyleSheet } from "react-native";
import EStyleSheet from "react-native-extended-stylesheet";

const displayWidth = Dimensions.get("window").width;
const displayHeight = Dimensions.get("window").height;

export default EStyleSheet.create({
  moviesListContainer: {
    flex: 1,
    width: displayWidth,
    height: displayHeight - 110,
    marginTop: 70,
    marginBottom: 40,
    alignItems: "center",
    justifyContent: "center"
  },
  containerStyle: {
    marginHorizontal: 20,
    marginVertical: 20,
    borderRadius: 4,
    borderWidth: StyleSheet.hairlineWidth
  },
  imageStyle: {
    height: displayWidth
  },
  italic: {
    fontStyle: "italic"
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    fontSize: 12
  },
  vote: {
    position: "absolute",
    top: 0,
    right: 0
  },
  scrollPage: {
    width: displayWidth
  }
});
