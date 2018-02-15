import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableHighlight,
} from 'react-native';
import axios from 'axios';
import { connect } from 'react-redux';
import * as Actions from '../redux/actions';
import { SearchBar, Button } from 'react-native-elements';

class Search extends Component {
  constructor() {
    super();
    this.stare = {
      query: '',
    };
  }
  render() {
    return (
      <View style={styles.container}>
        <SearchBar
          containerStyle={{ height: 50, width: 200 }}
          noIcon
          round
          onChangeText={query => this.setState({ query })}
          placeholder="Type Here..."
        />
        <TouchableHighlight
          onPress={() => {
            this.props.pictureQuery(this.state.query);
          }}
          style={{
            backgroundColor: 'blue',
            height: 50,
            width: 100,
            margin: 20,
            borderRadius: 75,
          }}>
          <Text style={styles.welcome}>Search</Text>
        </TouchableHighlight>
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
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: '#fff',
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
