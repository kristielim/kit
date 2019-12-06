import React from 'react';
import {
  ActivityIndicator,
  Button,
  Clipboard,
  Image,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

import KitText from '../components/KitText';
import KitButtonSupreme  from '../components/KitButtonSupreme';
import Colors from '../constants/Colors';
import FontStyles from '../constants/FontStyles';
import uuid from 'uuid';

export default class ImageScreen extends React.Component{
  state = {
    text: '',
  };

  render() {
    return (
      <View style={styles.container}>

        <View style = {styles.header}>
          <KitText 
          size={30}
          fontWeight={FontStyles.FONT_WEIGHT_BOLD} 
          color={Colors.KIT_BLACK}>
            Challenge Name
        </KitText>
        </View>

        <View style={styles.mainBody}>

          <KitText 
          size={50} 
          fontWeight={FontStyles.FONT_WEIGHT_BOLD} 
          color={Colors.KIT_BLACK}>
            Submitted!
        </KitText>

        <Image 
        source={require("../assets/images/redfoxtailbig.png")}
        />

        <KitText 
          size={17} 
          fontWeight={FontStyles.FONT_WEIGHT_BOLD} 
          color={Colors.KIT_BLACK}>
            You just helped your team earn{"\n"} +1 foxtails!
        </KitText>

        </View>

        <View style = {styles.submitButton}>

        <KitButtonSupreme
          buttonTextColor={Colors.KIT_WHITE} 
          buttonFontWeight={FontStyles.FONT_WEIGHT_REGULAR} 
          buttonFontSize={22} 
          buttonBackgroundColor={Colors.KIT_GREEN} >
          MORE CHALLENGES
        </KitButtonSupreme>
        </View>
      </View>
    );
  }

}

const styles = StyleSheet.create({

  textBox:{
    fontSize: 14,
    lineHeight: 18,
    marginTop: 10,
    marginLeft: 10,
    marginBottom: 10,
    marginRight: 10,
    textAlign: 'left',
    alignContent: "flex-start",
  },

    container: {
      paddingTop: 15, 
      paddingLeft: 15,
      paddingRight: 15,
      flex: 1
    },

      header: { 
        paddingTop: 10, 
        paddingBottom: 10,
        alignItems: "flex-start",
      },

      mainBody: {
            borderTopRightRadius: 20,
            borderTopLeftRadius: 20,
            borderBottomLeftRadius: 20,
            borderBottomRightRadius: 20,
            backgroundColor: '#F0F0F0',
            shadowColor: 'rgba(0,0,0,1)',
            shadowOpacity: 0.2,
            shadowOffset: { width: 4, height: 4 },
            shadowRadius: 5,
            alignItems: 'center',
            overflow: 'hidden',
            flex: 4
      },

      submitButton: {
        alignSelf: 'center',
        marginTop: 20,
        flex: 1,
      },
});