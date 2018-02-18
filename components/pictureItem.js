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

const PictureItem = props => (
  <View>
    <TouchableHighlight onPress={() => props.goToDetailed(props.imageObject)}>
      <Image style={styles.image} source={{ uri: props.image }} />
    </TouchableHighlight>
  </View>
);

export default PictureItem;

const styles = StyleSheet.create({
  image: { height: 100, width: 100, margin: 20, resizeMode: 'contain' },
});
