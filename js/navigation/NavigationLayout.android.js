import React from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import { createStackNavigator, createDrawerNavigator } from "react-navigation";
import AboutScreen from "../screens/About";
import ScheduleScreen from "../screens/Schedule";
import SessionScreen from "../screens/Session";
import FavesScreen from "../screens/Faves";
import { sharedNavigationOptions } from "./config";
import theme from "../config/styles";

const AboutStack = createStackNavigator(
  {
    About: AboutScreen
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      ...sharedNavigationOptions(navigation)
    })
  }
);
const ScheduleStack = createStackNavigator(
  {
    Schedule: ScheduleScreen,
    Session: SessionScreen
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      ...sharedNavigationOptions(navigation)
    })
  }
);

const FavesStack = createStackNavigator(
  {
    Faves: FavesScreen,
    Session: SessionScreen
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      ...sharedNavigationOptions(navigation)
    })
  }
);

export default createDrawerNavigator(
  {
    Schedule: ScheduleStack,
    Faves: FavesStack,
    About: AboutStack
  },
  {
    drawerWidth: 200,
    drawerPosition: "left"
    // defaultNavigationOptions: ({ navigation }) => ({
    //   drawerIcon: ({ focused, horizontal, tintColor }) => {
    //     const { routeName } = navigation.state;
    //     let IconComponent = Ionicons;
    //     let iconName;
    //     if (routeName === "Schedule") {
    //       iconName = `ios-calendar`;
    //     } else if (routeName === "About") {
    //       iconName = `ios-information-circle`;
    //     } else if (routeName === "Faves") {
    //       iconName = `ios-heart`;
    //     }

    //     // You can return any component that you like here!
    //     return <IconComponent name={iconName} size={25} color={tintColor} />;
    //   }
    // }),
    // tabBarOptions: {
    //   activeTintColor: "white",
    //   inactiveTintColor: "#999",
    //   labelStyle: {
    //     fontSize: 10,
    //     fontFamily: theme.themeFontFamily
    //   },
    //   style: {
    //     backgroundColor: "black"
    //   }
    // }
  }
);
