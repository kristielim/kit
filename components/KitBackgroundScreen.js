import React from "react";
import { View, StyleSheet } from "react-native";
import Colors from "../constants/Colors";

export default function KitBackgroundScreen(props) {
  return (
    <View style={styles.background}>
      <View style={styles.main}>{props.children}</View>
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
    backgroundColor: Colors.KIT_WHITE
  }
});
