import React, { useState, useEffect } from "react";
import { View, StyleSheet, Image } from "react-native";
import { ScrollView } from "react-native";
import moment from "moment";

import KitText from "../../components/KitText";
import OpenChallengeCard from "../../components/OpenChallengeCard";
import ChallengeTodo from "../../components/challenges/ChallengeTodo";

import Colors from "../../constants/Colors";

import {
  getAllAssignedChallenges,
  openChallenge
} from "../../utils/db/challenges";
import { getUserId } from "../../utils/auth/auth";

export default function ToDoScreen() {
  const [openedChallenges, setOpenedChallenges] = useState([]);
  const [unopenedChallenges, setUnopenedChallenges] = useState([]);

  // Challenges in the challenge cards. Considered open right after the open button is pressed.
  const [challengeCards, setChallengeCards] = useState([]);

  function renderTodos() {
    let todos = [];
    let alternator = true;
    for (challenge of openedChallenges) {
      // console.log(challenge)
      todos.push(
        <ChallengeTodo
          key={challenge.teamId}
          challenge={challenge}
          mainColor={alternator ? Colors.KIT_LIGHT_ORANGE : Colors.KIT_GREEN}
          onPress={() => {
            alert("Hello");
          }}
        />
      );
      alternator = !alternator;
    }
    return todos;
  }

  useEffect(() => {
    const currentUser = getUserId();
    getAllAssignedChallenges(currentUser)
      .then(challenges => {
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
      })
      .catch(() => {
        console.log("Error: cannot get challenges for user");
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
