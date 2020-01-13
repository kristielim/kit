import React, { useState } from "react";
import { Image, StyleSheet, TouchableOpacity, View } from "react-native";
import KitButtonSupreme from "../../components/KitButtonSupreme";
import KitModal from "../../components/KitModal";
import KitText from "../../components/KitText";
import Colors from "../../constants/Colors";
import FontStyles from "../../constants/FontStyles";
import Fonts from "../../constants/Fonts";
import { createTeam } from "../../utils/db/teams";
import KitBackgroundScreen from "../../components/KitBackgroundScreen";
import { getUserId } from "../../utils/auth/auth";
import KitImagePicker from "../../components/KitImagePicker";
import KitIconPicker from "../../components/KitIconPicker";
import { animals } from "../../constants/AnimalIcons";
import KitTextInput from "../../components/KitTextInput";

export default function CreateScreen(props) {
  const [teamName, setTeamName] = useState("");
  const [teamCode, setTeamCode] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  // Icon can either be a photo or an animal
  const [teamIcon, setTeamIcon] = useState({
    type: "ANIMAL",
    path: "BUNNY"
  });
  // Modal opens to set team icon
  const [modalVisible, setModalVisible] = useState(false);
  // Team icon modal is either an image picker or an animal icon picker
  const [isImagePicker, setIsImagePicker] = useState(false);

  //let previewSource = require("~/assets/images/animals/bunny.png");
  let previewSource;
  if (teamIcon.type === "ANIMAL") {
    previewSource = animals[teamIcon.path];
  } else {
    previewSource = { uri: teamIcon.path };
  }

  return (
    <KitBackgroundScreen
      onPressBack={() => {
        props.navigation.navigate("Teams");
      }}
    >
      <KitModal visible={modalVisible}>
        <View style={styles.modalBody}>
          <TouchableOpacity
            onPress={() => {
              setModalVisible(false);
            }}
            style={styles.closeModal}
          >
            <Image source={require("../../assets/images/grayx.png")} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setIsImagePicker(!isImagePicker);
            }}
            style={styles.changePicker}
          >
            <KitText
              style={styles.changePickerText}
              size={16}
              fontWeight={FontStyles.FONT_WEIGHT_BOLD}
              color={Colors.KIT_DARK_GREY}
            >
              {isImagePicker ? "ICONS" : "PHOTO"}
            </KitText>
            <Image
              style={styles.changePickerArrow}
              source={require("../../assets/images/arrows/grayrightarrow.png")}
            />
          </TouchableOpacity>
          <KitText
            size={28}
            fontWeight={FontStyles.FONT_WEIGHT_BOLD}
            color={Colors.KIT_BLACK}
          >
            Set Icon
          </KitText>
          {isImagePicker ? (
            <KitImagePicker
              onSave={uploadUrl => {
                setTeamIcon({ type: "PHOTO", path: uploadUrl });
                setModalVisible(false);
              }}
            />
          ) : (
            <KitIconPicker
              onSave={animalName => {
                setTeamIcon({ type: "ANIMAL", path: animalName });
                setModalVisible(false);
              }}
            />
          )}
        </View>
      </KitModal>
      <View style={styles.container}>
        <KitText size={26}>Set Team Name:</KitText>
        <KitTextInput
          style={styles.textInput}
          placeholder="Ex) Team One"
          onChangeText={setTeamName}
          value={teamName}
          errorMsg={errorMsg}
        />
        <KitText size={26}>Set Team Icon:</KitText>
        <View style={styles.photoContainer}>
          <TouchableOpacity
            onPress={() => {
              setModalVisible(true);
            }}
          >
            <Image source={previewSource} style={styles.photoDark} />
            <Image
              source={require("../../assets/images/cameraicon.png")}
              style={styles.cameraicon}
            />
          </TouchableOpacity>
        </View>
        <KitButtonSupreme
          onPress={async () => {
            if (teamName === "") {
              setErrorMsg("A team name is required.");
            } else {
              const teamCode = await createTeam(
                teamName,
                getUserId(),
                teamIcon
              );
              setTeamCode(teamCode);
            }
          }}
        >
          CREATE CODE
        </KitButtonSupreme>
      </View>
      <View style={styles.teamCodeContainer}>
        {teamCode !== "" && (
          <>
            <KitText
              style={styles.teamCode}
              fontWeight={FontStyles.FONT_WEIGHT_BOLD}
              color={Colors.KIT_DARKEST_BLACK}
              size={53}
            >
              {teamCode}
            </KitText>
            <KitButtonSupreme onPress={() => alert("pressed!")}>
              COPY
            </KitButtonSupreme>
          </>
        )}
      </View>
    </KitBackgroundScreen>
  );
}

const styles = StyleSheet.create({
  modalBody: {
    height: 500,
    width: 340,
    borderRadius: 20,
    backgroundColor: "white",
    padding: 40
  },
  closeModal: {
    position: "absolute",
    top: 20,
    left: 20
  },
  changePicker: {
    position: "absolute",
    top: 20,
    right: 20,
    flexDirection: "row",
    alignItems: "center"
  },
  changePickerArrow: {
    height: 18,
    width: 18,
    resizeMode: "contain"
  },
  changePickerText: { marginBottom: -6, marginRight: 2 },
  textInput: {
    marginTop: 28,
    marginBottom: 32
  },
  container: {
    alignItems: "center"
    // borderWidth: 1,
    // borderColor: "green"
  },
  teamCodeContainer: {
    // borderWidth: 1,
    // borderColor: "blue",
    alignItems: "center",
    justifyContent: "center"
  },
  teamCode: {
    marginBottom: 32
  },
  photoDark: {
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
    backgroundColor: Colors.KIT_LIGHT_GREY,
    marginTop: 18,
    marginBottom: 28
  }
});
