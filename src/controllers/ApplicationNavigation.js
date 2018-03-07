import React from 'react';
import { StackNavigator, DrawerNavigator } from 'react-navigation';
import { Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { HomeScreen } from '../screens/HomeScreen.js';
import { SearchScreen } from '../screens/SearchScreen.js';
import { InformationScreen } from '../screens/InformationScreen.js';
import { NewsFeedScreen } from '../screens/NewsfeedScreen.js';
import DrawerComponent from '../components/DrawerComponent.js';

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
    Nav: { 
        screen: NavStack 
    },
    Information: {
        screen: InformationScreen
    },
    NewsFeed: {
        screen: NewsFeedScreen
    }
},
{
    contentComponent: DrawerComponent
});

const RootStack = StackNavigator({
    DrawerStack: { screen: DrawerStack }
},
{
    headerMode: 'screen',
    navigationOptions: ({navigation}) => ({
        headerLeft: <Ionicons onPress={() => 
            navigation.navigate('DrawerToggle')}
            name="md-menu" size={42} color="rgb(251,199,6)" />,
        headerStyle: {
            backgroundColor: 'rgb(34,82,171)',
            paddingLeft: 10
        }
    })
});

export default RootStack;