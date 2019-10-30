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
            <TouchableOpacity style={[styles.buttonWrapper]} onPress={() => {alert('Share button')}}>
              <Text style={[styles.text, {fontSize: 24, color: 'black', marginTop: 'auto', marginBottom: 'auto'}]}>Share</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.buttonWrapper]} onPress={() => {alert('Copy button')}}>
              <Text style={[styles.text, {fontSize: 24, color: 'black', marginTop: 'auto', marginBottom: 'auto'}]}>Copy</Text>
            </TouchableOpacity>
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
          <TouchableOpacity style={[styles.buttonWrapper]} onPress={() => {switchToView(1)}}>
            <Text style={[styles.text, {fontSize: 24, color: 'black', marginTop: 'auto', marginBottom: 'auto'}]}>Create new team</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={[styles.buttonWrapper]} onPress={() => {switchToView(2)}}>
            <Text style={[styles.text, {fontSize: 24, color: 'black', marginTop: 'auto', marginBottom: 'auto'}]}>Join a team</Text>
          </TouchableOpacity>
            
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
    backgroundColor: "#FFCEBE",
    width: 302,
    height: 68,
    marginTop: 5,
    marginLeft: 'auto',
    marginRight: 'auto',
    borderRadius: 30,
  }
});