//@flow

import React, { Component } from 'react';

import {
  Text,
  View,
  TextInput,
  StyleSheet,
  Image,
  ListView
} from 'react-native';

import { Button, Toolbar, Card } from 'react-native-material-design';


export default class Attend extends Component{
  render(){
    return (
      <View style={styles.container}>
        <Toolbar
          icon='arrow-back'
          onIconPress={() => this.props.navigator.pop()}
          title={"venue"}/>
        <Text> Attend View </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  toolbar: {}
});
