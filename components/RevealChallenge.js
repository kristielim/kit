/* this component shows card that asks the user to reveal the next challenge */
import React from "react";
import { View, StyleSheet, Image } from "react-native";
import Colors from "../constants/Colors";
import KitText from "./KitText";
import KitButtonSupreme from "../components/KitButtonSupreme";

export default function RevealChallenge(props) {
  const styles = StyleSheet.create({
    card: {
      borderRadius: 30,
      width: 320,
      height: 509,
      marginBottom: 40,
      backgroundColor: props.color || Colors.KIT_LIGHT_GREY,
      shadowOffset: { height: 2, width: 2 },
      shadowOpacity: 0.5,
      shadowColor: Colors.KIT_BLACK,
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
      alignSelf: "center",
      marginHorizontal: 40
    },
    button: {
      position: "absolute",
      bottom: 40,
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
      <View style={styles.contatiner}>
        <View>
          <Image
            style={styles.icon}
            source={require("../assets/images/kit-logo.png")}
          />
          <KitText
            style={styles.title}
            size={50} // size 60 works on mobile, but 50 works on simulator
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
      <View style={styles.button}>
        <KitButtonSupreme
          onPress={props.flip}
          width={200}
          height={50}
          color={Colors.KIT_GREEN}
        >
          REVEAL
        </KitButtonSupreme>
      </View>
    </View>
  );
}
