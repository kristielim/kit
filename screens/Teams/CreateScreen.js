import React, { useState } from "react";
import { StyleSheet, TextInput, View } from "react-native";
import KitButtonSupreme from "../../components/KitButtonSupreme";
import KitText from "../../components/KitText";
import Colors from "../../constants/Colors";
import FontStyles from "../../constants/FontStyles";
import Fonts from "../../constants/Fonts";
import { createTeam } from "../../utils/db/teams";
import KitBackgroundScreen from "../../components/KitBackgroundScreen";

export default function Create(props) {
  const [teamName, setTeamName] = useState("");
  const [teamCode, setTeamCode] = useState("");

  return (
    <KitBackgroundScreen
      title="Set Team Name:"
      onPressBack={() => {
        props.navigation.navigate("Teams");
      }}
    >
      <View style={styles.textInputContainer}>
        {/* Evan TODO: Make this input a separate compo */}
        <TextInput
          style={styles.textInput}
          placeholder="Ex) Team One"
          onChangeText={setTeamName}
          value={teamName}
        />
        <KitButtonSupreme
          onPress={async () => {
            const teamCode = await createTeam(teamName, "TODO: add userid");
            setTeamCode(teamCode);
          }}
        >
          CREATE
        </KitButtonSupreme>
      </View>
      <View style={styles.teamCodeContainer}>
        {teamCode !== "" && (
          <>
            <KitText
              style={styles.teamCode}
              fontWeight={FontStyles.FONT_WEIGHT_BOLD}
              color={Colors.KIT_DARKEST_BLACK}
              size={53}
            >
              {teamCode}
            </KitText>
            <KitButtonSupreme onPress={() => alert("pressed!")}>
              COPY
            </KitButtonSupreme>
          </>
        )}
      </View>
    </KitBackgroundScreen>
  );
}

const styles = StyleSheet.create({
  textInput: {
    backgroundColor: "white",
    width: 268,
    height: 48,
    borderWidth: 2,
    borderColor: Colors.KIT_GREEN,
    borderRadius: 20,
    paddingLeft: 15,
    marginBottom: 32,
    fontSize: 24,
    fontFamily: Fonts.REGULAR,
    color: Colors.KIT_DARK_GREY,
    textAlign: "center"
  },
  textInputContainer: {
    alignItems: "center",
    flex: 1,
    justifyContent: "center"
  },
  teamCodeContainer: {
    alignItems: "center",
    flex: 1,
    justifyContent: "center"
  },
  teamCode: {
    marginBottom: 32
  }
});
