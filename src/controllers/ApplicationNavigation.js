import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { SearchScreen } from '../screens/SearchScreen';
import { ReaderScreen } from '../screens/ReaderScreen';
import { NewsOverviewScreen } from '../screens/NewsOverviewScreen';
import { NewsFeedScreen } from '../screens/NewsFeedScreen';
import { InformationScreen } from '../screens/InformationScreen';
import DrawerComponent from '../components/DrawerComponent';
import { HomeScreen } from '../screens/HomeScreen';
import Ionicons from '@expo/vector-icons/Ionicons';
import { PixelRatio, SafeAreaView } from 'react-native';
import { DrawerContentChanger, DrawerContentContext } from '../components/DrawerContentContext';
import { DrawerActions } from '@react-navigation/native';
import { useState } from 'react';

const stackScreenHeaderOptions = ({ navigation }) => ({
  ...TransitionPresets.ScaleFromCenterAndroid,
  headerTitle: '',
  headerLeft: () =>
    <SafeAreaView style={{ flex: 1 }} forceInset={{ top: 'never' }}>
      <Ionicons onPress={() => navigation.toggleDrawer()}
        name="md-menu" size={34} color="white" style={{ height: 34 }} />
    </SafeAreaView>,
  headerRight: () =>
    <SafeAreaView style={{ flex: 1 }} forceInset={{ top: 'never' }}>
      <Ionicons onPress={() => { navigation.goBack()}}
        name="arrow-undo" size={30} color="white" style={{ height: 34 }} />
    </SafeAreaView>,
  headerLeftContainerStyle: {
    padding: 10,
  },
  headerRightContainerStyle: {
    padding: 10,
  },
  headerStyle: {
    backgroundColor: 'rgb(34,82,171)'
  },
  headerTintColor: 'white',
  headerTitleStyle: {
    fontSize: 25 / PixelRatio.getFontScale(),
    alignSelf: 'center',
  }
});
const homeScreenHeaderOptions = ({ navigation }) => ({
  ...TransitionPresets.ScaleFromCenterAndroid,
  headerTitle: '',
  headerLeft: () =>
    <SafeAreaView style={{ flex: 1 }} forceInset={{ top: 'never' }}>
      <Ionicons onPress={() => navigation.toggleDrawer()}
        name="md-menu" size={34} color="white" style={{ height: 34 }} />
    </SafeAreaView>,
  headerLeftContainerStyle: {
    padding: 10,
  },
  headerRightContainerStyle: {
    padding: 10,
  },
  headerStyle: {
    backgroundColor: 'rgb(34,82,171)'
  },
  headerTintColor: 'white',
  headerTitleStyle: {
    fontSize: 25 / PixelRatio.getFontScale(),
    alignSelf: 'center',
  }
});

const Stack = createStackNavigator();


const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  const [drawerContent, setDrawerContent] = useState("");

  function ReaderStack() {
    return (
      <Stack.Navigator
        initialRouteName='Search'
        screenOptions={stackScreenHeaderOptions}
      >
        <Stack.Screen name='Search' component={SearchScreen} />
        <Stack.Screen name='Reader' component={ReaderScreen}>
        </Stack.Screen>
      </Stack.Navigator>
    )
  }

  function NewsFeedStack() {
    return (
      <Stack.Navigator
        initialRouteName='Overview'
        screenOptions={stackScreenHeaderOptions}>
        <Stack.Screen name='Overview' component={NewsOverviewScreen} />
        <Stack.Screen name='News' component={NewsFeedScreen} />
      </Stack.Navigator>
    )
  }

  function InformationStack() {
    return (
      <Stack.Navigator
        screenOptions={stackScreenHeaderOptions}>
        <Stack.Screen name='Information' component={InformationScreen} />
      </Stack.Navigator>
    )
  }

  function HomeStack() {
    return (
      <Stack.Navigator
        screenOptions={homeScreenHeaderOptions}>
        <Stack.Screen name='Home' component={HomeScreen} />
      </Stack.Navigator>
    )
  }

  return (
    <DrawerContentContext.Provider value={drawerContent}>
      <DrawerContentChanger.Provider value={setDrawerContent}>
        <Drawer.Navigator
          initialRouteName='Home'
          drawerContent={(props) => <DrawerComponent {...props} />}
          backBehavior='history'
          screenOptions={{ headerShown: false }}
        >
          <Drawer.Screen name="HomeStack" component={HomeStack} />
          <Drawer.Screen name="ReaderStack" component={ReaderStack} initialParams={{ drawerContent: "chapters" }} />
          <Drawer.Screen name="NewsFeedStack" component={NewsFeedStack} initialParams={{ drawerContent: "news" }} />
          <Drawer.Screen name="InformationStack" component={InformationStack} initialParams={{ drawerContent: "information" }} />
        </Drawer.Navigator>
      </DrawerContentChanger.Provider>
    </DrawerContentContext.Provider>

  )
}

function MainStack() {
  return (
    <Stack.Navigator
      screenOptions={({ navigation }) => ({
        headerTitle: '',
        headerLeft: () =>
          <SafeAreaView style={{ flex: 1 }} forceInset={{ top: 'never' }}>
            <Ionicons onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
              name="md-menu" size={34} color="white" style={{ height: 34 }} />
          </SafeAreaView>,
        headerRight: () =>
          <SafeAreaView style={{ flex: 1 }} forceInset={{ top: 'never' }}>
            <Ionicons onPress={() => { navigation.goBack() }}
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
        }
      })}>
      <Stack.Screen name="MainDrawer" component={DrawerNavigator} />
    </Stack.Navigator>
  )
}

export default DrawerNavigator;