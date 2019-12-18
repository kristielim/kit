import React from "react";
import { View } from "react-native";

import Circle from "./challenges/Circle";
import Rectangle from "./challenges/Rectangle";

// import Colors from "../../constants/Colors";

export default function CompletionBar(props){
  const NUM_STAGES = props.numStages; //This is currently the design, can consider expanding if/when we decide to expand team sizes beyond 5 people

  function renderLine(currentStage) {
    if (!currentStage) return;
    if (!NUM_STAGES) return;

    let line = []
    for (let i = 0; i < NUM_STAGES; i++) {
      if (i === currentStage - 1) {
        line.push(<Circle key={"stageCirc" + i} filled={true} mainColor={props.mainColor}/>)
      }
      else {
        line.push(<Circle key={"compCirc" + i} filled={false}/>)
      }
      line.push(<Rectangle key={"stageRect" + i} filled={false}/>)
    }
    line.pop()
    return line;
  }

  return(
    <View style={{flexDirection: "row", alignItems: "center"}}>
      {renderLine(props.currentStage)}
      {/* <KitText style={{paddingLeft: 10, paddingTop: 3}} size={12} color={props.mainColor} fontCalligraphy={"italic"}>{props.numCompleted}/{props.numInTeam}</KitText> */}
    </View>
  );
}
