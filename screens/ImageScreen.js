import React from 'react';
import {
  ActivityIndicator,
  Button,
  Clipboard,
  Image,
  StatusBar,
  StyleSheet,
  Text,
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
    image: null,
    uploading: false,
  };
  
  //TODO REWRITE
  async componentDidMount() {
    await Permissions.askAsync(Permissions.CAMERA_ROLL);
    await Permissions.askAsync(Permissions.CAMERA);
  }

  render() {
    let { image } = this.state;

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
          <Image source={{ uri: image }} style={styles.imageFormat} />
        </View>

        <KitButton
          onPress={this._pickImage}
          style={{button: styles.photoButton}} 
          buttonTextColor={Colors.KIT_WHITE} 
          buttonFontWeight={FontStyles.FONT_WEIGHT_REGULAR} 
          buttonFontSize={22} 
          buttonTextStyle={styles.photoButtonText}
          buttonBackgroundColor={Colors.KIT_GREEN} >
          Choose Photo
        </KitButton>

        <View style = {styles.submitButton}>
        <KitText 
          size={17}
          fontWeight={FontStyles.FONT_WEIGHT_REGULAR} 
          color={Colors.KIT_BLACK}>
            SUBMIT
        </KitText>
        </View>

        {this._maybeRenderImage()}
        {this._maybeRenderUploadingOverlay()}

        <StatusBar barStyle="default" />
      </View>
    );
  }

  _maybeRenderUploadingOverlay = () => {
    if (this.state.uploading) {
      return ( 
        <View
          style={[
            StyleSheet.absoluteFill,
            {
              backgroundColor: 'rgba(0,0,0,0.4)',
              alignItems: 'center',
              justifyContent: 'center',
            },
          ]}>
          <ActivityIndicator color="#fff" animating size="large" />
        </View>
      );
    }
  };

  _maybeRenderImage = () => {
    let { image } = this.state;
    if (!image) {
      return;
    }
  };

  _copyToClipboard = () => {
    Clipboard.setString(this.state.image);
    alert('Copied image URL to clipboard');
  };

  _takePhoto = async () => {
    let pickerResult = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
    });

    this._handleImagePicked(pickerResult);
  };

  _pickImage = async () => {
    let pickerResult = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
    });

    this._handleImagePicked(pickerResult);
  };

  _handleImagePicked = async pickerResult => {
    try {
      this.setState({ uploading: true });

      if (!pickerResult.cancelled) {
        uploadUrl = await uploadImageAsync(pickerResult.uri);
        this.setState({ image: uploadUrl });
      }
    } catch (e) {
      console.log(e);
      alert('Upload failed, sorry :(');
    } finally {
      this.setState({ uploading: false });
    }
  };
}

async function uploadImageAsync(uri) {
  // Why are we using XMLHttpRequest? See:
  // https://github.com/expo/expo/issues/2402#issuecomment-443726662
  const blob = await new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.onload = function() {
      resolve(xhr.response);
    };
    xhr.onerror = function(e) {
      console.log(e);
      reject(new TypeError('Network request failed'));
    };
    xhr.responseType = 'blob';
    xhr.open('GET', uri, true);
    xhr.send(null);
  });

  const ref = firebase
    .storage()
    .ref()
    .child(uuid.v4());
  const snapshot = await ref.put(blob);

  // We're done with the blob, close and release it
  blob.close();

  return await snapshot.ref.getDownloadURL();
}

const styles = StyleSheet.create({

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
            alignItems: 'center',
            flex: 4
      },

      imageFormat: {
        // width: 344,
        // height: 414 
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
        borderTopRightRadius: 25,
        borderTopLeftRadius: 25,
        borderBottomLeftRadius: 25,
        borderBottomRightRadius: 25,
        flex: 1,
      },
});