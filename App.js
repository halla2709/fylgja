import React from 'react';
import { StackNavigator, DrawerNavigator } from 'react-navigation';
import { StyleSheet, Text, View, Button, Alert, TouchableOpacity, TouchableHighlight } from 'react-native';
import { Font } from 'expo'; 
import { HomeScreen } from './src/screens/HomeScreen.js';
import { SearchScreen } from './src/screens/SearchScreen.js';

const NavStack = StackNavigator({
  Home: {
    screen: HomeScreen,
  },
  Search: {
    screen: SearchScreen
  }
},
{
  initialRouteName: 'Home',
  headerMode: 'float',
  navigationOptions: {
    headerStyle: {
      backgroundColor: 'rgb(34,82,171)'
    },
    headerTintColor: '#fff',
    title: 'Welcome!'
  }
})

const RootStack = DrawerNavigator({
  Nav: { screen: NavStack }
},
{
  navigationOptions: {
    drawerLabel: 'Drawer'
  }
});

export default class App extends React.Component {
  render() {
    return <RootStack />;
  }
}
