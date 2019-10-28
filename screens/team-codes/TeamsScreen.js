import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

export default function TeamsScreen() {
  return (
    <View>
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.contentContainer}>
        <View style={styles.header}>
          <Text>{/*EVAN TODO: iso this header view, reused on all screens*/}</Text>
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

        <View>
          <Text>Add a new team</Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FCB26D',
  },
  contentContainer: {
    paddingTop: 30,
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
});