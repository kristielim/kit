import React from 'react';
import {
  ActivityIndicator,
  Button,
  Clipboard,
  Image,
  Share,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import * as firebase from 'firebase';
import * as Permissions from 'expo-permissions';
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
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        {image ? null : (
          <Text
            style={{
              fontSize: 20,
              marginBottom: 20,
              textAlign: 'center',
              marginHorizontal: 15,
            }}>
            Example: Upload ImagePicker result
          </Text>
        )}

        <Button
          onPress={this._pickImage}
          title="Pick an image from camera roll"
        />

        <Button onPress={this._takePhoto} title="Take a photo" />

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

    return (
      <View
        style={{
          marginTop: 30,
          width: 250,
          borderRadius: 3,
          elevation: 2,
        }}>
        <View
          style={{
            borderTopRightRadius: 3,
            borderTopLeftRadius: 3,
            shadowColor: 'rgba(0,0,0,1)',
            shadowOpacity: 0.2,
            shadowOffset: { width: 4, height: 4 },
            shadowRadius: 5,
            overflow: 'hidden',
          }}>
          <Image source={{ uri: image }} style={{ width: 250, height: 250 }} />
        </View>

        <Text
          onPress={this._copyToClipboard}
          onLongPress={this._share}
          style={{ paddingVertical: 10, paddingHorizontal: 10 }}>
          {image}
        </Text>
      </View>
    );
  };

  _share = () => {
    Share.share({
      message: this.state.image,
      title: 'Check out this photo',
      url: this.state.image,
    });
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
      aspect: [4, 3],
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
    //TODO Add permissions for camera and camera roll
    // constructor(props) {
    //   super(props);
    //   this.state = {
    //     image: null,
    //     url: "",
    //     progress: 0
    //   };
    // }

    // permissionState = {
    //     hasCameraPermission: null,
    //     hasCameraRollPermission: null
    //   };

    // onTakeImagePress = async() => {
    //     //check for camera permission
    //     const { status } = await Permissions.askAsync(Permissions.CAMERA);
    //     this.setState({ hasCameraPermission: status === 'granted' });


    //     //launches camera
    //     let result = await ImagePicker.launchCameraAsync();

    //     if(!result.cancelled){
    //         this.uploadImage(result) //result.uri, "test-image"
    //         .then(() => {
    //             Alert.alert("Succes");
    //           })
    //         .catch((error) => {
    //             Alert.alert(error);
    //         });
    //     }
    // }

    // onChooseImagePress = async () => {
    //     //TODO FIX

    //     //check for camera permission
    //     const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
    //     this.setState({ hasCameraRollPermission: status === 'granted' });

    //             let result = await ImagePicker.launchImageLibraryAsync();
    //             if (!result.cancelled) {
    //                 //launches image library and select image
    //               this.uploadImage(result) //result.uri, "test-image"
    //                 .then(() => {
    //                   Alert.alert("Success");
    //                 })
    //                 .catch((error) => {
    //                   Alert.alert(error);
    //                 });
    //         }
    // }

    // async uploadImage(uri) {
    //   // Why are we using XMLHttpRequest? See:
    //   // https://github.com/expo/expo/issues/2402#issuecomment-443726662
    //   const blob = await new Promise((resolve, reject) => {
    //     const xhr = new XMLHttpRequest();
    //     xhr.onload = function() {
    //       resolve(xhr.response);
    //     };
    //     xhr.onerror = function(e) {
    //       console.log(e);
    //       reject(new TypeError('Network request failed'));
    //     };
    //     xhr.responseType = 'blob';
    //     xhr.open('GET', uri, true);
    //     xhr.send(null);
    //   });
    
    //   const ref = firebase
    //     .storage()
    //     .ref()
    //     .child(uuid.v4());
    //   const snapshot = await ref.put(blob);
    
    //   // We're done with the blob, close and release it
    //   blob.close();
    
    //   //return await snapshot.ref.getDownloadURL();
    // }


    // // uploadImage = () => {

    // //     //may be imageUri
    // //     const ext = this.state.imageUri.split('.').pop(); // Extract image extension
    // //     const filename = `${uuid()}.${ext}`; // Generate unique name
    // //     this.setState({ uploading: true });
    // //     firebase
    // //       .storage()
    // //       .ref(`/images/${filename}`)
    // //       .putFile(this.state.imageUri)
    // //       .on(
    // //         firebase.storage.TaskEvent.STATE_CHANGED,
    // //         snapshot => {
    // //           let state = {};
    // //           state = {
    // //             ...state,
    // //             progress: (snapshot.bytesTransferred / snapshot.totalBytes) * 100 // Calculate progress percentage
    // //           };
    // //           if (snapshot.state === firebase.storage.TaskState.SUCCESS) {
    // //             const allImages = this.state.images;
    // //             allImages.push(snapshot.downloadURL);
    // //             state = {
    // //               ...state,
    // //               uploading: false,
    // //               imgSource: '',
    // //               imageUri: '',
    // //               progress: 0,
    // //               images: allImages
    // //             };
    // //             AsyncStorage.setItem('images', JSON.stringify(allImages));
    // //           }
    // //           this.setState(state);
    // //         },
    // //         error => {
    // //           unsubscribe();
    // //           alert('Sorry, Try again.');
    // //         }
    // //       );
    // //   };
    

    // // uploadImage = async (url, ImageName) => {
    // //     const reponse = await fetch(url);
    // //     const blob = await response.blob();

    // //     var ref = firebase.storage().ref().child("images/" + imageName);
    // //     return ref.put(blob);
    // // }



    // render() {
    //     return (
    //         <View style={styles.container}>
    //             <Text style = {{fontSize: 20}}> Image Upload </Text>
    //             <Button title= "Take a picture" onPress = {this.onTakeImagePress}/>
    //             <Button title= "Choose a picture" onPress = {this.onChooseImagePress}/>
    //         </View>
    //     );
    // }

const styles = StyleSheet.create({
    container: {flex: 1, paddingTop: 50, alignItems: "center"}
});