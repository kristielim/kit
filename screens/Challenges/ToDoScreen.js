import React, { useState, useEffect } from "react";
import { View, StyleSheet, Image } from "react-native";
import { ScrollView } from "react-native";
import moment from "moment";

import KitText from "../../components/KitText";
import OpenChallengeCard from "../../components/OpenChallengeCard";
import ChallengeTodo from "../../components/challenges/ChallengeTodo";

import Colors from "../../constants/Colors";

import {
  listenAllAssignedChallenges,
  openChallenge
} from "../../utils/db/challenges";
import { getUserId } from "../../utils/auth/auth";

export default function ToDoScreen(props) {
  const [openedChallenges, setOpenedChallenges] = useState([]);
  const [unopenedChallenges, setUnopenedChallenges] = useState([]);

  // Challenges in the challenge cards. Considered open right after the open button is pressed.
  const [challengeCards, setChallengeCards] = useState([]);

  function renderTodos() {
    let todos = [];
    let alternator = true;
    console.log("\n\n\nEntered renderTodos")
    // console.log(openedChallenges)
    for (challenge of openedChallenges) {
      console.log(challenge)
      let hasUserSubmitted = false;
      if(challenge.hasOwnProperty("submissions")){
        // console.log(challenge.submissions.hasOwnProperty(getUserId()))
        hasUserSubmitted = challenge.submissions.hasOwnProperty(getUserId())
      }
      if(!hasUserSubmitted){
        console.log("^rendering this todo\n\n")
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
        );
        alternator = !alternator;
      }
    }
    console.log(todos)
    return todos;
  }

  useEffect(() => {
    const currentUser = getUserId();
    listenAllAssignedChallenges(currentUser, challenges => {
      const openedChallenges = [];
      const unopenedChallenges = [];
      // Filter opened and unopened challenges
      for (const challenge of challenges) {
        let opened = false;
        if (challenge.hasOwnProperty("opened")) {
          const openedUserObjects = challenge.opened;
          for (const openedUser of Object.keys(openedUserObjects)) {
            if (openedUser === currentUser) {
              opened = true;
              break;
            }
          }
        }
        if (opened) {
          openedChallenges.push(challenge);
        } else {
          unopenedChallenges.push(challenge);
        }
      }
      setOpenedChallenges(openedChallenges);
      setUnopenedChallenges(unopenedChallenges);
      setChallengeCards(unopenedChallenges);
    });
  }, []);

  const getTimeLeftInMilliseconds = assignedTime => {
    // Users will have 24 hours from time of assignment in order to open the challenge
    // This allows friends in different time zones to fairly submit challenges
    const TIME_TO_OPEN = 86400000; // 24 hours in seconds
    const currTime = moment().valueOf(); // Gets unix time in milliseconds
    return assignedTime + TIME_TO_OPEN - currTime;
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        {challengeCards.length !== 0 && (
          <View style={styles.cardContainer}>
            {challengeCards.map((challenge, index) => (
              <View key={index} style={styles.card}>
                <OpenChallengeCard
                  assignedChallengeId={challenge.assignedChallengeId}
                  numberOfChallenges={challengeCards.length}
                  challengeTitle={challenge.challengeDetails.title}
                  challengeDescription={challenge.challengeDetails.description}
                  teamName={challenge.teamName}
                  timeLeftInMilliseconds={getTimeLeftInMilliseconds(
                    challenge.assignedTime
                  )}
                  onReveal={() => {
                    openChallenge(challenge.assignedChallengeId, getUserId());
                  }}
                  onClose={() => {
                    // Remove this card from the list of challengeCards
                    setChallengeCards(
                      challengeCards.filter((card, i) => i !== index)
                    );
                  }}
                />
              </View>
            ))}
          </View>
        )}
        <View>
          <KitText style={styles.label} fontWeight="medium" size={24}>
            To Do
          </KitText>
          {openedChallenges.length > 0 && renderTodos()}
        </View>
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
  },
  card: {
    position: "absolute"
  },
  cardContainer: {
    alignItems: "center",
    height: 540 // based off of card size but shouldn't be hard coded
  }
});
