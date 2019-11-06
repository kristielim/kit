import React, { Component } from 'react';
import { View } from 'react-native';
import { Input } from '../components/input';
import { Button } from '../components/button';
import * as firebase from "firebase";

export default function LoginScreen() {
        this.state = {
          email: "",
          password: ""
        };

      SignUp = (email, password) => {
        try {
          firebase.auth().createUserWithEmailAndPassword(email, password);
        } 
        catch (error) {
          console.log(error.toString(error));
        }
      };

      Login = (email, password) => {
        try {
          firebase.auth().signInWithEmailAndPassword(email, password);
          firebase.auth().onAuthStateChanged(user => {
             alert(user.email);
          })}
        catch (error) {
          console.log(error.toString(error));
        }
      };
        return (
            <View>
                    <Input 
                        label='Email Address'
                        placeholder='you@domain.com'
                        onChangeText={email => {this.state.email = email}}
                        value={this.email}
                    />
                    <Input 
                        label='Password'
                        autoCorrect={false}
                        placeholder='*******'
                        secureTextEntry
                        onChangeText={password => {this.state.password = password}}
                        value={this.password}
                    />
                    <Button
                        onPress={() => this.Login(this.state.email, this.state.password)}> 
                        Log In </Button>
                    <Button
                        onPress={() => this.SignUp(this.state.email, this.state.password)}>
                        Sign Up </Button>
            </View>
        );
}