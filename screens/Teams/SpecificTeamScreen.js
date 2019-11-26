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


import KitText from '../../components/KitText';
import KitButton from '../../components/KitButton';

import Colors from '../../constants/Colors';
import FontStyles from '../../constants/FontStyles';

export default function SpecificTeamsScreen(props) {
  const [team, setTeam] = useState(null);
  const placeholderImage = require('../../assets/images/40by40.png')
  const Foxtail = require('../../assets/images/Foxtail.png')

  useEffect(() => { // componentDidMount
    const teamToDisplay = props.navigation.getParam('team')
    setTeam(teamToDisplay);
  }, []);

  return (
    <View style={styles.background}>
      {
        team && 
        <View style={styles.inner}>
          <View style={styles.topBar}>
            <Image source={placeholderImage}/>
            <Image source={placeholderImage}/>
            <Image source={placeholderImage}/>
          </View>

          <View style={styles.midBar}>
            <View>
              <KitText>49</KitText>
              <KitText>26</KitText>
            </View>

            <View>
              <View style={styles.numCompleted}>
                <Image source={Foxtail}/>
                <KitText size={48} fontWeight={FontStyles.FONT_WEIGHT_BOLD} style={{paddingTop: 6}}>12</KitText>
              </View>
              <View>
                <KitText>challenges</KitText>
                <KitText>completed</KitText>
              </View>
            </View>

            <View>
              <Image source={placeholderImage} />
              <KitText>Created</KitText>
            </View>
          </View>

          <View style={styles.botBar}>
            <View style={styles.superlatives}>
              <Image source={placeholderImage} />
              <KitText>◆ most woahed ◆</KitText>
            </View>
            <View style={styles.superlatives}>
              <Image source={placeholderImage} />
              <KitText>◆ most loved ◆</KitText>
            </View>
            <View style={styles.superlatives}>
              <Image source={placeholderImage} />
              <KitText>◆ most booed ◆</KitText>
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
          <KitText size={50}>{team.name}</KitText>
        </View>
      }
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    backgroundColor: Colors.KIT_ORANGE,
    flex: 1,
  },
  inner: {
    flex: 1,
    backgroundColor: Colors.KIT_WHITE,
    borderRadius: 10,
    margin: 15,
  },
  topBar: {
    flexDirection: 'row',
    margin: 15,
    justifyContent: 'space-between',
  },
  midBar: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  botBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
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
  }
});
