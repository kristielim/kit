import React, { useState, useEffect } from "react";
import {
  Image,
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  TextInput
} from "react-native";

import { getTeamsForUserId } from "../../utils/db/teams";
import KitText from "../KitText";
import Color from "../../constants/Colors"
import FontStyles from "../../constants/FontStyles"

const myUserId = "user_id_1"; //EVAN TODO. This is hardcoded for now, just to see if linkup to firebase will work. We can use var userId = firebase.auth().currentUser.uid; later

export function MyTeams(props) {
  const [myTeams, setMyTeam] = useState([]);

  const placeholderImage = require("../../assets/images/40by40.png");

  useEffect(() => { //Component did mount
    getTeamsForUserId(myUserId).then(teams => {
      setMyTeam(teams)
    });
  }, []);
  
  function renderTeams() {
    let components = []
    if (myTeams.length > 0) {
      for (let myTeam of myTeams) {
        // console.log(myTeam)

        //Extract user's names for display
        const teamUsers = myTeam.users.map(user => {
          return user.name
        }).join(", ")

        components.push(
          <TouchableOpacity key={myTeam.code} onPress={()=>{alert('touched')}} style={styles.teamBar}>
              <View style={{flex:4, alignItems: "flex-start"}}>
                <KitText 
                  style={styles.teamName} 
                  color={Color.KIT_WHITE} 
                  fontWeight={FontStyles.FONT_WEIGHT_SEMIBOLD} 
                  fontCalligraphy={FontStyles.FONT_CALLIGRAPHY_NONE} 
                  size={15}>
                    {myTeam.name}
                </KitText>
                <KitText 
                  style={styles.teamUsernames} 
                  color={Color.KIT_WHITE} 
                  fontWeight={FontStyles.FONT_WEIGHT_REGULAR} 
                  fontCalligraphy={FontStyles.FONT_CALLIGRAPHY_NONE} 
                  size={12}>
                    {teamUsers}
                </KitText>
              </View>

              <View style={styles.teamBarIcon}>
                <Image source={placeholderImage}></Image>
              </View>
          </TouchableOpacity>
        )
      }
    } 
    else {
      components.push(
        <KitText key={"No team"} style={{}} size={36}>
          No Teams Yet
        </KitText>
      )
    }
    return components;
  }

  return (
    <View style={{ flex: 1, marginTop: 10 }}>
      {renderTeams()}
    </View>
  );
}

const styles = StyleSheet.create({
  teamBar: {
    flex:1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: 320,
    maxHeight: 74,
    marginLeft: "auto",
    marginRight: "auto",
    marginVertical: 5,
    padding: 15,
    borderRadius: 10,
    backgroundColor: "#D65044" //EVAN TODO: hardcoded until design decision on how team color works
  },
  teamName: {
    paddingBottom: 10
  },
  teamUsernames: {
    lineHeight: 11, 
    textAlign: "left"
  },
  teamBarIcon: {
    flex:1, 
    alignItems: "center", 
    justifyContent: "center"
  }
});
