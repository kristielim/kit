import * as WebBrowser from "expo-web-browser";
import React from "react";
import FlipComponent from "react-native-flip-component";
import ChallengeCard from "./ChallengeCard";
import RevealChallenge from "./RevealChallenge";
import { StyleSheet, View } from "react-native";
import { openChallenge } from "../utils/db/challenges";

export default class OpenChallengeCard extends React.Component {
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
              onReveal={() => {
                this.props.onReveal();
                this.flip();
              }}
              number={`1/${this.props.numberOfChallenges}`}
              deadline={"24:24:24"}
            />
          }
          backView={
            <ChallengeCard
              onClose={this.props.onClose}
              title={this.props.challengeTitle}
              body={this.props.challengeDescription}
              team={this.props.teamName}
              deadline={"24 hrs"}
            />
          }
          rotateDuration={250}
        />
      </View>
    );
  }
}

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
