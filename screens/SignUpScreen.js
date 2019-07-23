import React from 'react';
import { StyleSheet, Image, KeyboardAvoidingView, TouchableOpacity, Text, View } from 'react-native';
import { Form, Item, Input, Label, Button } from "native-base";

import * as firebase from 'firebase';

export default class SignUpScreen extends React.Component{

  constructor(props){
    super(props);
    this.state={
      email: '',
      password: '',
      name: ''
    }
  }

  static navigationOptions = {
    title: 'Sign Up',
    headerStyle: {
      backgroundColor: '#badc57',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  };

  signUpUser = (name, email, password) =>{
    firebase.auth()
    .createUserWithEmailAndPassword(email,password)
    .then((authenticate) =>{
      return authenticate.user.updateProfile({
        displayName: name //once authenticated update displayName in console
      })
      .then(() =>{
        this.props.navigation.replace('SignIn'); //after signing up user go to home
      })
      .catch((error) =>{console.log(error);
      })
    })
    .catch((error) =>{alert(error.message);
    })
  }

  render(){
    return (
      <KeyboardAvoidingView style={styles.container}
        behavior='position'
        enabled
      >
      <View style={styles.logoContainer}>
        <Image source= {{uri: 'https://www.bajajfinserv.in/Bajaj_Main_Logo_mobile_mo-logo.png'}}
        stlye={styles.signInLogo}
        />
      </View>
      <Form style={styles.form}>
        <Item floatingLabel>
          <Label>Name</Label>
          <Input
            autoCorrect={false}
            autoCapitalize='none'
            keyboardType='default'
            onChangeText={(name) =>{this.setState({
              name: name
            })
          }}
          />
        </Item>
        <Item floatingLabel>
          <Label>Email</Label>
          <Input
            autoCorrect={false}
            autoCapitalize='none'
            keyboardType='default'
            onChangeText={(email) =>{this.setState({
              email: email
            })
          }}
          />
        </Item>
        <Item floatingLabel>
          <Label>Password</Label>
          <Input
            secureTextEntry={true}
            autoCorrect={false}
            autoCapitalize='none'
            keyboardType='default'
            onChangeText={(password) =>{this.setState({
              password: password
            })
          }}
          />
        </Item>
      <Button style={styles.button}
        full
        rounded
        onPress = {() =>{
          this.signUpUser(this.state.name, this.state.email,this.state.password)
        }}
      >
        <Text style={styles.buttonText}>Sign Up</Text>
      </Button>
      </Form>
      <View style={styles.footer}>
          <Text>OR</Text>
          <TouchableOpacity
            onPress={() => {
              this.props.navigation.navigate("SignIn");
            }}
          >
            <Text>already having an account ?</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  logoContainer: {
    alignItems: "center",
    marginTop: 100,
    marginBottom: 100
  },
  signInLogo:{
    width: 100,
    height: 100
  },
  form: {
    padding: 20,
    width: "100%"
  },
  button: {
    marginTop: 20
  },
  buttonText: {
    color: "#fff"
  },
  footer: {
    alignItems: "center"
  }
});
