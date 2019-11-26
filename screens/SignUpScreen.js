import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Input } from "../components/input";
import { Button } from "../components/button";
import * as firebase from "firebase";

export default function SignUpScreen(props) {
  const { navigation } = props;
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const goToSignIn = () => {
    navigation.navigate("SignIn");
  };

  signUp = (email, password) => {
    try {
      firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then(() => {
          login(email, password);
        });
    } catch (error) {
      console.log(error.toString(error));
    }
  };

  login = (email, password) => {
    try {
      firebase.auth().signInWithEmailAndPassword(email, password);
      firebase.auth().onAuthStateChanged(user => {
        console.log(user);
        alert(user.email);
      });
    } catch (error) {
      console.log(error.toString(error));
    }
  };

  return (
    <View>
      <Input
        label="Email Address"
        placeholder="you@domain.com"
        onChangeText={setEmail}
        value={email}
      />
      <Input
        label="Password"
        autoCorrect={false}
        placeholder="*******"
        secureTextEntry
        onChangeText={setPassword}
        value={password}
      />
      <Button
        onPress={() => {
          signUp(email, password);
        }}
      >
        Register{" "}
      </Button>
      <Button onPress={goToSignIn}>Already have an account? Sign in </Button>
    </View>
  );
  // return (

  // );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});

// export default AuthScreen = () => {
//   return <Button />;
// };

// export default class SignUp extends React.Component {
//   goToLogin = () => this.props.navigation.navigate("Login");
//   render() {
//     return (
//       <View style={styles.container}>
//         <Text>Signup</Text>
//         <Button title="Go to Login" onPress={this.goToLogin} />
//       </View>
//     );
//   }
// }
