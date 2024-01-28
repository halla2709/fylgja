import React, { useEffect, useState } from 'react';
import * as Font from 'expo-font';
import { LogInScreen } from './src/screens/LogInScreen.js';
import AsyncStorage from "@react-native-async-storage/async-storage";
import AppContainer from './src/screens/AppContainer.js';
export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const [loginStatusLoaded, setLoginStatusLoaded] = useState(false);

  useEffect(() => {
    getLoginInformation();
    loadFonts();
  }, []);

  function loadFonts() {
    Font.loadAsync({
      'merriweather-black': require('./src/assets/fonts/Merriweather/Merriweather-Black.ttf'),
      'merriweather-bold': require('./src/assets/fonts/Merriweather/Merriweather-Bold.ttf'),
      'merriweather-regular': require('./src/assets/fonts/Merriweather/Merriweather-Regular.ttf'),
      'merriweather-light': require('./src/assets/fonts/Merriweather/Merriweather-Light.ttf'),
      'dosis-medium': require('./src/assets/fonts/Dosis/Dosis-Medium.ttf'),
      'dosis-regular': require('./src/assets/fonts/Dosis/Dosis-Regular.ttf'),
      'dosis-bold': require('./src/assets/fonts/Dosis/Dosis-Bold.ttf'),
      'opensans-regular': require('./src/assets/fonts/Open_Sans/OpenSans-Regular.ttf'),
      'opensans-italic': require('./src/assets/fonts/Open_Sans/OpenSans-Italic.ttf'),
      'opensans-bold': require('./src/assets/fonts/Open_Sans/OpenSans-Bold.ttf'),
      'opensans-semibold': require('./src/assets/fonts/Open_Sans/OpenSans-SemiBold.ttf'),
    })
      .then(() => {
        setFontLoaded(true);
      })
      .catch(() => {
        console.error("Could not load fonts");
      });
  }

  async function getLoginInformation() {
    try {
      console.log("checking login");
      const value = await AsyncStorage.getItem('hasLoggedIn');
      console.log("login is " + value);
      setLoginStatusLoaded(true);
      setLoggedIn(value);
    }
    catch (error) {
      // Error retrieving data
      console.error(error);
      setLoginStatusLoaded(true);
    }
  }

  function onLoggedIn() {
    setLoggedIn(true);
  }

    return (
      (fontLoaded && loginStatusLoaded) ?
        (loggedIn ? <AppContainer/> : <LogInScreen loginCallback={onLoggedIn}/>)
        : null
    );
}