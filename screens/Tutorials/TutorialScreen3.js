import React, { useState } from "react";
import { Image, StyleSheet, TouchableHighlight, View } from "react-native";
import KitText from "../../components/KitText";
import Colors from "../../constants/Colors";
import KitButtonSupreme from "../../components/KitButtonSupreme";
import CompletionBar from "../../components/challenges/CompletionBar";

export default function Tutorial3Screen(props) {
  const { navigation } = props;
  const kitglobeImage = require("../../assets/images/tutorial3.png");

  return (
    <View style={styles.container}>
      <TouchableHighlight 
      onPress = { () => {navigation.navigate("Tutorial4");}}
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
            Submissions
          </KitText>
          <KitText
            style={styles.text} 
            color={Colors.KIT_BLACK}
            size={16}
          >
            Every challenge completed earns your team a foxtail.
          </KitText>
        </View>
        <View style={styles.imageContainer}>
        <Image source={kitglobeImage}/>
        </View>
        <View style={styles.textContainer}>
          <KitText
            style={styles.text} 
            color={Colors.KIT_BLACK}
            size={16}
          >
            Review submissions, and {"\n"}react with an “aww” {"\n"}to show your love!
          </KitText>
        </View>
        <View style={styles.challengeContainer}>
        <CompletionBar numCompleted={3} numInTeam={4} mainColor={"#569684"}/>
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
