import React, { Component, Fragment } from "react";
import {
  ItemSeparatorComponent,
  SectionList,
  Text,
  TouchableHighlight,
  View
} from "react-native";
import { styles } from "./styles";
import moment from "moment";

const Session = ({
  session,
  navigation,
  faveIds,
  addFaveSession,
  removeFaveSession
}) => {
  console.log("Session", session);
  return (
    <View style={styles.container}>
      <Text>This is the Session screen...</Text>
      <Text>{session.location}</Text>
      {faveIds.includes(session.id) ? (
        <Ionicons name={heart} size={20} color="red" />
      ) : null}
      <Text>{session.title}</Text>
      <Text>{moment(session.startTime).format("h:mm a")}</Text>
      <Text>{session.description}</Text>
      <TouchableHighlight
        onPress={() =>
          navigation.navigate("Speaker", { speaker: session.speaker })
        }
      >
        <Text>{session.speaker.name}</Text>
      </TouchableHighlight>
    </View>
  );
};

export default Session;
