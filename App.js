import React from 'react';
import { Font, Notifications } from 'expo';
import { View, Text } from 'react-native';
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
    this._notificationSubscription = Notifications.addListener(this._handleNotification);
    this.scraper = new InformationScraper();
    try{
      this.scraper.init();
    }
    catch(err) {
      console.error("Could not open information scaper", err);
    }
  }

  _handleNotification = (notification) => {
    console.log(notification);
    this.popup.show({
      onPress: function() { console.log("Navigating"); NavigationService.navigate('NewsOverviewScreen', {});},
      appIconSource: require('./src/assets/images/logo.png'),
      appTitle: 'Fylgjan',
      title: "Ný frétt",
      body: "Ný frétt hefur verið birt í appinu.",
    });
    this.setState({notification: notification});
  };

  render() {
    return (
      <View style={Styles.appcontainer}>
        <NotificationPopup ref={ref => this.popup = ref} />
        <AppContainer navigatorRef={navigatorRef => {
          NavigationService.setTopLevelNavigator(navigatorRef);}
        }/>
      </View>
    );
  }
}