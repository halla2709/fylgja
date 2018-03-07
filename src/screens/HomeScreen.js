import React from 'react';
import { StyleSheet, Text, View, Button, Alert, TouchableOpacity, Image } from 'react-native';
import { Font } from 'expo'; 
var styles = require('../styles/style.js');

export class HomeScreen extends React.Component {


  
    state = {
      fontLoaded: false
    };
  
    async componentDidMount() {
      await Font.loadAsync({
        'merriweather-black': require('../assets/fonts/Merriweather/Merriweather-Black.ttf'),
        'dosis-medium': require('../assets/fonts/Dosis/Dosis-Medium.ttf'),
        'opensans-regular': require('../assets/fonts/Open_Sans/OpenSans-Regular.ttf'),
  
      });
      this.setState({ fontLoaded: true });
    }
  
    render(){
      return (
      <View style={styles.wholepage}>
        <View style={styles.imagecontainer}>
        <Image style={styles.image} source={require('../assets/images/storkur.png')}/>
        </View>

        <View style={styles.textcontainer}>
        
        {
          this.state.fontLoaded ? (
          <Text style={styles.title}> Fylgja </Text>
          ) : null
        }
  
        <TouchableOpacity style={styles.buttons} onPress={() => this.props.navigation.navigate('Search')}> 
        <Text>Fylgjan</Text> 
        </TouchableOpacity>

        <TouchableOpacity style={styles.buttons} onPress={() => this.props.navigation.navigate('Search')}> 
        <Text>Upplýsingar</Text> 
        </TouchableOpacity>

        <TouchableOpacity style={styles.buttons} onPress={() => this.props.navigation.navigate('Search')}> 
        <Text>Fréttaveita</Text> 
        </TouchableOpacity>

        
        </View>
        </View>
    
      );
    }
  }
    
