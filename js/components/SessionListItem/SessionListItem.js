import React, { Component, Fragment } from "react";
import { Text, TouchableHighlight, View } from "react-native";
import { styles } from "./styles";
import { withNavigation } from "react-navigation";

const SessionListItem = ({ item, navigation }) => {
  return (
    <View>
      <TouchableHighlight
        onPress={() =>
          navigation.navigate("Session", {
            id: item.id
          })
        }
      >
        <View key={item.id}>
          <Text>{item.title}</Text>
          <Text>{item.location}</Text>
        </View>
      </TouchableHighlight>
    </View>
  );
};

export default withNavigation(SessionListItem);
