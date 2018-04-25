import React from 'react';
<<<<<<< HEAD
import {
  Text,
  View,
  Button,
  Alert,
  TouchableOpacity,
  ScrollView,
  AppRegistry,
  TextInput
} from 'react-native';
import {Font} from 'expo';
=======
import { Text, View, Button, Alert, TouchableOpacity, ScrollView, AppRegistry, TextInput } from 'react-native';
import { Font } from 'expo';
>>>>>>> 9a9f8451f4aa1bad4a4a0ad3f10e6e5cf839ee76
import Styles from './../styles/Styles';
import {Ionicons} from '@expo/vector-icons';

export class SearchScreen extends React.Component {

  render() { 
    return (
      this.props.screenProps.fontLoaded ? (

        <View style={Styles.searchwholepage}>
        
          <View style={Styles.searchtitlecontainer}>
            <Text style={Styles.title}>
              F<Text style={Styles.smallTitle}>YLGJAN
              </Text>
            </Text>
          </View>

          <View style={Styles.searchcontainer}>
            <TextInput style={Styles.search}>
              <Ionicons name="md-search" size={42} color="rgb(128,128,128)"/>
              <Text style={Styles.searchtext} onChangeText={(text) => this.setState({text})}>Leita...</Text>
            </TextInput>

          

          <ScrollView style={{
            width: '100%'
          }}>
            <View style={Styles.searchresult}>
              <Text
                style={Styles.h2}
                onPress={() => this.props.navigation.navigate('Reader', {
                drawerContent: "chapters",
                currentChapter: "1"
              })}>Kafli 1</Text>
              <Text
                style={Styles.h2}
                onPress={() => this.props.navigation.navigate('Reader', {
                drawerContent: "chapters",
                currentChapter: "2"
              })}>Kafli 2</Text>
              <Text
                style={Styles.h2}
                onPress={() => this.props.navigation.navigate('Reader', {
                drawerContent: "chapters",
                currentChapter: "3"
              })}>Kafli 3</Text>
              <Text
                style={Styles.h2}
                onPress={() => this.props.navigation.navigate('Reader', {
                drawerContent: "chapters",
                currentChapter: "4"
              })}>Kafli 4</Text>
              <Text
                style={Styles.h2}
                onPress={() => this.props.navigation.navigate('Reader', {
                drawerContent: "chapters",
                currentChapter: "5"
              })}>Kafli 5</Text>
              <Text
                style={Styles.h2}
                onPress={() => this.props.navigation.navigate('Reader', {
                drawerContent: "chapters",
                currentChapter: "6"
              })}>Kafli 6</Text>
              <Text
                style={Styles.h2}
                onPress={() => this.props.navigation.navigate('Reader', {
                drawerContent: "chapters",
                currentChapter: "7"
              })}>Kafli 7</Text>
              <Text
                style={Styles.h2}
                onPress={() => this.props.navigation.navigate('Reader', {
                drawerContent: "chapters",
                currentChapter: "1"
              })}>Kafli 1</Text>
              <Text
                style={Styles.h2}
                onPress={() => this.props.navigation.navigate('Reader', {
                drawerContent: "chapters",
                currentChapter: "2"
              })}>Kafli 2</Text>
              <Text
                style={Styles.h2}
                onPress={() => this.props.navigation.navigate('Reader', {
                drawerContent: "chapters",
                currentChapter: "3"
              })}>Kafli 3</Text>
              <Text
                style={Styles.h2}
                onPress={() => this.props.navigation.navigate('Reader', {
                drawerContent: "chapters",
                currentChapter: "4"
              })}>Kafli 4</Text>
              <Text
                style={Styles.h2}
                onPress={() => this.props.navigation.navigate('Reader', {
                drawerContent: "chapters",
                currentChapter: "5"
              })}>Kafli 5</Text>
              <Text
                style={Styles.h2}
                onPress={() => this.props.navigation.navigate('Reader', {
                drawerContent: "chapters",
                currentChapter: "1"
              })}>Kafli 1</Text>
              <Text
                style={Styles.h2}
                onPress={() => this.props.navigation.navigate('Reader', {
                drawerContent: "chapters",
                currentChapter: "2"
              })}>Kafli 2</Text>
              <Text
                style={Styles.h2}
                onPress={() => this.props.navigation.navigate('Reader', {
                drawerContent: "chapters",
                currentChapter: "3"
              })}>Kafli 3</Text>
              <Text
                style={Styles.h2}
                onPress={() => this.props.navigation.navigate('Reader', {
                drawerContent: "chapters",
                currentChapter: "4"
              })}>Kafli 4</Text>
              <Text
                style={Styles.h2}
                onPress={() => this.props.navigation.navigate('Reader', {
                drawerContent: "chapters",
                currentChapter: "5"
              })}>Kafli 5</Text>
              <Text
                style={Styles.h2}
                onPress={() => this.props.navigation.navigate('Reader', {
                drawerContent: "chapters",
                currentChapter: "1"
              })}>Kafli 1</Text>
              <Text
                style={Styles.h2}
                onPress={() => this.props.navigation.navigate('Reader', {
                drawerContent: "chapters",
                currentChapter: "2"
              })}>Kafli 2</Text>
              <Text
                style={Styles.h2}
                onPress={() => this.props.navigation.navigate('Reader', {
                drawerContent: "chapters",
                currentChapter: "3"
              })}>Kafli 3</Text>
              <Text
                style={Styles.h2}
                onPress={() => this.props.navigation.navigate('Reader', {
                drawerContent: "chapters",
                currentChapter: "4"
              })}>Kafli 4</Text>
              <Text
                style={Styles.h2}
                onPress={() => this.props.navigation.navigate('Reader', {
                drawerContent: "chapters",
                currentChapter: "5"
              })}>Kafli 5</Text>
              <Text
                style={Styles.h2}
                onPress={() => this.props.navigation.navigate('Reader', {
                drawerContent: "chapters",
                currentChapter: "1"
              })}>Kafli 1</Text>
              <Text
                style={Styles.h2}
                onPress={() => this.props.navigation.navigate('Reader', {
                drawerContent: "chapters",
                currentChapter: "2"
              })}>Kafli 2</Text>
              <Text
                style={Styles.h2}
                onPress={() => this.props.navigation.navigate('Reader', {
                drawerContent: "chapters",
                currentChapter: "3"
              })}>Kafli 3</Text>
              <Text
                style={Styles.h2}
                onPress={() => this.props.navigation.navigate('Reader', {
                drawerContent: "chapters",
                currentChapter: "4"
              })}>Kafli 4</Text>
              <Text
                style={Styles.h2}
                onPress={() => this.props.navigation.navigate('Reader', {
                drawerContent: "chapters",
                currentChapter: "5"
              })}>Kafli 5</Text>
              <Text
                style={Styles.h2}
                onPress={() => this.props.navigation.navigate('Reader', {
                drawerContent: "chapters",
                currentChapter: "1"
              })}>Kafli 1</Text>
              <Text
                style={Styles.h2}
                onPress={() => this.props.navigation.navigate('Reader', {
                drawerContent: "chapters",
                currentChapter: "2"
              })}>Kafli 2</Text>
              <Text
                style={Styles.h2}
                onPress={() => this.props.navigation.navigate('Reader', {
                drawerContent: "chapters",
                currentChapter: "3"
              })}>Kafli 3</Text>
              <Text
                style={Styles.h2}
                onPress={() => this.props.navigation.navigate('Reader', {
                drawerContent: "chapters",
                currentChapter: "4"
              })}>Kafli 4</Text>
              <Text
                style={Styles.h2}
                onPress={() => this.props.navigation.navigate('Reader', {
                drawerContent: "chapters",
                currentChapter: "5"
              })}>Kafli 5</Text>
              

            </View>
          </ScrollView>
          </View>

        </View>

      )
      : null
    );
  }

}
