import React from "react";
import { Platform, StatusBar } from "react-native";
import { createSwitchNavigator, createAppContainer } from "react-navigation";
import { FontAwesome } from "react-native-vector-icons";
import { createStackNavigator } from "react-navigation-stack";
import MainTabNavigator from "./MainTabNavigator";

import SignUp from "../screens/SignUpScreen";
import SignIn from "../screens/SignInScreen";
import AuthLoadingScreen from "../screens/AuthLoadingScreen";
import TutorialScreen1 from '../screens/Tutorials/TutorialScreen1';

export const SignedOut = createStackNavigator({
  Tutorial: {
    screen: TutorialScreen1
  },
  SignUp: {
    screen: SignUp
  },
  SignIn: {
    screen: SignIn,
    navigationOptions: { headerLeft: <></> }
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
    Loading: AuthLoadingScreen,
    SignedOut: SignedOut,
    Main: MainTabNavigator
  })
);
