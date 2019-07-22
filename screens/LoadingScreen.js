import React from 'react';
import { StyleSheet, View, ActivityIndicator } from 'react-native';
import * as firebase from 'firebase';


export default class LoadingScreen extends React.Component{

  static navigationOptions={
    title: 'Loading', 
    header: null
  };

  //this is where firebase checks whether user is logged in or not
  componentDidMount(){

    firebase.auth().onAuthStateChanged( (user) =>{ //call the onAuthStateChanged listener
      if(user){ //user is logged in
        this.props.navigation.replace('Home');
      }else{ //user is not logged in
        this.props.navigation.replace('SignIn');
      }
    })
  }

  render(){
    return (
      <View style={styles.container}>
        <ActivityIndicator size='large'/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
