import * as React from "react";
import { View, StyleSheet, Dimensions } from "react-native";

export default function SecondRoute() {
  return <View style={[styles.scene, { backgroundColor: "#673ab7" }]} />;
}

const styles = StyleSheet.create({
  scene: {
    flex: 1
  }
});
