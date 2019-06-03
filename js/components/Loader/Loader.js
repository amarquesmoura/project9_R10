import React, { Component } from "react";
import { ActivityIndicator, AppRegistry, View } from "react-native";
import styles from "./styles";

class Loader extends Component {
  render() {
    return (
      <View style={[styles.container, styles.horizontal]}>
        <ActivityIndicator size="large" color="#cf392a" />
      </View>
    );
  }
}

export default Loader;
