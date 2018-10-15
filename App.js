import React from 'react';
import { Font, Notifications } from 'expo';
import { View, Text } from 'react-native';
import NotificationPopup from 'react-native-push-notification-popup';
import InformationScraper from './src/controllers/InformationScraper';
import registerForPushNotificationsAsync from './src/controllers/NotificationController';
import RootStack from './src/controllers/ApplicationNavigation.js';
import AppContainer from './src/screens/AppContainer.js';
import Styles from './src/styles/Styles';

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      notification: {}
    };
  }

  async componentDidMount() {
    registerForPushNotificationsAsync();

    // Handle notifications that are received or selected while the app
    // is open. If the app was closed and then opened by tapping the
    // notification (rather than just tapping the app icon to open it),
    // this function will fire on the next tick after the app starts
    // with the notification data.
    this._notificationSubscription = Notifications.addListener(this._handleNotification);
    this.scraper = new InformationScraper();
    //this.scraper.init();
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