import React from "react";
import { View, StyleSheet } from "react-native";
import KitText from "../../components/KitText";

export default function ToDoScreen() {
  return (
    <View>
      <KitText style={styles.label} fontWeight="medium" size={24}>
        To Do
      </KitText>
    </View>
  );
}

const styles = StyleSheet.create({
  label: { margin: 36, textAlign: "left" }
});
