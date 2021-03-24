import React from "react";
import { Platform, StatusBar } from "react-native";
import {
  createStackNavigator,
  createBottomTabNavigator,
} from "react-navigation";

import KitIcon from "../components/KitIcon";
import TabBarIcon from "../components/TabBarIcon";

import TeamsScreen from "../screens/Teams/TeamsScreen";
import SpecificTeamScreen from "../screens/Teams/SpecificTeamScreen";

import JoinScreen from "../screens/Teams/JoinScreen";
import CreateScreen from "../screens/Teams/CreateScreen";
import ImageScreen from "../screens/ImageScreen";
import TextScreen from "../screens/TextScreen";
import SubmissionScreen from "../screens/SubmissionScreen";

import ProfileScreen from "../screens/ProfileScreen";
import Colors from "../constants/Colors";
import Fonts from "../constants/Fonts";

import ChallengeTabNavigator from "./ChallengeTabNavigator";

const headerStyle = {
  marginTop: Platform.OS === "android" ? 0 : StatusBar.currentHeight,
};

const headerTitleStyle = {
  fontFamily: Fonts.BOLD,
  fontSize: 24,
  color: Colors.KIT_BLACK,
};

const config = { defaultNavigationOptions: { headerStyle, headerTitleStyle } };

const ChallengesStack = createStackNavigator(
  {
    Challenges: {
      screen: ChallengeTabNavigator,
      navigationOptions: { headerTitle: "Challenges" },
    },

    UploadImage: {
      screen: ImageScreen,
      navigationOptions: { headerLeft: <></>, headerTitle: "Upload Image" },
    },
    UploadText: {
      screen: TextScreen,
      navigationOptions: { headerLeft: <></>, headerTitle: "Upload Text" },
    },

    Submitted: {
      screen: SubmissionScreen,
      navigationOptions: { headerLeft: <></>, headerTitle: "Submitted" },
    },
  },
  config
);

ChallengesStack.navigationOptions = {
  tabBarLabel: "Challenges",
  tabBarIcon: ({ focused }) => (
    <KitIcon
      focused={focused}
      activeImage={require("../assets/images/redfoxtail.png")}
      inactiveImage={require("../assets/images/grayfoxtail.png")}
      label="Challenges"
      color={Colors.KIT_RED}
    />
  ),
};

ChallengesStack.path = "";

const TeamsStack = createStackNavigator(
  {
    Teams: {
      screen: TeamsScreen,
      navigationOptions: { headerTitle: "My Teams" },
    },
    Team: {
      screen: SpecificTeamScreen,
      navigationOptions: () => {
        return {
          headerLeft: <></>,
        };
      },
    },
    Join: {
      screen: JoinScreen,
      navigationOptions: { headerLeft: <></>, headerTitle: "Join Team" },
    },
    Create: {
      screen: CreateScreen,
      navigationOptions: { headerLeft: <></>, headerTitle: "Create New Team" },
    },
  },
  config
);

TeamsStack.navigationOptions = {
  tabBarLabel: "Teams",
  tabBarIcon: ({ focused }) => (
    <KitIcon
      focused={focused}
      activeImage={require("../assets/images/teams.png")}
      inactiveImage={require("../assets/images/grayteams.png")}
      label="Teams"
      color={Colors.KIT_GREEN}
    />
  ),
};

TeamsStack.path = "";

const ProfileStack = createStackNavigator(
  {
    Profile: ProfileScreen,
  },
  config
);

ProfileStack.navigationOptions = {
  tabBarLabel: "Profile",
  tabBarIcon: ({ focused }) => (
    <KitIcon
      focused={focused}
      activeImage={require("../assets/images/profile.png")}
      inactiveImage={require("../assets/images/grayprofile.png")}
      label="Profile"
      color={Colors.KIT_ORANGE}
    />
  ),
};

ProfileStack.path = "";

const tabNavigator = createBottomTabNavigator(
  {
    TeamsStack,
    ChallengesStack,
    ProfileStack,
  },
  {
    tabBarOptions: {
      style: { height: 82 },
      showLabel: false,
    },
    initialRouteName: "ChallengesStack",
  }
);

tabNavigator.path = "";

export default tabNavigator;
