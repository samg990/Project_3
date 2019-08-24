import React, { Component } from "react";
import { Text, View, StyleSheet } from "react-native";
import Modal from "react-native-modal";
import {
	Icon,
	Button,
	Form,
	Item,
	Input,
	Label,
	Container,
	Header,
	Left,
	Body,
	Right,
	Title,
} from "native-base";
import RentFormHeader from "./RentFormHeader";

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
					<Text style={styles.Text1}>RENT</Text>
				</Button>
				<Modal isVisible={this.state.isModalVisible}>
					<View>
						<Form style={styles.Form1}>
							<RentFormHeader />
							<Item floatingLabel>
								<Label>First Name</Label>
								<Input />
							</Item>
							<Item floatingLabel last>
								<Label>Last Name</Label>
								<Input />
							</Item>

							<Item floatingLabel last>
								<Label>Number of People</Label>
								<Input />
							</Item>
						</Form>
						<Button style={styles.button} onPress={this.toggleModal}>
							<Text style={styles.TextSub}>Submit</Text>
						</Button>
						<Button style={styles.button2} onPress={this.toggleModal}>
							<Text style={styles.TextSub}>Cancel</Text>
						</Button>
					</View>
				</Modal>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	Text1: {
		color: "#2d69ff",
		marginLeft: 20,
		fontWeight: "bold",
	},

	button: {
		alignContent: "center",
		justifyContent: "center",
		backgroundColor: "#00ce22",
		marginTop: 5,
	},
	button2: {
		alignContent: "center",
		justifyContent: "center",
		backgroundColor: "#d30018",
		marginTop: 5,
	},
	TextSub: {
		color: "black",
		fontWeight: "bold",
	},
	Form1: {
		backgroundColor: "white",
	},
});
