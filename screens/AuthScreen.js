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
import { StyleSheet, Text, View, Button } from "react-native";

export default function SignUp(props) {
  const { navigation } = props;
  const goToSignIn = () => {
    navigation.navigate("SignIn");
  };
  return (
    <View style={styles.container}>
      <Text>Signup</Text>
      <Button title="Go to Sign In" onPress={goToSignIn} />
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
