import React, { Component } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import WelcomeScreen from "./screens/WelcomeScreen";
import ButtonSign from "./components/SignUpBtn";

export default class App extends Component {
	render() {
		return <WelcomeScreen />;
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		display: "flex",
		flexDirection: "column",
		borderColor: "green",
		borderWidth: 2,
		// backgroundColor: "#00FFFF",
	},
	welcome: {
		fontSize: 20,
		color: "white",
		textAlign: "center",
		margin: 10,
	},
	instructions: {
		textAlign: "center",
		color: "#333333",
		marginBottom: 5,
	},
});
