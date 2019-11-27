import React from "react";
import { Image, View, StyleSheet } from "react-native";
import * as firebase from "firebase";

export default class AuthLoadingScreen extends React.Component {
  componentDidMount() {
    firebase.auth().onAuthStateChanged(user => {
      this.props.navigation.navigate(user ? "Main" : "SignedOut");
    });
  }
  render() {
    return (
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={require("../assets/images/logo.png")}
        />
      </View>
    );
  }
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
