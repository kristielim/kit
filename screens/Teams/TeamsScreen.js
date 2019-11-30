import React, { useState } from "react";
import { Image, StyleSheet, TouchableOpacity, View } from "react-native";

import KitText from "../../components/KitText";
import { MyTeams } from "../../components/team-codes/MyTeams";
import Colors from "../../constants/Colors";
import FontStyles from "../../constants/FontStyles";
import KitButtonSupreme from "../../components/KitButtonSupreme";

export default function TeamsScreen(props) {
  const [showAddTeamMenu, setShowAddTeamMenu] = useState(false);

  const plusImage = require("../../assets/images/plus.png");
  const personImage = require("../../assets/images/person.png");

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          setShowAddTeamMenu(!showAddTeamMenu);
        }}
        style={styles.addTeam}
      >
        <Image source={plusImage} />
        <KitText style={styles.addTeamText} color={Colors.KIT_GREEN} size={24}>
          Add Team
        </KitText>
      </TouchableOpacity>

      <View style={styles.mainBody}>
        {showAddTeamMenu && (
          <View style={styles.addTeamMenu}>
            <KitButtonSupreme
              style={styles.button}
              image={personImage}
              type="outlined"
              color={Colors.KIT_ORANGE}
              onPress={() => {
                props.navigation.navigate("Join");
              }}
            >
              JOIN TEAM
            </KitButtonSupreme>
            <KitButtonSupreme
              style={styles.button}
              image={plusImage}
              type="outlined"
              color={Colors.KIT_GREEN}
              onPress={() => {
                props.navigation.navigate("Create");
              }}
            >
              CREATE NEW TEAM
            </KitButtonSupreme>
          </View>
        )}
        <MyTeams />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
    margin: 8
  },
  addTeamText: {
    paddingLeft: 8,
    paddingTop: 8
    // Kristie: not sure why but there is some padding on the bottom by default,
    // added this paddingTop to balance
  }
});
