import * as React from "react";
import { View, StyleSheet, Dimensions, ScrollView, Text } from "react-native";
import Cards from "../components/Cards";

export default function FirstRoute() {
  return (
    <View style={[styles.scene, { backgroundColor: "white" }]}>
      <ScrollView vertical={true}>
        <Cards />
        <Cards />
        <Cards />
        <Cards />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  scene: {
    flex: 1
  }
});
