import * as React from "react";
import { View, StyleSheet, Dimensions } from "react-native";

export default function ThirdRoute() {
  return <View style={[styles.scene, { backgroundColor: "black" }]} />;
}

const styles = StyleSheet.create({
  scene: {
    flex: 1
  }
});
