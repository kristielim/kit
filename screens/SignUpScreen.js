import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Input } from "../components/input";
import { Button } from "../components/button";
import { signUp } from "../utils/auth/auth";

export default function SignUpScreen(props) {
  const { navigation } = props;
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const goToSignIn = () => {
    navigation.navigate("SignIn");
  };

  const goToMain = () => {
    navigation.navigate("Main");
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
          signUp(email, password, goToMain);
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
