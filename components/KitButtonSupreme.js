import React from "react";
import { View, StyleSheet, Image, TouchableOpacity } from "react-native";
import Colors from "../constants/Colors";
import KitText from "./KitText";

// Button can either be 'filled' or 'outlined
// Actual correct solution is to have a type checker + documentation but it be like that
export default function KitButtonSupreme(props) {
  let type = props.type || "filled";
  if (props.type !== "filled" && props.type !== "outlined") {
    type = "filled"; //  Use filled if anything other than filled and outlined is passed in
  }
  const styles = StyleSheet.create({
    button: {
      backgroundColor:
        type === "filled" ? props.color || Colors.KIT_GREEN : Colors.KIT_WHITE,
      width: props.width || 220,
      height: 48,
      paddingTop: 8,
      paddingBottom: 8,
      borderRadius: 20,
      borderColor: props.color || Colors.KIT_GREEN,
      borderWidth: type === "outlined" ? 2 : 0,
      justifyContent: "center",
      alignItems: "center"
    },
    textContainer: {
      flexDirection: "row",
      alignItems: "center"
    },
    text: {
      paddingTop: 8,
      marginLeft: 8,
      marginRight: 8
    }
  });
  return (
    <View style={props.style}>
      <TouchableOpacity style={styles.button} onPress={props.onPress}>
        <View style={styles.textContainer}>
          {props.image && <Image source={props.image} />}
          <KitText
            style={styles.text}
            color={
              type === "outlined"
                ? props.color || Colors.KIT_GREEN
                : Colors.KIT_WHITE
            }
            size={18}
          >
            {props.children}
          </KitText>
        </View>
      </TouchableOpacity>
    </View>
  );
}
