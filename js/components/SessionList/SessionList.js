import React, { Component, Fragment } from "react";
import { SectionList, Text, View } from "react-native";
import moment from "moment";
import { styles } from "./styles";
import SessionListItem from "../SessionListItem";
import { formatSessionData } from "../../helpers";

const SessionList = ({ sessions }) => {
  return (
    <View>
      <SectionList
        renderSectionHeader={({ section: { title } }) => (
          <Text style={{ fontWeight: "bold" }}>
            {moment(title).format("h:mm a")}
          </Text>
        )}
        renderItem={({ item }) => <SessionListItem item={item} />}
        sections={formatSessionData(sessions)}
        keyExtractor={item => item.id}
        ItemSeparatorComponent={() => (
          <View style={{ borderBottomColor: "#999", borderBottomWidth: 1 }} />
        )}
      />
    </View>
  );
};

export default SessionList;
