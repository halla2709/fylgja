import React from 'react'
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native'
import { NavigationActions } from 'react-navigation'
import styles from './../styles/Styles'
import Chapters from "../assets/testContent/chapters.js";
import chapters from '../assets/testContent/chapters.js';

export default class DrawerComponent extends React.Component {

  render() {
    const { navigation } = this.props

    var chapterViews = [];
    for (var i = 0; i < Chapters.length; i++) {
      chapterViews.push(
        <View key={Chapters[i].name}>
          <Text>{Chapters[i].name}</Text>
        </View>
      )
    }

    return (
      <View style={styles.drawer}>

        <ScrollView>
          <Text>HALLA</Text>
          {chapterViews}
        </ScrollView>

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