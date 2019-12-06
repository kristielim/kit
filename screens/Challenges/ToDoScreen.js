import React, { useState, useEffect } from "react";
import { View, StyleSheet, Image } from "react-native";
import { ScrollView } from "react-native";

import KitText from "../../components/KitText";
import ChallengesScreen from "../ChallengesScreen";
import ChallengeTodo from "../../components/challenges/ChallengeTodo";

import Colors from "../../constants/Colors";
import Fonts from "../../constants/Fonts";

import { getAllAssignedChallenges } from "../../utils/db/challenges";
import { getUserId } from "../../utils/auth/auth";

export default function ToDoScreen(props) {
  const [challenges, setChallenges] = useState([]);
  const [currentUser, setCurrentUser] = useState("");

  function renderTodos() {
    let todos = []
    let alternator = true;
    for (challenge of challenges) {
      console.log(challenge.assignedChallengeId)
      if(challenge.submissions && challenge.submissions[currentUser]) continue; //If the user has a submission for this challenge, filter it out from Todo
      
      let screentoNav;
      if(challenge.challengeDetails.mediaType === "STRING"){
        screentoNav = "UploadText";
      }
      else if(challenge.challengeDetails.mediaType === "IMAGE"){
        screentoNav = "UploadImage";
      }
      else{
        //Do some error handling
      }
      todos.push(
        <ChallengeTodo key={challenge.assignedChallengeId} challenge={challenge} mainColor={(alternator ? Colors.KIT_LIGHT_ORANGE : Colors.KIT_GREEN)} onPress={() => {
          props.navigation.navigate(screentoNav, {challenge})
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
        <ChallengesScreen />
        <KitText style={styles.label} fontWeight="medium" size={24}>
          To Do
        </KitText>
        {challenges.length > 0 && renderTodos()}
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
