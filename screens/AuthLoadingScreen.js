import React from "react";
import { Image, View } from "react-native";
import * as firebase from "firebase";

export default class AuthLoadingScreen extends React.Component {
  componentDidMount() {
    firebase.auth().onAuthStateChanged(user => {
      this.props.navigation.navigate(user ? "Main" : "SignedOut");
    });
  }
  render() {
    return (
      <View>
        <Image source={require("../assets/images/foxtail.png")} />
      </View>
    );
  }
}
