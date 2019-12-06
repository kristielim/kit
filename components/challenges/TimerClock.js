import React from "react";
import { View } from "react-native";
import ProgressCircle from 'react-native-progress-circle';

import Colors from "../../constants/Colors";

import KitText from "../KitText"
const diameter = 96;
export default function TimerClock(props) {
  function calculatePercent() {
    return 35;
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
      <KitText size={48} color={Colors.KIT_BLACK} fontWeight={"extrabold"}>23</KitText>
    </ProgressCircle>
  );
}
