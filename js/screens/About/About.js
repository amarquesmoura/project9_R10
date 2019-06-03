import React, { Component } from "react";
import { Image, LayoutAnimation, Text, View } from "react-native";
import styles from "./styles";
import CodeOfConduct from "../../components/CodeOfConduct";
import { ScrollView } from "react-native-gesture-handler";

const About = ({ data }) => {
  console.log("allConducts", data.allConducts);
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.logoContainer}>
        <Image
          style={styles.logo}
          source={require("../../assets/images/r10_logo.png")}
          resizeMode="cover"
        />
      </View>
      <View style={styles.info}>
        <Text style={styles.paragraph}>
          R10 is a conference that focuses on just about any topic related to
          dev.
        </Text>
        <Text style={styles.heading}>Date & Venue</Text>
        <Text style={styles.paragraph}>
          The R10 conference will take place on Tuesday, June 27, 2017 in
          Vancouver,BC
        </Text>
        <Text style={styles.heading}>Code of Conduct</Text>
      </View>
      <View style={styles.conducts}>
        <CodeOfConduct allConducts={data.allConducts} />
      </View>
    </ScrollView>
  );
};

export default About;
