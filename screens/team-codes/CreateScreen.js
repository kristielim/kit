import React, { useState } from "react";
import { StyleSheet, TextInput, View } from "react-native";
import KitButton from "../../components/KitButton";
import KitText from "../../components/KitText";
import Colors from "../../constants/Colors";
import FontStyles from "../../constants/FontStyles";
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
      <View style={{ flex: 2, justifyContent: "center" }}>
        {/* Evan TODO: Make this input a separate compo */}
        <TextInput
          style={styles.textInput}
          placeholder="Ex) Team One"
          onChangeText={setTeamName}
          value={teamName}
        />
      </View>

      <View style={{ flex: 4, justifyContent: "flex-start" }}>
        <KitButton
          style={{ button: styles.button }}
          onPress={async () => {
            const teamCode = await createTeam(teamName, "TODO: add userid");
            setTeamCode(teamCode);
          }}
          buttonBackgroundColor={Colors.KIT_GREEN}
          buttonTextColor={Colors.KIT_WHITE}
          buttonFontWeight={FontStyles.FONT_WEIGHT_MEDIUM}
          buttonFontSize={18}
          buttonTextStyle={{}}
        >
          CREATE
        </KitButton>
        <KitText
          style={{}}
          fontWeight={FontStyles.FONT_WEIGHT_BOLD}
          color={Colors.KIT_DARKEST_BLACK}
          size={53}
        >
          {teamCode}
        </KitText>

        <KitButton
          style={{ button: styles.button }}
          onPress={() => alert("pressed!")}
          buttonBackgroundColor={Colors.KIT_WHITE}
          buttonTextColor={Colors.KIT_GREEN}
          buttonFontWeight={FontStyles.FONT_WEIGHT_MEDIUM}
          buttonFontSize={18}
          buttonTextStyle={{}}
        >
          COPY
        </KitButton>
      </View>
    </KitBackgroundScreen>
  );
}

const styles = StyleSheet.create({
  button: {
    width: 203,
    maxHeight: 40,
    marginTop: 5,
    marginBottom: 8,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: Colors.KIT_GREEN
  },
  textInput: {
    backgroundColor: "white",
    width: 268,
    height: 48,
    borderWidth: 2,
    borderColor: Colors.KIT_ORANGE,
    borderRadius: 20,
    paddingLeft: 15,
    marginLeft: "auto",
    marginRight: "auto",
    fontSize: 24,
    color: Colors.KIT_DARK_GREY
  }
});
