import React from "react";
import { View, StyleSheet, Image } from "react-native";
import { ScrollView } from "react-native";

import KitText from "../../components/KitText";
import ChallengesScreen from "../ChallengesScreen";
import ChallengeTodo from "../../components/challenges/ChallengeTodo";

import Colors from "../../constants/Colors";
import Fonts from "../../constants/Fonts";

export default function ToDoScreen() {
  return (
    <ScrollView>
      <View style={styles.container}>
        <ChallengesScreen />
        <KitText style={styles.label} fontWeight="medium" size={24}>
          To Do
        </KitText>
        <ChallengeTodo/>
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
