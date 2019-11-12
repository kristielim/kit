import React from 'react';
import { Image, Text, View, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import KitButton from '../KitButton';
import KitText from '../KitText';
import Colors from '../../constants/Colors';
import FontStyles from '../../constants/FontStyles'

export function Create(props) {
  const placeholderImage = require('../../assets/images/40by40.png')

  return (
    <View style={styles.background}>
      <View style={styles.main}>
        <KitButton 
          style={{maxHeight: 40, marginLeft: 0, marginRight: 0, justifyContent: "flex-start"}} 
          image={placeholderImage}>
        </KitButton>

        <View style={{flex:2, justifyContent:"center"}}>
          <KitText 
            style={{}} 
            size={18} 
            color={Colors.KIT_DARKEST_BLACK} 
            fontWeight={FontStyles.FONT_WEIGHT_LIGHT}>
              Set Team Name
          </KitText>

          {/* Evan TODO: Make this input a separate compo */}
          <TextInput style={styles.textInput} 
            placeholder="Ex) Team One" 
            onChangeText={props.onChangeText} 
            value={props.teamNameText} />
        </View>

        <View style={{flex:4,justifyContent:"flex-start"}}>
          <KitText 
            style={{}} 
            fontWeight={FontStyles.FONT_WEIGHT_BOLD} 
            color={Colors.KIT_DARKEST_BLACK} 
            size={53}>
              47VK0A
          </KitText>

          <KitButton 
            style={{button: styles.button}} 
            onPress={()=>alert("pressed!")} 
            buttonBackgroundColor={Colors.KIT_GREEN} 
            buttonTextColor={Colors.KIT_WHITE} 
            buttonFontWeight={FontStyles.FONT_WEIGHT_MEDIUM} 
            buttonFontSize={18} 
            buttonTextStyle={{}}>
              SHARE
          </KitButton>

          <KitButton 
            style={{button: styles.button}}
            onPress={()=>alert("pressed!")} 
            buttonBackgroundColor={Colors.KIT_WHITE} 
            buttonTextColor={Colors.KIT_GREEN} 
            buttonFontWeight={FontStyles.FONT_WEIGHT_MEDIUM} 
            buttonFontSize={18} 
            buttonTextStyle={{}}>
              COPY
          </KitButton>

          <KitText 
            style={{}} 
            color={Colors.KIT_DARKEST_BLACK} 
            fontWeight={FontStyles.FONT_WEIGHT_LIGHT} 
            size={14}>
              Invite up to 5 friends per team
          </KitText>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    width: 203,
    maxHeight: 40,
    marginTop:5,
    marginBottom:8,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: Colors.KIT_GREEN,
  },
  textInput: {
    backgroundColor: 'white', 
    width: 268, 
    height: 48, 
    borderWidth: 2, 
    borderColor: Colors.KIT_ORANGE, 
    borderRadius: 20, 
    paddingLeft: 15,
    marginLeft: 'auto', 
    marginRight: 'auto', 
    fontSize: 24, 
    color: Colors.KIT_DARK_GREY
  },
  background: {
    flex:1,
    backgroundColor: Colors.KIT_GREEN,
    padding: 20
  },
  main: {
    flex:1, 
    borderRadius: 30, 
    backgroundColor: Colors.KIT_WHITE
  }
});