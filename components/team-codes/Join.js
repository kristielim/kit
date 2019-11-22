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
import KitText from "../KitText";
import KitButton from "../KitButton";
import Colors from "../../constants/Colors";
import FontStyles from "../../constants/FontStyles";

export function Join(props) {
  const [textValue, setTextValue] = useState("");
  const [teamName, setTeamName] = useState("");
  const [teamFound, setTeamFound] = useState(false);

  return (
    <View>
      <TouchableOpacity onPress={props.back}>
        <Text style={{ color: "#E17327", fontSize: 20, textAlign: "center" }}>
          Back
        </Text>
      </TouchableOpacity>
      <TextInput
        style={{ height: 40, borderColor: "gray", borderWidth: 1 }}
        onChangeText={async text => {
          setTextValue(text);
          if (text.length == 6) {
            const teamId = await getTeamIdFromTeamCode(text);
            console.log("teamid", teamId);
            if (teamId) {
              const team = await getTeam(teamId);
              console.log("team", team);
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
            <KitText>Do you want to join {teamName}?</KitText>
            <TouchableOpacity
              onPress={() => {
                joinTeam(textValue, "TODO: real user").then(() => {
                  setTextValue("");
                  setTeamFound(false);
                });
              }}
            >
              <Text
                style={{ color: "#E17327", fontSize: 20, textAlign: "center" }}
              >
                Join
              </Text>
            </TouchableOpacity>
          </>
        ) : (
          <KitText>Team not found</KitText>
        ))}
    </View>
  );
}
