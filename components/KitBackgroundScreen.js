import React from "react";
import { View, StyleSheet, Image, TouchableOpacity } from "react-native";
import Colors from "../constants/Colors";
import KitText from "./KitText";

export default function KitBackgroundScreen(props) {
  const styles = StyleSheet.create({
    background: {
      flex: 1,
      backgroundColor: props.color || Colors.KIT_GREEN,
      padding: 20
    },
    main: {
      flex: 1,
      borderRadius: 30,
      backgroundColor: Colors.KIT_WHITE
    },
    container: {
      padding: props.padding || 16,
      flex: 1
    },
    backButton: {
      position: "absolute",
      top: 16,
      left: 16,
      zIndex: 100
    },
    title: {
      width: "100%",
      textAlign: "center",
      padding: props.padding || 16,
      paddingTop: 16
    },
    number: {
      position: "absolute",
      top: 20,
      right: 20,
      zIndex: 100
    }
  });
  return (
    <View style={styles.background}>
      <View style={styles.main}>
        <View>
          <View style={styles.number}>
            <KitText color={Colors.KIT_BLACK} size={12}>
              {props.number}
            </KitText>
          </View>
          <KitText style={styles.title} size={26}>
            {props.title}
          </KitText>
          <TouchableOpacity
            style={styles.backButton}
            onPress={props.onPressBack}
          >
            <Image source={require("../assets/images/arrow.png")} />
          </TouchableOpacity>
        </View>
        <View style={styles.container}>{props.children}</View>
      </View>
    </View>
  );
}
