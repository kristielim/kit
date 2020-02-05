import React, { useState } from "react";
import { StyleSheet, Image, View } from "react-native";
import KitText from "../components/KitText";
import KitTextInput from "../components/KitTextInput";
import KitButtonSupreme from "../components/KitButtonSupreme";
import { signIn } from "../utils/auth/auth";
import Colors from "../constants/Colors";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function SignInScreen(props) {
  const { navigation } = props;
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const goToSignUp = () => {
    navigation.navigate("SignUp");
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
            Welcome back!
          </KitText>
          <KitText
            style={styles.text}
            color={Colors.KIT_LIGHT_ORANGE}
            size={16}
            fontWeight="semibold"
          >
            Please sign in below.
          </KitText>
        </View>
        <View style={styles.textInputContainer}>
          <View>
            <KitTextInput
              image={require("../assets/images/onboarding/email.png")}
              placeholder="Email"
              onChangeText={setEmail}
              value={email}
            />
            <KitTextInput
              image={require("../assets/images/onboarding/password.png")}
              placeholder="Password"
              onChangeText={setPassword}
              value={password}
              secureTextEntry
            />
            <KitText color={Colors.KIT_RED} size={16}>
              {error}
            </KitText>
          </View>
          <KitButtonSupreme
            onPress={() => {
              signIn(email, password, setError);
            }}
            color={Colors.KIT_LIGHT_ORANGE}
            width={233}
          >
            SIGN IN
          </KitButtonSupreme>
          <TouchableOpacity onPress={goToSignUp}>
            <KitText color={Colors.KIT_RED} fontWeight="semibold" size={16}>
              Forgot Password?
            </KitText>
          </TouchableOpacity>
        </View>
        <View style={styles.bottomText}>
          <KitText color={Colors.KIT_DARK_GREY} fontWeight="medium" size={16}>
            Don't have an account?{" "}
          </KitText>
          <TouchableOpacity onPress={goToSignUp}>
            <KitText
              color={Colors.KIT_LIGHT_ORANGE}
              fontWeight="semibold"
              size={16}
            >
              Sign up
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
    height: 340,
    width: 300,
    alignItems: "center",
    justifyContent: "space-evenly",
    shadowColor: "black",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    padding: 16
  }
});
