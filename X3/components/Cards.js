import React, { Component } from "react";
import { Image } from "react-native";
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
  Right
} from "native-base";
export default function Cards() {
  return (
    <Container>
      <Header />
      <Content>
        <Card>
          <CardItem>
            <Left>
              <Thumbnail
                source={require("../assets/images/CaptainAvatar.jpg")}
              />
              <Body>
                <Text>The X3BOAT</Text>
                <Text note>Santa Monica</Text>
              </Body>
            </Left>
          </CardItem>
          <CardItem cardBody>
            <Image
              source={require("../assets/images/Boat1Example.jpg")}
              style={{ height: 200, width: null, flex: 1 }}
            />
          </CardItem>
          <CardItem>
            <Left>
              <Button transparent>
                <Icon active name="thumbs-up" />
                <Text>12 Rents</Text>
              </Button>
            </Left>
            <Body>
              <Button transparent>
                <Icon active name="chatbubbles" />
                <Text>4 Comments</Text>
              </Button>
            </Body>
            <Right>
              <Button transparent>
                <Icon active name="wine" />
                <Text>Rent</Text>
              </Button>
            </Right>
          </CardItem>
        </Card>
      </Content>
    </Container>
  );
}
