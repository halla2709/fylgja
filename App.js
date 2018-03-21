import React from 'react';
import { Font } from 'expo';
import RootStack from './src/controllers/ApplicationNavigation.js'

export default class App extends React.Component {
  state = {
    fontLoaded: false
  };
  
    async componentWillMount() {
      await Font.loadAsync({
        'merriweather-black': require('./src/assets/fonts/Merriweather/Merriweather-Black.ttf'),
        'merriweather-regular': require('./src/assets/fonts/Merriweather/Merriweather-Regular.ttf'),
        'merriweather-italic': require('./src/assets/fonts/Merriweather/Merriweather-Italic.ttf'),
        'merriweather-bold': require('./src/assets/fonts/Merriweather/Merriweather-Bold.ttf'),
        'merriweather-light': require('./src/assets/fonts/Merriweather/Merriweather-Bold.ttf'),

        'dosis-medium': require('./src/assets/fonts/Dosis/Dosis-Medium.ttf'),
        'dosis-regular': require('./src/assets/fonts/Dosis/Dosis-Regular.ttf'),
        'dosis-bold': require('./src/assets/fonts/Dosis/Dosis-Bold.ttf'),
        'dosis-medium': require('./src/assets/fonts/Dosis/Dosis-Medium.ttf'),
        'dosis-semibold': require('./src/assets/fonts/Dosis/Dosis-SemiBold.ttf'),
        'dosis-light': require('./src/assets/fonts/Dosis/Dosis-Light.ttf'),

        'opensans-regular': require('./src/assets/fonts/Open_Sans/OpenSans-Regular.ttf'),
        'opensans-bold': require('./src/assets/fonts/Open_Sans/OpenSans-Bold.ttf'),
        'opensans-semibold': require('./src/assets/fonts/Open_Sans/OpenSans-SemiBold.ttf'),
        'opensans-italic': require('./src/assets/fonts/Open_Sans/OpenSans-Italic.ttf'),
        'opensans-light': require('./src/assets/fonts/Open_Sans/OpenSans-Light.ttf'),
  
      });
      this.setState({ fontLoaded: true });
    }

  render() {
    return <RootStack screenProps= {this.state}/>;
  }
}