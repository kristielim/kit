import React from "react";
import { View } from "react-native";
import ProgressCircle from 'react-native-progress-circle';

import Colors from "../../constants/Colors";

import { getUserId } from "../../utils/auth/auth";

import KitText from "../KitText"
const diameter = 96;
export default function TimerClock(props) {
  function calculatePercent() {
    const minutesGiven = props.challenge.challengeDetails.minGiven;
    const opened = props.challenge.opened || null; //In theory we should never pass an assignedChallenge to the TimerClock with the user not in the submissions array

    if (!opened) return 35; //EVAN TODO: this should be an error
    const currentUser = getUserId();
    const timeOpened = opened[currentUser]
    const currentTime = new Date().getTime() / 1000; //Adjusting to seconds
  
    // console.log((currentTime - timeOpened)/60)
    // console.log((currentTime - timeOpened) / (minutesGiven * 60))
    return (currentTime - timeOpened) / (minutesGiven * 60) * 100; //Converting minutes to seconds, then converting decimal to percent
  }

  function calculateHoursLeft() {
    const hourGiven = props.challenge.challengeDetails.minGiven / 60;
    const opened = props.challenge.opened || null; //In theory we should never pass an assignedChallenge to the TimerClock with the user not in the submissions array

    if (!opened) return 23; //EVAN TODO: this should be an error
    const currentUser = getUserId();
    const timeOpened = opened[currentUser]
    const currentTime = new Date().getTime() / 1000; //Adjusting to seconds

    return Math.trunc(hourGiven - ((currentTime - timeOpened) / (60*60)))
  }
  return (
    <ProgressCircle
      containerStyle={{
        paddingTop: 19,
      }}
      percent={calculatePercent()}
      radius={diameter/2}
      borderWidth={3}
      color={Colors.KIT_RED}
      shadowColor={Colors.KIT_WHITE}
      bgColor={Colors.KIT_LIGHT_GREY}
    >
      <KitText size={48} color={Colors.KIT_BLACK} fontWeight={"extrabold"}>{calculateHoursLeft()}</KitText>
    </ProgressCircle>
  );
}
