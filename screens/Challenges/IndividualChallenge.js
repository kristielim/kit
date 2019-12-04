/* this screen shows individual challenges and their submissions */

import React, { useState } from "react";
import {
  Image,
  View,
  StyleSheet,
  TouchableOpacity,
  ScrollView
} from "react-native";
import KitText from "../../components/KitText";
import Colors from "../../constants/Colors";
import KitBackgroundScreen from "../../components/KitBackgroundScreen";
export default function IndividualChallenge(props) {
  const [rating, setRating] = useState("");

  return (
    <KitBackgroundScreen
      color={Colors.KIT_RED}
      onPressBack={() => {
        props.navigation.navigate("Teams");
      }}
      padding={1}
      title={props.username}
      number={"1/5"}
    >
      <ScrollView>
        <Image
          style={styles.imageContainer}
          source={require("../../assets/images/placeholder.png")}
        />

        <View>
          <KitText
            fontWeight={"medium"}
            textAlign={"left"}
            style={styles.header}
          >
            Leave a rating for {props.username}:
          </KitText>
        </View>

        <View style={styles.iconContainer}>
          <TouchableOpacity
            onPress={() => {
              setRating("boo");
            }}
          >
            {rating === "boo" ? (
              <Image
                style={styles.icon}
                source={require("../../assets/images/ghost.png")}
              />
            ) : (
              <Image
                style={styles.icon}
                source={require("../../assets/images/gray-ghost.png")}
              />
            )}
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              setRating("star");
            }}
          >
            {rating === "star" ? (
              <Image
                style={styles.icon}
                source={require("../../assets/images/star.png")}
              />
            ) : (
              <Image
                style={styles.icon}
                source={require("../../assets/images/gray-star.png")}
              />
            )}
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setRating("heart");
            }}
          >
            {rating === "heart" ? (
              <Image
                style={styles.icon}
                source={require("../../assets/images/heart.png")}
              />
            ) : (
              <Image
                style={styles.icon}
                source={require("../../assets/images/gray-heart.png")}
              />
            )}
          </TouchableOpacity>
        </View>
        <View style={styles.iconContainer}>
          <View style={styles.iconLabel}>
            {rating === "boo" ? (
              <KitText fontCalligraphy={"italic"} size={12}>
                Boo!
              </KitText>
            ) : (
              <KitText></KitText>
            )}
          </View>
          <View style={styles.iconLabel}>
            {rating === "star" ? (
              <KitText fontCalligraphy={"italic"} size={12}>
                Woo!
              </KitText>
            ) : (
              <KitText></KitText>
            )}
          </View>
          <View style={styles.iconLabel}>
            {rating === "heart" ? (
              <KitText fontCalligraphy={"italic"} size={12}>
                Aww!
              </KitText>
            ) : (
              <KitText></KitText>
            )}
          </View>
        </View>

        <View>
          <KitText
            fontWeight={"medium"}
            textAlign={"left"}
            style={styles.header}
          >
            Responses Thread
          </KitText>
          <KitText style={styles.header}>responses go here</KitText>
        </View>
      </ScrollView>
    </KitBackgroundScreen>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center"
  },
  header: {
    padding: 10,
    marginLeft: 20,
    textAlign: "left"
  },
  iconContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row"
  },
  icon: {
    height: 46,
    width: 46,
    alignSelf: "center",
    marginHorizontal: 16
  },
  iconLabel: {
    alignSelf: "center",
    marginHorizontal: 40
  },
  imageContainer: {
    width: 280,
    height: 370,
    borderRadius: 15,
    margin: 15,
    alignSelf: "center"
  },
  inputContainer: {
    flex: 1,
    backgroundColor: Colors.KIT_WHITE,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    position: "absolute",
    bottom: 0,
    height: 40,
    width: "100%"
  },
  upload: {
    height: 20,
    width: 20,
    margin: 8
  }
});
