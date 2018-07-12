import React from 'react';
import { StackNavigator, DrawerNavigator } from 'react-navigation';
import { Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { HomeScreen } from '../screens/HomeScreen.js';
import { SearchScreen } from '../screens/SearchScreen.js';
import { InformationScreen } from '../screens/InformationScreen.js';
import { NewsFeedScreen } from '../screens/NewsFeedScreen.js';
import { ReaderScreen } from '../screens/ReaderScreen.js';
import DrawerComponent from '../components/DrawerComponent.js';

const MainStack = StackNavigator({
    Home: {
        screen: HomeScreen
    },
    Search: {
        screen: SearchScreen
    },
    Reader: {
        screen: ReaderScreen
    }
},
    {
        initialRouteName: 'Home',
        title: 'Main',
        headerMode: 'none'
    }
)

const DrawerStack = DrawerNavigator({
    Main: { 
        screen: MainStack 
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
            name="md-menu" size={42} color="white" />,
            
        headerRight: (<View/>),        
        headerStyle: {
            backgroundColor: 'rgb(34,82,171)',
            paddingLeft: 10
        },
        headerTintColor:'white',
        headerTitleStyle: {
            fontSize: 25, 
            alignSelf: 'center',
          },
        
    })
});

export default RootStack;