import React from "react";
import { View, StyleSheet, Image } from "react-native";
import KitText from "../../components/KitText";
import ChallengesScreen from "../ChallengesScreen";
import Colors from "../../constants/Colors";
import Fonts from "../../constants/Fonts";
import { ScrollView } from "react-native";

export default function ToDoScreen() {
  return (
    <ScrollView>
      <View style={styles.container}>
        <ChallengesScreen />
        <KitText style={styles.label} fontWeight="medium" size={24}>
          To Do
        </KitText>
        <View style={{flexDirection: "row"}}>
          <View style={{flexDirection: "column"}}>
            <View style={{flexDirection: "row"}}>
              <Image style={{maxWidth: 25, maxHeight: 25,}} source={require("../../assets/images/specificTeamsPage/bunny.png")}/>
              <KitText size={20} color={Colors.KIT_DARKEST_BLACK} fontWeight={Fonts.BOLD}>APUSH HOES</KitText>
            </View>

            <View>
              <KitText style={{textAlign: "left"}}>Challenge: Self Portrait</KitText>
              <KitText style={{textAlign: "left"}}>Self Portraits Let out your inner DaVince and make a portrait of your partner! #MonaLisaWho?</KitText>
            </View>

            <View>
              
            </View>
          </View>

          <View>
            {/* This is the timer component */}
            <Image style={{maxWidth: 95, maxHeight: 95,}} source={require("../../assets/images/timer-placeholder.png")}/>
          </View>
        </View>
        <KitText>add challenge cards here yaga yee haw</KitText>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  label: { margin: 36, textAlign: "left" },
  container: {
    paddingTop: 10,
    flex: 1,
    backgroundColor: Colors.KIT_WHITE
  }
});
