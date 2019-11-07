import React, { useState, useEffect } from 'react';
import { Text } from 'react-native';
import * as Font from 'expo-font';

/*
props expected
  children
  style
  color
  fontWeight
    thin  
    light
    regular
    medium
    semibold
    bold
    extrabold
    black
  fontCaligraphy
    italic
    link
    none
  size
*/
export default function KitText(props) {
  const [fontLoaded, setFontLoaded] = useState("");
  const [fontToUse, setFontToUse] = useState("");

  const defaultFontStyles = {marginTop: "auto", marginBottom: "auto", textAlign: "center"}; //EVAN TODO: move this to constants

  const loadFontAssets = async () => {
    await Font.loadAsync({
      // EVAN TODO: move the requires to constants
      'poligon-black-italic': require('../assets/fonts/Poligon/poligon-black-italic.otf'),
      'poligon-black-link': require('../assets/fonts/Poligon/poligon-black-link.otf'),
      'poligon-black': require('../assets/fonts/Poligon/poligon-black.otf'),
      'poligon-bold-italic': require('../assets/fonts/Poligon/poligon-bold-italic.otf'),
      'poligon-bold-link': require('../assets/fonts/Poligon/poligon-bold-link.otf'),
      'poligon-bold': require('../assets/fonts/Poligon/poligon-bold.otf'),
      'poligon-extrabold-italic': require('../assets/fonts/Poligon/poligon-extrabold-italic.otf'),
      'poligon-extrabold-link': require('../assets/fonts/Poligon/poligon-extrabold-link.otf'),
      'poligon-extrabold': require('../assets/fonts/Poligon/poligon-extrabold.otf'),
      'poligon-light-italic': require('../assets/fonts/Poligon/poligon-light-italic.otf'),
      'poligon-light-link': require('../assets/fonts/Poligon/poligon-light-link.otf'),
      'poligon-light': require('../assets/fonts/Poligon/poligon-light.otf'),
      'poligon-medium-italic': require('../assets/fonts/Poligon/poligon-medium-italic.otf'),
      'poligon-medium-link': require('../assets/fonts/Poligon/poligon-medium-link.otf'),
      'poligon-medium': require('../assets/fonts/Poligon/poligon-medium.otf'),
      'poligon-regular-italic': require('../assets/fonts/Poligon/poligon-regular-italic.otf'),
      'poligon-regular-link': require('../assets/fonts/Poligon/poligon-regular-link.otf'),
      'poligon-regular': require('../assets/fonts/Poligon/poligon-regular.otf'),
      'poligon-semibold-italic': require('../assets/fonts/Poligon/poligon-semibold-italic.otf'),
      'poligon-semibold-link': require('../assets/fonts/Poligon/poligon-semibold-link.otf'),
      'poligon-semibold': require('../assets/fonts/Poligon/poligon-semibold.otf'),
      'poligon-thin-italic': require('../assets/fonts/Poligon/poligon-thin-italic.otf'),
      'poligon-thin-link': require('../assets/fonts/Poligon/poligon-thin-link.otf'),
      'poligon-thin': require('../assets/fonts/Poligon/poligon-thin.otf'),
    });
    setFontLoaded("poligon");
  }

  const pickFontWeight = () => {
    switch (props.fontWeight) {
      case "thin":
        setFontToUse("poligon" + "-thin")
        break;
      case "light":
        setFontToUse("poligon" + "-light")
        break;
      default:
        setFontToUse("poligon" + "-regular")
        break;
      case "medium":
        setFontToUse("poligon" + "-medium")
        break;
      case "semibold":
        setFontToUse("poligon" + "-semibold")
        break;
      case "bold":
        setFontToUse("poligon" + "-bold")
        break;
      case "extrabold":
        setFontToUse("poligon" + "-extrabold")
        break;
      case "black":
        setFontToUse("poligon" + "-black")
        break;
    }
  }

  const pickFontCaligraphy = () => {
    switch (props.fontCaligraphy) {
      case "italic":
        setFontToUse(fontToUse + "-italic")
        break
      case "link":
        setFontToUse(fontToUse + "-italic")
        break
      default:
        break
    }
  }


  useEffect(() => {
    loadFontAssets()
    pickFontWeight()
    pickFontCaligraphy()
  }, []);

  return (fontLoaded ? (
    <Text style={[defaultFontStyles, props.style, { fontFamily: fontToUse,
                                                    fontSize: props.size, 
                                                    color: props.color ? props.color : "black"}]}>
      {props.children}
    </Text>) : null
    
  );
}