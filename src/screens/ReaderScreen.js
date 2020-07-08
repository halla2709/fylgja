import React from 'react';
import { Text, View, TouchableHighlight, ScrollView, Dimensions, ImageBackground, Image } from 'react-native';
import Styles from './../styles/Styles';
import { Ionicons } from '@expo/vector-icons';
import { GetChapters, ChapterElementsToViews, KeyForName }  from "../controllers/Chapters.js";
import { SwitchChapter } from '../controllers/NavigationHelper.js';
import Hyperlink from 'react-native-hyperlink';
import * as WebBrowser from 'expo-web-browser';

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
      return;
    }
    WebBrowser.openBrowserAsync(url);
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

  render() {
    return (
      this.props.screenProps.fontLoaded ? (
        <View contentContainerStyle={Styles.readerwholepage}>
          <View style={{ borderColor: "rgb(34,82,171)", borderRadius: 10, borderBottomWidth: 0.5, width: '99%', alignSelf: 'center', }}>
            <View style={Styles.decorationcontainer}>
              <Image height={25} resizeMode="contain" source={require('../assets/images/11.png')} />
            </View>
            <View style={Styles.chaptercontainer}>
              <TouchableHighlight style={Styles.leftarrow} onPress={() => { this.props.navigation.replace('Reader', { drawerContent: "chapters", currentChapter: SwitchChapter(this.chapter.key, -1) }); }} underlayColor="rgb(245,245,245)">
                <Ionicons name="ios-arrow-back" size={42} color="rgb(34,82,171)" />
              </TouchableHighlight>
              <View style={Styles.chaptertext}>
                <Text style={Styles.h1reader}> {this.chapter.name} </Text>
              </View>
              <TouchableHighlight style={Styles.rightarrow} onPress={() => { this.props.navigation.replace('Reader', { drawerContent: "chapters", currentChapter: SwitchChapter(this.chapter.key, 1) }); }} underlayColor="rgb(245,245,245)">
                <Ionicons name="ios-arrow-forward" size={42} color="rgb(34,82,171)" />
              </TouchableHighlight>
            </View>
            <View style={Styles.decorationcontainer}>
              <Image height={25} resizeMode="contain" source={require('../assets/images/10.png')} />
            </View>
          </View>
          <ImageBackground source={require('../assets/images/bluegray.jpg')} resizeMode="cover" style={{ width: '100%', height: '100%' }}>
              
          <ScrollView style={{ height: '100%', opacity: 0.7, width: '99%', alignSelf: 'center', backgroundColor: 'rgb(248,248,249)', borderRadius: 10, }} ref={(scrollView) => {            
            if (scrollView != null) {
              scrollView.scrollTo({ x: 0, y: this.state.toScrollTo, animated: true });
            }
          }}>
           <View style={{ paddingBottom: 400 }}>
              <Hyperlink linkStyle={{ color: 'rgb(34,82,171)', fontWeight: 'bold', textDecorationLine: 'underline' }} onPress={(url, text) => this.openUrl(url)}
                linkText={url => this.getUrlText(url)}>
                {this.state.textBlocks}
              </Hyperlink>
            </View>
          </ScrollView>
          </ImageBackground>
        </View>
      ) : null
    );  
  }
}