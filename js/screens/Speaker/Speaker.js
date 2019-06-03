import React from "react";
import {
  Image,
  Linking,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  View
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import LinearGradient from "react-native-linear-gradient";
import styles from "./styles";
import { withNavigation } from "react-navigation";

const xIcon = Platform.select({
  ios: "ios-close",
  android: "md-close"
});

const Speaker = ({ speaker, navigation }) => {
  return (
    <View style={styles.modalContainer}>
      <TouchableHighlight
        underlayColor={"transparent"}
        onPress={() => navigation.goBack()}
      >
        <View style={styles.modalBar}>
          <Icon name={xIcon} size={50} style={styles.closeIcon} />
          <Text style={styles.modalTitle}>About the Speaker</Text>
          <View />
        </View>
      </TouchableHighlight>
      <ScrollView contentContainerStyle={styles.scrollView}>
        <Image style={styles.speakerPic} source={{ uri: speaker.image }} />
        <Text style={styles.name}>{speaker.name}</Text>
        <Text style={styles.bio}>{speaker.bio}</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            Linking.openURL(speaker.url);
          }}
        >
          <LinearGradient
            colors={["#9963ea", "#4583e8"]}
            start={{ x: 0.0, y: 1.0 }}
            end={{ x: 1.0, y: 0.0 }}
            style={[StyleSheet.absoluteFill, { height: 50, width: "100%" }]}
          />
          <Text style={styles.buttonText}>Read More on Wikipedia</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default withNavigation(Speaker);
