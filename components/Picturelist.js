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
import PictureItem from './PictureItem.js';

const PictureLIst = props => (
  <View>
    <Image
      style={{ height: 200, width: 200, resizeMode: 'contain' }}
      source={{ uri: props.image }}
    />
  </View>
);

export default PictureList;
