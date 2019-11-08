import React, { useState } from 'react';
import {
  Button,
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import KitText from '../../components/KitText';
import KitButton from '../../components/KitButton';
import { MainTeamComponent } from '../../components/team-codes/MainTeamComponent';
import { MyTeams } from '../../components/team-codes/MyTeams';
import { AuthSession } from 'expo';

export default function TeamsScreen() {
  const [showAddTeamMenu, setShowAddTeamMenu] = useState(false);

  const placeholderImage = require('../../assets/images/40by40.png')

  return (
    <View style={styles.container}>
      <KitText style={{paddingTop: 10, paddingBottom: 10}} size={24} fontWeight={"bold"} color={"black"}>My Teams</KitText>

      <KitButton style={{button: {maxHeight: 50, marginLeft: 15, justifyContent: "flex-start"}}} onPress={() => {setShowAddTeamMenu(!showAddTeamMenu)}} buttonTextColor={"#569684"} buttonFontWeight={"regular"} buttonFontSize={24} buttonTextStyle={{}} buttonBackgroundColor={"#FFFFFF"} image={placeholderImage}>Add Team</KitButton>

      <View style={styles.mainBody}>
        {showAddTeamMenu && <MainTeamComponent />}
        <MyTeams />
      </View>
    
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  header: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  logoText: {
    fontFamily: 'poligon-black-bold', //EVAN TODO: Design hand-off
    fontSize: 35,
    // lineHeight: 24,
  },
  logo: {
    width: 100,
    height: 80,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },
  mainBody: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
});