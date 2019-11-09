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
  const [fontLoaded, setFontLoaded] = useState("");
  const [fontToUse, setFontToUse] = useState("");

  const defaultFontStyles = {marginTop: "auto", marginBottom: "auto", textAlign: "center"}; //EVAN TODO: move this to constants

  const loadFontAssets = async () => {
    await Font.loadAsync({
      // Reload the defaults just in case loading for App.js doesn't work, remove later if needed for performance
      'poligon-regular': require('../assets/fonts/Poligon/poligon-regular.otf'),
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

  const pickFontCalligraphy = () => {
    switch (props.fontCalligraphy) {
      case "italic":
        setFontToUse(fontToUse + "-italic")
        break
      case "link":
        setFontToUse(fontToUse + "-link")
        break
      default:
        break
    }
  }


  useEffect(() => { //Same effect as componentDidMount
    loadFontAssets()
    pickFontWeight()
    pickFontCalligraphy()
  }, []);

  return (fontLoaded ? (
    <Text style={[defaultFontStyles, //Defaults come first so can be overwritten by props.style
                  props.style,
                  { fontFamily: fontToUse,
                    fontSize: props.size, 
                    color: props.color }]}>
      {props.children}
    </Text>) : null
  );
}