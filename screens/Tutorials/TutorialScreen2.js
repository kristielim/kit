import React, { useState } from "react";
import { Image, StyleSheet, TouchableHighlight, View } from "react-native";
import KitText from "../../components/KitText";
import Colors from "../../constants/Colors";
import KitButtonSupreme from "../../components/KitButtonSupreme";
import SignupProgressBar from "../../components/SignupProgressBar";

export default function Tutorial2Screen(props) {
  const { navigation } = props;
  const kitglobeImage = require("../../assets/images/tutorial2.png");

  return (
    <View style={styles.container}>
      <TouchableHighlight 
      onPress = {() => {navigation.navigate("Tutorial3")}}
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
            Challenges
          </KitText>
          <KitText
            style={styles.text} 
            color={Colors.KIT_BLACK}
            size={16}
          >
            Kit will assign teams {"\n"}time-sensitive challenges to encourage you to connect.
          </KitText>
        </View>
        <View style={styles.imageContainer}>
        <Image source={kitglobeImage}
                style ={{height: 175}}
                resizeMode = "contain"
        />
        </View>
        <View style={styles.textContainer}>
          <KitText
            style={styles.text} 
            color={Colors.KIT_BLACK}
            size={16}>
            But watch out! These challenges will disappear if not opened on time.
          </KitText>
        </View>
        <View style={styles.challengeContainer}>
        <SignupProgressBar currentStage={2} numStages={4} mainColor={"#569684"}/>
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
    alignItems: "center"
  },
  card: {
    borderRadius: 30,
    width: 320,
    height: 509,
    backgroundColor: Colors.KIT_WHITE,
    alignSelf: "center",
    shadowOffset: { height: 2, width: 2 },
    shadowOpacity: 0.5,
    shadowColor: Colors.KIT_BLACK
  }
});
