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
import { Tile, Avatar } from 'react-native-elements';
import { connect } from 'react-redux';
import * as Actions from '../redux/actions';
import User from '../components/user';
import uniqueid from 'lodash.uniqueid';

class DetailedView extends Component {
  constructor(props) {
    super();
    this.state = {
      query: '',
      image: props.navigation.state.params.image.webformatURL,
      user: props.navigation.state.params.image.user,
      userImage:
        props.navigation.state.params.image.userImageURL ||
        'https://upload.wikimedia.org/wikipedia/commons/c/ce/Question-mark-face.jpg',
      tags: props.navigation.state.params.image.tags.split(', '),
      resolution: `${props.navigation.state.params.image.imageWidth}×${
        props.navigation.state.params.image.imageHeight
      }`,
    };
  }

  render() {
    console.log(this.props.navigation.state.params.image);
    return (
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.scrollContent}>
        <Tile
          imageSrc={{
            uri: this.state.image,
          }}
          featured
        />
        <Text style={styles.picInfo}>{`Resolution: ${
          this.state.resolution
        }`}</Text>
        <User user={this.state.user} userImage={this.state.userImage} />
        <Text style={styles.tagHeader}>Tags</Text>
        {this.state.tags.map(tag => (
          <Text style={styles.tags} key={uniqueid()}>
            {tag}{' '}
          </Text>
        ))}
      </ScrollView>
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

export default connect(mapStateToProps, mapDispatchToProps)(DetailedView);

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F5F3EE',
  },
  scrollContent: {
    alignItems: 'center',
    backgroundColor: '#F5F3EE',
  },
  picInfo: {
    fontSize: 15,
    color: 'red',
    textAlign: 'right',
  },
  user: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },
  tagHeader: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#4A8AC3',
  },
  tags: {
    fontSize: 15,
    fontStyle: 'italic',
    color: '#4A8AC3',
  },
});

// const User = props => (
//   <View
//     style={{
//       backgroundColor: '#FF9009',
//       padding: 10,
//       flexDirection: 'row',
//     }}>
//     <Text style={styles.user}>User: </Text>
//     <Avatar small rounded source={{ uri: props.userImage }} />
//     <Text style={styles.user}>{'  ' + props.user}</Text>
//   </View>
// );
