/* profile screen shows user data and has option to edit user data
also has links to change pw, donate, faq*/

import React, { useState } from "react";

import { View, StyleSheet, Image } from "react-native";
import KitButtonSupreme from "../components/KitButtonSupreme";

import { signOut } from "../utils/auth/auth";
import { TouchableOpacity } from "react-native-gesture-handler";
import KitText from "../components/KitText";
import Colors from "../constants/Colors";

export default function ProfileScreen() {
  const [mode, setMode] = useState("done");
  return (
    <View style={styles.container}>
      <View style={styles.photoContainer}>
        <Image
          source={require("../assets/images/avatar.png")}
          style={styles.profilePhoto}
        />
      </View>

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
              onPress={() => {
                setMode("done");
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
      <View style={styles.edit}></View>
      <View style={styles.inputContainer}>
        <View style={styles.textContainer}>
          <KitText style={styles.text} fontWeight={"light"}>
            Display Name
          </KitText>
          <KitText style={styles.info} fontWeight={"bold"}>
            Vanessa
          </KitText>
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
        </View>
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
        <View style={styles.textContainer}>
          <KitText style={styles.text} fontWeight={"light"}>
            Donate to KIT
          </KitText>
        </View>
        <View style={styles.textContainer}>
          <KitText style={styles.text} fontWeight={"light"}>
            FAQ
          </KitText>
        </View>
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
    alignSelf: "center"
  },
  photoContainer: {
    paddingTop: 18,
    paddingBottom: 28
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
    margin: 20
  },
  info: {
    textAlign: "left",
    paddingTop: 8
  },
  textContainer: {
    height: 230 / 6,
    width: "110%",
    borderColor: Colors.KIT_LIGHT_GREY,
    borderWidth: 1,
    flexDirection: "row",
    alignItems: "center"
  },
  arrow: {
    height: 8,
    width: 8
  },
  arrowContainer: {
    marginLeft: 80
    // borderColor: Colors.KIT_LIGHT_GREEN,
    // borderWidth: 2
  }
});
