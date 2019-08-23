import * as React from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import Cards from "../components/Cards";

export default function FirstRoute() {
  return (
    <View style={[styles.scene, { backgroundColor: "black" }]}>
      <Cards style={{ zIndex: 0 }} />
    </View>
  );
}

const styles = StyleSheet.create({
  scene: {
    flex: 1
  }
});