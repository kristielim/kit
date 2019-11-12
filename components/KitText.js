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
  fontCalligraphy
    italic
    link
    none
  size
*/
export default function KitText(props) {
  const [fontLoaded, setFontLoaded] = useState("poligon"); //Defaulted to poligon for now, leaving hook in case we want to load different fonts in the future. ()
  const [fontToUse, setFontToUse] = useState("");

  const defaultFontStyles = {marginTop: "auto", marginBottom: "auto", textAlign: "center"}; //EVAN TODO: move this to constants

  const pickFont = (fW, fC) => {
    let fontWeight = fW
    switch (fontWeight) {
      case "thin":
        break;
      case "light":
        break;
      default:
        fontWeight = "regular"
        break;
      case "medium":
        break;
      case "semibold":
        break;
      case "bold":
        break;
      case "extrabold":
        break;
      case "black":
        break;
    }
  
    let fontCalligraphy = fC
    switch (fontCalligraphy) {
      case "italic":
        break
      case "link":
        break
      default:
        fontCalligraphy = ""
        break
    }

    const newFontToUse = fontCalligraphy ? `${fontLoaded}-${fontWeight}-${fontCalligraphy}` : `${fontLoaded}-${fontWeight}` //If calligraphy is specified, set it. If not, do not set it
    setFontToUse(newFontToUse)
  }



  useEffect(() => {
    // loadFontAssets()
    console.log(props.fontWeight)
    console.log(props.fontCalligraphy)
    pickFont(props.fontWeight, props.fontCalligraphy)
  }, []);

  return (fontLoaded && fontToUse ? (
    <Text style={[defaultFontStyles, //Defaults come first so can be overwritten by props.style
                  props.style,
                  { fontFamily: fontToUse,
                    fontSize: props.size, 
                    color: props.color }]}>
      {props.children}
    </Text>) : null
  );
}