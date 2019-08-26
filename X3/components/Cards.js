import React, { Component } from "react";
import { Image, StyleSheet, Flatlist, ActivityIndicator } from "react-native";
import {
	Container,
	Header,
	Content,
	Card,
	CardItem,
	Thumbnail,
	Text,
	Button,
	Icon,
	Left,
	Body,
	Right,
} from "native-base";
import RentModal from "../components/RentModal";
import BoatsRoute from "../screens/BoatsRoute";

export default function Cards(props) {
	return (
		<Card style={[styles.container]}>
			<CardItem>
				<Left>
					<Thumbnail source={{ uri: props.thumbnail }} />
					<Body>
						<Text>{props.name}</Text>
						<Text note>{props.location}</Text>
					</Body>
				</Left>
			</CardItem>
			<CardItem cardBody>
				<Image
					source={{ uri: props.image }}
					style={{ height: 200, width: null, flex: 1 }}
				/>
			</CardItem>
			<CardItem>
				<Left>
					<Button transparent>
						<Icon active name="thumbs-up" />
						<Text>{props.rents} Rents</Text>
					</Button>
				</Left>
				<Body>
					<Button transparent>
						<Icon active name="pulse" />
						<Text> Price: ${props.price}</Text>
					</Button>
				</Body>
				<Right>
					<RentModal />
				</Right>
			</CardItem>
		</Card>
	);
}

const styles = StyleSheet.create({
	container: {
		borderRadius: 4,
		borderWidth: 0.5,
		borderColor: "#d6d7da",
		marginBottom: 10,
	},
});
