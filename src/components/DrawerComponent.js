import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { NavigationActions } from 'react-navigation'
import styles from './../styles/Styles'

export default class DrawerComponent extends React.Component {

  render() {
    const { navigation } = this.props
    return (
      <View style={styles.drawer}>
        <Text
          onPress={() => navigation.navigate('Search')}
          style={styles.drawerItem}>
          Fylgja
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