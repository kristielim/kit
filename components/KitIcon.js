import React from "react";
import { View, Image } from "react-native";
import Colors from "../constants/Colors";
import KitText from "../components/KitText";

// Icon
export default function KitIcon(props) {
  let source = props.inactiveImage;
  if (props.focused) {
    source = props.activeImage;
  }
  return (
    <View>
      <Image source={source} />
      <KitText
        color={props.focused ? props.color : Colors.KIT_DARK_GREY}
        size={14}
      >
        {props.label}
      </KitText>
    </View>
  );
}
