import * as React from "react";
import {
	View,
	StyleSheet,
	Dimensions,
	ScrollView,
	Text,
	ActivityIndicator,
} from "react-native";
import Cards from "../components/Cards";

export default class FirstRoute extends React.Component {
	constructor(props) {
		super(props);
		this.state = { isLoading: true };
	}

	componentDidMount() {
		return fetch("https://blooming-headland-14413.herokuapp.com/")
			.then(response => response.json())
			.then(responseJson => {
				this.setState(
					{
						isLoading: false,
						dataSource: responseJson,
					},

					function() {
						console.log(responseJson);
					},
				);
			})
			.catch(error => {
				console.error(error);
			});
	}

	render() {
		if (this.state.isLoading) {
			return (
				<View style={{ flex: 1, padding: 20 }}>
					<ActivityIndicator />
				</View>
			);
		}

		return (
			<View style={styles.scene}>
				<ScrollView vertical={true}>
					{this.state.dataSource.map(Boats => (
						<Cards
							key={Boats._id}
							name={Boats.name}
							image={Boats.image}
							thumbnail={Boats.thumbnail}
							location={Boats.location}
							rents={Boats.rents}
							price={Boats.price}
						/>
					))}
				</ScrollView>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	scene: {
		flex: 1,
	},
});
