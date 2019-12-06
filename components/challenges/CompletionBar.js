import React from "react";
import { View } from "react-native";

import Circle from "./Circle";
import Rectangle from "./Rectangle";
import KitText from "../KitText";

import Colors from "../../constants/Colors";

export default function CompletionBar(props){
  const MAX_NUM_USERS_PER_TEAM = props.numInTeam; //This is currently the design, can consider expanding if/when we decide to expand team sizes beyond 5 people

  function renderLine(numCompleted) {
    let line = []
    if (numCompleted > MAX_NUM_USERS_PER_TEAM) return; //EVAN TODO: This should be an error

    for (let i = 0; i < numCompleted; i++) { //Completed
      line.push(<Circle key={"compCirc" + i} filled={true} mainColor={props.mainColor}/>);
      line.push(<Rectangle key={"compRect" + i} filled={true} mainColor={props.mainColor}/>)
    }
    line.pop(); //Remove extra colored Rectangle

    for (let i = numCompleted; i < MAX_NUM_USERS_PER_TEAM; i++) { //Not completed
      if(i != 0) { //Only add the Rectange if it's in between circles
        line.push(<Rectangle key={"nCompRect" + i} filled={false}/>)
      }
      line.push(<Circle key={"nCompCirc" + i} filled={false}/>);
    }
    return line;
  }

  return(
    <View style={{flexDirection: "row", alignItems: "center"}}>
      {renderLine(props.numCompleted)}
      <KitText style={{paddingLeft: 10, paddingTop: 3}} size={12} color={props.mainColor} fontCalligraphy={"italic"}>{props.numCompleted}/{props.numInTeam}</KitText>
    </View>
  );
}
