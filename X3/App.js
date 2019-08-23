import React, { Component } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import WelcomeScreen from "./screens/WelcomeScreen";
import ButtonSign from "./components/SignUpBtn";
import TabViewX from "./components/TabViewX";

export default class App extends Component {
  render() {
    return <TabViewX />;
  }
}
