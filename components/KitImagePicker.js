import React from "react";
import { Image, StyleSheet, View } from "react-native";

import * as ImagePicker from "expo-image-picker";
import * as Permissions from "expo-permissions";
import KitText from "./KitText";
import KitButtonSupreme from "./KitButtonSupreme";
import Colors from "../constants/Colors";
import FontStyles from "../constants/FontStyles";
import { uploadImageAsync } from "../utils/firebase/storage";

export default class KitImagePicker extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      image: null,
      isPhotoSelected: false
    };
  }

  async componentDidMount() {
    await Permissions.askAsync(Permissions.CAMERA_ROLL);
  }

  render() {
    let { image } = this.state;

    return (
      <View style={styles.container}>
        <KitText
          size={28}
          fontWeight={FontStyles.FONT_WEIGHT_BOLD}
          color={Colors.KIT_BLACK}
        >
          {this.props.title}
        </KitText>

        <View style={styles.mainBody}>
          <Image source={{ uri: image }} style={styles.imageFormat} />
        </View>

        <KitButtonSupreme
          color={
            this.state.isPhotoSelected ? Colors.KIT_DARK_GREY : Colors.KIT_GREEN
          }
          onPress={this._pickImage}
          style={styles.photoButton}
          width={180}
        >
          CHOOSE PHOTO
        </KitButtonSupreme>
        <KitButtonSupreme
          color={
            this.state.isPhotoSelected ? Colors.KIT_GREEN : Colors.KIT_DARK_GREY
          }
          style={styles.saveButton}
          onPress={() => {
            this._handleImagePicked(image);
          }}
          width={140}
          disabled={!this.state.isPhotoSelected}
        >
          SAVE
        </KitButtonSupreme>
      </View>
    );
  }

  _pickImage = async () => {
    //allows user to select image from image library
    let pickerResult = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true
    });
    this.setState({
      image: pickerResult.uri,
      isPhotoSelected: !pickerResult.cancelled
    });
  };

  _handleImagePicked = async image => {
    //uploads image to firebase storage
    try {
      if (!image.cancelled) {
        //image url saved and stored
        uploadUrl = await uploadImageAsync(image);
        this.setState({ image: uploadUrl });
        this.props.onSave(uploadUrl);
      }
    } catch (e) {
      console.log(e);
      //TODO: Implement Error Screen in place of this
      alert("Upload failed, sorry :(");
    }
  };
}

const styles = StyleSheet.create({
  container: {
    padding: 15,
    flex: 1
  },

  mainBody: {
    borderRadius: 20,
    backgroundColor: Colors.KIT_LIGHT_GREY,
    overflow: "hidden",
    alignItems: "center",
    flex: 4,
    marginTop: 20
  },

  imageFormat: {
    alignSelf: "stretch",
    flex: 1
  },

  photoButton: {
    marginTop: -60,
    zIndex: 5
  },

  saveButton: {
    marginTop: 40
  }
});
