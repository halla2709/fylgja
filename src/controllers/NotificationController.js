import * as Permissions from 'expo-permissions'
import * as Notifications from 'expo-notifications';
import * as firebase from 'firebase';
import 'firebase/firestore';
import firebaseConfig from '../assets/firebaseConfig';
import { Platform } from 'react-native';
import { useEffect } from 'react';

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const firestore = firebase.firestore();
var token;

export default async function registerForPushNotificationsAsync() {
  let finalStatus;
  try {
    const { existingStatus } = await Permissions.getAsync(Permissions.NOTIFICATIONS);
    finalStatus = existingStatus;

    // only ask if permissions have not already been determined, because
    // iOS won't necessarily prompt the user a second time.
    if (existingStatus !== 'granted') {
      // Android remote notification permissions are granted during the app
      // install, so this will only ask on iOS
      const { status } = await Permissions.askAsync(Permissions.NOTIFICATIONS);
      finalStatus = status;
    }
  }
  catch (e) {
    console.log(e);
    return;
  }

  // Stop here if the user did not grant permissions
  if (finalStatus !== 'granted') {
    return;
  }

  // Get the token that uniquely identifies this device
  token = await Notifications.getExpoPushTokenAsync();

  firestore.collection("tokens").doc("tokens").update({
    array: firebase.firestore.FieldValue.arrayUnion(token.data)
  })
  .then(function(){
    console.log("Written to db");
  })
  .catch(function(error) {
    console.log(error);
  });

  console.log(token);

  if (Platform.OS === 'android') {
    Notifications.setNotificationChannelAsync('default', {
      name: 'default',
      importance: Notifications.AndroidImportance.MAX,
      vibrationPattern: [0, 250, 250, 250],
      lightColor: '#FF231F7C',
    });
  }
  
  return;
}
