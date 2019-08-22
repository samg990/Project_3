import React from "react";
import ButtonSign from "../components/SignUpBtn";
import {
	Image,
	Platform,
	ScrollView,
	StyleSheet,
	Text,
	TouchableOpacity,
	View,
	ImageBackground,
} from "react-native";
import { Button } from "native-base";

export default function WelcomeScreen() {
	console.log("hi");
	return (
		<ImageBackground
			source={require("../assets/images/sailboat.jpeg")}
			style={{ width: "100%", height: "100%", zIndex: -1 }}
		>
			<View style={styles.welcomeContainer}>
				<Image
					source={require("../assets/images/xBoatsWhite.png")}
					style={styles.boatImg}
				/>
			</View>
			<View style={styles.buttonContainer}>
				<Button rounded success>
					<Text style={styles.button}> Sign Up </Text>
				</Button>
			</View>
		</ImageBackground>
	);
}

const styles = StyleSheet.create({
	welcomeContainer: {
		flex: 1,
		display: "flex",
		flexDirection: "column",
		borderColor: "yellow",
		borderWidth: 1,
	},
	boatImg: {
		width: 150,
		height: 200,
		marginLeft: 100,
		marginTop: 120,
	},
	buttonContainer: {
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		borderColor: "green",
		borderWidth: 2,
	},
	button: {
		width: 100,
		height: 50,

		color: "white",
		borderColor: "red",
		borderWidth: 2,
	},
});
