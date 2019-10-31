import React, { useState } from 'react';
import { Image, Text, View, StyleSheet, TouchableOpacity, TextInput } from 'react-native';

import { Create } from './Create';
import { Join } from './Join';

export function MainTeamComponent() {
  const [componentView, setComponentView] = useState(0)
  const [teamNameText, setTeamNameText] = useState('')

  const switchToView = function (view) {
    setComponentView(view)
  }

  const placeholderImage = require('../../assets/images/40by40.png')

  switch (componentView) {
    case 1:
      return (
        <Create back={() => {switchToView(0)}} teamNameText={teamNameText} onChangeText={(text) => {setTeamNameText(text)}}/>
      );
    case 2:
      return ( 
        <Join back={() => {switchToView(0)}} />
      );
    default:
      return (
        <View style={{flex: 1}}>
          {/* EVAN TODO: These Button comps are just a placeholder for now, we will need a custom comp in the future */}
          <TouchableOpacity style={[styles.buttonWrapper, {flex: 1, flexDirection: 'row'}]} onPress={() => {switchToView(1)}}>
            <Image source={placeholderImage} style={{marginTop: 'auto', marginBottom: 'auto'}} />
            <Text style={[styles.text, {fontSize: 24, color: 'black', marginTop: 'auto', marginBottom: 'auto'}]}>Create new team</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={[styles.buttonWrapper, {flex: 1}]} onPress={() => {switchToView(2)}}>
            <Text style={[styles.text, {fontSize: 24, color: 'black', marginTop: 'auto', marginBottom: 'auto'}]}>Join a team</Text>
          </TouchableOpacity>
            
          {/* EVAN TODO: make the below teams view dynamic */}
          <Text style={styles.text}>No Teams Yet</Text>
        </View>
      );
  }
}
const styles = StyleSheet.create({
  text: {
    textAlign: 'center',
  },
  codeBox: {
    backgroundColor: '#FFFFFF',
    fontSize: 50,
    borderWidth: 1,
    borderColor: 'black',
    width: 250,
    marginTop: 5,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  buttonWrapper: {
    backgroundColor: "#FFCEBE",
    width: 302,
    maxHeight: 68,
    marginTop: 5,
    marginLeft: 'auto',
    marginRight: 'auto',
    borderRadius: 30,
  }
});