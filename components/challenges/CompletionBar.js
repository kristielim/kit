import React from "react";
import { View } from "react-native";

import Circle from "./Circle";
import Rectangle from "./Rectangle";

export default function CompletionBar(props){
  return(
    <View style={{flexDirection: "row", alignItems: "center"}}>
      <Circle filled={true}/>
        <Rectangle filled={true}/>
      <Circle filled={true}/>
        <Rectangle filled={true}/>
      <Circle filled={true}/>
        <Rectangle filled={false}/>
      <Circle filled={false}/>
        <Rectangle filled={false}/>
      <Circle filled={false}/>
    </View>
  );
}
