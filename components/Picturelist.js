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
  FlatList,
} from 'react-native';
import PictureItem from './pictureItem.js';

const PictureLIst = props => (
  <FlatList
    data={props.pictures}
    renderItem={({ item }) => (
      <PictureItem
        key={item.id}
        imageObject={item}
        goToDetailed={props.goToDetailed}
        image={item.previewURL}
      />
    )}
    keyExtractor={item => item.id}
    numColumns={2}
  />
);

export default PictureLIst;

const styles = StyleSheet.create({
  scroll: {
    flex: 1,
    flexGrow: 1,
  },
  content: {
    justifyContent: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});
