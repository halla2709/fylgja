import React from 'react';
import { StyleSheet, Text, View, Button, Alert, TouchableOpacity, Image} from 'react-native';
import { Font } from 'expo'; 

export default class App extends React.Component {
  
  state = {
    fontLoaded: false
  };

  async componentDidMount() {
    await Font.loadAsync({
      'merriweather-black': require('./src/assets/fonts/Merriweather-Black.ttf'),
      'dosis-medium': require('./src/assets/fonts/Dosis-Medium.ttf'),
      'opensans-regular': require('./src/assets/fonts/OpenSans-Regular.ttf'),
    });
    this.setState({ fontLoaded: true });
  }

  render(){
    return (
     
      <View style={styles.container}>
      <Image style={styles.image} source={require('./src/assets/images/logo.png')}/>

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
      <Text style={styles.body}> Góðann dag, ég er fylgjan</Text>
    ) : null
  }
      <TouchableOpacity style={styles.buttons} onPress={() => {Alert.alert("Þú vinnur!")}}> 
      <Text>Veldu mig!</Text> 
      </TouchableOpacity>

      </View>
    );
  }
}
  

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgb(239,239,239)',
    alignItems: 'center',
    justifyContent: 'space-around',
    flex: 1
  },

  title: {
    fontFamily: 'merriweather-black',
    fontSize: 50,
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
    fontSize: 25,
    
  },

  body: {
    fontFamily: 'opensans-regular',
    fontSize: 18,
    
  },
  image: { 
    height: 250,
    width: 250,
    flex: 1
  },
  
});