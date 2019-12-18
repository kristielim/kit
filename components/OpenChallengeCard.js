import * as WebBrowser from "expo-web-browser";
import React from "react";
import FlipComponent from "react-native-flip-component";
import ChallengeCard from "./ChallengeCard";
import RevealChallenge from "./RevealChallenge";
import { StyleSheet, View } from "react-native";
import timer from "react-native-timer";
import { millisecondsToString } from "../utils/time";

export default class OpenChallengeCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isFlipped: false,
      timeLeftInMilliseconds: this.props.timeLeftInMilliseconds
    };
    this.flip = this.flip.bind(this);
  }

  componentDidMount() {
    timer.setTimeout(
      this,
      this.props.assignedChallengeId,
      () => {
        // TODO: Kristie replace with modal
        // Also decide what to do if time is up
        alert("Time's up!");
      },
      this.props.timeLeftInMilliseconds
    );
    timer.setInterval(
      this,
      this.props.assignedChallengeId,
      () => {
        this.setState({
          timeLeftInMilliseconds: this.state.timeLeftInMilliseconds - 1000
        });
      },
      1000
    );
  }

  componentWillUnmount() {
    timer.clearTimeout(this);
    timer.clearInterval(this);
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
              deadline={millisecondsToString(this.state.timeLeftInMilliseconds)}
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
