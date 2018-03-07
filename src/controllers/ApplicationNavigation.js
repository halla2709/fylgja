import React from 'react';
import { StackNavigator, DrawerNavigator } from 'react-navigation';
import { Text } from 'react-native';
import { HomeScreen } from '../screens/HomeScreen.js';
import { SearchScreen } from '../screens/SearchScreen.js';

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
        title: 'Main',
        headerMode: 'none'
    })

const DrawerStack = DrawerNavigator({
    Nav: { screen: NavStack }
},
    {
        navigationOptions: {
            drawerLabel: 'Drawer'
        }
    });

const RootStack = StackNavigator({
    DrawerStack: { screen: DrawerStack }
},
{
    headerMode: 'screen',
    navigationOptions: {
        title: 'Hello',
        headerStyle: {
            backgroundColor: 'rgb(34,82,171)'
        },
        headerTitleStyle: {
            alignSelf: 'center'
        }
    }
});

export default RootStack;