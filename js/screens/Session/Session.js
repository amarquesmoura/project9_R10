import React, { Component, Fragment } from "react";
import {
  Image,
  StyleSheet,
  Platform,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  View
} from "react-native";
import styles from "./styles";
import moment from "moment";
import { ScrollView } from "react-native-gesture-handler";
import LinearGradient from "react-native-linear-gradient";
import Icon from "react-native-vector-icons/Ionicons";
const Session = ({
  session,
  navigation,
  faveIds,
  addFaveSession,
  removeFaveSession
}) => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.locationAndFaveContainer}>
          <Text style={styles.location}>{session.location}</Text>
          {faveIds.includes(session.id) ? (
            <Icon
              name={Platform.OS === "ios" ? "ios-heart" : "md-heart"}
              size={20}
              color="red"
            />
          ) : null}
        </View>
        <Text style={styles.title}>{session.title}</Text>
        <Text style={styles.time}>
          {moment(session.startTime).format("h:mm a")}
        </Text>
        <Text style={styles.description}>{session.description}</Text>
        {session.speaker ? (
          <View>
            <Text style={styles.presented}>{"Presented by:"}</Text>
            <TouchableHighlight
              onPress={() =>
                navigation.navigate("Speaker", { speaker: session.speaker })
              }
            >
              <View style={styles.speakerContainer}>
                <Image
                  style={styles.speakerPic}
                  source={{ uri: session.speaker.image }}
                />
                <Text style={styles.speaker}>{session.speaker.name}</Text>
              </View>
            </TouchableHighlight>
          </View>
        ) : null}
      </View>
      <View style={styles.separator} />
      <View style={styles.buttonContainer}>
        {console.log(faveIds.includes(session.id))}
        {faveIds.includes(session.id) ? (
          <LinearGradient
            colors={["#9963ea", "#cf392a"]}
            start={{ x: 0.0, y: 0.5 }}
            end={{ x: 0.5, y: 0.0 }}
            // style={[StyleSheet.absoluteFill, styles.btn]}
          >
            <TouchableOpacity
              style={styles.button}
              onPress={() => removeFaveSession(session.id)}
            >
              <Text style={styles.buttonText}>Remove from Favs</Text>
            </TouchableOpacity>
          </LinearGradient>
        ) : (
          <LinearGradient
            colors={["#9963ea", "#cf392a"]}
            start={{ x: 0.0, y: 0.5 }}
            end={{ x: 0.5, y: 0.0 }}
            // style={[StyleSheet.absoluteFill]}
          >
            <TouchableOpacity
              style={styles.button}
              onPress={() => addFaveSession(session.id)}
            >
              <Text style={styles.buttonText}>Add from Favs</Text>
            </TouchableOpacity>
          </LinearGradient>
        )}
      </View>
    </ScrollView>
  );
};

export default Session;
