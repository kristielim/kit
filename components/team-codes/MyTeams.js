
import React, { useState } from 'react';
import { Image, Text, View, StyleSheet, TouchableOpacity, TextInput } from 'react-native';

import { getTeamsForUserId } from '../../utils/db/handle'

const _ = require("lodash");
const myUserId = 'user_id_1'; //EVAN TODO. This is hardcoded for now, just to see if linkup to firebase will work. We can use var userId = firebase.auth().currentUser.uid; later

export function MyTeams(props) {
  const [myTeams, setMyTeam] = useState([])
  getTeamsForUserId(myUserId)

  return (
    <View style={{marginTop: 10,}}>
      {myTeams.length == 0 && <Text style={styles.text}>No Teams Yet</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    textAlign: 'center',
    fontSize: 36,
  },
});