import React, { Component, Fragment } from "react";
import { Text, View } from "react-native";
import { styles } from "./styles";
import SessionList from "../../components/SessionList";

const Schedule = ({ sessions }) => {
  return (
    <View style={styles.container}>
      <Text>This is the Schedule screen...</Text>
      <SessionList sessions={sessions} />
    </View>
  );
};

export default Schedule;
