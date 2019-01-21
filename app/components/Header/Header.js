import React from "react";
import PropTypes from "prop-types";
import { View } from "react-native";
import { Actions } from "react-native-router-flux";
import { Avatar } from "react-native-elements";
import { observer, inject } from "mobx-react";

import styles from "./styles";
import { AntDesignButton } from "../Buttons/AntDesignButton";

@inject("userStore")
@observer
class Header extends React.Component {
  static propTypes = {
    onPress: PropTypes.func,
    userStore: PropTypes.object
  };

  toLoginForm = () => {
    Actions.login();
  };

  render() {
    const {
      onPress,
      userStore: { user, exitFromAccount }
    } = this.props;
    return (
      <View style={styles.container}>
        <AntDesignButton
          onPress={onPress}
          size={25}
          name="filter"
          style={styles.button}
        />
        {user ? (
          <Avatar
            size={40}
            rounded
            source={{
              uri: `https://secure.gravatar.com/avatar/${
                user.avatar.gravatar.hash
              }.jpg?s=64`
            }}
            onPress={exitFromAccount}
            activeOpacity={0.7}
          />
        ) : (
          <AntDesignButton
            name="user"
            size={25}
            onPress={this.toLoginForm}
            style={styles.button}
          />
        )}
      </View>
    );
  }
}

export { Header };
