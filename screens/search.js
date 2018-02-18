import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableHighlight,
  Image,
  ImageBackground,
} from 'react-native';
import axios from 'axios';
import { connect } from 'react-redux';
import * as Actions from '../redux/actions';
import { SearchBar, Button } from 'react-native-elements';
const backround = require('../assets/images/searchbackround.jpg');
class Search extends Component {
  constructor() {
    super();
    this.state = {
      query: '',
    };

    this.searchButtonPress = this.searchButtonPress.bind(this);
  }

  searchButtonPress() {
    if (this.state.query !== '') {
      this.props.pictureQuery(this.state.query);
      this.props.navigation.navigate('ImageList');
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <ImageBackground source={backround} style={styles.backround}>
          <SearchBar
            containerStyle={{ height: 50, width: 200 }}
            noIcon
            round
            onChangeText={query => this.setState({ query })}
            placeholder="Type Here..."
          />
          <TouchableHighlight
            onPress={this.searchButtonPress}
            style={styles.searchBotton}>
            <Text style={styles.search}>Search</Text>
          </TouchableHighlight>
        </ImageBackground>
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
    isLoading: state.isLoading,
    history: state.history,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F5FCFF',
  },
  search: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: '#fff',
  },
  backround: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  searchBotton: {
    backgroundColor: 'blue',
    height: 50,
    width: 100,
    margin: 20,
    borderRadius: 75,
  },
});
