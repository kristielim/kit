import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import ChallengesScreen from '../screens/ChallengesScreen';
import LoginScreen from '../screens/LoginScreen';
import ProfileScreen from '../screens/ProfileScreen';
import TeamsScreen from '../screens/team-codes/TeamsScreen';

const config = Platform.select({
  web: { headerMode: 'screen' },
  default: {},
});

const ChallengesStack = createStackNavigator(
  {
    Challenges: ChallengesScreen,
  },
  config
);

ChallengesStack.navigationOptions = {
  tabBarLabel: 'Challenges',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-information-circle${focused ? '' : '-outline'}`
          : 'md-information-circle'
      }
    />
  ),
};

ChallengesStack.path = '';

const TeamsStack = createStackNavigator(
  {
    Teams: TeamsScreen,
  },
  config
);

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
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-link' : 'md-link'} />
  ),
};

LoginStack.path = '';

const ProfileStack = createStackNavigator(
  {
    Profile: ProfileScreen,
  },
  config
);

ProfileStack.navigationOptions = {
  tabBarLabel: 'Profile',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-options' : 'md-options'} />
  ),
};

ProfileStack.path = '';

const tabNavigator = createBottomTabNavigator({
  TeamsStack,
  ChallengesStack,
  ProfileStack,
  LoginStack,
});

tabNavigator.path = '';

export default tabNavigator;
