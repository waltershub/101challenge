import React, { Component } from 'react';
import { StackNavigator, NavigationActions } from 'react-navigation';
import Search from '../screens/search';
import ImageList from '../screens/imagelist';

const RootStackNavigator = StackNavigator(
  {
    Search: {
      screen: Search,
    },
    ImageList: {
      screen: ImageList,
    },
  },
  {
    navigationOptions: ({ navigation }) => ({
      cardStack: {
        gesturesEnabled: false,
      },
      headerStyle: {
        backgroundColor: '#e9e9e9',
        borderColor: 'transparent',
      },
      statusBarStyle: 'light-content',
    }),
  }
);

export default class RootNavigator extends React.Component {
  constructor() {
    super();
  }

  render() {
    return <RootStackNavigator />;
  }
}
