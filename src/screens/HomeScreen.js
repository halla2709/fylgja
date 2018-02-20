import React from 'react';
import { StyleSheet, Text, View, Button, Alert, TouchableOpacity } from 'react-native';
import { Font } from 'expo'; 

export class HomeScreen extends React.Component {
  
    state = {
      fontLoaded: false
    };
  
    async componentDidMount() {
      await Font.loadAsync({
        'merriweather-black': require('../assets/fonts/Merriweather-Black.ttf'),
        'dosis-medium': require('../assets/fonts/Dosis-Medium.ttf'),
        'opensans-regular': require('../assets/fonts/OpenSans-Regular.ttf'),
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
          <Text style={styles.h1}> Ég er fyrirsögn </Text>
          ) : null
        }
  
        {
          this.state.fontLoaded ? (
        <Text style={styles.body}> Góðan dag, ég er Fylgjan</Text>
      ) : null
    }
        <TouchableOpacity style={styles.buttons} onPress={() => this.props.navigation.navigate('Search')}> 
        <Text>Veldu mig!</Text> 
        </TouchableOpacity>
  
        </View>
      );
    }
  }
    
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'rgb(239,239,239)',
      alignItems: 'center',
      justifyContent: 'space-around'
    },
  
    title: {
      fontFamily: 'merriweather-black',
      fontSize: 50
    },
    
    buttons: {
      width: 300,
      backgroundColor: '#DDDDDD',
      alignItems: 'center',
      padding: 10,
      borderColor: '#000',
      borderWidth: 1
  
    },
  
    h1: {
      fontFamily: 'dosis-medium',
      fontSize: 25
    },
  
    body: {
      fontFamily: 'opensans-regular',
      fontSize: 18
    }
  });