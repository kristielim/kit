import React from "react";
import { View } from "react-native";

import Colors from "../../constants/Colors";

import KitText from "../KitText"
const diameter = 95;
export default function TimerClock(props) {
  return (
    <View style={{
      width: diameter,
      height: diameter,
      borderRadius: diameter/2,
      borderColor: Colors.KIT_RED,
      borderWidth: 3,
      backgroundColor: Colors.KIT_LIGHT_GREY,
      paddingTop: 19, //Hacky as hell but only way to get text centered
    }}>
      <KitText size={48} color={Colors.KIT_BLACK} fontWeight={"extrabold"}>23</KitText>
    </View>
  );
}
