import React from "react";
import { View, Image, StyleSheet, TouchableOpacity } from "react-native";

import Colors from "../../constants/Colors";

import KitText from "../KitText";
import CompletionBar from "./CompletionBar";
import TimerClock from "./TimerClock";

export default function ChallengeTodo(props){
  const styles = StyleSheet.create({
    background: {
      backgroundColor: props.mainColor,
      alignItems: "center", 
      marginVertical: 10,
    },
    mainWrapper: {
      flexDirection: "row",
      alignItems: "center", 
      borderRadius: 10, 
      backgroundColor: Colors.KIT_WHITE, 
      margin: 15, 
      padding: 15, 
      paddingLeft: 30, 
      paddingRight: 30,
    },
    textWrapper: {
      flex: 3, 
      flexDirection: "column", 
      marginTop: 5, 
      marginBottom: 5,
    },
    topRow: {flexDirection: "row"}, teamIcon: {maxWidth: 25, maxHeight: 25,},
    midRow: {marginTop: 5, marginBottom: 5,},
    botRow: {marginTop: 5},
    leftText: {textAlign: "left"},
    clockWrapper: {
      flex: 2, 
      alignItems: "flex-end"
    },
  });

  return (
    <View style={styles.background}>  
      <TouchableOpacity style={styles.mainWrapper} onPress={() => {props.onPress()}}>
        <View style={styles.textWrapper}>
          <View style={styles.topRow}>
            <Image style={styles.teamIcon} source={require("../../assets/images/specificTeamsPage/bunny.png")}/>
            <KitText size={20} color={Colors.KIT_DARKEST_BLACK} fontWeight={"extrabold"}>{props.challenge.teamName}</KitText>
          </View>

          <View style={styles.midRow}>
            <KitText style={styles.leftText} size={12} color={Colors.KIT_DARKEST_BLACK} fontWeight={"semibold"}>Challenge: {props.challenge.challengeDetails.title}</KitText>
            <KitText style={styles.leftText} size={12} color={Colors.KIT_DARKEST_BLACK}>{props.challenge.challengeDetails.description}</KitText>
          </View>

          <View style={styles.botRow}>
            <CompletionBar numCompleted={props.challenge.submissions ? props.challenge.submissions.length : 0} numInTeam={props.challenge.users ? props.challenge.users.length : 0} mainColor={props.mainColor}/>
          </View>
        </View>
        <View style={styles.clockWrapper}>
          <TimerClock/>
        </View>
      </TouchableOpacity>
    </View>
  );
}