import React from 'react';
import { Text, View, Button, Alert, TouchableOpacity, Image, ScrollView } from 'react-native';
import { Font } from 'expo';
import SearchBar from 'react-native-search-bar';
import Styles from './../styles/Styles';
import { Ionicons } from '@expo/vector-icons';
import Chapters from "../assets/testContent/chapters.js";

export class ReaderScreen extends React.Component {
  getChapter(chapterKey) {
    return Chapters[chapterKey - 1];
  }

  constructor(props) {
    super(props);
    this.chapter = this.getChapter(props.navigation.state.params.currentChapter);
  }

  render() {
    var textBlocks = [];
    this.chapter.subchapters.forEach(subchapter => {
      textBlocks.push(<View key={subchapter.key}>
          <View style={Styles.subchaptercontainer}>
            <Text style={Styles.h2}>{subchapter.name}</Text>
          </View>
          <View style={Styles.pcontainer}>
            <Text style={Styles.p} layout="row">{subchapter.content}</Text>
          </View>
        </View>)
    });

    return (
      this.props.screenProps.fontLoaded ? (
        <View contentContainerStyle={Styles.readerwholepage}>
          <View style={{ paddingBottom: 15 }}>
            <View style={Styles.decorationcontainer}>
              <Image resizeMode="contain" source={require('../assets/images/3.png')} />
            </View>
            <View style={Styles.chaptercontainer}>
              <Ionicons name="ios-arrow-back" style={Styles.leftarrow} size={42} color="rgb(34,82,171)" />
              <View style={Styles.chaptertext}>
                <Text style={Styles.h1}> {this.chapter.name} </Text>
              </View>
              <Ionicons name="ios-arrow-forward" style={Styles.rightarrow} size={42} color="rgb(34,82,171)" />
            </View>
            <View style={Styles.decorationcontainer}>
              <Image resizeMode="contain" source={require('../assets/images/4.png')} />
            </View>
          </View>
          <ScrollView style={{ marginBottom: 150 }}>
            <View style={Styles.pcontainer}>
              <Text style={Styles.p} layout="row">{this.chapter.content}</Text>
            </View>
            {textBlocks}
            <View style={{ alignItems: 'center' }}>
              <Image resizeMode="contain" style={{ width: '40%' }} source={require('../assets/images/2.png')} />
            </View>
          </ScrollView>
        </View>
      ) : null

    );
  }

}
