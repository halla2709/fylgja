import * as Device from 'expo-device';
import * as Notifications from 'expo-notifications';
import Constants from 'expo-constants';
import { initializeApp } from "firebase/app";
import { getFirestore, doc, setDoc } from "firebase/firestore/lite";
//import firebaseConfig from '../assets/firebase/fylgjaofficial';
import firebaseConfig from '../assets/firebase/fylgjatestconfig'; 
import { Platform } from 'react-native';

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);
const firestoreDb = getFirestore(firebase);

function writeExpoTokenToFirestore(token) {
  const docRef = doc(firestoreDb, "tokens/" + token.data);
  setDoc(docRef, { lastActive: Date.now() })
    .then(function () {
      console.log("Written to db");
    })
    .catch(function (error) {
      console.error(error);
    });

}

export default async function registerForPushNotificationsAsync() {
  let token;
  if (Device.isDevice) {
    const { status: existingStatus } = await Notifications.getPermissionsAsync();
    let finalStatus = existingStatus;
    if (existingStatus !== 'granted') {
      const { status } = await Notifications.requestPermissionsAsync();
      finalStatus = status;
    }
    if (finalStatus !== 'granted') {
      alert('Failed to get necessary information for push notifications!');
      return;
    }
    token = await Notifications.getExpoPushTokenAsync({
      projectId: Constants.expoConfig.extra.eas.projectId,
    });
    console.log(token);
    writeExpoTokenToFirestore(token);
  } else {
    alert('Must use physical device for Push Notifications');
  }

  if (Platform.OS === 'android') {
    Notifications.setNotificationChannelAsync('default', {
      name: 'default',
      importance: Notifications.AndroidImportance.MAX,
      vibrationPattern: [0, 250, 250, 250],
      lightColor: '#FF231F7C',
    });
  }
  return token;
}
