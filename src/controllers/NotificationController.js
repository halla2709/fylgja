import * as Notifications from 'expo-notifications';
//import * as firebase from 'firebase';
//import 'firebase/firestore';
//import firebaseConfig from '../assets/firebaseConfig';
import { Platform } from 'react-native';

// Initialize Firebase
//firebase.initializeApp(firebaseConfig);
//const firestore = firebase.firestore();
var token;

export default async function registerForPushNotificationsAsync() {
  let finalStatus;
  try {
    const { status: existingStatus } = await Notifications.getPermissionsAsync();
    if (existingStatus !== 'granted') {
      const { status } = await Notifications.requestPermissionsAsync();
      finalStatus = status;
    };
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

  // firestore.collection("tokens").doc("tokens").update({
  //   array: firebase.firestore.FieldValue.arrayUnion(token.data)
  // })
  // .then(function(){
  //   console.log("Written to db");
  // })
  // .catch(function(error) {
  //   console.log(error);
  // });

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
