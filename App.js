import React from 'react';
import * as Notifications from 'expo-notifications';
import { View, Text, Platform, LogBox } from 'react-native';
import NotificationPopup from 'react-native-push-notification-popup';
import InformationScraper from './src/controllers/InformationScraper';
import registerForPushNotificationsAsync from './src/controllers/NotificationController';
import AppContainer from './src/screens/AppContainer.js';
import Styles from './src/styles/Styles';
import NavigationService from './src/controllers/NavigationService';
import { DownloadChapters } from './src/controllers/Chapters';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notification: {}
    };
    LogBox.ignoreLogs(['Setting a timer']);
    
    //this.receivedSubscription = Notifications.addNotificationReceivedListener(this._handleNotification);
    //this.responseSubscription = Notifications.addNotificationResponseReceivedListener(response => {});
    this.notificationListener = Notifications.addNotificationReceivedListener(this._handleNotification);
    
    /* Notifications.setNotificationHandler({
      handleNotification: async () => ({
        shouldShowAlert: true,
        shouldPlaySound: false,
        shouldSetBadge: false
      })
    }); */
  }

 /*  componentWillUnmount() {
    console.log("unmount");
    this.receivedSubscription.remmove();
    this.responseSubscription.remmove();
  } */

  async componentDidMount() {
    DownloadChapters();
    registerForPushNotificationsAsync();
    
    // Handle notifications that are received or selected while the app
    // is open. If the app was closed and then opened by tapping the
    // notification (rather than just tapping the app icon to open it),
    // this function will fire on the next tick after the app starts
    // with the notification data.
  }
  componentWillUnmount() {
    Notifications.removeNotificationSubscription(this.notificationListener);
  }

  _handleNotification = (notification) => {
    // nota origin field í notification til að navigatea beint!
    // skoða warning
    console.log("Handling notifications");
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