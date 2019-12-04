import React from "react";
import { View, StyleSheet } from "react-native";
import KitText from "../../components/KitText";

export default function SubmissionsScreen() {
  return (
    <View>
      <KitText style={styles.label} fontWeight="medium" size={24}>
        Today
      </KitText>
      <KitText style={styles.label} fontWeight="medium" size={24}>
        Yesterday
      </KitText>
    </View>
  );
}

const styles = StyleSheet.create({
  label: { margin: 36, textAlign: "left" }
});
