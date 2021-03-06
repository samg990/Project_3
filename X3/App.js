import React, { Component } from "react";
import { Platform, StyleSheet, Text, View, StatusBar } from "react-native";
import WelcomeScreen from "./screens/WelcomeScreen";
import ButtonSign from "./components/SignUpBtn";
import TabViewX from "./components/TabViewX";

export default class App extends Component {
  render() {
    return <TabViewX />;
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
