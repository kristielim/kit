import React, { useState } from 'react';
import { Image, Text, View, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import KitButton from '../KitButton';
import KitText from '../KitText';

import { Create } from './Create';
import { Join } from './Join';
import Colors from '../../constants/Colors';

export function MainTeamComponent(props) {
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
          <View style={{flex: 1, justifyContent: "center", alignItems: "flex-start", backgroundColor: "#569684", maxHeight: 200}}>
            <KitButton 
              style={{button: styles.buttonWrapper}} 
              onPress={() => {switchToView(2)}} 
              buttonTextColor={Colors.KIT_ORANGE} 
              buttonFontWeight={"medium"} 
              buttonFontSize={15}
              buttonTextStyle={{}}
              buttonBackgroundColor={Colors.KIT_WHITE} 
              image={placeholderImage}>
                JOIN TEAM
            </KitButton>
            
            <KitButton 
              style={{button: styles.buttonWrapper}} 
              onPress={() => {switchToView(1)}} 
              buttonTextColor={Colors.KIT_GREEN} 
              buttonFontWeight={"medium"} 
              buttonFontSize={15}
              buttonTextStyle={{}}
              buttonBackgroundColor={Colors.KIT_WHITE} 
              image={placeholderImage}>
                CREATE NEW TEAM
            </KitButton>
          </View>
        </View>
      );
  }
}
//EVAN TODO: merge all stylesheets for team-codes into singular one referenced by all
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
    width: 268,
    maxHeight: 48,
    marginTop: 8,
    marginBottom: 8,
    borderRadius: 20,
  }
});