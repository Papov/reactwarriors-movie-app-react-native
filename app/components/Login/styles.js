import { StyleSheet, Dimensions } from "react-native";
import EStyleSheet from "react-native-extended-stylesheet";

const deviceWidth = Dimensions.get("window").width;

const styles = EStyleSheet.create({
  $visible: 1,
  $unVisible: 0,
  $purple: "$mainPurple",
  $purpleColor: "$mainPurple",
  $startInputAnimation: 0,
  $finishInputAnimation: -130,
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "$mainPurple",
    width: "100%",
    height: "100%"
  },
  input: {
    width: deviceWidth * 0.8,
    borderWidth: StyleSheet.hairlineWidth,
    borderRadius: 4,
    borderColor: "#fff",
    marginVertical: 12,
    justifyContent: "flex-start",
    height: 50
  },
  inputContainer: {
    position: "relative",
    top: "$startInputAnimation"
  },
  inputStyle: {
    color: "#fff",
    fontSize: 16,
    borderBottomWidth: 0
  },
  error: {
    color: "red",
    fontSize: 14,
    position: "absolute",
    bottom: -9
  },
  skipContainer: {
    width: deviceWidth * 0.8
  },
  base: {
    position: "absolute",
    top: 25,
    left: 0,
    width: "100%",
    textAlign: "center",
    color: "red"
  },
  iconStyle: {
    opacity: "$visible"
  },
  skip: {
    flexDirection: "row",
    alignSelf: "flex-end"
  }
});

export default styles;
