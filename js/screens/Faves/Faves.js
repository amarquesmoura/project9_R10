import React from "react";
import SessionList from "../../components/SessionList";
import { Text, View } from "react-native";
import styles from "./styles";

const Faves = ({ favedSessions, faveIds }) => {
  if (favedSessions.length === 0) {
    return (
      <View style={styles.container}>
        <Text style={styles.message}>
          Your list of favourite sessions is currently empty.
        </Text>
      </View>
    );
  }
  return <SessionList sessions={favedSessions} faveIds={faveIds} />;
};

export default Faves;
