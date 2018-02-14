import { StackNavigator, NavigationActions } from 'react-navigation';
import Search from '../screens/search';

const RootStackNavigator = StackNavigator({
  Search: {
    screen: Search,
  },
});
