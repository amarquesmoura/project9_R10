import React from "react";
import {
  Image,
  Platform,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  View
} from "react-native";
import styles from "./styles";
import theme from "../../config/styles";
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
  const heart = Platform.select({
    ios: "ios-heart",
    android: "md-heart"
  });
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.locationAndFaveContainer}>
          <Text style={styles.location}>{session.location}</Text>
          {faveIds.includes(session.id) ? (
            <Icon name={heart} size={20} color="red" />
          ) : null}
        </View>
        <Text style={styles.title}>{session.title}</Text>
        <Text style={styles.time}>
          {moment(session.startTime).format("h:mm A")}
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
        {faveIds.includes(session.id) ? (
          <LinearGradient
            colors={[theme.colors.purple, theme.colors.blue]}
            start={{ x: 0.0, y: 0.5 }}
            end={{ x: 0.5, y: 0.0 }}
            style={styles.gradient}
          >
            <TouchableOpacity
              style={styles.button}
              onPress={() => removeFaveSession(session.id)}
            >
              <Text style={styles.buttonLabel}>Remove from Faves</Text>
            </TouchableOpacity>
          </LinearGradient>
        ) : (
          <LinearGradient
            colors={[theme.colors.purple, theme.colors.blue]}
            start={{ x: 0.0, y: 0.5 }}
            end={{ x: 0.5, y: 0.0 }}
            style={styles.gradient}
          >
            <TouchableOpacity
              style={styles.button}
              onPress={() => addFaveSession(session.id)}
            >
              <Text style={styles.buttonLabel}>Add to Faves</Text>
            </TouchableOpacity>
          </LinearGradient>
        )}
      </View>
    </ScrollView>
  );
};

export default Session;
