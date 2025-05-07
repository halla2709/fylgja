import React, { useEffect, useRef, useContext } from 'react';
import * as Notifications from 'expo-notifications';
import { View } from 'react-native';
import NotificationPopup from 'react-native-push-notification-popup';
import registerForPushNotificationsAsync from '../controllers/NotificationController';
import Styles from '../styles/Styles';
import { NavigationContainer, useNavigationContainerRef } from '@react-navigation/native';
import { DownloadChapters } from '../controllers/Chapters';
import RootStack from '../controllers/ApplicationNavigation.js';
import { MainUrlContext } from '../components/MainUrlProvider.js';

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: false,
    shouldSetBadge: false,
  }),
});

export default function AppContainer(props) {
  const notificationListener = useRef();
  const responseListener = useRef();
  const notificationPopup = useRef();
  const navigationRef = useNavigationContainerRef();
  const { mainUrl } = useContext(MainUrlContext);
  useEffect(() => {
    if (mainUrl !== "") {
      DownloadChapters(mainUrl);
    }
  }, [mainUrl]);

  useEffect(() => {
    registerForPushNotificationsAsync();

    notificationListener.current = Notifications.addNotificationReceivedListener(notification => {
      notificationPopup.current.show({
        onPress: function () { navigationRef.navigate('NewsFeedStack'); },
        appIconSource: require('../assets/images/logo.png'),
        appTitle: 'Fylgjan',
        title: "Ný færsla",
        body: "Ný frétt, viðburður eða ráðstefna á vegum Ljósmæðrafélagsins.",
      });
    });

    responseListener.current = Notifications.addNotificationResponseReceivedListener(response => {
      navigationRef.navigate('NewsFeedStack');
    });

    return () => {
      Notifications.removeNotificationSubscription(notificationListener.current);
      Notifications.removeNotificationSubscription(responseListener.current);
    };
  }, []);

  
  return (
    <NavigationContainer ref={navigationRef}>
    <View style={Styles.appcontainer}>
      <RootStack /> 
      <NotificationPopup ref={ref => notificationPopup.current = ref} />
    </View>
    </NavigationContainer>
  );
}







