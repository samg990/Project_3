import * as React from "react";
import { View, StyleSheet, Dimensions } from "react-native";

export default function FirstRoute() {
  return <View style={[styles.scene, { backgroundColor: "#ff4081" }]} />;
}

const styles = StyleSheet.create({
  scene: {
    flex: 1
  }
});
