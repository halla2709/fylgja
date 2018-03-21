import React from 'react';
import {Text, View, Button, Alert, TouchableOpacity, ScrollView } from 'react-native';
import { Font } from 'expo';
import SearchBar from 'react-native-search-bar';
import Styles from './../styles/Styles';
import { Ionicons } from '@expo/vector-icons';

export class SearchScreen extends React.Component {
  render() {
    return (
        this.props.screenProps.fontLoaded ? (

<View>
<Ionicons name="md-search" size={42} color="rgb(128,128,128)" />
       

<TouchableOpacity style={Styles.buttons} onPress={() => this.props.navigation.navigate('Reader')}> 
        <Text style={Styles.buttontext} >Reader</Text> 
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
