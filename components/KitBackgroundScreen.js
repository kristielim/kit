import React from "react";
import { View, StyleSheet, Image, TouchableOpacity } from "react-native";
import Colors from "../constants/Colors";
import KitText from "./KitText";

export default function KitBackgroundScreen(props) {
  return (
    <View style={styles.background}>
      <View style={styles.main}>
        <View>
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
  },
  container: {
    padding: 16,
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
    padding: 16
  }
});
