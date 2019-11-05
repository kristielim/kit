import React from 'react';
import { Image, Text, TouchableOpacity } from 'react-native';
import KitText from './KitText';
/*
props expected:
  style: {
    button:{

    },
    image: {

    }
  }
  
  onPress
  image

  buttonBackgroundColor
  buttonTextColor
  buttonFontWeight
  buttonFontSize
  buttonTextStyle
*/
export default function KitButton(props) {
  const defaultButtonWrapperStyles = {
    flex: 1, 
    flexDirection: 'row', 
    justifyContent: 'center', 
    marginLeft: 'auto',
    marginRight: 'auto',
  }

  const defaultButtonImageStyles = {
    marginTop: 'auto', 
    marginBottom: 'auto'
  }
  
  return (
    <TouchableOpacity style={[defaultButtonWrapperStyles, props.style.button, {backgroundColor: props.buttonBackgroundColor}]} onPress={props.onPress}>
      {props.image && <Image source={props.image} style={[defaultButtonImageStyles, props.style.image,]} />}
      {props.children && <KitText style={props.buttonTextStyle ? props.buttonTextStyle : {}} color={props.buttonTextColor ? props.buttonTextColor : "black"} fontWeight={props.buttonFontWeight} size={props.buttonFontSize}>{props.children}</KitText>}
    </TouchableOpacity>
  );
}
