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
        'dosis-medium': require('./src/assets/fonts/Dosis/Dosis-Medium.ttf'),
        'opensans-regular': require('./src/assets/fonts/Open_Sans/OpenSans-Regular.ttf'),
        'spinwerad': require('./src/assets/fonts/Spinwerad/spinweradC.ttf')
      });
      this.setState({ fontLoaded: true });
    }

  render() {
    return <RootStack screenProps= {this.state}/>;
  }
}