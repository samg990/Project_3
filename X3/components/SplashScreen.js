import React, { Component } from "react";
import { Platform, StyleSheet, Text, View, StatusBar } from "react-native";
import PropsTypes from "prop-types";

export default class App extends Component {
  render() {
    return (
      <view style={styles.container}>
        <statusBar barStyle="light-content" backgroundColor="#4f6d7a" />
      </view>
    );
  }
}

//Styling for StatusBar/SplashScreen
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#4f6d7a"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  instructions: {
    textAlign: "center",
    color: "#f5fcff",
    marginBottom: 5
  }
});
