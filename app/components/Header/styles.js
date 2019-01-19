import EStyleSheet from "react-native-extended-stylesheet";

const styles = EStyleSheet.create({
  container: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: "$mainPurple",
    paddingTop: 15,
    paddingHorizontal: 15,
    height: 70,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  button: {
    paddingVertical: 10
  }
});

export default styles;
