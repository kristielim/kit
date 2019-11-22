import React from "react";
import { View, StyleSheet, Image, TouchableOpacity } from "react-native";
import Colors from "../constants/Colors";

export default function KitBackgroundScreen(props) {
  return (
    <View style={styles.background}>
      <View style={styles.main}>
        <TouchableOpacity onPress={props.onPressBack}>
          <Image
            style={styles.backButton}
            source={require("../assets/images/arrow.png")}
          />
        </TouchableOpacity>
        {props.children}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: Colors.KIT_GREEN,
    padding: 20
  },
  main: {
    flex: 1,
    borderRadius: 30,
    backgroundColor: Colors.KIT_WHITE,
    padding: 16
  },
  backButton: {
    position: "absolute",
    top: 16,
    left: 16,
    zIndex: 100
  }
});
