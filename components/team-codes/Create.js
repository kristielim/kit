import React from 'react';
import { Image, Text, View, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import KitButton from '../KitButton';
import KitText from '../KitText';

export function Create(props) {
  const placeholderImage = require('../../assets/images/40by40.png')

  return (
    // <View>
    //   <View>
    //     <Text style={styles.text}>Team Code:</Text>
    //     <View>
    //       <Text style={[styles.text, styles.codeBox]}>47VK0A</Text>
    //     </View>
    //     <Text style={styles.text}>You can have up to 5 people on a team</Text>
    //   </View>

    //   <View>
    //     {/* EVAN TODO: These Button comps are just a placeholder for now, we will need a custom comp in the future */}
    //     <TouchableOpacity style={[styles.buttonWrapper]} onPress={() => {alert('Share button')}}>
    //       <Text style={[styles.text, {fontSize: 24, color: 'black', marginTop: 'auto', marginBottom: 'auto'}]}>Share</Text>
    //     </TouchableOpacity>
    //     <TouchableOpacity style={[styles.buttonWrapper]} onPress={() => {alert('Copy button')}}>
    //       <Text style={[styles.text, {fontSize: 24, color: 'black', marginTop: 'auto', marginBottom: 'auto'}]}>Copy</Text>
    //     </TouchableOpacity>
    //   </View>

    //   <View>
    //     <Text style={styles.text}>Set a team name:</Text>
    //     <TextInput style={{backgroundColor: 'white', width: 244, height: 41,borderWidth: 1, borderColor: 'black',marginTop: 5, marginLeft: 'auto', marginRight: 'auto',}} placeholder="Set a team name:" onChangeText={props.onChangeText} value={props.teamNameText} />
    //     <Text style={styles.text}>This can always be changed later</Text>
    //   </View>

    //   <TouchableOpacity onPress={props.back}>
    //     <Text style={{color: '#E17327', fontSize: 20, textAlign: 'center',}}>
    //       back
    //     </Text>
    //   </TouchableOpacity>
    // </View>
    <View style={{flex:1,backgroundColor: "#569684",padding: 20,}}>
      <View style={{flex:1, borderRadius: 30, backgroundColor: "#FFFFFF"}}>
        <KitButton style={{maxHeight: 40, marginLeft: 0, marginRight: 0, justifyContent: "flex-start"}} image={placeholderImage}></KitButton>
        <View style={{flex:2, justifyContent:"center"}}>
          <KitText style={{}} size={18} color={"#000000"} fontWeight={"light"}>Set Team Name</KitText>
          {/* Evan TODO: Make this input a separate compo */}
          <TextInput style={{backgroundColor: 'white', width: 268, height: 48, borderWidth: 2, borderColor: "#E17327", borderRadius: 20, paddingLeft: 15, marginLeft: 'auto', marginRight: 'auto', fontSize: 24, color:"#ACACAC"}} placeholder="Ex) Team One" onChangeText={props.onChangeText} value={props.teamNameText} />
        </View>

        <View style={{flex:4,justifyContent:"flex-start"}}>
          <KitText style={{}} fontWeight={"bold"} color={"#000000"} size={53}>47VK0A</KitText>
          <KitButton style={{button: {width: 203,maxHeight: 40,marginTop:5,marginBottom:8,borderRadius: 20,borderWidth: 2,borderColor: "#569684",}}} onPress={()=>alert("pressed!")} buttonBackgroundColor={"#569684"} buttonTextColor={"#FFFFFF"} buttonFontWeight={"medium"} buttonFontSize={18} buttonTextStyle={{}}>SHARE</KitButton>
          <KitButton style={{button: {width: 203,maxHeight: 40,marginTop:5,marginBottom:8,borderRadius: 20,borderWidth: 2,borderColor: "#569684"}}} onPress={()=>alert("pressed!")} buttonBackgroundColor={"#FFFFFF"} buttonTextColor={"#569684"} buttonFontWeight={"medium"} buttonFontSize={18} buttonTextStyle={{}}>COPY</KitButton>
          <KitText style={{}} color={"#000000"} fontWeight={"light"} size={14}>Invite up to 5 friends per team</KitText>
        </View>
      </View>
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
    width: 203,
    height: 40,
    borderRadius: 20,
  }
});