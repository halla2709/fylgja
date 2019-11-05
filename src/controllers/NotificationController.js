import { Notifications } from 'expo';
import * as Permissions from 'expo-permissions'
import * as firebase from 'firebase';
import 'firebase/firestore';
import firebaseConfig from '../assets/firebaseConfig';

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
    array: firebase.firestore.FieldValue.arrayUnion(token)
  })
  .then(function(){
    console.log("Written to db");
  })
  .catch(function(error) {
    console.log(error);
  });

  console.log(token);
  return;
}
