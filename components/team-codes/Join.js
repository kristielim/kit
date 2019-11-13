
import React, { useState } from 'react';
import { Image, Text, View, StyleSheet, TouchableOpacity, TextInput } from 'react-native';

export function Join(props) {
 return (
  <View>
    <TouchableOpacity onPress={props.back}>
      <Text style={{color: '#E17327', fontSize: 20, textAlign: 'center',}}>
        back
      </Text>
    </TouchableOpacity>
  </View>
 );
}