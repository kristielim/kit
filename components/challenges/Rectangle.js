import React from "react";
import { View } from "react-native";
import Colors from "../../constants/Colors";

export default function Rectangle(props) {
  return (
      <View style={{
        width: 15,
        height: 2,
        backgroundColor: props.filled ? Colors.KIT_LIGHT_ORANGE : "#C4C4C4",
      }} />
  );
}
