import React from "react";
import { View, StyleSheet, Text, Image, TouchableOpacity } from "react-native";
import Colors from "../constants/Colors";
import KitText from "./KitText";

export default function KitButtonSupreme({
  onPress,
  children,
  color,
  image,
  type = "filled"
}) {
  const styles = StyleSheet.create({
    button: {
      backgroundColor:
        type === "filled" ? color || Colors.KIT_Green : Colors.KIT_WHITE,
      width: 268,
      height: 48,
      paddingTop: 8,
      marginTop: 8,
      marginBottom: 8,
      borderRadius: 20,
      borderColor:
        type === "outlined" ? color || Colors.KIT_Green : Colors.KIT_WHITE,
      justifyContent: "center",
      alignItems: "center",
      alignSelf: "center"
    },
    text: {
      color: type === "outlined" ? color || Colors.KIT_Green : Colors.KIT_WHITE,
      fontWeight: "700",
      fontSize: 15,
      textAlign: "center"
    },
    textContainer: {
      alignContent: "center",
      flexDirection: "row"
    }
  });
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <View style={styles.textContainer}>
        {image && <Image source={image} />}
        <KitText
          style={styles.text}
          color={
            type === "outlined" ? color || Colors.KIT_GREEN : Colors.KIT_WHITE
          }
          size={16}
        >
          {children}
        </KitText>
      </View>
    </TouchableOpacity>
  );
}
