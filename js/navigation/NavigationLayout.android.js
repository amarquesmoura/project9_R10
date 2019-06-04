import React from "react";
import { createStackNavigator, createDrawerNavigator } from "react-navigation";
import AboutScreen from "../screens/About";
import ScheduleScreen from "../screens/Schedule";
import SessionScreen from "../screens/Session";
import FavesScreen from "../screens/Faves";
import MapScreen from "../screens/Map";
import { sharedNavigationOptions } from "./config";
import theme from "../config/styles";
import Icon from "react-native-vector-icons/Ionicons";

const MapStack = createStackNavigator(
  {
    Map: MapScreen
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      ...sharedNavigationOptions(navigation)
    })
  }
);
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
    Map: MapStack,
    Faves: FavesStack,
    About: AboutStack
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      drawerIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let IconComponent = Icon;
        let iconName;
        if (routeName === "Schedule") {
          iconName = `md-calendar`;
        } else if (routeName === "About") {
          iconName = `md-information-circle`;
        } else if (routeName === "Faves") {
          iconName = `md-heart`;
        } else if (routeName === "Map") {
          iconName = `md-map`;
        }

        // You can return any component that you like here!
        return <IconComponent name={iconName} size={25} color={tintColor} />;
      }
    }),
    drawerWidth: 150,
    contentOptions: {
      activeTintColor: theme.colors.purple,
      inactiveTintColor: theme.colors.mediumGrey,
      activeBackgroundColor: theme.colors.lightGrey,
      labelStyle: {
        fontSize: 16,
        fontFamily: theme.fontRegular
      },
      itemsContainerStyle: {
        margin: 0
      },
      iconContainerStyle: {
        margin: 0
      }
    }
  }
);
