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
import { Circle, Path } from 'react-native-svg';

import KitText from '../../components/KitText';
import KitButton from '../../components/KitButton';
import KitSvg from '../../components/KitSvg';
import { MainTeamComponent } from '../../components/team-codes/MainTeamComponent';
import { MyTeams } from '../../components/team-codes/MyTeams';
import { AuthSession } from 'expo';
import Colors from '../../constants/Colors';
import FontStyles from '../../constants/FontStyles';

export default function TeamsScreen() {
  const [showAddTeamMenu, setShowAddTeamMenu] = useState(false);

  return (
    <View style={styles.container}>
      <KitText 
        style={styles.header} 
        size={24} 
        fontWeight={FontStyles.FONT_WEIGHT_BOLD} 
        color={Colors.KIT_BLACK}>
          My Teams
      </KitText>

      <KitButton 
        style={{button: styles.addTeamButton}} 
        onPress={() => {setShowAddTeamMenu(!showAddTeamMenu)}} 
        buttonTextColor={Colors.KIT_GREEN} 
        buttonFontWeight={FontStyles.FONT_WEIGHT_REGULAR} 
        buttonFontSize={24} 
        buttonTextStyle={{}} 
        buttonBackgroundColor={Colors.KIT_WHITE}>
          <KitSvg width={16} height={16} scale={2}>
            <Path d="M0 5.622h16v4.756H0V5.622z" fill="#569684" />
            <Path d="M5.622 16V0h4.756v16H5.622z" fill="#569684" />
          </KitSvg>
          Add Team
      </KitButton>

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
    backgroundColor: Colors.KIT_WHITE,
  },
  header: {
    paddingTop: 10, 
    paddingBottom: 10
  },
  mainBody: {
    flex: 1,
    backgroundColor: Colors.KIT_WHITE,
  },
  addTeamButton: {
    maxHeight: 50,
    marginLeft: 15, 
    justifyContent: "flex-start"
  }
});