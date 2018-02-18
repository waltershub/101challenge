import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableHighlight,
  Image,
  ScrollView,
} from 'react-native';
import { Avatar } from 'react-native-elements';

const User = props => (
  <View
    style={{
      backgroundColor: '#FF9009',
      padding: 10,
      flexDirection: 'row',
    }}>
    <Text style={styles.user}>User: </Text>
    <Avatar small rounded source={{ uri: props.userImage }} />
    <Text style={styles.user}>{'  ' + props.user}</Text>
  </View>
);

export default User;

const styles = StyleSheet.create({
  user: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },
  tagHeader: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#4A8AC3',
  },
  tags: {
    fontSize: 15,
    fontStyle: 'italic',
    color: '#4A8AC3',
  },
});
