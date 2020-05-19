import React from "react";
import { ImageBackground, StyleSheet, View, Image, Text } from "react-native";

import colors from "../config/colors";

function WelcomeScreen(props) {
  return (
    <ImageBackground
      style={styles.background}
      source={require("../assets/background.jpg")}
    >
      <View style={styles.logoView}>
        <Image style={styles.logo} source={require("../assets/logo-red.png")} />
        <Text>Sell what you don't need</Text>
      </View>
      <View style={styles.loginButton}></View>
      <View style={styles.registerButton}></View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
  },
  loginButton: {
    width: "100%",
    height: 70,
    backgroundColor: colors.primary,
  },
  registerButton: {
    width: "100%",
    height: 70,
    backgroundColor: colors.secondaty,
  },
  logoView: {
    position: "absolute",
    top: 70,
    alignSelf: "center",
    alignItems: "center",
  },
  logo: {
    width: 100,
    height: 100,
  },
});

export default WelcomeScreen;
