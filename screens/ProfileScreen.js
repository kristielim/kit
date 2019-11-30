import React from "react";

import { View } from "react-native";
import KitButtonSupreme from "../components/KitButtonSupreme";

import { signOut } from "../utils/auth/auth";

export default function ProfileScreen() {
  return (
    <View>
      <KitButtonSupreme onPress={signOut}>Sign Out</KitButtonSupreme>
    </View>
  );
}
