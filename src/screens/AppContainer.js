import React from 'react';
import {
  Font,
} from 'expo';
import { View, Text } from 'react-native';
import RootStack from '../controllers/ApplicationNavigation.js';
import Styles from './../styles/Styles';
import { HomeScreen } from './HomeScreen.js';
import { Scraper } from "../controllers/InformationScraper";

export default class AppContainer extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      fontLoaded: false
    };
  }

  async componentDidMount() {
    await Font.loadAsync({
      'merriweather-black': require('../assets/fonts/Merriweather/Merriweather-Black.ttf'),
      'merriweather-regular': require('../assets/fonts/Merriweather/Merriweather-Regular.ttf'),
      //'merriweather-italic': require('../assets/fonts/Merriweather/Merriweather-Italic.ttf'),
      //'merriweather-bold': require('../assets/fonts/Merriweather/Merriweather-Bold.ttf'),
      'merriweather-light': require('../assets/fonts/Merriweather/Merriweather-Light.ttf'),

      'dosis-medium': require('../assets/fonts/Dosis/Dosis-Medium.ttf'),
      'dosis-regular': require('../assets/fonts/Dosis/Dosis-Regular.ttf'),
      //'dosis-bold': require('../assets/fonts/Dosis/Dosis-Bold.ttf'),
      //'dosis-semibold': require('../assets/fonts/Dosis/Dosis-SemiBold.ttf'),
      //'dosis-light': require('../assets/fonts/Dosis/Dosis-Light.ttf'),
      //'dosis-extralight': require('../assets/fonts/Dosis/Dosis-ExtraLight.ttf'),

      'opensans-regular': require('../assets/fonts/Open_Sans/OpenSans-Regular.ttf'),
      'opensans-bold': require('../assets/fonts/Open_Sans/OpenSans-Bold.ttf'),
      //'opensans-semibold': require('../assets/fonts/Open_Sans/OpenSans-SemiBold.ttf'),
      //'opensans-italic': require('../assets/fonts/Open_Sans/OpenSans-Italic.ttf'),
      //'opensans-light': require('../assets/fonts/Open_Sans/OpenSans-Light.ttf'),
      'MaterialIcons': require('@expo/vector-icons/fonts/MaterialIcons.ttf')

    });
    this.setState({ fontLoaded: true });
    
    try {
      console.log("Init from container");
      Scraper.init();
      console.log("After init");
    }
    catch (err) {
      console.error("Could not open information scaper", err);
    }
  }

  render() {
    return (
      <RootStack ref={this.props.navigatorRef}
        screenProps={{ fontLoaded: this.state.fontLoaded }} />
    );
  }
}