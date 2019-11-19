import React, { useState } from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import KitText from '../../components/KitText';
import KitButton from '../../components/KitButton';

import Colors from '../../constants/Colors';
import FontStyles from '../../constants/FontStyles';

export default function TeamsScreen() {

  const placeholderImage = require('../../assets/images/40by40.png')

  return (
    <View>
      <KitText size={50}>This is a specific team</KitText>
    </View>
  );
}

const styles = StyleSheet.create({
  
});