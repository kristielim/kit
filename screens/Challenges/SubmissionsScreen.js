import React, { useState, useEffect } from "react";
import { View, StyleSheet, ScrollView } from "react-native";

import KitText from "../../components/KitText";
import ChallengeTodo from "../../components/challenges/ChallengeTodo";

import { getAllAssignedChallenges } from "../../utils/db/challenges";
import { getUserId } from "../../utils/auth/auth";

import Colors from "../../constants/Colors";

export default function SubmissionsScreen(props) {
  const [challenges, setChallenges] = useState([]);
  const [currentUser, setCurrentUser] = useState("");

  function renderTodos() {
    let todos = []
    let alternator = true;
    for (challenge of challenges) {
      if((challenge.submissions && !challenge.submissions[currentUser]) || !challenges.submissions) continue; //If the user has no submission for this challenge, filter it out from Todo
      todos.push(
        <ChallengeTodo key={challenge.teamId} challenge={challenge} mainColor={(alternator ? Colors.KIT_LIGHT_ORANGE : Colors.KIT_GREEN)} onPress={() => {
          props.navigation.navigate("IndividualChallenge", {challenge: challenge, submission: challenge.submissions[currentUser], currentUser: currentUser})
        }}/>
      )
      alternator = !alternator;
    }
    return todos
  }

  useEffect(() => {
    currUser = getUserId();
    setCurrentUser(currUser);
    getAllAssignedChallenges(currUser).then(challenges => {
      setChallenges(challenges)
    })
  }, []);

  return (
    <ScrollView>
      <View style={styles.container}>
        {challenges.length > 0 && renderTodos()}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  label: { margin: 36, textAlign: "left" }
});
