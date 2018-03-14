import React from 'react';
import {Text, View, Button, Alert, TouchableOpacity } from 'react-native';
import { Font } from 'expo';
import SearchBar from 'react-native-search-bar';
import Styles from './../styles/Styles';

export class SearchScreen extends React.Component {
  render() {
    return (
        this.props.screenProps.fontLoaded ? (
          <View style={Styles.textcontainer}>
            <Text style={Styles.title}> Fylgja </Text>
            <Text style={Styles.h1}> Hér mun vera leitarstöng </Text>
            <TouchableOpacity style={Styles.buttons} onPress={() => {Alert.alert("Kemst ekkert héðan :(")}}> 
            <Text>Ekki velja mig!</Text> 
            </TouchableOpacity>

          </View>
        ) : null
      
  
/*
  <SearchBar
ref='searchBar'
placeholder='Search'
onSearchButtonPress={() => {Alert.alert("YAY þú leitaðir :)")}}
onCancelButtonPress={() => {Alert.alert("Hættir við að leita :(")}}
/>
*/

        
    );
  }
    
}
