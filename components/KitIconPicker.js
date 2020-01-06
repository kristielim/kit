// Pick one of the animal icons

import React, { useState } from "react";
import {
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View
} from "react-native";
import KitText from "./KitText";
import bunny from "../assets/images/animals/bunny.png";

const animals = { BUNNY: bunny };

export default function KitIconPicker(props) {
  return <KitText>Icon Picker</KitText>;
}

const styles = StyleSheet.create({});
