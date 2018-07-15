import React from 'react';
import {
  Font,
} from 'expo';
import { View, Text } from 'react-native'; 
import RootStack from '../controllers/ApplicationNavigation.js';
import Styles from './../styles/Styles';
import { HomeScreen } from './HomeScreen.js';

export default class AppContainer extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      fontLoaded: false
    };
  }

  async componentWillMount() {
    await Font.loadAsync({
      'merriweather-black': require('../assets/fonts/Merriweather/Merriweather-Black.ttf'),
      'merriweather-regular': require('../assets/fonts/Merriweather/Merriweather-Regular.ttf'),
      'merriweather-italic': require('../assets/fonts/Merriweather/Merriweather-Italic.ttf'),
      'merriweather-bold': require('../assets/fonts/Merriweather/Merriweather-Bold.ttf'),
      'merriweather-light': require('../assets/fonts/Merriweather/Merriweather-Bold.ttf'),

      'dosis-medium': require('../assets/fonts/Dosis/Dosis-Medium.ttf'),
      'dosis-regular': require('../assets/fonts/Dosis/Dosis-Regular.ttf'),
      'dosis-bold': require('../assets/fonts/Dosis/Dosis-Bold.ttf'),
      'dosis-medium': require('../assets/fonts/Dosis/Dosis-Medium.ttf'),
      'dosis-semibold': require('../assets/fonts/Dosis/Dosis-SemiBold.ttf'),
      'dosis-light': require('../assets/fonts/Dosis/Dosis-Light.ttf'),
      'dosis-extralight': require('../assets/fonts/Dosis/Dosis-ExtraLight.ttf'),

      'opensans-regular': require('../assets/fonts/Open_Sans/OpenSans-Regular.ttf'),
      'opensans-bold': require('../assets/fonts/Open_Sans/OpenSans-Bold.ttf'),
      'opensans-semibold': require('../assets/fonts/Open_Sans/OpenSans-SemiBold.ttf'),
      'opensans-italic': require('../assets/fonts/Open_Sans/OpenSans-Italic.ttf'),
      'opensans-light': require('../assets/fonts/Open_Sans/OpenSans-Light.ttf'),

    });
    this.setState({ fontLoaded: true });
  }

  render() {
    return (
      <RootStack screenProps={{fontLoaded: this.state.fontLoaded}} />
    );
  }
}