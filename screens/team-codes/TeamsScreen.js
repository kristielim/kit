import React from 'react';
import {
  Button,
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import { MainTeamComponent } from '../../components/team-codes/MainTeamComponent';

export default function TeamsScreen() {
  return (
    <View style={styles.container}>
      <ScrollView>
        {/*EVAN TODO: iso this header view, reused on all screens*/}
        <View style={styles.header}>
          <Text style={styles.logoText}>KIT</Text>
          <Image
            source={
              __DEV__
                ? require('../../assets/images/robot-dev.png')
                : require('../../assets/images/robot-prod.png')
            }
            style={styles.logo}
          />
        </View>
        <View style={styles.mainBody}>
          <MainTeamComponent />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FCB26D',
  },
  header: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  logoText: {
    fontFamily: 'space-mono', //EVAN TODO: Design hand-off
    fontSize: 35,
    // lineHeight: 24,
  },
  logo: {
    width: 100,
    height: 80,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },
  mainBody: {
    backgroundColor: '#FCF1E9',
    margin: 15,
  },
});