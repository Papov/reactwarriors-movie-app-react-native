import React from "react";
import { CheckBox } from "react-native-elements";

class GenresItem extends React.Component {
  state = {
    checked: this.props.checked
  };

  handleCheck = () => {
    this.setState(
      prevState => ({
        checked: !prevState.checked
      }),
      () => {
        this.props.onPress({
          checked: this.state.checked,
          id: this.props.item.id
        });
      }
    );
  };

  render() {
    console.log("render");
    const { item } = this.props;
    return <CheckBox title={item.name} checked={this.state.checked} onPress={this.handleCheck} />;
  }
}

export { GenresItem };
