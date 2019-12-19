import React, { useState, useEffect } from "react";
import ProgressCircle from 'react-native-progress-circle';
import moment from 'moment';
import KitText from "../KitText"

import { getUserId } from "../../utils/auth/auth";
import Colors from "../../constants/Colors";

const diameter = 96;
export default function TimerClock(props) {
  const [openedMoment, setOpenedMoment] = useState(null);
  const [expireMoment, setExpireMoment] = useState(null);
  const [minGiven, setMinGiven] = useState(null);

  useEffect(() => {
    const currentUser = getUserId();
    const openedTimeForUser = props.challenge.opened[currentUser]
    const minsGivenForChallenge = props.challenge.challengeDetails.minGiven;
    if (!minsGivenForChallenge || !openedTimeForUser) return; //Should instead do error handling here, but TimerClock should never be used without passing a challenge to it
    
    setOpenedMoment(moment(openedTimeForUser));
    setExpireMoment(moment(openedTimeForUser).add(minsGivenForChallenge, "minutes")); //The challenge should expire after minGiven minutes after the user has opened the challenge
    setMinGiven(minsGivenForChallenge);
  }, [])

  function calculatePercent() {
    const differenceInMinutes = expireMoment.diff(openedMoment, "minutes");
    return (differenceInMinutes / minGiven) * 100
  }

  function calculateHoursLeft() {
    const currentMoment = moment()
    const differenceInHours = expireMoment.diff(currentMoment, "hours");
    return differenceInHours;
  }

  return (
    (openedMoment && expireMoment && minGiven &&
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
    )
  );
}
