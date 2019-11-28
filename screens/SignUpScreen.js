import React, { useState } from "react";
import { StyleSheet, Image, View } from "react-native";
import KitText from "../components/KitText";
import KitTextInput from "../components/KitTextInput";
import KitButtonSupreme from "../components/KitButtonSupreme";
import { signUp, checkSignUpEmail } from "../utils/auth/auth";
import Colors from "../constants/Colors";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function SignUpScreen(props) {
  const { navigation } = props;

  // TODO: Kristie eventually refactor this since there is a lot of repetitive code
  // probably something to do with hooks

  const [displayName, setDisplayName] = useState("");
  const [displayNameError, setDisplayNameError] = useState("");
  const [displayNameSuccess, setDisplayNameSuccess] = useState(false);

  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [emailSuccess, setEmailSuccess] = useState(false);

  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [passwordSuccess, setPasswordSuccess] = useState(false);

  const [reenteredPassword, setReenteredPassword] = useState("");
  const [reenteredPasswordError, setReenteredPasswordError] = useState("");
  const [reenteredPasswordSuccess, setReenteredPasswordSuccess] = useState(
    false
  );

  const goToSignIn = () => {
    navigation.navigate("SignIn");
  };

  const checkDisplayName = () => {
    if (displayName === "") {
      setDisplayNameError("a display name is required");
      return false;
    } else {
      setDisplayNameSuccess(true);
      setDisplayNameError("");
      return true;
    }
  };

  const checkEmail = async () => {
    if (email === "") {
      setEmailError("an email is required");
      return false;
    } else {
      const status = await checkSignUpEmail(email);
      if (status === "valid") {
        setEmailSuccess(true);
        setEmailError("");
        return true;
      } else {
        setEmailError(status);
        return false;
      }
    }
  };

  const checkPassword = () => {
    if (password.length < 6) {
      setPasswordError("password must be at least six characters");
      return false;
    } else {
      setPasswordSuccess(true);
      setPasswordError("");
      return true;
    }
  };

  const checkReenteredPassword = () => {
    if (reenteredPassword !== password) {
      setReenteredPasswordError("passwords do not match");
      return false;
    } else if (reenteredPassword.length > 0) {
      setReenteredPasswordSuccess(true);
      setReenteredPasswordError("");
      return true;
    }
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
            onBlur={checkDisplayName}
            onChangeText={displayName => {
              setDisplayName(displayName);
              setDisplayNameError(false);
            }}
            value={displayName}
            errorMsg={displayNameError}
            success={displayNameSuccess}
          />
          <KitTextInput
            image={require("../assets/images/onboardingemail.png")}
            placeholder="Email"
            onBlur={checkEmail}
            onChangeText={email => {
              setEmail(email);
              setEmailError(false);
            }}
            value={email}
            errorMsg={emailError}
            success={emailSuccess}
          />
          <KitTextInput
            image={require("../assets/images/onboardingpassword.png")}
            placeholder="Password"
            onBlur={checkPassword}
            onChangeText={password => {
              setPassword(password);
              setPasswordError(false);
            }}
            value={password}
            errorMsg={passwordError}
            success={passwordSuccess}
            secureTextEntry
          />
          <KitTextInput
            image={require("../assets/images/onboardingpassword.png")}
            placeholder="Re-enter password"
            onBlur={checkReenteredPassword}
            onChangeText={password => {
              setReenteredPassword(password);
              setReenteredPasswordError(false);
            }}
            value={reenteredPassword}
            errorMsg={reenteredPasswordError}
            success={reenteredPasswordSuccess}
            secureTextEntry
          />
          <KitButtonSupreme
            onPress={async () => {
              // Checking also sets error messages on each field
              const displayNameOk = checkDisplayName();
              const emailOk = await checkEmail();
              const passwordOk = checkPassword();
              const reenteredPasswordOk = checkReenteredPassword();
              if (
                displayNameOk &&
                emailOk &&
                passwordOk &&
                reenteredPasswordOk
              ) {
                signUp(email, password);
              }
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
