import React, { Component } from "react";
import { Text, View, StyleSheet } from "react-native";
import Modal from "react-native-modal";
import { Icon, Button } from "native-base";

export default class RentModal extends Component {
	state = {
		isModalVisible: false,
	};

	toggleModal = () => {
		this.setState({ isModalVisible: !this.state.isModalVisible });
	};

	render() {
		return (
			<View>
				<Button transparent onPress={this.toggleModal}>
					<Icon active name="wine" />
					<Text style={styles.Rent1}>RENT</Text>
				</Button>
				<Modal isVisible={this.state.isModalVisible}>
					<View>
						<Button onPress={this.toggleModal}>
							<Text>Submit</Text>
						</Button>
					</View>
				</Modal>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	Rent1: {
		color: "#2d69ff",
		marginLeft: 20,
		fontWeight: "bold",
	},
});
