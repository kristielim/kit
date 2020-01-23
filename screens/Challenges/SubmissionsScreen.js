import React, { useState, useEffect } from "react";
import { View, StyleSheet, ScrollView } from "react-native";

import { listenAllAssignedChallenges } from "../../utils/db/challenges";
import { getUserId } from "../../utils/auth/auth";

import ChallengeTodo from "../../components/challenges/ChallengeTodo";

import Colors from "../../constants/Colors";

export default function SubmissionsScreen(props) {
  const [challenges, setChallenges] = useState(null);

  function renderSubmitted() {
    let submitted = [];
    let alternator = true;
    for (challenge of challenges) {
      let hasUserSubmitted = false;
      if(challenge.hasOwnProperty("submissions")){
        // console.log(challenge.submissions.hasOwnProperty(getUserId()))
        hasUserSubmitted = challenge.submissions.hasOwnProperty(getUserId())
      }
      if(hasUserSubmitted){
        submitted.push(
          <ChallengeTodo key={challenge.assignedChallengeId} challenge={challenge} mainColor={(alternator ? Colors.KIT_LIGHT_ORANGE : Colors.KIT_GREEN)} onPress={() => {
            props.navigation.navigate("IndividualChallenge", {challenge})
          }}/>
        );
        alternator = !alternator;
      }
    }
    return submitted;
  }

  useEffect(() => {
    const currentUser = getUserId();
    listenAllAssignedChallenges(currentUser, setChallenges);
  }, []);

  return (
    <ScrollView>
      {challenges && renderSubmitted()}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  label: { margin: 36, textAlign: "left" }
});
