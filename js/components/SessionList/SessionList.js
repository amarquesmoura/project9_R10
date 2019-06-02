import React, { Component, Fragment } from "react";
import { SectionList, Text, View } from "react-native";
import moment from "moment";
import styles from "./styles";
import SessionListItem from "../SessionListItem";
import { formatSessionData } from "../../helpers";

const SessionList = ({ sessions, faveIds }) => {
  return (
    <View>
      <SectionList
        renderSectionHeader={({ section: { title } }) => (
          <Text style={styles.sectionHeader}>
            {moment(title).format("h:mm a")}
          </Text>
        )}
        renderItem={({ item }) => (
          <SessionListItem item={item} faveIds={faveIds} />
        )}
        sections={formatSessionData(sessions)}
        keyExtractor={item => item.id}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
      />
    </View>
  );
};

export default SessionList;
