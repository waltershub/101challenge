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
      warning: '',
    };

    this.searchButtonPress = this.searchButtonPress.bind(this);
  }

  searchButtonPress() {
    const query = this.state.query.replace(/\s+/g, '').trim();
    if (query !== '') {
      this.props.pictureQuery(query);
      this.props.navigation.navigate('ImageList');
      this.search.clearText();
      this.setState({ warning: '' });
    } else {
      this.setState({ warning: 'Search cannot be empty' });
      this.search.clearText();
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
            ref={search => (this.search = search)}
          />
          <TouchableHighlight
            onPress={this.searchButtonPress}
            style={styles.searchBotton}>
            <Text style={styles.search}>Search</Text>
          </TouchableHighlight>
          <Text style={styles.warningText}>{this.state.warning}</Text>
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
    addHistory: query => {
      dispatch(Actions.getHistory(query));
    },
  };
};
const mapStateToProps = (state, ownProps) => {
  return {
    isLoading: state.isLoading,
    history: state.historyReducer,
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
    backgroundColor: '#0000ff',
    height: 50,
    width: 100,
    margin: 20,
    borderRadius: 75,
  },
  warningText: {
    fontSize: 15,
    color: '#ff0000',
    fontWeight: 'bold',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.9,
    shadowRadius: 2,
  },
});
