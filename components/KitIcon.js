import React from "react";
import { Image } from "react-native";

// Icon
export default function KitIcon(props) {
  let source = props.inactiveImage;
  if (props.focused) {
    source = props.activeImage;
  }
  return <Image source={source} />;
}
