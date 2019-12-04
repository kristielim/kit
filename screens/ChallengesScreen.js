import * as WebBrowser from "expo-web-browser";
import React from "react";
import FlipComponent from "react-native-flip-component";
import ChallengeCard from "../components/ChallengeCard";
import RevealChallenge from "../components/RevealChallenge";
import KitText from "../components/KitText";
import Colors from "../constants/Colors";
import { StyleSheet, Text, View } from "react-native";

export default class ChallengesScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isFlipped: false };
    this.flip = this.flip.bind(this);
  }

  flip = () => {
    this.setState({
      isFlipped: !this.state.isFlipped
    });
  };
  render() {
    return (
      <View style={styles.container}>
        <FlipComponent
          isFlipped={this.state.isFlipped}
          frontView={
            <RevealChallenge
              flip={this.flip}
              number={"1/5"}
              deadline={"24:24:24"}
            />
          }
          backView={
            <ChallengeCard
              flip={this.flip}
              title={"CHALLENGE"}
              body={"Challenges go here. Have fun!"}
              team={"APUSH HOES"}
              deadline={"24 hrs"}
            />
          }
          rotateDuration={250}
        />
      </View>
    );
  }
}

ChallengesScreen.navigationOptions = {
  header: null
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignContent: "center",
    alignSelf: "center"
  },
  header: {
    paddingTop: 30,
    paddingBottom: 50
  }
});
