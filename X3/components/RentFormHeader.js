import React, { Component } from "react";
import { Text, View, StyleSheet } from "react-native";
import { Header, Left, Body, Right, Title } from "native-base";
export default class RentFormHeader extends Component {
	render() {
		return (
			<Header style={styles.Title}>
				<Left />
				<Body style={styles.body}>
					<Title style={styles.Text}>Price: $</Title>
				</Body>
				<Right />
			</Header>
		);
	}
}

const styles = StyleSheet.create({
	Title: {
		backgroundColor: "white",
	},
	body: {
		alignContent: "flex-start",
		justifyContent: "flex-start",
	},
	Text: {
		color: "black",
		fontSize: 20,
	},
});
