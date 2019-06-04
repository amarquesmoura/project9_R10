import React from "react";
import { Image, LayoutAnimation, Text, View } from "react-native";
import styles from "./styles";
import CodeOfConduct from "../../components/CodeOfConduct";
import { ScrollView } from "react-native-gesture-handler";
import PropTypes from "prop-types";

const About = ({ data }) => {
  return (
    <ScrollView>
      <View style={styles.container}>
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
            The R10 conference will take place on Tuesday, June 27, 2019 in
            Vancouver, BC.
          </Text>
          <Text style={styles.heading}>Code of Conduct</Text>
        </View>
        <View style={styles.conducts}>
          <CodeOfConduct allConducts={data.allConducts} />
        </View>
        <View style={styles.separator} />
        <View style={styles.copyrightContainer}>
          <Text style={styles.copyright}>© RED Academy 2019</Text>
        </View>
      </View>
    </ScrollView>
  );
};

About.propTypes = {
  data: PropTypes.object.isRequired
};

export default About;
