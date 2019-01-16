import EStyleSheet from "react-native-extended-stylesheet";

const styles = EStyleSheet.create({
  container: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: "#563d7c",
    paddingTop: 15,
    height: 60
  },
  button: {
    alignSelf: "flex-start",
    paddingHorizontal: 15,
    paddingVertical: 10
  }
});

export default styles;
