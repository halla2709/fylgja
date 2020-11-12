import React from 'react';
import { Text, View, TouchableHighlight, ScrollView, Dimensions, ImageBackground } from 'react-native';
import Styles from './../styles/Styles';
import { Ionicons } from '@expo/vector-icons';
import { GetChapters, ChapterElementsToViews, KeyForName }  from "../controllers/Chapters.js";
import { GetNextChapterNumber } from '../controllers/NavigationHelper.js';
import Hyperlink from 'react-native-hyperlink';
import * as WebBrowser from 'expo-web-browser';
import Image from 'react-native-scalable-image';

export class ReaderScreen extends React.Component {
  onViewLayout(key, y) {
    if (key === this.props.navigation.state.params.currentChapter) {
      this.setState({ toScrollTo: y });
    }
  }

  getChapter(chapterKey) {
    const topChapter = chapterKey.split(".")[0];
    return this.chapters[topChapter - 1];
  }

  getUrlText(url) {
    if(url.match(/\/\/fylgja\.app\/((.+)\/)((.*)\/)/)) {
      return "hér"
    }
    var simpleLinkMatch = url.match(/https?:\/\/(www\.)?(\w+\.\w+)\/?$/);
    if(simpleLinkMatch) {
      return simpleLinkMatch[2];
    }
    else
      return url.endsWith('.pdf') ? 'Sækja skjal' : 'Opna hlekk';
  }

  openUrl(url) {
    var matches = url.match(/\/\/fylgja\.app\/((.+)\/)((.*)\/)/);
    if(matches) {
      var newKey = KeyForName(matches[2].replace(/_/g," "), matches[4].replace(/_/g," "));
      if(newKey)
        this.props.navigation.replace('Reader', { drawerContent: "chapters", currentChapter: newKey });
    } else {
      WebBrowser.openBrowserAsync(url);
    }
  }

  async dimensionChanged(dim) { 
    if(this.chapter.hasImages) {
      var views = await ChapterElementsToViews(this.chapter, this);
      this.setState({textBlocks: views});
    }
  }

  componentWillUnmount() {
    Dimensions.removeEventListener("change", this.dimensionChanged);
  }

  async componentDidMount() {
    var views = await ChapterElementsToViews(this.chapter, this);
    this.setState({textBlocks: views});
    Dimensions.addEventListener("change", this.dimensionChanged);
  }

  constructor(props) {
    super(props);
    this.dimensionChanged = this.dimensionChanged.bind(this);
    this.chapters = GetChapters();
    this.chapter = this.getChapter(props.navigation.state.params.currentChapter);
    this.numberOfChapters = this.chapters.length;
    this.state = { toScrollTo: 0, textBlocks: []};
  }

  SwitchChapter(direction) {
    this.props.navigation.replace('Reader', { drawerContent: "chapters", currentChapter: GetNextChapterNumber(this.chapter.key, direction), direction: direction });
  }

  render() {
    return (
      this.props.screenProps.fontLoaded ? (
        <View contentContainerStyle={Styles.readerwholepage}>
          <View style={{ borderColor: "rgb(34,82,171)", padding: 10, borderRadius: 10, borderBottomWidth: 0.5, width: '95%', alignSelf: 'center', }}>
            <View style={Styles.chaptercontainer}>
              <TouchableHighlight style={Styles.leftarrow} onPress={() => { this.SwitchChapter(-1) }} underlayColor="rgb(245,245,245)">
                <Ionicons name="ios-arrow-back" size={42} color="rgb(34,82,171)" />
              </TouchableHighlight>
              <View style={Styles.chaptertext}>
                <Text style={Styles.h1reader}> {this.chapter.name} </Text>
              </View>
              <TouchableHighlight style={Styles.rightarrow} onPress={() => { this.SwitchChapter(1); }} underlayColor="rgb(245,245,245)">
                <Ionicons name="ios-arrow-forward" size={42} color="rgb(34,82,171)" />
              </TouchableHighlight>
            </View>
          </View>

          
          <ScrollView style={{ height: '100%', opacity: 0.8, paddingTop: 3, paddingRight: 10, paddingLeft: 10, backgroundColor: 'rgb(243,243,243)', marginBottom: 50}} ref={(scrollView) => {            
            if (scrollView != null) {
              scrollView.scrollTo({ x: 0, y: this.state.toScrollTo, animated: true });
            }
          }}>
           <View style={{ paddingBottom: 220 }}>
              <Hyperlink linkStyle={{ color: 'rgb(34,82,171)', fontWeight: 'bold', textDecorationLine: 'underline' }} onPress={(url, text) => this.openUrl(url)}
                linkText={url => this.getUrlText(url)}>
                {this.state.textBlocks}
              </Hyperlink>
            </View>
          </ScrollView>
        </View>
      ) : null
    );  
  }
}