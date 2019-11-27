import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Input } from "../components/input";
import { Button } from "../components/button";
import { signIn } from "../utils/auth/auth";

export default function SignIn(props) {
  const { navigation } = props;
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const goToSignUp = () => {
    navigation.navigate("SignUp");
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
          signIn(email, password);
        }}
      >
        Sign In{" "}
      </Button>
      <Button onPress={goToSignUp}>Don't have an account? Sign up </Button>
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
