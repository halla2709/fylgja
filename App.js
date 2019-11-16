import React from 'react';
import { Notifications } from 'expo';
import * as Font from 'expo-font';
import { View, Text, Platform, YellowBox } from 'react-native';
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
    YellowBox.ignoreWarnings(['Setting a timer']);
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
      onPress: function () { NavigationService.navigate('NewsFeedStack', { drawerContent: "news" }); },
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