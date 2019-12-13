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
import TutorialScreen2 from '../screens/Tutorials/TutorialScreen2';
import TutorialScreen3 from '../screens/Tutorials/TutorialScreen3';
import TutorialScreen4 from '../screens/Tutorials/TutorialScreen4';

export const SignedOut = createStackNavigator({
  //EVAN TODO: Find a better way to do the multiple tutorial screens
  Tutorial: {
    screen: TutorialScreen1,
    navigationOptions: { headerLeft: <></> }
  },
  Tutorial2: {
    screen: TutorialScreen2,
    navigationOptions: { headerLeft: <></> }
  },
  Tutorial3: {
    screen: TutorialScreen3,
    navigationOptions: { headerLeft: <></> }
  },
  Tutorial4: {
    screen: TutorialScreen4,
    navigationOptions: { headerLeft: <></> }
  },
  SignUp: {
    screen: SignUp,
    navigationOptions: { headerLeft: <></> }
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
