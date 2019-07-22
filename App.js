import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as firebase from 'firebase';
import {createStackNavigator, createAppContainer} from 'react-navigation';

import HomeScreen from './screens/HomeScreen';
import LoadingScreen from './screens/LoadingScreen';
import SignUpScreen from './screens/SignUpScreen';
import SignInScreen from './screens/SignInScreen';


let firebaseConfig = {
    apiKey: "AIzaSyCm4Vr2OpWCD56FdUpD5A3q-YrMCOS8ckg",
    authDomain: "reactnativecontactsapp.firebaseapp.com",
    databaseURL: "https://reactnativecontactsapp.firebaseio.com",
    projectId: "reactnativecontactsapp",
    storageBucket: "",
    messagingSenderId: "1011999836296",
    appId: "1:1011999836296:web:9026d4424030a55b"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


const MainNavigator = createStackNavigator({

  Loading: {screen: LoadingScreen},
  SignIn: {screen: SignInScreen},
  SignUp: {screen: SignUpScreen},
  Home: {screen: HomeScreen}
}, {
    //launcher screen
    initialRouteName: 'Loading'
})

//create app createAppContainer
const App = createAppContainer(MainNavigator);
export default App;
