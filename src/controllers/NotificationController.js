import { Permissions, Notifications } from 'expo';
import * as firebase from 'firebase';
import 'firebase/firestore';
import firebaseConfig from '../assets/firebaseConfig';

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const firestore = firebase.firestore();
const settings = {timestampsInSnapshots: true};
firestore.settings(settings);
var token;

/*firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.
    console.log("User is signed in! Id ", user.uid); 
    const userId = user.uid;
    if(token) {
      console.log("Saving token");
      firebase.database().ref('tokens/' + userId).set({
        token: token
      });  
    } 
    // ...
  } else {
    console.log("User is signed out!");    
    // User is signed out.
    // ...
  }
  // ...
});*/

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
    console.error(e);
    return;
  }

  // Stop here if the user did not grant permissions
  if (finalStatus !== 'granted') {
    return;
  }

  // Get the token that uniquely identifies this device
  token = await Notifications.getExpoPushTokenAsync();
  /*console.log(firebase.auth().currentUser);
  firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL)
  .then(function() {
    return firebase.auth().signInAnonymously();
  })
  .catch(function(error) {
    // Handle Errors here.
    console.error(error);
  });*/

  firestore.collection("tokens").doc(token).set({})
  .then(function(){
    console.log("Written to db");
  })
  .catch(function(error) {
    console.error(error);

  });

  console.log(token);
  return;
}
