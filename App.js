import React from 'react';
import { Font, Notifications } from 'expo';
import { View, Text } from 'react-native';
import NotificationPopup from 'react-native-push-notification-popup';
import registerForPushNotificationsAsync from './src/controllers/NotificationController';
import RootStack from './src/controllers/ApplicationNavigation.js';
import AppContainer from './src/screens/AppContainer.js';
import Styles from './src/styles/Styles';

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      fontLoaded: false,
      notification: {}
    };
  }

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

  async componentDidMount() {
    registerForPushNotificationsAsync();

    // Handle notifications that are received or selected while the app
    // is open. If the app was closed and then opened by tapping the
    // notification (rather than just tapping the app icon to open it),
    // this function will fire on the next tick after the app starts
    // with the notification data.
    this._notificationSubscription = Notifications.addListener(this._handleNotification);
  }

  _handleNotification = (notification) => {
    this.popup.show({
      onPress: function() {console.log('Pressed')},
      appIconSource: require('./src/assets/images/logo.png'),
      appTitle: 'Some App',
      timeText: 'Now',
      title: 'Hello World',
      body: 'This is a sample message.\nTesting emoji 😀',
    });
    this.setState({notification: notification});
  };
  
  render() {
    return (
      <View style={Styles.appcontainer}>
        <NotificationPopup ref={ref => this.popup = ref} />
        <AppContainer/>
      </View>
    );
  }
}