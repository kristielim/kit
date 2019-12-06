/* this component shows card that reveals to the user the next challenge w/ deadlines + submission button */
import React from "react";
import { View, StyleSheet, Image, TouchableOpacity } from "react-native";
import Colors from "../constants/Colors";
import KitText from "./KitText";
import KitButtonSupreme from "../components/KitButtonSupreme";

export default function ChallengeCard(props) {
  const styles = StyleSheet.create({
    card: {
      borderRadius: 30,
      width: 320,
      height: 509,
      marginBottom: 40,
      backgroundColor: props.color || Colors.KIT_GREEN,
      alignSelf: "center",
      shadowOffset: { height: 2, width: 2 },
      shadowOpacity: 0.5,
      shadowColor: Colors.KIT_BLACK
    },
    container: {
      padding: 50,
      borderWidth: 0,
      borderColor: Colors.KIT_DARK_ORANGE
    },
    closeButton: {
      position: "absolute",
      top: 30,
      right: 30,
      zIndex: 100
    },
    title: {
      width: "100%",
      textAlign: "center",
      marginTop: 170,
      marginBottom: 10
    },
    body: {
      textAlign: "left",
      marginHorizontal: 28
    },
    info: {
      position: "absolute",
      bottom: 25,
      alignSelf: "center"
    },
    button: {
      position: "absolute",
      bottom: 45,
      alignSelf: "center"
    },
    icon: {
      top: 70,
      alignSelf: "center",
      position: "absolute",
      height: 80,
      width: 80
    }
  });
  return (
    <View style={styles.card}>
      <View>
        <View style={styles.contatiner}>
          <Image
            style={styles.icon}
            source={require("../assets/images/kit-logo.png")}
          />
          <KitText
            style={styles.title}
            size={30}
            color={Colors.KIT_WHITE}
            fontWeight="medium"
          >
            {props.title}
          </KitText>
          <KitText style={styles.body} size={28} color={Colors.KIT_WHITE}>
            {props.body}
          </KitText>
          <TouchableOpacity style={styles.closeButton} onPress={props.flip}>
            <Image source={require("../assets/images/x-mark.png")} />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.button}>
        <KitButtonSupreme
          style={styles.button}
          type={"outlined"}
          width={200}
          height={37}
        >
          SUBMIT NOW
        </KitButtonSupreme>
      </View>
      <View style={styles.info}>
        <KitText size={17} color={Colors.KIT_WHITE} fontCalligraphy={"italic"}>
          Team: {props.team}
        </KitText>
        <KitText size={17} color={Colors.KIT_WHITE} fontWeight={"medium"}>
          Submission Deadline: {props.deadline}
        </KitText>
      </View>
      <View style={styles.container}>{props.children}</View>
    </View>
  );
}
