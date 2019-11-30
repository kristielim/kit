/* Use this button for any round buttons, either filled or outlined
If you want text that acts as a button, do not use KitButtonSupreme.
Use KitText wrapped by TouchableOpacity instead */

import React from "react";
import { View, StyleSheet, Image, TouchableOpacity } from "react-native";
import Colors from "../constants/Colors";
import KitText from "./KitText";

export default function KitButtonSupreme({
  onPress,
  children,
  color,
  image,
  style,
  width,
  height,
  type = "filled"
}) {
  const styles = StyleSheet.create({
    button: {
      backgroundColor:
        type === "filled" ? color || Colors.KIT_GREEN : Colors.KIT_WHITE,
      width: width || 268,
      height: 48,
      height: height || 48,
      borderRadius: 20,
      borderColor:
        type === "outlined" ? color || Colors.KIT_Green : Colors.KIT_WHITE,
      justifyContent: "center",
      alignItems: "center",
      alignSelf: "center"
    },
    text: {
      textAlign: "center"
    },
    text: {
      textAlign: "center",
      paddingTop: 8
    },
    textContainer: {
      alignItems: "center",
      flexDirection: "row"
    },
    image: {
      marginRight: 10
    }
  });
  return (
    <View style={style}>
      <TouchableOpacity style={styles.button} onPress={onPress}>
        <View style={styles.textContainer}>
          {image && <Image source={image} style={styles.image} />}
          <KitText
            style={styles.text}
            color={
              type === "outlined" ? color || Colors.KIT_GREEN : Colors.KIT_WHITE
            }
            size={16}
            fontWeight="medium"
          >
            {children}
          </KitText>
        </View>
      </TouchableOpacity>
    </View>
  );
}
