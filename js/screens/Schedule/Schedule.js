import React, { Component, Fragment } from "react";
import { ItemSeparatorComponent, SectionList, Text, View } from "react-native";
import moment from "moment";
import { styles } from "./styles";

const Schedule = ({ data }) => {
  console.log(data);
  return (
    <View style={styles.container}>
      <Text>This is the Schedule screen...</Text>
      <SectionList
        renderSectionHeader={({ section: { title } }) => (
          <Text style={{ fontWeight: "bold" }}>
            {moment(title).format("h:mm a")}
          </Text>
        )}
        renderItem={({ item }) => (
          <View key={item.id}>
            <Text>{item.title}</Text>
            <Text>{item.location}</Text>
          </View>
        )}
        sections={data}
        keyExtractor={item => item.id}
        ItemSeparatorComponent={() => (
          <View style={{ borderBottomColor: "#999", borderBottomWidth: 1 }} />
        )}
      />
    </View>
  );
};

export default Schedule;
