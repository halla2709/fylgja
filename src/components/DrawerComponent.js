import React from 'react'
import { StyleSheet, Text, View, Image, ScrollView, FlatList } from 'react-native'
import { NavigationActions } from 'react-navigation'
import ChapterListItem from './ChapterListItem'
import styles from '../styles/Styles'
import Chapters from "../assets/testContent/chapters.js";
import { GetCurrentRouteParams } from '../controllers/NavigationHelper.js';

export default class DrawerComponent extends React.Component {

  render() {
    const { navigation } = this.props;
    const params = GetCurrentRouteParams(navigation.state);
    var drawerContent;
    if (params) {
      if (params.drawerContent === "chapters") {
        drawerContent =
          <FlatList
            data={Chapters}
            renderItem={({ item }) => <ChapterListItem chapter={item} level={0} currentChapter={params.currentChapter} />}
            extraData={currentChapter = params.currentChapter}
          />
      }
    }
    return (
      <View style={styles.drawer}>

        <View>
          {drawerContent}
          <Image resizeMode="contain" style={styles.drawerGold} source={require('../assets/images/1.png')} />
        </View>


        <Text
          onPress={() => navigation.navigate('Search', { drawerContent: "chapters" })}
          style={styles.drawerItem}>
          Handbók
        </Text>

        <Text
          onPress={() => navigation.navigate('Information', { drawerContent: "information" })}
          style={styles.drawerItem}>
          Upplýsingar
        </Text>
        <Text
          onPress={() => navigation.navigate('NewsFeed', { drawerContent: "news" })}
          style={styles.drawerItem}>
          Fréttaveita
        </Text>

        <View>
          <Image resizeMode="contain" style={styles.drawerGold} source={require('../assets/images/2.png')} />
        </View>


      </View>

    )
  }
}