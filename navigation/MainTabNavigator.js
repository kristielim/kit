import React from "react";
import { Platform } from "react-native";
import {
  createStackNavigator,
  createBottomTabNavigator
} from "react-navigation";

import TabBarIcon from "../components/TabBarIcon";
import HomeScreen from "../screens/HomeScreen";
import LinksScreen from "../screens/LinksScreen";
import LoginScreen from "../screens/LoginScreen";
import SettingsScreen from "../screens/SettingsScreen";
import TeamsScreen from "../screens/Teams/TeamsScreen";
import SpecificTeamScreen from '../screens/Teams/SpecificTeamScreen';
import JoinScreen from "../screens/Teams/JoinScreen";
import CreateScreen from "../screens/Teams/CreateScreen";

const config = Platform.select({
  web: { headerMode: "screen" },
  default: {}
});

const HomeStack = createStackNavigator(
  {
    Home: HomeScreen
  },
  config
);

HomeStack.navigationOptions = {
  tabBarLabel: "Home",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === "ios"
          ? `ios-information-circle${focused ? "" : "-outline"}`
          : "md-information-circle"
      }
    />
  )
};

HomeStack.path = "";

const TeamsStack = createStackNavigator(
  {
    Teams: TeamsScreen,
    Team: SpecificTeamScreen,
    Join: {
      screen: JoinScreen,
      navigationOptions: () => {
        return {
          headerLeft: <></>
        };
      }
    },
    Create: {
      screen: CreateScreen,
      navigationOptions: () => {
        return {
          headerLeft: <></>
        };
      }
    }
  },
  config
);

TeamsStack.navigationOptions = {
  tabBarLabel: "Teams",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      // EVAN TODO: Design hand-off for icon
      // name={
      //   Platform.OS === 'ios'
      //     ? `ios-information-circle${focused ? '' : '-outline'}`
      //     : 'md-information-circle'
      // }
    />
  )
};

TeamsStack.path = "";

const LoginStack = createStackNavigator(
  {
    Login: LoginScreen
  },
  config
);

LoginStack.navigationOptions = {
  tabBarLabel: "Login",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === "ios" ? "ios-link" : "md-link"}
    />
  )
};

LoginStack.path = "";

const SettingsStack = createStackNavigator(
  {
    Settings: SettingsScreen
  },
  config
);

SettingsStack.navigationOptions = {
  tabBarLabel: "Settings",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === "ios" ? "ios-options" : "md-options"}
    />
  )
};

SettingsStack.path = "";

const tabNavigator = createBottomTabNavigator({
  HomeStack,
  LoginStack,
  SettingsStack,
  TeamsStack
});

tabNavigator.path = "";

export default tabNavigator;
