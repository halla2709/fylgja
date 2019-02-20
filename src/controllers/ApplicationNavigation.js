import React from 'react';
import { createStackNavigator, createDrawerNavigator } from 'react-navigation';
import { Text, View, Image } from 'react-native';
import { Icon } from 'react-native-elements';
import { Ionicons } from '@expo/vector-icons';
import { HomeScreen } from '../screens/HomeScreen.js';
import { SearchScreen } from '../screens/SearchScreen.js';
import { InformationScreen } from '../screens/InformationScreen.js';
import { NewsFeedScreen } from '../screens/NewsFeedScreen.js';
import { ReaderScreen } from '../screens/ReaderScreen.js';
import DrawerComponent from '../components/DrawerComponent.js';

const MainStack = createStackNavigator({
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


const DrawerStack = createDrawerNavigator({
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


const RootStack = createStackNavigator({
    DrawerStack: { screen: DrawerStack }
},
{
    headerMode: 'screen',
    swipeEnabled: false,
    animationEnabled: false,
    navigationOptions: ({navigation}) => ({  
        headerLeft:     
                <Ionicons onPress={() => 
                navigation.toggleDrawer()}
                name="md-menu" size={35} color="white" />,
                headerRight: 
                <Icon name='home' size={35} color="white" type='font-awesome-5' 
                onPress={() => navigation.navigate('Home')}/> ,
            headerStyle: {
                backgroundColor: 'rgb(34,82,171)',
                paddingLeft: 10,
                paddingRight: 10,
            },
            headerTintColor:'white',  
            headerTitleStyle: {
                fontSize: 25, 
                alignSelf: 'center',
              },
            
        })
    });
    
    export default RootStack;
     