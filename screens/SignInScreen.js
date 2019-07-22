import React from 'react';
import { StyleSheet, View, KeyboardAvoidingView, Text, Image, TouchableOpacity } from 'react-native';
import {Form, Item, Input, Label, Button} from 'native-base';
import * as firebase from 'firebase';


export default class SignInScreen extends React.Component{


  constructor(props){
    super(props);
    this.state= {
      email: '',
      password: ''
    }
  }

  static navigationOptions = {
    title: 'Sign In',
    headerStyle: {
      backgroundColor: '#badc57',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  };

  //sign in functionality
  signInUser = (email, password) =>{
    firebase.auth().signInWithEmailAndPassword(email,password)
    .then(() =>{this.props.navigation.replace('Home')})
    .catch((error) =>{alert(error.message);
    });
  };

  render(){
    return (
      <KeyboardAvoidingView style={styles.container}
        behavior='position'
        enabled
      >
        <View style={styles.logoContainer}>
          <Image
            source={{uri: 'https://www.bajajfinserv.in/Bajaj_Main_Logo_mobile_mo-logo.png'}}
            stlye={styles.signInLogo}
           />
        </View>
        <Form style={styles.form}>
          <Item floatingLabel>
            <Label>Email</Label>
            <Input
              autoCorrect={false}
              autoCapitalize='none'
              keyboardType='email-address'
              onChangeText={(email) =>{this.setState({
                email: email
              })}}
             />
          </Item>
          <Item floatingLabel>
            <Label>Password</Label>
            <Input
              secureTextEntry={true}
              autoCorrect={false}
              autoCapitalize='none'
              keyboardType='default'
              onChangeText={(pass) =>{this.setState({
                password: pass
              })}}
             />
          </Item>
          <Button
            style={styles.button}
            full
            round
            onPress = {() =>{this.signInUser(this.state.email, this.state.password)}}
          >
              <Text style={styles.buttonText}>Sign In</Text>
          </Button>
        </Form>
        <View style={styles.footer}>
          <Text>OR</Text>
          <TouchableOpacity
            onPress = {() =>{
              this.props.navigation.navigate('SignUp');
            }}
          >
            <Text style={{color: 'blue'}}> Create a New Account</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  logoContainer:{
    alignItems: 'center',
    marginTop:50,
    marginBottom: 50
  },
  form:{
    padding:20,
    width:'100%',
    marginBottom: 20
  },
  signInLogo:{
    width: 100,
    height: 100
  },
  button:{
    marginTop: 15
  },
  buttonText:{
    color: '#fff'
  },
  footer:{
    alignItems: 'center'
  }
});
