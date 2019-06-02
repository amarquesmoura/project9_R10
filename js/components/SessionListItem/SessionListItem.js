import React, { Component, Fragment } from "react";
import { Platform, Text, TouchableHighlight, View } from "react-native";
import styles from "./styles";
import { withNavigation } from "react-navigation";
import Ionicons from "react-native-vector-icons/Ionicons";

const SessionListItem = ({ item, navigation, faveIds }) => {
  const heart = Platform.select({
    ios: " ios-heart",
    android: "md-heart"
  });
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
          <Text style={styles.title}>{item.title}</Text>
          <View style={styles.locationAndFaveContainer}>
            <Text style={styles.location}>{item.location}</Text>
            {faveIds.includes(item.id) ? (
              <Ionicons name={heart} size={20} color="red" />
            ) : null}
          </View>
        </View>
      </TouchableHighlight>
    </View>
  );
};

export default withNavigation(SessionListItem);
