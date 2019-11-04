
import React, { useState } from 'react';
import { Image, Text, View, StyleSheet, TouchableOpacity, TextInput } from 'react-native';

const myUserId = 'user_id_1' //EVAN TODO. This is hardcoded for now, just to see if linkup to firebase will work

export function MyTeams(props) {

  return (
    <View style={{marginTop: 10,}}>
      <Text style={styles.text}>No Teams Yet</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    textAlign: 'center',
    fontSize: 36,
  },
});