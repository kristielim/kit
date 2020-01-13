// Pick one of the animal icons

import React, { useState } from "react";
import {
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View
} from "react-native";
import Colors from "../constants/Colors";
import FontStyles from "../constants/FontStyles";
import KitText from "./KitText";
import KitButtonSupreme from "./KitButtonSupreme";
import bunny from "../assets/images/animals/bunny.png";
import bear from "../assets/images/animals/bear.png";
import blackcat from "../assets/images/animals/blackcat.png";
import dog from "../assets/images/animals/dog.png";
import pandabear from "../assets/images/animals/pandabear.png";
import penguin from "../assets/images/animals/penguin.png";
import polarbear from "../assets/images/animals/polarbear.png";
import shiba from "../assets/images/animals/shiba.png";
import yellowcat from "../assets/images/animals/yellowcat.png";

const animals = {
  BUNNY: bunny,
  BEAR: bear,
  BLACK_CAT: blackcat,
  DOG: dog,
  PANDA_BEAR: pandabear,
  PENGUIN: penguin,
  POLAR_BEAR: polarbear,
  SHIBA: shiba,
  YELLOW_CAT: yellowcat
};

export default function KitIconPicker(props) {
  const [selectedIcon, setSelectedIcon] = useState("BUNNY");
  return (
    <View style={styles.container}>
      <View style={styles.mainBody}>
        <Image style={styles.selectedIcon} source={animals[selectedIcon]} />
        <View style={styles.icons}>
          <View style={styles.iconRow}>
            <Image style={styles.icon} source={bunny} />
            <Image style={styles.icon} source={bear} />
            <Image style={styles.icon} source={blackcat} />
          </View>
          <View style={styles.iconRow}>
            <Image style={styles.icon} source={dog} />
            <Image style={styles.icon} source={pandabear} />
            <Image style={styles.icon} source={penguin} />
          </View>
          <View style={styles.iconRow}>
            <Image style={styles.icon} source={polarbear} />
            <Image style={styles.icon} source={shiba} />
            <Image style={styles.icon} source={yellowcat} />
          </View>
        </View>
      </View>
      <KitButtonSupreme
        color={Colors.KIT_GREEN}
        style={styles.saveButton}
        onPress={() => {
          props.onSave(selectedIcon);
        }}
        width={140}
      >
        SAVE
      </KitButtonSupreme>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderColor: "orange",
    borderWidth: 1
  },
  icon: {
    height: 60,
    width: 60,
    resizeMode: "contain",
    margin: 4
  },
  icons: {
    padding: 8,
    borderColor: "blue",
    borderWidth: 1
  },
  iconRow: {
    flexDirection: "row"
  },
  mainBody: {
    alignItems: "center",
    justifyContent: "center"
  },
  selectedIcon: {
    height: 100,
    width: 100,
    resizeMode: "contain"
  },
  saveButton: {
    marginTop: 20
  }
});
