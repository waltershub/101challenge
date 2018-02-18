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
  ListVIew,
} from 'react-native';
import PictureItem from './pictureItem.js';

const PictureLIst = props => (
  <ScrollView style={styles.scroll} contentContainerStyle={styles.content}>
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
    width: '100%',
  },
  content: {
    alignItems: 'center',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
});
