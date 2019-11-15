import React, { useState } from 'react';
import { Image, Text, View, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import KitButton from '../KitButton';
import KitText from '../KitText';
import KitSvg from '../KitSvg';
import { Circle, Path } from 'react-native-svg';

import { Create } from './Create';
import { Join } from './Join';
import Colors from '../../constants/Colors';
import FontStyles from '../../constants/FontStyles';

export function MainTeamComponent(props) {
  const [componentView, setComponentView] = useState(0)
  const [teamNameText, setTeamNameText] = useState('')

  const switchToView = function (view) {
    setComponentView(view)
  }

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
              buttonFontWeight={FontStyles.FONT_WEIGHT_MEDIUM} 
              buttonFontSize={15}
              buttonTextStyle={{}}
              buttonBackgroundColor={Colors.KIT_WHITE}>
                <KitSvg width={9} height={12} scale={1}>
                  <Circle cx={4.5} cy={2.5} r={2.5} fill="#E17327" />
                  <Path
                    d="M4.5 5.667c-2.485 0-4.5 2.76-4.5 6.166h9c0-3.405-2.015-6.166-4.5-6.166z"
                    fill="#E17327"
                  />
                </KitSvg>
                JOIN TEAM
            </KitButton>
            
            <KitButton 
              style={{button: styles.buttonWrapper}} 
              onPress={() => {switchToView(1)}} 
              buttonTextColor={Colors.KIT_GREEN} 
              buttonFontWeight={FontStyles.FONT_WEIGHT_MEDIUM} 
              buttonFontSize={15}
              buttonTextStyle={{}}
              buttonBackgroundColor={Colors.KIT_WHITE}>
                <KitSvg width={16} height={16} scale={1}>
                  <Path d="M0 5.622h16v4.756H0V5.622z" fill="#569684" />
                  <Path d="M5.622 16V0h4.756v16H5.622z" fill="#569684" />
                </KitSvg>
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