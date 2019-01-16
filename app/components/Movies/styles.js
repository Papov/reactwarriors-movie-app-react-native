import { Dimensions, StyleSheet } from "react-native";
import EStyleSheet from "react-native-extended-stylesheet";

const displayWidth = Dimensions.get("window").width;

export default EStyleSheet.create({
  moviesListContainer: {
    marginTop: 60,
    marginBottom: 50,
    paddingHorizontal: 20,
    width: displayWidth
  },
  containerStyle: {
    marginHorizontal: 0,
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
  }
});
