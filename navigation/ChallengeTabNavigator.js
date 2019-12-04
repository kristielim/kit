import React from "react";
import { createMaterialTopTabNavigator } from "react-navigation-tabs";
import ToDoScreen from "../screens/Challenges/ToDoScreen";
import SubmissionsScreen from "../screens/Challenges/SubmissionsScreen";
import KitButtonSupreme from "../components/KitButtonSupreme";
import Colors from "../constants/Colors";
import { StyleSheet } from "react-native";

const tabNavigator = createMaterialTopTabNavigator(
  {
    ToDo: {
      screen: ToDoScreen,
      navigationOptions: {
        tabBarIcon: ({ focused }) => {
          return (
            <KitButtonSupreme
              width={160}
              height={40}
              color={focused ? Colors.KIT_RED : Colors.KIT_DARK_GREY}
              style={styles.shadows}
            >
              To Do
            </KitButtonSupreme>
          );
        }
      }
    },
    Submissions: {
      screen: SubmissionsScreen,
      navigationOptions: {
        tabBarIcon: ({ focused }) => {
          return (
            <KitButtonSupreme
              width={160}
              height={40}
              color={focused ? Colors.KIT_GREEN : Colors.KIT_DARK_GREY}
              style={styles.shadows}
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
        height: 70
      }
    }
  }
);

const styles = StyleSheet.create({
  shadows: {
    shadowOffset: { height: 1, width: 1 },
    shadowOpacity: 1,
    shadowColor: Colors.KIT_DARK_GREY
  }
});

tabNavigator.path = "";

export default tabNavigator;
