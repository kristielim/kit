import React from 'react';
import { Text, View, Button, StyleSheet } from 'react-native';

export function MainTeamComponent() {
  switch (1) {
    case 0:
      return;
    default:
      return (
        <View>
          {/* EVAN TODO: These Button comps are just a placeholder for now, we will need a custom comp in the future */}
          <View style={styles.buttonWrapper}>
            <Button title={"Create new team"} color={"black"} onPress={() => {alert("pressed")}} />
          </View>
          <View style={styles.buttonWrapper}>
            <Button title={"Join a team"} color={"black"} onPress={() => {alert("pressed")}} />
          </View>
          <Text style={styles.text}>No Teams Yet</Text>
        </View>
      );
  }
}
const styles = StyleSheet.create({
  text: {
    textAlign: 'center',
  },
  buttonWrapper: {
    flex: 1,
    backgroundColor: "#FFCEBE",
    width: 250,
  }
});