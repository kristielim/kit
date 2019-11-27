import React from "react";
import { View, StyleSheet, Image, TouchableOpacity } from "react-native";
import Colors from "../constants/Colors";
import KitText from "./KitText";
import KitButtonSupreme from "../components/KitButtonSupreme";
import { MapView } from "expo";
import FlipComponent from "react-native-flip-component";
import CardFlip from "react-native-card-flip";

export default function RevealChallenge(props) {
  const styles = StyleSheet.create({
    card: {
      borderRadius: 30,
      width: 320,
      height: 509,
      marginBottom: 40,
      backgroundColor: props.color || Colors.KIT_LIGHT_GREY,
      alignSelf: "center"
    },
    container: {
      padding: 50,
      borderWidth: 0,
      borderColor: Colors.KIT_DARK_ORANGE
    },
    number: {
      position: "absolute",
      top: 30,
      right: 30,
      zIndex: 100
    },
    title: {
      width: "100%",
      textAlign: "center",
      marginTop: 200,
      marginBottom: 10
    },
    info: {
      position: "absolute",
      top: 25,
      alignSelf: "center"
    },
    button: {
      position: "absolute",
      bottom: 38,
      alignSelf: "center"
    },
    icon: {
      top: 90,
      alignSelf: "center",
      position: "absolute",
      height: 88,
      width: 88
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
            size={50}
            color={Colors.KIT_BLACK}
            fontWeight="medium"
          >
            Ready for your next challenge?
          </KitText>
          <KitText size={14} color={Colors.KIT_BLACK} style={styles.number}>
            {props.number}
          </KitText>
        </View>
      </View>
      <View style={styles.button}>
        <KitButtonSupreme
          style={styles.button}
          width={200}
          height={50}
          color={Colors.KIT_GREEN}
          onPress={() => this.card.flip()}
        >
          REVEAL
        </KitButtonSupreme>
      </View>
      <View style={styles.info}>
        <KitText
          size={17}
          color={Colors.KIT_DARK_GREY}
          fontCalligraphy={"italic"}
        >
          Challenge expires in
        </KitText>
        <KitText size={17} color={Colors.KIT_DARK_GREY} fontWeight={"medium"}>
          {props.deadline}
        </KitText>
      </View>
      <View style={styles.container}>{props.children}</View>
    </View>
  );
}
