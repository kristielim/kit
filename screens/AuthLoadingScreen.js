import React, { useEffect } from "react";
import { Image, View, StyleSheet } from "react-native";
import * as firebase from "firebase";

export default function AuthLoadingScreen(props) {
  useEffect(() => {
    firebase.auth().onAuthStateChanged(user => {
      props.navigation.navigate(user ? "Main" : "SignedOut");
    });
  }, []);

  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require("../assets/images/logo.png")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    height: "100%"
  },
  image: {
    height: 200,
    width: 200
  }
});
