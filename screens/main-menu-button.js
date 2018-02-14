import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableHighlight } from 'react-native';
import { Icon, Button } from 'react-native-elements';

export default class MainMenuButton extends Component {
  render() {
    return (
      <TouchableHighlight
        onPress={this.props.onPress}
        style={{
          height: 80,
          width: 150,
          backgroundColor: '#fff',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <View
          style={{
            flexGrow: 1,
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Icon name="home" color="#4A8AC3" />
          <Text style={{ color: '#4A8AC3', fontSize: 20 }}> Main Menu</Text>
        </View>
      </TouchableHighlight>
    );
  }
}
