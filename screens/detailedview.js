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

class DetailedView extends Component {
  constructor(props) {
    super();
    this.state = {
      query: '',
      image: props.navigation.state.params.image.webformatURL,
      user: props.navigation.state.params.image.user,
      userImage: props.navigation.state.params.image.userImageURL,
      tags: props.navigation.state.params.image.tags.split(', '),
      resolution: `${props.navigation.state.params.image.imageWidth}×${
        props.navigation.state.params.image.imageHeight
      }`,
    };
  }

  render() {
    console.log(this.props.navigation.state.params.image);
    return (
      <View>
        <Tile
          imageSrc={{
            uri: this.state.image,
          }}
          featured
          caption={this.props.navigation.state.params.image.tags}
        />
        <View
          style={{
            flex: 1,
            flexGrow: 1,
            flexDirection: 'row',
            justifyContent: 'center',
          }}>
          <Avatar large rounded source={{ uri: this.state.userImage }} />
          <Text style={{ width: 100, height: 100 }}>{this.state.user}</Text>
        </View>
        <Text>{`Resolution: ${this.state.resolution}`}</Text>
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

export default connect(mapStateToProps, mapDispatchToProps)(DetailedView);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});
