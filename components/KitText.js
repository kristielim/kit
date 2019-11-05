import React, { useState, useEffect } from 'react';
import { Text } from 'react-native';
import * as Font from 'expo-font';

/*
props expected
  children
  style
  color
  fontWeight
  size
*/
export default function KitText(props) {
  const [fontLoaded, setFontLoaded] = useState("");
  const defaultFontStyles = {marginTop: "auto", marginBottom: "auto", textAlign: "center"}; //EVAN TODO: move this to constants

  const loadFontAssets = async () => {
    await Font.loadAsync({
      // EVAN TODO: move the requires to constants
      'hind-regular': require('../assets/fonts/Hind/Hind-Regular.ttf'),
      'hind-bold': require('../assets/fonts/Hind/Hind-Bold.ttf'),
      'hind-light': require('../assets/fonts/Hind/Hind-Light.ttf'),
      'hind-medium': require('../assets/fonts/Hind/Hind-Medium.ttf'),
      'hind-semibold': require('../assets/fonts/Hind/Hind-SemiBold.ttf'),
    });
    setFontLoaded("hind-");
  }

  const pickFontWeight = (weightPassed) => {
    switch (weightPassed) {
      case "bold":
        return fontLoaded + "bold"
      case "light":
        return fontLoaded + "light"
      case "medium":
        return fontLoaded + "medium"
      case "semibold":
        return fontLoaded + "semibold"
      default:
        return fontLoaded + "regular"
    }
  }
  const fontToUse = pickFontWeight(props.fontWeight)

  useEffect(() => {
    loadFontAssets()
  }, []);

  return (fontLoaded ? (
    <Text style={[defaultFontStyles, props.style, { fontFamily: fontToUse,
                                                    fontSize: props.size, 
                                                    color: props.color ? props.color : "black"}]}>
      {props.children}
    </Text>) : null
  );
}