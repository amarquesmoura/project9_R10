import React, { Component } from "react";
import { LayoutAnimation, Text, View } from "react-native";
import { styles } from "./styles";
import CodeOfConduct from "../../components/CodeOfConduct";

const About = ({ data }) => {
  console.log("allConducts", data.allConducts);
  return (
    <View style={styles.container}>
      <Text>This is the About screen...</Text>
      <CodeOfConduct allConducts={data.allConducts} />
    </View>
  );
};

export default About;
