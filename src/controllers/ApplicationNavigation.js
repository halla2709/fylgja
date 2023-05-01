import React, { Component } from 'react';
import { PixelRatio } from 'react-native';
import { createSwitchNavigator, createAppContainer } from 'react-navigation';
import { createStackNavigator,TransitionPresets } from 'react-navigation-stack';
import SafeAreaView from 'react-native-safe-area-view';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { Ionicons } from '@expo/vector-icons';
import { HomeScreen } from '../screens/HomeScreen.js';
import { SearchScreen } from '../screens/SearchScreen.js';
import { InformationScreen } from '../screens/InformationScreen.js';
import { NewsOverviewScreen } from '../screens/NewsOverviewScreen.js';
import { NewsFeedScreen } from '../screens/NewsFeedScreen.js';
import { ReaderScreen } from '../screens/ReaderScreen.js';
import { LogInScreen } from '../screens/LogInScreen.js';
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
        headerMode: 'none',
        defaultNavigationOptions: {
            ...TransitionPresets.ScaleFromCenterAndroid
        }
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
        headerMode: 'none',
        defaultNavigationOptions: {
            ...TransitionPresets.FadeFromBottomAndroid
        }
    }
)

const InformationStack = createStackNavigator({
    Information: {
        screen: InformationScreen
    }
},
    {
        title: 'Upplýsingar',
        headerMode: 'none',
        defaultNavigationOptions: {
            ...TransitionPresets.FadeFromBottomAndroid
        }
    }
)

const MainStack = createStackNavigator({
    Home: {
        screen: HomeScreen
    }, ReaderStack: {
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
        headerMode: 'none',
        defaultNavigationOptions: {
            ...TransitionPresets.ScaleFromCenterAndroid
        }
    }
)

const DrawerStack = createDrawerNavigator({
    Main: {
        screen: MainStack
    }
},
{
    contentComponent: DrawerComponent,
    headerMode: 'none',
});


const AppStack = createStackNavigator({
    DrawerStack: { screen: DrawerStack }
},
{
    headerMode: 'screen',
    swipeEnabled: false,
    animationEnabled: false,
    defaultNavigationOptions: ({ navigation }) => ({
        headerTitle:'',
        headerLeft: () =>
         <SafeAreaView style={{flex:1}} forceInset={{ top: 'never' }}>
            <Ionicons onPress={() => navigation.toggleDrawer()}
                name="menu-outline" size={34} color="white" style={{ height: 34 }} />
                </SafeAreaView>,
        headerRight: () =>
        <SafeAreaView style={{flex:1}} forceInset={{ top: 'never' }}>
            <Ionicons onPress={() => navigation.goBack(null)}
                name="arrow-undo-outline" size={34} color="white" style={{ height: 34 }} />
                    </SafeAreaView>,
        headerLeftContainerStyle: {
            padding: 10,
        },
        headerRightContainerStyle: {
            padding: 10,
        },
        headerStyle: {
            backgroundColor: 'rgb(34,82,171)',
            height: 85
        },
        headerTintColor: 'white',
        headerTitleStyle: {
            fontSize: 25 / PixelRatio.getFontScale(),
            alignSelf: 'center',
        },

    })
});

const RootStack = createSwitchNavigator({
    App: AppStack,
    LogIn: LogInScreen
},
    {
        initialRouteName: 'LogIn'
    })

export default createAppContainer(RootStack);
