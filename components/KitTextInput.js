import React, { useState } from "react";
import { StyleSheet, TextInput, View, Image } from "react-native";
import Colors from "../constants/Colors";
import KitText from "../components/KitText";

export default function KitTextInput(props) {
  const styles = StyleSheet.create({
    error: {
      textAlign: "right",
      marginTop: 4
    },
    image: {
      marginLeft: 20
    },
    statusImage: {
      marginRight: 20
    },
    textInputContainer: {
      flexDirection: "row",
      alignItems: "center",
      backgroundColor: Colors.KIT_LIGHT_GREY,
      width: 260,
      height: 40,
      borderRadius: 20,
      borderWidth: props.error ? 1 : 0,
      borderColor: Colors.KIT_RED
    },
    textInput: {
      backgroundColor: Colors.KIT_LIGHT_GREY,
      fontSize: 16,
      fontFamily: "poligon-regular",
      flex: 1,
      color: Colors.BLACK,
      paddingLeft: 14
    }
  });

  const errorImage = require("../assets/images/redx.png");
  const successImage = require("../assets/images/greencheck.png");
  let statusImage;
  if (props.error) {
    statusImage = errorImage;
  } else if (props.success) {
    statusImage = successImage;
  }
  return (
    <View>
      <View style={styles.textInputContainer}>
        <Image style={styles.image} source={props.image} />
        <TextInput
          style={styles.textInput}
          onBlur={props.onBlur}
          onChangeText={props.onChangeText}
          placeholder={props.placeholder}
          value={props.value}
          secureTextEntry={props.secureTextEntry}
        />
        <Image style={styles.statusImage} source={statusImage} />
      </View>
      <KitText color={Colors.KIT_RED} style={styles.error}>
        {props.error}
      </KitText>
    </View>
  );
}