import React from 'react'
import { StyleSheet, Text, View, Image, ScrollView, FlatList } from 'react-native'
import { NavigationActions } from 'react-navigation'
import ChapterListItem from './ChapterListItem'
import styles from '../styles/Styles'
import Chapters from "../assets/testContent/chapters.js";

export default class DrawerComponent extends React.Component {

  render() {
    const { navigation } = this.props;

    return (
      <View style={styles.drawer}>

        <FlatList
          data={Chapters}
          renderItem={({item}) => <ChapterListItem chapter={item} level={0}/>}
        />
          

        <Text
          onPress={() => navigation.navigate('Search')}
          style={styles.drawerItem}>
          Handbók
        </Text>
        <Text
          onPress={() => navigation.navigate('Information')}
          style={styles.drawerItem}>
          Upplýsingar
        </Text>
        <Text
          onPress={() => navigation.navigate('NewsFeed')}
          style={styles.drawerItem}>
          Fréttaveita
        </Text>
      </View>
    )
  }
}