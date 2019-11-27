import React, { useState } from "react";
import { StyleSheet, Image, View } from "react-native";
import KitText from "../components/KitText";
import KitTextInput from "../components/KitTextInput";
import KitButtonSupreme from "../components/KitButtonSupreme";
import { signUp } from "../utils/auth/auth";
import Colors from "../constants/Colors";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function SignUpScreen(props) {
  const { navigation } = props;
  const [displayName, setDisplayName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [reenteredPassword, setReenteredPassword] = useState("");

  const goToSignIn = () => {
    navigation.navigate("SignIn");
  };

  return (
    <View style={styles.background}>
      <View style={styles.main}>
        <View>
          <View style={styles.logoContainer}>
            <Image
              style={styles.logo}
              source={require("../assets/images/logo.png")}
            />
            <Image
              style={styles.logoText}
              source={require("../assets/images/wordmark.png")}
            />
            {/* Chose not to use because of padding issue
          <KitText
            style={styles.logoText}
            color={Colors.KIT_BLACK}
            fontWeight="bold"
            size={100}
          >
            kit
          </KitText> */}
          </View>
          <KitText color={Colors.KIT_DARK_GREY} fontWeight="semibold" size={20}>
            keep in touch
          </KitText>
        </View>
        <View style={styles.textContainer}>
          <KitText
            style={styles.text}
            color={Colors.KIT_BLACK}
            size={32}
            fontWeight="bold"
          >
            Hello!
          </KitText>
          <KitText
            style={styles.text}
            color={Colors.KIT_LIGHT_ORANGE}
            size={16}
            fontWeight="semibold"
          >
            Create an account to continue.
          </KitText>
        </View>
        <View style={styles.textInputContainer}>
          <KitTextInput
            image={require("../assets/images/onboardingname.png")}
            placeholder="Display name"
            onChangeText={setDisplayName}
            value={displayName}
            errorState={true}
          />
          <KitTextInput
            image={require("../assets/images/onboardingemail.png")}
            placeholder="Email"
            onChangeText={setEmail}
            value={email}
            errorState={true}
          />
          <KitTextInput
            image={require("../assets/images/onboardingpassword.png")}
            placeholder="Password"
            onChangeText={setPassword}
            value={password}
            secureTextEntry
          />
          <KitTextInput
            image={require("../assets/images/onboardingpassword.png")}
            placeholder="Re-enter password"
            onChangeText={setReenteredPassword}
            value={reenteredPassword}
            secureTextEntry
          />
          <KitButtonSupreme
            onPress={() => {
              signUp(email, password);
            }}
            color={Colors.KIT_LIGHT_ORANGE}
            width={233}
          >
            REGISTER
          </KitButtonSupreme>
        </View>
        <View style={styles.bottomText}>
          <KitText color={Colors.KIT_DARK_GREY} fontWeight="medium" size={16}>
            Already have an account?{" "}
          </KitText>
          <TouchableOpacity onPress={goToSignIn}>
            <KitText
              color={Colors.KIT_LIGHT_ORANGE}
              fontWeight="semibold"
              size={16}
            >
              Sign in
            </KitText>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    backgroundColor: Colors.KIT_LIGHT_GREY,
    alignItems: "center",
    justifyContent: "center",
    height: "100%"
  },
  bottomText: {
    flexDirection: "row",
    width: 268,
    justifyContent: "space-around",
    margin: 22
  },
  logo: {
    height: 66,
    width: 66,
    margin: 8
  },
  logoContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center"
  },
  logoText: {
    margin: 8
  },
  main: {
    alignItems: "center"
  },
  text: {
    textAlign: "left"
  },
  textContainer: {
    margin: 22,
    width: 268
  },
  textInputContainer: {
    backgroundColor: "white",
    borderRadius: 10,
    height: 318,
    width: 268,
    alignItems: "center",
    justifyContent: "space-evenly"
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
