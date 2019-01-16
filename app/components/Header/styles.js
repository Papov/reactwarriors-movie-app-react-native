import EStyleSheet from "react-native-extended-stylesheet";

const styles = EStyleSheet.create({
  container: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0
  },
  button: {
    alignSelf: "flex-start",
    paddingHorizontal: 15,
    paddingVertical: 20,
    "@media ios": {
      paddingTop: 25
    }
  }
});

export default styles;
