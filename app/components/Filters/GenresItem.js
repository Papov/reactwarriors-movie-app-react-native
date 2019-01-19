import React from "react";
import PropTypes from "prop-types";
import { CheckBox } from "react-native-elements";

class GenresItem extends React.Component {
  static propTypes = {
    checked: PropTypes.bool,
    item: PropTypes.object,
    onPress: PropTypes.func
  };

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
    const { item } = this.props;
    return (
      <CheckBox
        checkedIcon="dot-circle-o"
        uncheckedIcon="circle-o"
        title={item.name}
        checked={this.state.checked}
        onPress={this.handleCheck}
      />
    );
  }
}

export { GenresItem };
