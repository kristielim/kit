import { AppLoading } from "expo";
import { Asset } from "expo-asset";
import * as Font from "expo-font";
import React, { useState } from "react";
import { Platform, StatusBar, StyleSheet, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import AppNavigator from "./navigation/AppNavigator";

export default function App(props) {
  const [isLoadingComplete, setLoadingComplete] = useState(false);

  if (!isLoadingComplete && !props.skipLoadingScreen) {
    return (
      <AppLoading
        startAsync={loadResourcesAsync}
        onError={handleLoadingError}
        onFinish={() => handleFinishLoading(setLoadingComplete)}
      />
    );
  } else {
    return (
      <View style={styles.container}>
        {Platform.OS === "ios" && <StatusBar barStyle="default" />}
        <AppNavigator />
      </View>
    );
  }
}

async function loadResourcesAsync() {
  await Promise.all([
    Asset.loadAsync([
      require("./assets/images/robot-dev.png"),
      require("./assets/images/robot-prod.png")
    ]),
    Font.loadAsync({
      // This is the font that we are using for our tab bar
      ...Ionicons.font,
      'poligon-black-italic': require('./assets/fonts/Poligon/poligon-black-italic.otf'),
      'poligon-black-link': require('./assets/fonts/Poligon/poligon-black-link.otf'),
      'poligon-black': require('./assets/fonts/Poligon/poligon-black.otf'),
      'poligon-bold-italic': require('./assets/fonts/Poligon/poligon-bold-italic.otf'),
      'poligon-bold-link': require('./assets/fonts/Poligon/poligon-bold-link.otf'),
      'poligon-bold': require('./assets/fonts/Poligon/poligon-bold.otf'),
      'poligon-extrabold-italic': require('./assets/fonts/Poligon/poligon-extrabold-italic.otf'),
      'poligon-extrabold-link': require('./assets/fonts/Poligon/poligon-extrabold-link.otf'),
      'poligon-extrabold': require('./assets/fonts/Poligon/poligon-extrabold.otf'),
      'poligon-light-italic': require('./assets/fonts/Poligon/poligon-light-italic.otf'),
      'poligon-light-link': require('./assets/fonts/Poligon/poligon-light-link.otf'),
      'poligon-light': require('./assets/fonts/Poligon/poligon-light.otf'),
      'poligon-medium-italic': require('./assets/fonts/Poligon/poligon-medium-italic.otf'),
      'poligon-medium-link': require('./assets/fonts/Poligon/poligon-medium-link.otf'),
      'poligon-medium': require('./assets/fonts/Poligon/poligon-medium.otf'),
      'poligon-regular-italic': require('./assets/fonts/Poligon/poligon-regular-italic.otf'),
      'poligon-regular-link': require('./assets/fonts/Poligon/poligon-regular-link.otf'),
      'poligon-regular': require('./assets/fonts/Poligon/poligon-regular.otf'),
      'poligon-semibold-italic': require('./assets/fonts/Poligon/poligon-semibold-italic.otf'),
      'poligon-semibold-link': require('./assets/fonts/Poligon/poligon-semibold-link.otf'),
      'poligon-semibold': require('./assets/fonts/Poligon/poligon-semibold.otf'),
      'poligon-thin-italic': require('./assets/fonts/Poligon/poligon-thin-italic.otf'),
      'poligon-thin-link': require('./assets/fonts/Poligon/poligon-thin-link.otf'),
      'poligon-thin': require('./assets/fonts/Poligon/poligon-thin.otf'),
    })
  ]);
}

function handleLoadingError(error) {
  // In this case, you might want to report the error to your error reporting
  // service, for example Sentry
  console.warn(error);
}

function handleFinishLoading(setLoadingComplete) {
  setLoadingComplete(true);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  }
});
