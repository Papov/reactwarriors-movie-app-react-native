import EStyleSheet from "react-native-extended-stylesheet";

const styles = EStyleSheet.create({
  container: {
    flex: 1,
    height: 50,
    flexDirection: "row",
    backgroundColor: "#563d7c",
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 15
  },
  text: {
    color: "#fff"
  }
});

export default styles;
