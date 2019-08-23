import * as React from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import { TabView, SceneMap } from "react-native-tab-view";
import BoatsRoute from "../screens/BoatsRoute";
import SecondRoute from "../screens/SecondRoute";
import ThirdRoute from "../screens/ThirdRoute";

export default class TabViewX extends React.Component {
  state = {
    index: 0,
    routes: [
      { key: "first", title: "Boats" },
      { key: "second", title: "Second" },
      { key: "third", title: "Third" }
    ]
  };

  render() {
    return (
      <TabView
        navigationState={this.state}
        renderScene={SceneMap({
          first: BoatsRoute,
          second: SecondRoute,
          third: ThirdRoute
        })}
        onIndexChange={index => this.setState({ index })}
        initialLayout={{ width: Dimensions.get("window").width }}
        tabBarPosition={"bottom"}
      />
    );
  }
}
