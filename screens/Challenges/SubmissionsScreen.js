import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import KitText from "../../components/KitText";

export default function SubmissionsScreen() {
  return (
    <ScrollView>
      <KitText style={styles.label} fontWeight="medium" size={24}>
        Today
      </KitText>
      <KitText style={styles.label} fontWeight="medium" size={24}>
        Yesterday
      </KitText>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  label: { margin: 36, textAlign: "left" }
});
