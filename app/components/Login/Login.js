import React from "react";
import PropTypes from "prop-types";
import {
  Keyboard,
  TouchableOpacity,
  Animated,
  Platform,
  Text,
  View
} from "react-native";
import { observer, inject } from "mobx-react";
import { Input, Button } from "react-native-elements";
import { Actions } from "react-native-router-flux";
import Color from "color";

import styles from "./styles";
import { Container } from "../Container";
import { AntDesignButton } from "../Buttons/AntDesignButton";
import { MaterialCommunityIcons } from "../Buttons/MaterialCommunityButton";

const ANIMAT_DURAT = 320;

@inject("loginFormStore")
@observer
class Login extends React.Component {
  static propTypes = {
    loginFormStore: PropTypes.object
  };

  constructor(props) {
    super(props);

    this.translateInput = new Animated.Value(styles.$startInputAnimation);
    this.opacity = new Animated.Value(styles.$visible);
  }

  componentDidMount() {
    let keyboardShow = "keyboardWillShow";
    let keyboardHide = "keyboardWillHide";
    if (Platform.OS === "android") {
      keyboardShow = "keyboardDidShow";
      keyboardHide = "keyboardDidHide";
    }
    this.keyboardShowListener = Keyboard.addListener(
      keyboardShow,
      this.keyboardShow
    );
    this.keyboardHideListener = Keyboard.addListener(
      keyboardHide,
      this.keyboardHide
    );
  }

  componentWillUnmount() {
    this.keyboardShowListener.remove();
    this.keyboardHideListener.remove();
  }

  keyboardShow = () => {
    Animated.parallel([
      Animated.timing(this.translateInput, {
        toValue: styles.$finishInputAnimation,
        duration: ANIMAT_DURAT
      }),
      Animated.timing(this.opacity, {
        toValue: styles.$unVisible,
        duration: ANIMAT_DURAT
      })
    ]).start();
  };

  keyboardHide = () => {
    Animated.parallel([
      Animated.timing(this.translateInput, {
        toValue: styles.$startInputAnimation,
        duration: ANIMAT_DURAT
      }),
      Animated.timing(this.opacity, {
        toValue: styles.$visible,
        duration: ANIMAT_DURAT
      })
    ]).start();
  };

  activeToHomeScreen = () => {
    Actions.home();
  };

  render() {
    const inputContainerStyle = {
      ...styles.inputContainer,
      top: this.translateInput
    };

    const {
      loginFormStore: {
        submitAwait,
        onSubmitClick,
        username,
        password,
        onHandleChange,
        errors
      }
    } = this.props;

    const inputColor = {
      ...styles.input,
      backgroundColor: Color(styles.$purple).lighten(0.6)
    };

    const iconStyle = { ...styles.iconStyle, opacity: this.opacity };
    return (
      <Container>
        <Animated.View style={iconStyle}>
          <MaterialCommunityIcons
            color={errors.base ? "red" : "#fff"}
            size={120}
            name="security-account-outline"
          />
        </Animated.View>
        <Animated.View style={inputContainerStyle}>
          <Input
            placeholder="Введите логин"
            placeholderTextColor="#fff"
            errorMessage={errors.username && errors.username}
            errorStyle={styles.error}
            leftIcon={<AntDesignButton size={20} name="user" />}
            value={username}
            onChangeText={onHandleChange("username")}
            inputContainerStyle={inputColor}
            inputStyle={styles.inputStyle}
            underlineColorAndroid="transparent"
          />
          <Input
            placeholder="Введите пароль"
            placeholderTextColor="#fff"
            errorMessage={errors.password && errors.password}
            errorStyle={styles.error}
            leftIcon={<AntDesignButton size={20} name="key" />}
            value={password}
            onChangeText={onHandleChange("password")}
            inputContainerStyle={inputColor}
            inputStyle={styles.inputStyle}
          />
        </Animated.View>
        <Button
          title="Войти"
          titleStyle={styles.inputStyle}
          icon={
            <AntDesignButton
              onPress={onSubmitClick}
              size={20}
              name="login"
              style={{ paddingLeft: 17 }}
            />
          }
          buttonStyle={inputColor}
          onPress={onSubmitClick}
          disabled={submitAwait}
        />
        <View style={styles.skipContainer}>
          {errors.base && (
            <View style={{ position: "relative" }}>
              <Text style={styles.base}>{errors.base}</Text>
            </View>
          )}
          <TouchableOpacity
            style={styles.skip}
            onPress={this.activeToHomeScreen}
          >
            <Text style={{ color: "#fff", paddingBottom: 4 }}>пропустить</Text>
            <AntDesignButton
              name="right"
              size={20}
              onPress={this.activeToHomeScreen}
            />
          </TouchableOpacity>
        </View>
      </Container>
    );
  }
}

export default Login;
