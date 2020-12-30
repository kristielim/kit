/* profile screen shows user data and has option to edit user data
also has links to change pw, donate, faq*/

// TODO: BIANCA
// fix image cancel bug -> update image url
// pull email from firebase and display

import React, { useState, useEffect } from "react";
import { View, StyleSheet, Image, TextInput } from "react-native";
import * as ImagePicker from "expo-image-picker";
import * as firebase from "firebase";
import * as Permissions from "expo-permissions";
import { signOut } from "../utils/auth/auth";
import { TouchableOpacity } from "react-native-gesture-handler";
import KitText from "../components/KitText";
import Colors from "../constants/Colors";
import ToggleSwitch from "toggle-switch-react-native";
import {
  getUsername,
  updateUsername,
  updatePicture,
  getPicture
} from "../utils/db/users";
import { getUserId } from "../utils/auth/auth";
import uuid from "uuid";

export default function ProfileScreen() {
  const [mode, setMode] = useState("done");
  const [ifOn, setOn] = useState("isOff");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [image, setImage] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);
  useEffect(() => {
    const currentUser = getUserId();
    console.log("current", currentUser);
    getUsername(currentUser).then(name => {
      setName(name);
    });

    Permissions.askAsync(Permissions.CAMERA_ROLL);
    console.log("current", currentUser);
    getPicture(currentUser).then(image => {
      console.log("image", image);
      setImageUrl(image);
    });
  }, []);

  // imageUrl === ""
  //                 ? require("../assets/images/avatar.png")
  //                 : { uri: imageUrl }

  if (image) {
    imgSrc = { uri: image };
  } else if (!imageUrl) {
    imgSrc = require("../assets/images/avatar.png");
  } else {
    imgSrc = { uri: imageUrl };
  }

  _pickImage = async () => {
    //allows user to select image from image library
    let pickerResult = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true
    });
    // this.setState({ image: pickerResult.uri });
    setImage(pickerResult.uri);
  };

  _handleImagePicked = async image => {
    const { navigate } = props.navigation;
    //uploads image to firebase storage
    try {
      if (!image.cancelled) {
        //image url saved and stored
        uploadUrl = await uploadImageAsync(image);
        // this.setState({image: uploadUrl})
        setImage(uploadURL);
      }
    } catch (e) {
      console.log(e);
      //TODO: Implement Error Screen in place of this
      alert("Upload failed, sorry :(");
    } finally {
      navigate("Submitted");
    }
  };

  return (
    <View style={styles.container}>
      {mode === "done" ? (
        <View style={styles.photoContainer}>
          <Image
            // source={require("../assets/images/avatar.png")}
            source={imgSrc}
            style={styles.profilePhoto}
          />
        </View>
      ) : (
        <View style={styles.photoContainer}>
          <TouchableOpacity
            onPress={() => {
              setMode("edit");
              _pickImage(image);
            }}
          >
            <Image
              // source={require("../assets/images/avatar.png")}
              source={imgSrc}
              style={styles.profilePhotoDark}
            />
            <Image
              source={require("../assets/images/cameraicon.png")}
              style={styles.cameraicon}
            />
          </TouchableOpacity>
        </View>
      )}

      <View style={styles.headerContainer}>
        <KitText
          style={styles.header}
          size={20}
          fontWeight={"medium"}
          color={Colors.KIT_DARK_GREY}
        >
          Settings
        </KitText>

        <View style={styles.edit}>
          {mode === "done" ? (
            <TouchableOpacity
              onPress={() => {
                setMode("edit");
              }}
            >
              <KitText
                size={18}
                fontWeight={"bold"}
                color={Colors.KIT_LIGHT_ORANGE}
              >
                EDIT
              </KitText>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              onPress={async () => {
                setMode("done");
                updateUsername(getUserId(), name);
                setName(name);
                _handleImagePicked(image);
                updatePicture(getUserId(), await uploadImageAsync(image));
              }}
            >
              <KitText
                size={18}
                fontWeight={"bold"}
                color={Colors.KIT_LIGHT_ORANGE}
              >
                DONE
              </KitText>
            </TouchableOpacity>
          )}
        </View>
      </View>

      <View style={styles.inputContainer}>
        <View style={styles.textContainer}>
          <KitText style={styles.text} fontWeight={"light"}>
            Display Name
          </KitText>
          {mode === "done" ? (
            <KitText style={styles.info} fontWeight={"bold"}>
              {name}
            </KitText>
          ) : (
            <TextInput
              style={styles.textInput}
              value={name}
              onChangeText={setName}
            />
          )}
        </View>

        <View style={styles.textContainer}>
          <KitText style={styles.text} fontWeight={"light"}>
            Email
          </KitText>
          <KitText
            style={styles.info}
            fontWeight={"bold"}
            color={Colors.KIT_DARK_GREY}
          >
            vanessahristyta@gmail.com
          </KitText>
        </View>

        <View style={styles.textContainer}>
          <KitText style={styles.text} fontWeight={"light"}>
            Notifications
          </KitText>

          <View style={styles.switch}>
            {ifOn === "isOff" ? (
              <ToggleSwitch
                isOn={false}
                onColor={Colors.KIT_ORANGE}
                offColor={Colors.KIT_GREY}
                onToggle={() => {
                  setOn("isOn");
                }}
              />
            ) : (
              <ToggleSwitch
                isOn={true}
                onColor={Colors.KIT_ORANGE}
                offColor={Colors.KIT_GREY}
                onToggle={() => {
                  setOn("isOff");
                }}
              />
            )}
          </View>
        </View>

        <TouchableOpacity>
          <View style={styles.textContainer}>
            <KitText style={styles.text} fontWeight={"light"}>
              Change Password
            </KitText>
            <View style={styles.arrowContainer}>
              <Image
                style={styles.arrow}
                source={require("../assets/images/rightarrow.png")}
              />
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity>
          <View style={styles.textContainer}>
            <KitText style={styles.text} fontWeight={"light"}>
              Donate to KIT
            </KitText>
            <View style={styles.arrowContainer}>
              <Image
                style={styles.arrow}
                source={require("../assets/images/rightarrow.png")}
              />
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity>
          <View style={styles.textContainer}>
            <KitText style={styles.text} fontWeight={"light"}>
              FAQ
            </KitText>
            <View style={styles.arrowContainer}>
              <Image
                style={styles.arrow}
                source={require("../assets/images/rightarrow.png")}
              />
            </View>
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.signout}>
        <TouchableOpacity onPress={signOut}>
          <KitText
            fontCalligraphy={"italic"}
            size={14}
            fontWeight={"medium"}
            color={Colors.KIT_RED}
          >
            Sign Out
          </KitText>
        </TouchableOpacity>
      </View>
    </View>
  );
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
      reject(new TypeError("Network request failed"));
    };
    xhr.responseType = "blob";
    xhr.open("GET", uri, true);
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

ProfileScreen.navigationOptions = {
  title: "Profile"
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.KIT_LIGHT_GREY,
    alignContent: "center",
    // borderColor: Colors.KIT_LIGHT_GREEN,
    // borderWidth: 2,
    padding: 20
  },
  signout: {
    position: "absolute",
    bottom: 10,
    right: 25
  },
  profilePhoto: {
    height: 230,
    width: 230,
    borderRadius: 230 / 2,
    resizeMode: "contain",
    opacity: 1
  },
  profilePhotoDark: {
    height: 230,
    width: 230,
    borderRadius: 230 / 2,
    resizeMode: "contain",
    opacity: 0.75
  },
  cameraicon: {
    position: "absolute",
    alignSelf: "center",
    top: 70,
    width: 90,
    height: 90,
    opacity: 1
  },
  photoContainer: {
    height: 230,
    width: 230,
    borderRadius: 230 / 2,
    alignSelf: "center",
    backgroundColor: Colors.KIT_BLACK,
    marginTop: 18,
    marginBottom: 28
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignSelf: "center",
    width: "110%",
    padding: 18,
    alignItems: "center"
  },
  header: {
    position: "absolute",
    left: 18,
    alignSelf: "center"
  },
  edit: {
    position: "absolute",
    right: 20,
    alignSelf: "center"
  },
  inputContainer: {
    backgroundColor: Colors.KIT_WHITE,
    height: 230,
    width: "115%",
    alignSelf: "center",
    justifyContent: "space-evenly"
  },
  text: {
    textAlign: "left",
    paddingTop: 8,
    margin: 25
  },
  textInput: {
    fontFamily: "poligon-medium-italic",
    paddingTop: 5
  },
  info: {
    textAlign: "left",
    paddingTop: 8
  },
  textContainer: {
    height: 230 / 6,
    width: "100%",
    borderColor: Colors.KIT_LIGHT_GREY,
    borderWidth: 1,
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "center"
  },
  arrow: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: "contain"
  },
  arrowContainer: {
    position: "absolute",
    right: 25,
    height: 12,
    width: 12
  },
  switch: {
    position: "absolute",
    right: 25
  }
});
