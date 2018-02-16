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
import PictureList from '../components/Picturelist';
class ImageList extends Component {
  constructor() {
    super();
    this.state = {
      query: '',
    };

    this.goToDetailed = this.goToDetailed.bind(this);
  }

  goToDetailed(image) {
    this.props.navigation.navigate('DetailedView', { image });
  }

  render() {
    let pictures = this.props.pictures.hits || [];
    return (
      <View style={styles.container}>
        <PictureList goToDetailed={this.goToDetailed} pictures={pictures} />
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

//<PictureItem key={picture.id} image={picture.previewURl} />
