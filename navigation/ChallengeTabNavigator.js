import React from "react";
import { createMaterialTopTabNavigator } from "react-navigation-tabs";
import ChallengesScreen from "../screens/ChallengesScreen";
import KitButtonSupreme from "../components/KitButtonSupreme";
import Colors from "../constants/Colors";

const tabNavigator = createMaterialTopTabNavigator(
  {
    ToDo: {
      screen: ChallengesScreen,
      navigationOptions: {
        tabBarIcon: ({ focused }) => {
          return (
            <KitButtonSupreme
              width={160}
              height={40}
              color={focused ? Colors.KIT_RED : Colors.KIT_DARK_GREY}
            >
              To Do
            </KitButtonSupreme>
          );
        }
      }
    },
    Submissions: {
      screen: ChallengesScreen,
      navigationOptions: {
        tabBarIcon: ({ focused }) => {
          return (
            <KitButtonSupreme
              width={160}
              height={40}
              color={focused ? Colors.KIT_GREEN : Colors.KIT_DARK_GREY}
            >
              Submissions
            </KitButtonSupreme>
          );
        }
      }
    }
  },
  {
    tabBarOptions: {
      showIcon: true,
      showLabel: false,
      style: {
        height: 80,
        backgroundColor: "white"
      },
      indicatorStyle: {
        display: "none"
      },
      tabStyle: {
        height: 60
      }
    }
  }
);

tabNavigator.path = "";

export default tabNavigator;
