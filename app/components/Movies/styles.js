import { Dimensions, StyleSheet } from "react-native";
import EStyleSheet from "react-native-extended-stylesheet";

const displayWidth = Dimensions.get("window").width;

export default EStyleSheet.create({
  moviesListContainer: {
    marginTop: 50,
    paddingHorizontal: 20,
    width: displayWidth
  },
  movieItemContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 10,
    height: displayWidth / 2,
    borderRadius: 15,
    overflow: "hidden",
    backgroundColor: "#f2f2f2"
  },
  leftContainer: {
    width: displayWidth / 3
  },
  image: {
    width: "100%",
    height: "100%"
  },
  rightContainer: {
    width: displayWidth / 2,
    height: displayWidth / 2 - 5,
    padding: 5,
    overflow: "hidden"
  },
  text: {
    fontSize: 14,
    width: displayWidth / 2 - 40
  },
  vote: {
    width: 30,
    height: 30,
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "lightgreen",
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: "#424242",
    position: "absolute",
    top: 5,
    right: 5
  },
  voteText: {
    fontSize: 12
  },
  date: {
    fontStyle: "italic"
  },
  overview: {
    fontSize: 10,
    paddingBottom: 10
  }
});
