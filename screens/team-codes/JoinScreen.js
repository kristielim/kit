import React, { useState } from "react";
import {
  Image,
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  TextInput
} from "react-native";
import { getTeamIdFromTeamCode, getTeam, joinTeam } from "../../utils/db/teams";
import KitText from "../../components/KitText";
import Colors from "../../constants/Colors";
import FontStyles from "../../constants/FontStyles";
import KitBackgroundScreen from "../../components/KitBackgroundScreen";
import KitButtonSupreme from "../../components/KitButtonSupreme";

export default function JoinScreen(props) {
  const [textValue, setTextValue] = useState("");
  const [teamName, setTeamName] = useState("");
  const [teamFound, setTeamFound] = useState(false);

  return (
    <KitBackgroundScreen
      onPressBack={() => {
        props.navigation.navigate("Teams");
      }}
      title="Enter Code:"
    >
      <View style={styles.container}>
        <TextInput
          style={styles.textInput}
          onChangeText={async text => {
            setTextValue(text);
            if (text.length == 6) {
              const teamId = await getTeamIdFromTeamCode(text);
              if (teamId) {
                const team = await getTeam(teamId);
                setTeamName(team.name);
                setTeamFound(true);
              } else {
                setTeamFound(false);
              }
            }
          }}
          value={textValue}
        />

        {textValue.length >= 6 &&
          (teamFound ? (
            <>
              <KitText
                style={styles.infoMessage}
                fontCalligraphy="italic"
                color={Colors.KIT_GREEN}
              >
                Team Found!
              </KitText>
              <KitText style={styles.joinText} size={26}>
                Do you want to join{" "}
                <KitText fontWeight={FontStyles.FONT_WEIGHT_BOLD} size={26}>
                  {teamName}
                </KitText>
                ?
              </KitText>
              <KitButtonSupreme
                onPress={() => {
                  joinTeam(textValue, "TODO: real user").then(() => {
                    setTextValue("");
                    setTeamFound(false);
                    props.navigation.navigate("Teams");
                  });
                  // TODO: Kristie handle error case
                }}
                style={styles.joinButton}
              >
                JOIN
              </KitButtonSupreme>
            </>
          ) : (
            <KitText
              style={styles.infoMessage}
              fontCalligraphy="italic"
              color={Colors.KIT_RED}
            >
              Invalid Code
            </KitText>
          ))}
      </View>
    </KitBackgroundScreen>
  );
}

const styles = StyleSheet.create({
  backButton: {
    position: "absolute",
    top: 16,
    left: 16,
    zIndex: 100
  },
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center"
  },
  infoMessage: {
    padding: 16
  },
  joinButton: {
    marginTop: 24
  },
  joinText: {
    marginTop: 24
  },
  textInput: {
    borderBottomColor: "black",
    borderBottomWidth: 6,
    marginTop: "20%",
    minWidth: 180,
    textAlign: "center",
    fontWeight: FontStyles.FONT_WEIGHT_BOLD,
    color: Colors.KIT_DARKEST_BLACK,
    fontSize: 53
  }
});
