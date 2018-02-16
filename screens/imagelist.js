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
import axios from 'axios';
import { connect } from 'react-redux';
import * as Actions from '../redux/actions';
import { SearchBar, Button } from 'react-native-elements';

class ImageList extends Component {
  constructor() {
    super();
    this.state = {
      query: '',
    };
  }

  render() {
    console.log('props', this.props.pictures.hits);
    let images = this.props.pictures.hits || [];
    return (
      <View style={styles.container}>
        <ScrollView
          style={{
            flex: 1,
            flexGrow: 1,
          }}>
          {images.map(picture => (
            <PictureItem key={picture.id} image={picture.previewURL} />
          ))}
        </ScrollView>
      </View>
    );
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    pictureQuery: query => {
      dispatch(Actions.getData(query));
    },
  };
};
const mapStateToProps = (state, ownProps) => {
  return {
    history: state.history,
    pictures: state.pictureReducer,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ImageList);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    height: 100,
    width: 200,
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: 'black',
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

const PictureItem = props => (
  <View>
    <Image
      style={{ height: 200, width: 200, resizeMode: 'contain' }}
      source={{ uri: props.image }}
    />
  </View>
);

//<PictureItem key={picture.id} image={picture.previewURl} />
