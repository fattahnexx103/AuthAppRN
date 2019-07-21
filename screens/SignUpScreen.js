import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as firebase from 'firebase';


export default class SignUpScreen extends React.Component{
  render(){
    return (
      <View style={styles.container}>
        <Text>Sign Up</Text>
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
