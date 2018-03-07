import React from 'react';
import { StyleSheet, Text, View, Button, Alert, TouchableOpacity } from 'react-native';
import { Font } from 'expo';
import SearchBar from 'react-native-search-bar';
var styles = require('../styles/style.js'); 

export class SearchScreen extends React.Component {
  
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
        
        <View style={styles.container}>
        {
          this.state.fontLoaded ? (
          <Text style={styles.title}> Fylgja </Text>
          ) : null
        }
  
  {
          this.state.fontLoaded ? (
          <Text style={styles.h1}> Hér mun vera leitarstöng </Text>
          ) : null
        }
  
/*
  <SearchBar
ref='searchBar'
placeholder='Search'
onSearchButtonPress={() => {Alert.alert("YAY þú leitaðir :)")}}
onCancelButtonPress={() => {Alert.alert("Hættir við að leita :(")}}
/>
*/

        <TouchableOpacity style={styles.buttons} onPress={() => {Alert.alert("Kemst ekkert héðan :(")}}> 
        <Text>Ekki velja mig!</Text> 
        </TouchableOpacity>
  
        </View>
      );
    }
  }
    
