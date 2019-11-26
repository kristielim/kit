import React from "react";
import { Platform } from "react-native";
import {
  createStackNavigator,
  createBottomTabNavigator
} from "react-navigation";

import KitIcon from "../components/KitIcon";

import TeamsScreen from "../screens/Teams/TeamsScreen";
import JoinScreen from "../screens/Teams/JoinScreen";
import CreateScreen from "../screens/Teams/CreateScreen";

import ProfileScreen from "../screens/ProfileScreen";
import ChallengesScreen from "../screens/ChallengesScreen";
import Colors from "../constants/Colors";

const config = Platform.select({
  web: { headerMode: "screen" },
  default: {}
});

const ChallengesStack = createStackNavigator(
  {
    Challenges: ChallengesScreen
  },
  config
);

ChallengesStack.navigationOptions = {
  tabBarLabel: "Challenges",
  tabBarIcon: ({ focused }) => (
    <KitIcon
      focused={focused}
      activeImage={require("../assets/images/foxtail.png")}
      inactiveImage={require("../assets/images/grayfoxtail.png")}
      label="Challenges"
      color={Colors.KIT_RED}
    />
  )
};

ChallengesStack.path = "";

const TeamsStack = createStackNavigator(
  {
    Teams: TeamsScreen,
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
    <KitIcon
      focused={focused}
      activeImage={require("../assets/images/teams.png")}
      inactiveImage={require("../assets/images/grayteams.png")}
      label="Teams"
      color={Colors.KIT_GREEN}
    />
  )
};

TeamsStack.path = "";

const ProfileStack = createStackNavigator(
  {
    Profile: ProfileScreen
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
  )
};

ProfileStack.path = "";

const tabNavigator = createBottomTabNavigator(
  {
    TeamsStack,
    ChallengesStack,
    ProfileStack
  },
  {
    tabBarOptions: {
      style: { height: 82 },
      showLabel: false
    }
  }
);

tabNavigator.path = "";

export default tabNavigator;
