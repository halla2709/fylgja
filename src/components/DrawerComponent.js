import React from 'react'
import { Text, View, Image, FlatList, TouchableOpacity, StatusBar } from 'react-native'
import { StackActions } from '@react-navigation/native';
import ChapterListItem from './ChapterListItem'
import styles from '../styles/Styles'
import { GetChapters } from "../controllers/Chapters.js";
import { useContext } from 'react';
import { DrawerContentContext, DrawerContentChanger } from './DrawerContentContext';

export default props => {
  const drawerContentString = useContext(DrawerContentContext);
  const setChapterKey = useContext(DrawerContentChanger);

  function onChapterPressed(chapterKey) {
    props.navigation.closeDrawer();
    setChapterKey(chapterKey);
  }

  function navigate(navigation, options) {
    props.navigation.closeDrawer();
    props.navigation.navigate(navigation, options);
  }

  function GenerateDrawerContent() {
    if (currentRouteParams.drawerContent === "chapters") {
      drawerContent =
        <FlatList
          data={GetChapters()}
          renderItem={({ item }) =>
            <ChapterListItem style={styles.chapterlist} chapter={item} level={0} currentChapter={drawerContentString} onChapterPressed={(chapterKey) => onChapterPressed(chapterKey)} />}
          extraData={currentChapter = drawerContentString}
        />
    }
    else {
      drawerContent = [];
    }
  }

  function GetCurrentRouteParams(state) {
    if (state.index || state.index === 0) {
      return GetCurrentRouteParams(state.routes[state.index]);
    }
    else if (state.state) {
      return GetCurrentRouteParams(state.state);
    }
    else {
      return state.params;
    }
  }

  function GetDrawerContent(routeParams) {
    if (routeParams == null)
      currentRouteParams = {};
    else
      currentRouteParams = routeParams;

    GenerateDrawerContent();
  }

  GetDrawerContent(GetCurrentRouteParams(props.state));
  return (
    <View style={styles.drawer}>
      <StatusBar backgroundColor={'rgb(34,82,171)'} />
      <TouchableOpacity onPress={() => { navigate('HomeStack') }}>
        <View style={styles.drawerLogo}>
          <Image resizeMode='contain' style={styles.drawerImage} source={require('../assets/images/logo.png')} />
          <View style={styles.drawerLogoText}>
            <Text style={styles.ljosmaedrafelagInfo1}>Ljósmæðrafélag</Text>
            <Text style={styles.ljosmaedrafelagInfo2}>Íslands</Text>
          </View>
        </View>
      </TouchableOpacity>


      {drawerContent}

      <View style={styles.drawerButtons} >
        <TouchableOpacity onPress={() => navigate('NewsFeedStack', { drawerContent: "news" })}>
          <Text style={styles.drawerItem1}> Fréttaveita </Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigate('InformationStack', { drawerContent: "information" })}>
          <Text style={styles.drawerItem2}> Upplýsingar </Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigate('ReaderStack')}>
          <Text style={styles.drawerItem3}> Handbók  </Text>
        </TouchableOpacity>

      </View>
    </View>

  );
}


