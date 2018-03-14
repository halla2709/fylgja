import React from 'react';
import Favicon from 'react-favicon';
import { Text, View, Button, Alert, TouchableOpacity, Image } from 'react-native';
import styles from './../styles/Styles';

export class HomeScreen extends React.Component {
  render() {
    return (
      this.props.screenProps.fontLoaded ? (
        <View style={styles.wholepage}>


          <View style={styles.textcontainer}>
            <Text style={styles.title}> Fylgjan </Text>

            <View style={styles.imagecontainer}>
              <Image style={styles.image} source={require('../assets/images/storkur.png')} />
            </View>

            <TouchableOpacity style={styles.buttons} onPress={() => this.props.navigation.navigate('Search')}>
              <Text style={styles.h2}>Fylgjan</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.buttons} onPress={() => this.props.navigation.navigate('Search')}>
              <Text style={styles.h2}>Upplýsingar</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.buttons} onPress={() => this.props.navigation.navigate('Search')}>
              <Text style={styles.h2}>Fréttaveita</Text>
            </TouchableOpacity>
          </View>

        </View>

      ) : null

    );
  }
}

