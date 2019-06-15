import React from 'react';
import { PixelRatio } from 'react-native';
import { createStackNavigator, createDrawerNavigator } from 'react-navigation';
import { Ionicons } from '@expo/vector-icons';
import { HomeScreen } from '../screens/HomeScreen.js';
import { SearchScreen } from '../screens/SearchScreen.js';
import { InformationScreen } from '../screens/InformationScreen.js';
import { NewsOverviewScreen } from '../screens/NewsOverviewScreen.js';
import { NewsFeedScreen } from '../screens/NewsFeedScreen.js';
import { ReaderScreen } from '../screens/ReaderScreen.js';
import DrawerComponent from '../components/DrawerComponent.js';

const ReaderStack = createStackNavigator({
    Search: {
        screen: SearchScreen
    },
    Reader: {
        screen: ReaderScreen
    }
},
    {
        initialRouteName: 'Search',
        title: 'Handbók',
        headerMode: 'none'
    }
)
const NewsFeedStack = createStackNavigator({
    Overview: {
        screen: NewsOverviewScreen
    },
    News: {
        screen: NewsFeedScreen
    }
},
    {
        initialRouteName: 'Overview',
        title: 'Fréttir',
        headerMode: 'none'
    }
)

const InformationStack = createStackNavigator({
    Information: {
        screen: InformationScreen
    }
},
    {
        title: 'Upplýsingar',
        headerMode: 'none'
    }
)

const MainStack = createStackNavigator({
    Home: {
        screen: HomeScreen
    },
    ReaderStack: {
        screen: ReaderStack
    },
    InformationStack: {
        screen: InformationStack
    },
    NewsFeedStack: {
        screen: NewsFeedStack
    }
},
    {
        headerMode: 'none'
    }
)

const DrawerStack = createDrawerNavigator({
    Main: {
        screen: MainStack
    }
},
    {
        contentComponent: DrawerComponent
    });


const RootStack = createStackNavigator({
    DrawerStack: { screen: DrawerStack }
},
    {
        headerMode: 'screen',
        swipeEnabled: false,
        animationEnabled: false,
        navigationOptions: ({ navigation }) => ({
            headerLeft:
            <Ionicons onPress={() => navigation.toggleDrawer()}
                name="md-menu" size={35} color="white" />,
            headerRight:
            <Ionicons onPress={() => navigation.goBack(null)} 
                name="ios-undo" size={35} color="white" />, 
            headerStyle: {
                backgroundColor: 'rgb(34,82,171)',
                paddingLeft: 10,
                paddingRight: 10,
            },
            headerTintColor: 'white',
            headerTitleStyle: {
                fontSize: 25,
                alignSelf: 'center',
            },

        })
    });

export default RootStack;
