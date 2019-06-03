import React from "react";
import { Platform, StyleSheet, View, TouchableOpacity } from "react-native";
import { Header } from "react-navigation";
import LinearGradient from "react-native-linear-gradient";
import Icon from "react-native-vector-icons/Ionicons";
import theme from "../config/styles";

const GradientHeader = props => (
  <View style={{ backgroundColor: "white", overflow: "hidden" }}>
    <LinearGradient
      colors={["#cf392a", "#9963ea"]}
      start={{ x: 0.0, y: 1.0 }}
      end={{ x: 1.0, y: 0.0 }}
      style={[StyleSheet.absoluteFill, { height: "100%", width: "100%" }]}
    />
    <Header {...props} />
  </View>
);

export const sharedNavigationOptions = navigation => ({
  headerBackTitle: null,
  header: props => <GradientHeader {...props} />,
  headerStyle: {
    backgroundColor: "transparent"
  },
  headerTintColor: "white",
  headerTitleStyle: {
    fontSize: 18,
    fontFamily: theme.fontRegular,
    color: "white"
  },
  headerLeft: Platform.select({
    android: (
      <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
        <Icon name="md-menu" size={25} color="white" style={{ margin: 15 }} />
      </TouchableOpacity>
    )
  })
});
