import React from 'react';
import * as Font from 'expo-font';
import RootStack from '../controllers/ApplicationNavigation.js';

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
    
  }

  render() {
    return (
      <RootStack ref={this.props.navigatorRef}
        screenProps={{ fontLoaded: this.state.fontLoaded }} />
    );
  }
}