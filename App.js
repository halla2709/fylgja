import React from 'react';
import { Font, Notifications } from 'expo';
import { View, Text, Platform } from 'react-native';
import NotificationPopup from 'react-native-push-notification-popup';
import InformationScraper from './src/controllers/InformationScraper';
import registerForPushNotificationsAsync from './src/controllers/NotificationController';
import AppContainer from './src/screens/AppContainer.js';
import Styles from './src/styles/Styles';
import NavigationService from './src/controllers/NavigationService';

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
    console.log("subscribing to notifications");
    if (Platform.OS === 'android') {
      Expo.Notifications.createChannelAndroidAsync('reminders', {
        name: 'Reminders',
        priority: 'max',
        vibrate: [0, 250, 250, 250],
      })
        .then(() => { console.log("Created channel"); });
    }
    this._notificationSubscription = Notifications.addListener(this._handleNotification);
  }

  _handleNotification = (notification) => {
    this.popup.show({
      onPress: function () { console.log("Navigating"); NavigationService.navigate('NewsFeedStack', { drawerContent: "news" }); },
      appIconSource: require('./src/assets/images/logo.png'),
      appTitle: 'Fylgjan',
      title: "Ný færsla",
      body: "Ný frétt, viðburður eða ráðstefna á vegum Ljósmæðrafélagsins.",
    });
    this.setState({ notification: notification });
  };

  render() {
    return (
      <View style={Styles.appcontainer}>
        <AppContainer navigatorRef={navigatorRef => { NavigationService.setTopLevelNavigator(navigatorRef); }} />
        <NotificationPopup ref={ref => this.popup = ref} />
      </View>
    );
  }
}