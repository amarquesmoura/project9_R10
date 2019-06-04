import React, { Component, Fragment } from "react";
import { Platform, Text, TouchableOpacity, View } from "react-native";
import styles from "./styles";
import { withNavigation } from "react-navigation";
import Icon from "react-native-vector-icons/Ionicons";

const SessionListItem = ({ item, navigation, faveIds }) => {
  const heart = Platform.select({
    ios: "ios-heart",
    android: "md-heart"
  });
  return (
    <View>
      <TouchableOpacity
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
              <Icon name={heart} size={20} color="red" />
            ) : null}
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default withNavigation(SessionListItem);
