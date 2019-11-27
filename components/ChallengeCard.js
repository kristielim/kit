import React from "react";
import { View, StyleSheet, Image, TouchableOpacity } from "react-native";
import Colors from "../constants/Colors";
import KitText from "./KitText";
import KitButtonSupreme from "../components/KitButtonSupreme";
import CardFlip from "react-native-card-flip";
import RevealChallenge from "./RevealChallenge";
import { MapView } from "expo";
import FlipComponent from "react-native-flip-component";

export default function ChallengeCard(props) {
  const styles = StyleSheet.create({
    card: {
      borderRadius: 30,
      width: 320,
      height: 509,
      marginBottom: 40,
      backgroundColor: props.color || Colors.KIT_GREEN,
      alignSelf: "center"
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
      bottom: 80,
      alignSelf: "center"
    },
    icon: {
      top: 80,
      alignSelf: "center",
      position: "absolute"
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
          <TouchableOpacity
            style={styles.closeButton}
            onPress={() => this.card.flip()}
          >
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
