import React from 'react';
import { Image, Text, View, StyleSheet, TouchableOpacity, TextInput } from 'react-native';

export function Create(props) {
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
        <TextInput style={{backgroundColor: 'white', width: 244, height: 41,borderWidth: 1, borderColor: 'black',marginTop: 5, marginLeft: 'auto', marginRight: 'auto',}} placeholder="Set a team name:" onChangeText={props.onChangeText} value={props.teamNameText} />
        <Text style={styles.text}>This can always be changed later</Text>
      </View>

      <TouchableOpacity onPress={props.back}>
        <Text style={{color: '#E17327', fontSize: 20, textAlign: 'center',}}>
          back
        </Text>
      </TouchableOpacity>
    </View>
  );
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
    maxHeight: 68,
    marginTop: 5,
    marginLeft: 'auto',
    marginRight: 'auto',
    borderRadius: 30,
  }
});