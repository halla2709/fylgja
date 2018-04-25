import React from 'react';
import { Text, View, Button, Alert, TouchableHighlight, Image, ScrollView } from 'react-native';
import { Font } from 'expo';
import SearchBar from 'react-native-search-bar';
import Styles from './../styles/Styles';
import { Ionicons } from '@expo/vector-icons';
import Chapters from "../assets/testContent/chapters.js";
import { SwitchChapter } from '../controllers/NavigationHelper.js';

export class ReaderScreen extends React.Component {
  getChapter(chapterKey) {
    const topChapter = chapterKey.split(".")[0];
    return Chapters[topChapter - 1];
  }

  constructor(props) {
    super(props);
    this.chapter = this.getChapter(props.navigation.state.params.currentChapter);
    this.numberOfChapters = Chapters.length;
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
              <TouchableHighlight style={Styles.leftarrow} onPress={()=>{this.props.navigation.navigate('Reader', {drawerContent: "chapters", currentChapter: SwitchChapter(this.chapter.key, -1)})}} underlayColor="rgb(245,245,245)">
                <Ionicons name="ios-arrow-back" size={42} color="rgb(34,82,171)" />
              </TouchableHighlight>
              <View style={Styles.chaptertext}>
                <Text style={Styles.h1}> {this.chapter.name} </Text>
              </View>
              <TouchableHighlight style={Styles.rightarrow} onPress={()=>{ this.props.navigation.navigate('Reader', {drawerContent: "chapters", currentChapter: SwitchChapter(this.chapter.key, 1)}) }}
                underlayColor="rgb(245,245,245)">
                <Ionicons name="ios-arrow-forward" size={42} color="rgb(34,82,171)" />
              </TouchableHighlight>
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
