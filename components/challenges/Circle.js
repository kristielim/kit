import React from "react";
import { View } from "react-native";
import Colors from "../../constants/Colors";

const diameter = 15;
export default function Circle(props) {
  return (
      <View style={{
        width: diameter,
        height: diameter,
        borderRadius: diameter/2,
        backgroundColor: props.filled ? Colors.KIT_LIGHT_ORANGE : "#C4C4C4",
      }} />
  );
}
