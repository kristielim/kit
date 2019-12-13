import React, { useState } from "react";
import { Image, StyleSheet, TouchableHighlight, View } from "react-native";
import KitText from "../../components/KitText";
import Colors from "../../constants/Colors";
import KitButtonSupreme from "../../components/KitButtonSupreme";
import SignupProgressBar from "../../components/SignupProgressBar";

export default function Tutorial1Screen(props) {
  const { navigation } = props;
  const kitglobeImage = require("../../assets/images/kitglobe.png");

  return (
    <View style={styles.container}>
      <TouchableHighlight 
      onPress = {() => {navigation.navigate("Tutorial2")}}
      underlayColor={"transparent"}
      >
        <View style={styles.card}>
        <View style={styles.textContainer}>
          <KitText
            style={styles.text}
            color={Colors.KIT_BLACK}
            size={30}
            fontWeight="bold"
          >
            Welcome to kit!
          </KitText>
          <KitText
            style={styles.text} 
            color={Colors.KIT_BLACK}
            size={16}
          >
            An app to foster long distance friendships.
          </KitText>
        </View>
        <View style={styles.imageContainer}>
        <Image source={kitglobeImage}/>
        </View>
        <View style={styles.challengeContainer}>
        <SignupProgressBar currentStage={1} numStages={4} mainColor={"#569684"}/>
        </View>
      </View>
      </TouchableHighlight>
      <KitButtonSupreme
              style={styles.button}
              color={Colors.KIT_ORANGE}
              backgroundColor={Colors.KIT_ORANGE}
              onPress={() => {
                props.navigation.navigate("SignUp");
              }}
            >
                SIGN UP
        </KitButtonSupreme>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 75,
    backgroundColor: Colors.KIT_WHITE
  },
  header: {
    paddingTop: 6,
    paddingBottom: 6
  },
  mainBody: {
    flex: 1,
    backgroundColor: Colors.KIT_WHITE
  },
  addTeam: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: 32,
    paddingTop: 8,
    paddingBottom: 8
  },
  addTeamMenu: {
    display: "flex",
    flexDirection: "column",
    height: 168,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Colors.KIT_GREEN
  },
  button: {
    margin: 50
  },
  textContainer: {
    margin: 32,
    width: 221
  },
  text: {
    textAlign: "left"
  },
  imageContainer: {
    alignItems: "center", 
  },
  challengeContainer: {
    margin: 50,
    alignItems: "center"
  },
  card: {
    borderRadius: 30,
    width: 320,
    height: 509,
    marginBottom: 40,
    backgroundColor: Colors.KIT_WHITE,
    alignSelf: "center",
    shadowOffset: { height: 2, width: 2 },
    shadowOpacity: 0.5,
    shadowColor: Colors.KIT_BLACK
  }
});
