import React from "react";
import { View, Image } from "react-native";

import Colors from "../../constants/Colors";

import KitText from "../KitText";
import CompletionBar from "./CompletionBar";
import TimerClock from "./TimerClock";

export default function ChallengeTodo(props){
  return (
    <View style={{backgroundColor: props.mainColor, alignItems: "center", marginVertical: 10,}}>  
      <View style={{flexDirection: "row", alignItems: "center", borderRadius: 10, backgroundColor: Colors.KIT_WHITE, margin: 15, padding: 15, paddingLeft: 30, paddingRight: 30,}}>
        <View style={{flex: 3, flexDirection: "column", marginTop: 5, marginBottom: 5,}}>
          <View style={{flexDirection: "row"}}>
            <Image style={{maxWidth: 25, maxHeight: 25,}} source={require("../../assets/images/specificTeamsPage/bunny.png")}/>
            <KitText size={20} color={Colors.KIT_DARKEST_BLACK} fontWeight={"extrabold"}>APUSH HOES</KitText>
          </View>

          <View style={{marginTop: 5, marginBottom: 5,}}>
            <KitText style={{textAlign: "left"}} size={12} color={Colors.KIT_DARKEST_BLACK} fontWeight={"semibold"}>Challenge: Self Portrait</KitText>
            <KitText style={{textAlign: "left"}} size={12} color={Colors.KIT_DARKEST_BLACK}>Self Portraits Let out your inner DaVince and make a portrait of your partner! #MonaLisaWho?</KitText>
          </View>

          <View style={{marginTop: 5}}>
            <CompletionBar numCompleted={4} mainColor={props.mainColor}/>
          </View>
        </View>
        <View style={{flex: 2, alignItems: "flex-end"}}>
          <TimerClock/>
        </View>
      </View>
    </View>
  );
}