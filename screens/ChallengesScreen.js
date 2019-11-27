import * as WebBrowser from "expo-web-browser";
import React from "react";
import CardFlip from "react-native-card-flip";
import { MapView } from "expo";
import FlipComponent from "react-native-flip-component";
import ChallengeCard from "../components/ChallengeCard";
import RevealChallenge from "../components/RevealChallenge";
import KitText from "../components/KitText";
import Colors from "../constants/Colors";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from "react-native";

export default function ChallengesScreen() {
  // constructor = props => {
  //   //super(props);
  //   this.state = { isFlipped: false };
  //   this.flip = this.flip.bind(this);
  // };

  // flip = () => {
  //   this.setState({
  //     isFlipped: !this.state.isFlipped
  //   });
  // };
  return (
    <View style={styles.container}>
      <KitText
        style={styles.header}
        size={24}
        fontWeight={"bold"}
        color={Colors.KIT_BLACK}
      >
        Challenges
      </KitText>
      {/* <ChallengeCard
        title={"CHALLENGE"}
        body={"Challenges go here. Have fun!"}
        team={"APUSH HOES"}
        deadline={"24 hrs"}
      ></ChallengeCard> */}
      <RevealChallenge number={"1/5"} deadline={"24:24:24"}></RevealChallenge>
      {/* <CardFlip ref={card => (this.card = card)} duration={400}>
        <RevealChallenge number={"1/5"} deadline={"24:24:24"}></RevealChallenge >
        <ChallengeCard
          title={"CHALLENGE"}
          body={"Challenges go here. Have fun!"}
          team={"APUSH HOES"}
          deadline={"24 hrs"}
        ></ChallengeCard>
      </CardFlip> */}
      {/* <FlipComponent
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
        rotateDuration={300}
      /> */}
    </View>
  );
}

ChallengesScreen.navigationOptions = {
  header: null
};

function DevelopmentModeNotice() {
  if (__DEV__) {
    const learnMoreButton = (
      <Text onPress={handleLearnMorePress} style={styles.helpLinkText}>
        Learn more
      </Text>
    );

    return (
      <Text style={styles.developmentModeText}>
        Development mode is enabled: your app will be slower but you can use
        useful development tools. {learnMoreButton}
      </Text>
    );
  } else {
    return (
      <Text style={styles.developmentModeText}>
        You are not in development mode: your app will run at full speed.
      </Text>
    );
  }
}

function handleLearnMorePress() {
  WebBrowser.openBrowserAsync(
    "https://docs.expo.io/versions/latest/workflow/development-mode/"
  );
}

function handleHelpPress() {
  WebBrowser.openBrowserAsync(
    "https://docs.expo.io/versions/latest/workflow/up-and-running/#cant-see-your-changes"
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  header: {
    paddingTop: 6,
    paddingBottom: 6
  }
});
