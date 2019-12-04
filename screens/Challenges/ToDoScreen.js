import React from "react";
import { View, StyleSheet } from "react-native";
import KitText from "../../components/KitText";
import ChallengesScreen from "../ChallengesScreen";
import Colors from "../../constants/Colors";
import { ScrollView } from "react-native";

export default function ToDoScreen() {
  return (
    <ScrollView>
      <View style={styles.container}>
        <ChallengesScreen />
        <KitText style={styles.label} fontWeight="medium" size={24}>
          To Do
        </KitText>
        <KitText>add challenge cards here yaga yee haw</KitText>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  label: { margin: 36, textAlign: "left" },
  container: {
    paddingTop: 10,
    flex: 1,
    backgroundColor: Colors.KIT_WHITE
  }
});
