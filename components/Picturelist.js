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
  <ScrollView style={styles.scroll}>
    {props.pictures.map(picture => (
      <PictureItem
        key={picture.id}
        imageObject={picture}
        goToDetailed={props.goToDetailed}
        image={picture.previewURL}
      />
    ))}
  </ScrollView>
);

export default PictureLIst;

const styles = StyleSheet.create({
  scroll: {
    flex: 1,
    flexGrow: 1,
  },
});
