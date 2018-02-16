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
import PictureItem from './pictureItem.js';

const PictureLIst = props => (
  <ScrollView
    style={{
      flex: 1,
      flexGrow: 1,
    }}>
    {props.pictures.map(picture => (
      <PictureItem key={picture.id} image={picture.previewURL} />
    ))}
  </ScrollView>
);

export default PictureLIst;
