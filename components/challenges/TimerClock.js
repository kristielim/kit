import React, { useState, useEffect } from "react";
import { View } from "react-native";
import ProgressCircle from 'react-native-progress-circle';
import moment from 'moment';
import KitText from "../KitText"
import Rectangle from "./Rectangle";

import { getUserId } from "../../utils/auth/auth";
import Colors from "../../constants/Colors";

const diameter = 96;
export default function TimerClock(props) {
  const [expireMoment, setExpireMoment] = useState(null);
  const [minGiven, setMinGiven] = useState(null);

  //EVAN TODO: Verify that the math behind all this works, and we don't need to adjust for timezone in some way
  useEffect(() => {
    const currentUser = getUserId();
    const openedTimeForUser = props.challenge.opened[currentUser]
    const minsGivenForChallenge = props.challenge.challengeDetails.minGiven;
    if (!minsGivenForChallenge || !openedTimeForUser) return; //Should instead do error handling here, but TimerClock should never be used without passing a challenge to it
    
    setExpireMoment(moment(openedTimeForUser).add(minsGivenForChallenge, "minutes")); //The challenge should expire after minGiven minutes after the user has opened the challenge
    setMinGiven(minsGivenForChallenge);
  }, [])

  function calculatePercent() {
    const currentMoment = moment()
    const differenceInMinutes = minGiven - expireMoment.diff(currentMoment, "minutes");
    return (differenceInMinutes / minGiven) * 100
  }

  function calculateHoursLeft() {
    const currentMoment = moment()
    const differenceInHours = expireMoment.diff(currentMoment, "hours");
    return differenceInHours;
  }

  return (
    (expireMoment && minGiven &&
      <ProgressCircle
        containerStyle={{
          paddingTop: 35,
        }}
        percent={calculatePercent()}
        radius={diameter/2}
        borderWidth={3}
        color={Colors.KIT_RED}
        shadowColor={Colors.KIT_WHITE}
        bgColor={Colors.KIT_LIGHT_GREY}
      >
        <KitText size={48} color={Colors.KIT_BLACK} fontWeight={"extrabold"}>{calculateHoursLeft()}</KitText>
        {/* EVAN TODO: Figure out a mathematically perfect way of transforming the rectanges rather than the by eye method */}
        <Rectangle key={0} filled={true} mainColor={Colors.KIT_DARK_GREY} length={5} passedStyles={{transform: [{translateY: -60}, {rotate: "90deg"}]}}/>
        <Rectangle key={1} filled={true} mainColor={Colors.KIT_DARK_GREY} length={5} passedStyles={{transform: [{translateY: -55}, {translateX: 20}, {rotate: "-67.5deg"}]}}/>
        <Rectangle key={2} filled={true} mainColor={Colors.KIT_DARK_GREY} length={5} passedStyles={{transform: [{translateY: -45}, {translateX: 30}, {rotate: "-22.5deg"}]}}/>
        <Rectangle key={3} filled={true} mainColor={Colors.KIT_DARK_GREY} length={5} passedStyles={{transform: [{translateY: -30}, {translateX: 37}]}}/>
        <Rectangle key={4} filled={true} mainColor={Colors.KIT_DARK_GREY} length={5} passedStyles={{transform: [{translateY: -13}, {translateX: 35}, {rotate: "20deg"}]}}/>
        <Rectangle key={5} filled={true} mainColor={Colors.KIT_DARK_GREY} length={5} passedStyles={{transform: [{translateY: 0}, {translateX: 20}, {rotate: "55deg"}]}}/>
        <Rectangle key={6} filled={true} mainColor={Colors.KIT_DARK_GREY} length={5} passedStyles={{transform: [{translateY: 5}, {rotate: "-90deg"}]}}/>
        <Rectangle key={7} filled={true} mainColor={Colors.KIT_DARK_GREY} length={5} passedStyles={{transform: [{translateY: -5}, {translateX: -20}, {rotate: "-55deg"}]}}/>
        <Rectangle key={8} filled={true} mainColor={Colors.KIT_DARK_GREY} length={5} passedStyles={{transform: [{translateY: -20}, {translateX: -35}, {rotate: "-20deg"}]}}/>
        <Rectangle key={9} filled={true} mainColor={Colors.KIT_DARK_GREY} length={5} passedStyles={{transform: [{translateY: -42}, {translateX: -38}]}}/>
        <Rectangle key={10} filled={true} mainColor={Colors.KIT_DARK_GREY} length={5} passedStyles={{transform: [{translateY: -60}, {translateX: -32}, {rotate: "25deg"}]}}/>
        <Rectangle key={11} filled={true} mainColor={Colors.KIT_DARK_GREY} length={5} passedStyles={{transform: [{translateY: -75}, {translateX: -20}, {rotate: "67deg"}]}}/>

      </ProgressCircle>
    )
  );
}
