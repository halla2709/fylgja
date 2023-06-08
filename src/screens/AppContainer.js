import React from 'react';
import * as Font from 'expo-font';
import { NavigationContainer } from '@react-navigation/native';
import RootStack from '../controllers/ApplicationNavigation.js';
import { LogInScreen } from './LogInScreen.js';
import AsyncStorage from "@react-native-async-storage/async-storage";
export default class AppContainer extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      fontLoaded: false,
      loggedIn: false,
      loading: true
    };
    this.onLoggedIn = this.onLoggedIn.bind(this);
  }

  async getLoginInformation() {
    try {
      console.log("checking login");
      const value = await AsyncStorage.getItem('hasLoggedIn');
      console.log("login is " + value);
      this.setState( { loggedIn: value, loading: false });
    }
    catch (error) {
      // Error retrieving data
      console.error(error);
      this.setState( { loading: false });
    }
  }

  onLoggedIn() {
    this.setState( { loggedIn: true } );
  }

  async componentDidMount() {
    await Font.loadAsync({
      'merriweather-black': require('../assets/fonts/Merriweather/Merriweather-Black.ttf'),
      'merriweather-bold': require('../assets/fonts/Merriweather/Merriweather-Bold.ttf'),
      'merriweather-regular': require('../assets/fonts/Merriweather/Merriweather-Regular.ttf'),
      'merriweather-light': require('../assets/fonts/Merriweather/Merriweather-Light.ttf'),
      'dosis-medium': require('../assets/fonts/Dosis/Dosis-Medium.ttf'),
      'dosis-regular': require('../assets/fonts/Dosis/Dosis-Regular.ttf'),
      'dosis-bold': require('../assets/fonts/Dosis/Dosis-Bold.ttf'),
      'opensans-regular': require('../assets/fonts/Open_Sans/OpenSans-Regular.ttf'),
      'opensans-italic': require('../assets/fonts/Open_Sans/OpenSans-Italic.ttf'),
      'opensans-bold': require('../assets/fonts/Open_Sans/OpenSans-Bold.ttf'),
      'opensans-semibold': require('../assets/fonts/Open_Sans/OpenSans-SemiBold.ttf'),
    });
    this.setState({ fontLoaded: true });
    this.getLoginInformation();
  }

  render() {
    return (
      this.state.fontLoaded && !this.state.loading ? (
        <NavigationContainer>
          { this.state.loggedIn ? <RootStack /> : <LogInScreen loginCallback={this.onLoggedIn}/> }
        </NavigationContainer>
      ) : null
    );
  }
}