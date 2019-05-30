import React, { Component, Fragment } from "react";
import { Text, View } from "react-native";
import { styles } from "./styles";
import SessionList from "../../components/SessionList";

const Schedule = ({ sessions, faveIds }) => {
  return (
    <View style={styles.container}>
      <SessionList sessions={sessions} faveIds={faveIds} />
    </View>
  );
};

export default Schedule;
