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
import { StyleSheet, Text, View, Button } from "react-native";

export default function SignIn(props) {
  const { navigation } = props;
  const goToMain = () => {
    navigation.navigate("Main");
  };
  return (
    <View style={styles.container}>
      <Text>Sign In</Text>
      <Button title="Sign In" onPress={goToMain} />
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
