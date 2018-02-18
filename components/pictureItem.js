import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';

const PictureItem = props => (
  <View>
    <TouchableOpacity onPress={() => props.goToDetailed(props.imageObject)}>
      <Image style={styles.image} source={{ uri: props.image }} />
    </TouchableOpacity>
  </View>
);

export default PictureItem;

const styles = StyleSheet.create({
  image: { height: 200, width: 400, margin: 20, resizeMode: 'contain' },
});
