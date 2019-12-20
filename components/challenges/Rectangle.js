import React from "react";
import { View } from "react-native";
import Colors from "../../constants/Colors";

export default function Rectangle(props) {
  return (
      <View style={[{
        width: props.length || 15,
        height: 2,
        backgroundColor: props.filled ? props.mainColor : "#C4C4C4",
      }, props.passedStyles]} />
  );
}
