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
import * as ImagePicker from 'expo-image-picker';
import * as firebase from 'firebase';
import * as Permissions from 'expo-permissions';
import KitText from '../components/KitText';
import KitButton  from '../components/KitButton'
import Colors from '../constants/Colors';
import FontStyles from '../constants/FontStyles';
import uuid from 'uuid';

export default class ImageScreen extends React.Component{
  state = {
    text: '',
     //TODO: upload text and user to the actual database under assigned challenges - use push command ? maybe an array????
  };

  render() {
    return (
      <View style={styles.container}>

        <View style = {styles.header}>
          <KitText 
          size={50} 
          fontWeight={FontStyles.FONT_WEIGHT_BOLD} 
          color={Colors.KIT_BLACK}>
            Challenge Name
        </KitText>

        <KitText 
          size={17}
          fontWeight={FontStyles.FONT_WEIGHT_REGULAR} 
          color={Colors.KIT_BLACK}>
            Challenge Description
        </KitText>
        </View>

        <View
          style={styles.mainBody}>
          <TextInput
          style={styles.textBox}
          keyboardType = 'default'
          placeholder= "Type away . . ."
          onChangeText={(text) => this.setState({text})}
          value={this.state.text}
        />
        </View>

        <View style = {styles.submitButton}>

        <KitButton
          onPress={() => this._handleImagePicked(image)}
          image={require("../assets/images/submitArrow.png")}
          imageFormat={styles.submitButton}
          style={{button: styles.submitButtonFormat}} 
          buttonTextColor={Colors.KIT_BLACK} 
          buttonFontWeight={FontStyles.FONT_WEIGHT_REGULAR} 
          buttonFontSize={17} 
          buttonTextStyle={styles.photoButtonText}
          buttonBackgroundColor={Colors.KIT_WHITE} >
          SUBMIT
        </KitButton>
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
            overflow: 'hidden',
            flex: 4
      },

      imageFormat: {
        alignSelf:'stretch',
        flex:1
      },

      photoButton: {
        alignSelf: 'flex-end',
        width: 200,
        maxHeight: 50,
        marginTop: -70,
        borderTopRightRadius: 25,
        borderTopLeftRadius: 25,
        borderBottomLeftRadius: 25,
        borderBottomRightRadius: 25,
        zIndex: 5,
      },

      photoButtonText:{
        alignItems: 'center',
        justifyContent:'center',
      },

      submitButton: {
        alignSelf: 'flex-end',
        marginBottom: 10,
        flex: 1,
      },

      submitButtonFormat:{
        position: 'absolute',
        bottom: 50,
        right: 0,
      }
});






