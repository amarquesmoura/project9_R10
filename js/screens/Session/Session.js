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
  return (
    <View style={styles.container}>
      <Text>This is the Session screen...</Text>
    </View>
  );
};

export default Session;
