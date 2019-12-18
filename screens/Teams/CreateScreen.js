import React, { useState } from "react";
import {
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View
} from "react-native";
import KitButtonSupreme from "../../components/KitButtonSupreme";
import KitModal from "../../components/KitModal";
import KitText from "../../components/KitText";
import Colors from "../../constants/Colors";
import FontStyles from "../../constants/FontStyles";
import Fonts from "../../constants/Fonts";
import { createTeam } from "../../utils/db/teams";
import KitBackgroundScreen from "../../components/KitBackgroundScreen";
import { getUserId } from "../../utils/auth/auth";

export default function Create(props) {
  const [teamName, setTeamName] = useState("");
  const [teamCode, setTeamCode] = useState("");
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <KitBackgroundScreen
      onPressBack={() => {
        props.navigation.navigate("Teams");
      }}
      style={{ borderColor: "red", borderWidth: 1, opacity: 0.5 }} //modalVisible ? { opacity: 0.75 } : { opacity: 1 }}
    >
      <KitModal visible={modalVisible}>
        <KitButtonSupreme
          onPress={() => {
            setModalVisible(false);
          }}
        >
          Hide Modal
        </KitButtonSupreme>
      </KitModal>
      <View style={styles.container}>
        <KitText size={26}>Set Team Name:</KitText>
        <TextInput
          style={styles.textInput}
          placeholder="Ex) Team One"
          onChangeText={setTeamName}
          value={teamName}
        />
        <KitText size={26}>Set Team Icon:</KitText>
        <View style={styles.photoContainer}>
          <TouchableOpacity
            onPress={() => {
              setModalVisible(true);
            }}
          >
            <Image
              source={require("../../assets/images/animals/bunny.png")}
              // source={imgSrc}
              style={styles.photoDark}
            />
            <Image
              source={require("../../assets/images/cameraicon.png")}
              style={styles.cameraicon}
            />
          </TouchableOpacity>
        </View>
        <KitButtonSupreme
          onPress={async () => {
            const teamCode = await createTeam(teamName, getUserId());
            setTeamCode(teamCode);
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
  textInput: {
    backgroundColor: "white",
    width: 268,
    height: 48,
    borderWidth: 2,
    borderColor: Colors.KIT_LIGHT_GREY,
    borderRadius: 20,
    paddingLeft: 15,
    marginTop: 28,
    marginBottom: 32,
    fontSize: 24,
    fontFamily: Fonts.REGULAR,
    color: Colors.KIT_DARK_GREY,
    textAlign: "center"
  },
  container: {
    alignItems: "center"
    // borderWidth: 1,
    // borderColor: "green"
  },
  textInputContainer: {
    borderWidth: 1,
    borderColor: "red",
    alignItems: "center"
  },
  teamCodeContainer: {
    borderWidth: 1,
    borderColor: "blue",
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
