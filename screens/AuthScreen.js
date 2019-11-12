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
//       <FormLabel>Confirm Password</FormLabel>
//       <FormInput secureTextEntry placeholder="Confirm Password..." />

//       <Button
//         buttonStyle={{ marginTop: 20 }}
//         backgroundColor="#03A9F4"
//         title="SIGN UP"
//         onPress={() => {
//           onSignIn().then(() => navigation.navigate("Main"));
//         }}
//       />
//       <Button
//         buttonStyle={{ marginTop: 20 }}
//         backgroundColor="transparent"
//         textStyle={{ color: "#bcbec1" }}
//         title="Sign In"
//         onPress={() => navigation.navigate("SignIn")}
//       />
//     </Card>
//   </View>
// );

import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Input } from "../components/input";
import { Button } from "../components/button";
import * as firebase from "firebase";

export default function SignUp(props) {
  const { navigation } = props;
  const goToSignIn = () => {
    navigation.navigate("SignIn");
    // <View style={styles.container}>
    //   <Text>Signup</Text>
    //   <Button title="Go to Sign In" onPress={goToSignIn} />
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
        onPress={() => this.SignUp(this.state.email, this.state.password)}
      >
        Register{" "}
      </Button>
      <Button
        onPress={
          (() => this.Login(this.state.email, this.state.password), goToSignIn)
        }
      >
        Already have an account? Sign in{" "}
      </Button>
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

// export default function LoginScreen() {
//   this.state = {
//     email: "",
//     password: ""
//   };

//   SignUp = (email, password) => {
//     try {
//       firebase.auth().createUserWithEmailAndPassword(email, password);
//     } catch (error) {
//       console.log(error.toString(error));
//     }
//   };

//   Login = (email, password) => {
//     try {
//       firebase.auth().signInWithEmailAndPassword(email, password);
//       firebase.auth().onAuthStateChanged(user => {
//         alert(user.email);
//       });
//     } catch (error) {
//       console.log(error.toString(error));
//     }
//   };
//   return (
//     <View>
//       <Input
//         label="Email Address"
//         placeholder="you@domain.com"
//         onChangeText={email => {
//           this.state.email = email;
//         }}
//         value={this.email}
//       />
//       <Input
//         label="Password"
//         autoCorrect={false}
//         placeholder="*******"
//         secureTextEntry
//         onChangeText={password => {
//           this.state.password = password;
//         }}
//         value={this.password}
//       />
//       <Button onPress={() => this.Login(this.state.email, this.state.password)}>
//         Log In{" "}
//       </Button>
//       <Button
//         onPress={() => this.SignUp(this.state.email, this.state.password)}
//       >
//         Sign Up{" "}
//       </Button>
//     </View>
//   );
// }
