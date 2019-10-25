import React from "react";
import { Platform } from "react-native";
import {
  createStackNavigator,
  createBottomTabNavigator
} from "react-navigation";

<<<<<<< HEAD
import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import LinksScreen from '../screens/LinksScreen';
import LoginScreen from '../screens/LoginScreen';
import SettingsScreen from '../screens/SettingsScreen';
import TeamsScreen from '../screens/team-codes/TeamsScreen';
=======
import TabBarIcon from "../components/TabBarIcon";
import HomeScreen from "../screens/HomeScreen";
import LinksScreen from "../screens/LinksScreen";
import SettingsScreen from "../screens/SettingsScreen";
>>>>>>> trying to add screens and navigation

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
<<<<<<< HEAD
    Teams: TeamsScreen,
=======
    Links: LinksScreen
>>>>>>> trying to add screens and navigation
  },
  config
);

<<<<<<< HEAD
TeamsStack.navigationOptions = {
  tabBarLabel: 'Teams',
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
  ),
};

TeamsStack.path = '';

const LoginStack = createStackNavigator(
  {
    Login: LoginScreen,
  },
  config
);

LoginStack.navigationOptions = {
  tabBarLabel: 'Login',
=======
LinksStack.navigationOptions = {
  tabBarLabel: "Links",
>>>>>>> trying to add screens and navigation
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === "ios" ? "ios-link" : "md-link"}
    />
  )
};

<<<<<<< HEAD
LoginStack.path = '';
=======
LinksStack.path = "";
>>>>>>> trying to add screens and navigation

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
<<<<<<< HEAD
  LoginStack,
  SettingsStack,
  TeamsStack,
=======
  LinksStack,
  SettingsStack
>>>>>>> trying to add screens and navigation
});

tabNavigator.path = "";

export default tabNavigator;
