import { createStackNavigator, createSwitchNavigator } from 'react-navigation';
import LoginScreen from './components/LoginScreen';
import MainScreen from './components/MainScreen';

export default createSwitchNavigator({
  LoginScreen: {
    screen: LoginScreen
  },
  Main: {
    screen: MainScreen
  }
}); 