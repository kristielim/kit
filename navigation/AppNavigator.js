import React from "react";
import { Platform, StatusBar } from "react-native";
import { createSwitchNavigator, createAppContainer } from "react-navigation";
import { FontAwesome } from "react-native-vector-icons";
import { createStackNavigator } from "react-navigation-stack";
import MainTabNavigator from "./MainTabNavigator";

import SignUp from "../screens/AuthScreen";
import HomeScreen from "../screens/HomeScreen";
import LinksScreen from "../screens/LinksScreen";
import SignIn from "../screens/SignInScreen";

const headerStyle = {
  marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
};

export const SignedOut = createStackNavigator({
  SignUp: {
    screen: SignUp,
    navigationOptions: {
      title: "Sign Up",
      headerStyle
    }
  },
  SignIn: {
    screen: SignIn,
    navigationOptions: {
      title: "Sign In",
      headerStyle
    }
  }
});

// export const createRootNavigator = (signedIn = false) => {
//   return createSwitchNavigator(
//     {
//       Main: MainTabNavigator,
//       SignedOut: SignedOut
//     },
//     {
//       initialRouteName: signedIn ? "SignedIn" : "SignedOut"
//     }
//   );
// };

export default createAppContainer(
  createSwitchNavigator({
    SignedOut: SignedOut,
    Main: MainTabNavigator
  })
);
