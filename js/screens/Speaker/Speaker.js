import React, { Component, Fragment } from "react";
import { Text, View } from "react-native";
import { styles } from "./styles";

const Speaker = ({ speaker }) => {
  console.log("speaker", speaker);
  return (
    <View style={styles.container}>
      <Text>This is the Speaker screen...</Text>
      <View>
        <Text>{speaker.name}</Text>
        <Text>{speaker.bio}</Text>
      </View>
    </View>
  );
};

export default Speaker;
