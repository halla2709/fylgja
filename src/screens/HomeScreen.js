import React from 'react';
import Favicon from 'react-favicon';
import { Text, View, Button, Alert, TouchableOpacity, Image } from 'react-native';
import Styles from './../styles/Styles';

export class HomeScreen extends React.Component {
  render() {
    return (
      this.props.screenProps.fontLoaded ? (
        <View style={Styles.wholepage}>

          <View style={Styles.titlecontainer}>
            <Text style={Styles.title}> F<Text style={Styles.smallTitle}>YLGJAN </Text> </Text>
          </View>

          <View style={Styles.imagecontainer}>
            <Image style={Styles.image} source={require('../assets/images/storkur.png')} />

            <View style={Styles.buttonGroup}>
              <TouchableOpacity style={Styles.buttons} onPress={() => this.props.navigation.navigate('Search')}>
                <Text style={Styles.buttontext}>Handbók ljósmæðra</Text>
              </TouchableOpacity>

              <TouchableOpacity style={Styles.buttons} onPress={() => this.props.navigation.navigate('Information')}>
                <Text style={Styles.buttontext}>Upplýsingar</Text>
              </TouchableOpacity>

              <TouchableOpacity style={Styles.buttons} onPress={() => this.props.navigation.navigate('NewsFeed')}>
                <Text style={Styles.buttontext}>Fréttaveita</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

      ) : null

    );

  }
}

