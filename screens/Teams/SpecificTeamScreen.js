import React, { useState, useEffect } from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import KitBackgroundScreen from "../../components/KitBackgroundScreen";

import KitText from '../../components/KitText';
import KitButton from '../../components/KitButton';

import Colors from '../../constants/Colors';
import FontStyles from '../../constants/FontStyles';

export default function SpecificTeamsScreen(props) {
  const [team, setTeam] = useState(null);

  const placeholderImage = require('../../assets/images/40by40.png')
  const Foxtail = require('../../assets/images/Foxtail.png')
  const Awws = require('../../assets/images/specificTeamsPage/awws.png')
  const Woos = require('../../assets/images/specificTeamsPage/woos.png')
  const Flag = require('../../assets/images/specificTeamsPage/flag.png')
  const Superlatives = require('../../assets/images/specificTeamsPage/supperlative.png')
  const Bunny = require('../../assets/images/specificTeamsPage/bunny.png')

  useEffect(() => { // componentDidMount
    const teamToDisplay = props.navigation.getParam('team')
    setTeam(teamToDisplay);
  }, []);

  return (
    team && 
    // EVAN TODO: use navigation.back instead of specific 
    <KitBackgroundScreen color={Colors.KIT_ORANGE} title={team.name} onPressBack={() => {props.navigation.navigate("Teams")}}> 
      <View style={styles.inner}>
          <View style={styles.topBar}>
            <Image source={Bunny}/>
          </View>
          <View style={styles.midBar}>
            <View style={styles.midBarSub}>
              <View style={styles.row}>
                <KitText size={18} color={"#848383"}>49</KitText>
                <Image source={Awws}/>
              </View>
              <View style={styles.row}>
                <KitText size={18} color={"#848383"}>26</KitText>
                <Image source={Woos}/>
              </View>
            </View>

            <View style={styles.midBarSub}>
              <View style={styles.numCompleted}>
                <Image source={Foxtail}/>
                <KitText size={48} fontWeight={FontStyles.FONT_WEIGHT_SEMIBOLD} style={{paddingTop: 6}}>12</KitText>
              </View>
              <View>
                <KitText size={14} color={Colors.KIT_DARKEST_BLACK}>challenges</KitText>
                <KitText size={14} color={Colors.KIT_DARKEST_BLACK}>completed</KitText>
              </View>
            </View>

            <View style={styles.midBarSub}>
              <Image source={Flag} style={{alignSelf: "center"}}/>
              <KitText size={12} color={"#848383"}>created October 10, 2019</KitText>
            </View>
          </View>

          <View style={styles.botBar}>
            <View style={[styles.superlatives, {paddingTop: 15}]}>
              <Image source={Superlatives} />
              <KitText size={10} color={Colors.KIT_DARKEST_BLACK}>◆ most wooed ◆</KitText>
            </View>
            <View style={styles.superlatives}>
              <Image source={Superlatives} />
              <KitText size={10} color={Colors.KIT_DARKEST_BLACK}>◆ most awwed ◆</KitText>
            </View>
            <View style={[styles.superlatives, {paddingTop: 15}]}>
              <Image source={Superlatives} />
              <KitText size={10} color={Colors.KIT_DARKEST_BLACK}>◆ most booed ◆</KitText>
            </View>
          </View>

          <View style={styles.pastChallengeWrapper}>
            <KitText style={{alignSelf: 'flex-start'}} size={18}>Past Challenges</KitText>
            
            <View style={styles.pastChallengeCardWrapper}>
              <KitText style={styles.pastChallengeDate} color={Colors.KIT_DARK_GREY}>November 10, 2019</KitText>
              <View style={styles.pastChallengeCard}>
                <View style={styles.pastChallengeText}>
                  <KitText color={Colors.KIT_WHITE} fontWeight={FontStyles.FONT_WEIGHT_BOLD}>Self Portraits</KitText>
                  <KitText color={Colors.KIT_WHITE}>Let out your inner DaVince and make a portrait of your ...more</KitText>
                </View>
                <Image source={placeholderImage} />
              </View>
            </View>

            <View style={styles.pastChallengeCardWrapper}>
              <KitText style={styles.pastChallengeDate} color={Colors.KIT_DARK_GREY}>November 10, 2019</KitText>
              <View style={styles.pastChallengeCard}>
                <View style={styles.pastChallengeText}>
                  <KitText color={Colors.KIT_WHITE} fontWeight={FontStyles.FONT_WEIGHT_BOLD}>Self Portraits</KitText>
                  <KitText color={Colors.KIT_WHITE}>Let out your inner DaVince and make a portrait of your ...more</KitText>
                </View>
                <Image source={placeholderImage} />
              </View>
            </View>
          </View>
        </View>
    </KitBackgroundScreen>
  );
}

const styles = StyleSheet.create({
  inner: {
    flex: 1,
    backgroundColor: Colors.KIT_WHITE,
    borderRadius: 10,
    margin: 15,
  },
  topBar: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    // borderWidth: 1,
  },
  midBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  midBarSub: {
    width: 75,
    justifyContent: "center"
  },
  botBar: {
    marginTop: 25,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  numCompleted: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
  },
  superlatives: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  pastChallengeWrapper: {
    alignItems: 'center',
    alignSelf: 'center',
    maxWidth: 300,
    marginVertical: 50,
  },
  pastChallengeCardWrapper: {
    alignItems: 'center',
    margin: 5,
  },
  pastChallengeDate: {
    alignSelf: 'flex-end',
  },
  pastChallengeCard: {
    display: 'flex',
    flexDirection: 'row',
    // justifyContent: 'space-between',
    borderRadius: 10,
    padding: 10,
    backgroundColor: Colors.KIT_GREEN
  },
  pastChallengeText: {
    flexDirection: 'column',
    alignItems: "flex-start",
  },
  row:{
    flexDirection: "row",
    alignSelf: "center",
  }
});
