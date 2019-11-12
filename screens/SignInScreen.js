// import React from "react";
// import { View } from "react-native";
// import { Card, Button, FormLabel, FormInput } from "react-native-elements";
import { onSignIn } from "../utils/auth/auth";

// export default ({ navigation }) => (
//   <View style={{ paddingVertical: 20 }}>
//     <Card>
//       <FormLabel>Email</FormLabel>
//       <FormInput placeholder="Email address..." />
//       <FormLabel>Password</FormLabel>
//       <FormInput secureTextEntry placeholder="Password..." />

//       <Button
//         buttonStyle={{ marginTop: 20 }}
//         backgroundColor="#03A9F4"
//         title="SIGN IN"
//         onPress={() => {
//           onSignIn().then(() => navigation.navigate("Main"));
//         }}
//       />
//     </Card>
//   </View>
// );

import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Input } from "../components/input";
import { Button } from "../components/button";
import * as firebase from "firebase";

export default function SignIn(props) {
  const { navigation } = props;
  const goToMain = () => {
    navigation.navigate("Main");
  };
  const goToSignUp = () => {
    navigation.navigate("SignUp");
    // <View style={styles.container}>
    //   <Text>Signup</Text>
    //   <Button title="Go to Sign Up" onPress={goToSignUp} />
    // </View>;
  };
  this.state = {
    email: "",
    password: ""
  };

  SignUp = (email, password) => {
    try {
      firebase.auth().createUserWithEmailAndPassword(email, password);
    } catch (error) {
      console.log(error.toString(error));
    }
  };

  Login = (email, password) => {
    try {
      firebase.auth().signInWithEmailAndPassword(email, password);
      firebase.auth().onAuthStateChanged(user => {
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
        onChangeText={email => {
          this.state.email = email;
        }}
        value={this.email}
      />
      <Input
        label="Password"
        autoCorrect={false}
        placeholder="*******"
        secureTextEntry
        onChangeText={password => {
          this.state.password = password;
        }}
        value={this.password}
      />
      <Button
        onPress={
          (() => this.Login(this.state.email, this.state.password), goToMain)
        }
      >
        Log In{" "}
      </Button>
      <Button
        onPress={
          (() => this.SignUp(this.state.email, this.state.password), goToSignUp)
        }
      >
        Don't have an account? Sign up{" "}
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});

// import { StyleSheet, Text, View, Button } from "react-native";

// export default class SignIn extends React.Component {
//   render() {
//     return (
//       <View style={styles.container}>
//         <Text>Login</Text>
//         <Button
//           title="Go to Signup"
//           onPress={() => this.props.navigation.navigate("Signup")}
//         />
//       </View>
//     );
//   }
// }
