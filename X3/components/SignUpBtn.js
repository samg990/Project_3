import React from "react";
import { Container, Header, Content, Button, Text } from "native-base";

export default function ButtonSign() {
	const handler = () => {
		// do something on touch
	};
	return (
		<Container>
			<Header />
			<Content>
				<Button rounded success onTouch={handler}>
					<Text>Button HERE !!!!</Text>
				</Button>
			</Content>
		</Container>
	);
}
