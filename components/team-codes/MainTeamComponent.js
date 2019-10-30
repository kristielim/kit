import React, { useState } from 'react';
import { Text, View, Button, StyleSheet, TouchableOpacity } from 'react-native';

export function MainTeamComponent() {
  const [componentView, setComponentView] = useState(0)

  const switchToView = function (view) {
    setComponentView(view)
  }

  switch (componentView) {
    case 1:
      return (
        <View>
          <View>
            <Text style={styles.text}>Team Code:</Text>
            <View>
              <Text style={[styles.text, styles.codeBox]}>47VK0A</Text>
            </View>
            <Text style={styles.text}>You can have up to 5 people on a team</Text>
          </View>

          <View>
            {/* EVAN TODO: These Button comps are just a placeholder for now, we will need a custom comp in the future */}
            <View style={styles.buttonWrapper}>
              <Button title={"Share"} color={"black"} onPress={() => {alert('Share button')}} />
            </View>
            <View style={styles.buttonWrapper}>
              <Button title={"Copy"} color={"black"} onPress={() => {alert('Copy button')}} />
            </View>
          </View>

          <View>
            <Text style={styles.text}>Set a team name:</Text>
            <Text style={styles.text}></Text>
            <Text style={styles.text}>This can always be changed later</Text>
          </View>

          <TouchableOpacity onPress={() => {switchToView(0)}}>
            <Text style={{color: '#E17327', fontSize: 20, textAlign: 'center',}}>
              back
            </Text>
          </TouchableOpacity>
        </View>
      );
    case 2:
      return ( 
        <View>
          <TouchableOpacity onPress={() => {switchToView(0)}}>
            <Text style={{color: '#E17327', fontSize: 20, textAlign: 'center',}}>
              back
            </Text>
          </TouchableOpacity>
        </View>
      );
    default:
      return (
        <View>
          {/* EVAN TODO: These Button comps are just a placeholder for now, we will need a custom comp in the future */}
          <View style={styles.buttonWrapper}>
            <Button title={"Create new team"} color={"black"} onPress={() => {switchToView(1)}} />
          </View>
          <View style={styles.buttonWrapper}>
            <Button title={"Join a team"} color={"black"} onPress={() => {switchToView(2)}} />
          </View>
          {/* EVAN TODO: make the below teams view dynamic */}
          <Text style={styles.text}>No Teams Yet</Text>
        </View>
      );
  }
}
const styles = StyleSheet.create({
  text: {
    textAlign: 'center',
  },
  codeBox: {
    backgroundColor: '#FFFFFF',
    fontSize: 50,
    borderWidth: 1,
    borderColor: 'black',
    width: 250,
    marginTop: 5,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  buttonWrapper: {
    flex: 1,
    backgroundColor: "#FFCEBE",
    width: 250,
    marginTop: 5,
    marginLeft: 'auto',
    marginRight: 'auto',
    borderRadius: 5,
  }
});