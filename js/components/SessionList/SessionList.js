import React, { Component, Fragment } from "react";
import { SectionList, Text, View } from "react-native";
import moment from "moment";
import styles from "./styles";
import SessionListItem from "../SessionListItem";
import { formatSessionData } from "../../helpers";
import PropTypes from "prop-types";

const SessionList = ({ sessions, faveIds }) => {
  return (
    <View>
      <SectionList
        renderSectionHeader={({ section: { title } }) => (
          <Text style={styles.sectionHeader}>
            {moment(title).format("h:mm A")}
          </Text>
        )}
        renderItem={({ item }) => (
          <SessionListItem item={item} faveIds={faveIds} />
        )}
        sections={formatSessionData(sessions)}
        keyExtractor={item => item.id}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
      />
      <View style={styles.separator} />
    </View>
  );
};

SessionList.propTypes = {
  session: PropTypes.array,
  faveIds: PropTypes.array.isRequired
};

export default SessionList;
