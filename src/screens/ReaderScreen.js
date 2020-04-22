import React from 'react';
import { Text, View, TouchableHighlight, ScrollView, Dimensions } from 'react-native';
import Styles from './../styles/Styles';
import { Ionicons } from '@expo/vector-icons';
import { GetChapters, ChapterElementsToViews, KeyForName }  from "../controllers/Chapters.js";
import { SwitchChapter } from '../controllers/NavigationHelper.js';
import Hyperlink from 'react-native-hyperlink';
import * as WebBrowser from 'expo-web-browser';
import Image from 'react-native-scalable-image';

//Gamla: <Image source={{uri: subchapter.image}} style={{ width: Dimensions.get('window').width*0.8, height: Dimensions.get('window').width*0.5, resizeMode: "contain" }} />
  

export class ReaderScreen extends React.Component {
  async getImage(imageSource) {
    console.log("Getting image " + imageSource);
    Image.getSize(imageSource, (width, height) => {
      console.log("Image " + imageSource + " W: " + width + " H: " + height);
    }, (error) => { console.error(error); });
    // ImageReziser.createResizedImage(imageSource, Dimensions.get('window').width, Dimensions.get('window').height, 'PNG', 100)
    //   .then(function(response) {
    //     console.log("In response");
    //     console.log(response);
    //   })
    //   .catch(function(error) {
    //     console.error(error);
    //   });
    
    //<Image resizeMode="contain" source={{uri: subchapter.image}} style={{ flex: 1, width: '80%' }} />
  }

  onViewLayout(key, y) {
    if (key === this.props.navigation.state.params.currentChapter) {
      this.setState({ toScrollTo: y });
    }
  }

  getChapter(chapterKey) {
    const topChapter = chapterKey.split(".")[0];
    return this.chapters[topChapter - 1];
  }

  async getChapterViews(chapter) {
    //NOT USED
    console.log("Getting chapter views " + this.chapter.key);
    var textBlocks = [];
    var hasImage = false;

    chapter.subchapters.forEach(subchapter => {
      // if(subchapter.image) {
      //   console.log("Subchapter " + subchapter.key + " has image");
      //   this.getImage(subchapter.image);
      // }
      var showTitle = !(subchapter.name == "#EkkiBirta#" && subchapter.name.length > 0);
      console.log(subchapter.name);
      textBlocks.push(
      <View style={{ marginBottom: 10 }} key={subchapter.key} onLayout={(event) => {
        var { x, y, width, height } = event.nativeEvent.layout;
        this.onViewLayout(subchapter.key, y);
      }}>
        {showTitle ? <View style={Styles.subchaptercontainer}>
              <Text style={Styles.h2}>{subchapter.name}</Text>
            </View> : <Text></Text>}

        <View style={Styles.pcontainer}>
          <Text style={Styles.p} layout="row">{subchapter.content}</Text>
        </View>

        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
        <Image width={Dimensions.get('window').width} height={Dimensions.get('window').height} source={{uri: subchapter.image}}/>
       </View>
      </View>);
    });
    console.log("Returning text blocks " + textBlocks.length);
    this.setState({textBlocks: textBlocks});
  }

  getUrlText(url) {
    if(url.match(/\/\/fylgja\.app\/((.+)\/)((.*)\/)/)) {
      return "hér"
    }
    else if(this.differentUrls[url]) 
      return url.substring(7);
    else
      return url.endsWith('.pdf') ? 'Sækja skjal' : 'Opna hlekk';
  }

  getUrl(url) {
    if(this.differentUrls[url])
      return this.differentUrls[url];
    else
      return url;
  }

  openUrl(url) {
    var matches = url.match(/\/\/fylgja\.app\/((.+)\/)((.*)\/)/);
    if(matches) {
      var newKey = KeyForName(matches[2].replace(/_/g," "), matches[4].replace(/_/g," "));
      console.log("Matches", matches);
      console.log(newKey);
      if(newKey)
        this.props.navigation.replace('Reader', { drawerContent: "chapters", currentChapter: newKey });
      return;
    }
    url = this.getUrl(url);
    WebBrowser.openBrowserAsync(url);
  }

  async componentDidMount() {
    console.log("Did mount");
    var views = await ChapterElementsToViews(this.chapter, this);
    console.log("Blocks ready " + this.chapter.key);
    this.setState({textBlocks: views});
  }

  constructor(props) {
    super(props);
    this.chapters = GetChapters();
    this.chapter = this.getChapter(props.navigation.state.params.currentChapter);
    console.log("Constructor " + this.chapter.key);
    this.numberOfChapters = this.chapters.length;
    this.state = { toScrollTo: 0, textBlocks: []};
    this.differentUrls = { "http://Fyrirburar.is": "http://fyrirburar.is", "http://Jafnrétti.is": "http://jafnretti.is", "http://Ljósmóðir.is": "http://ljosmodir.is" };
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

          <ScrollView style={{ height: '100%', paddingHorizontal: 5, width: '99%', alignSelf: 'center', backgroundColor: 'rgb(248,248,249)', borderRadius: 10, opacity: 0.95, }} ref={(scrollView) => {
            if (scrollView != null) {
              scrollView.scrollTo({ x: 0, y: this.state.toScrollTo, animated: true });
            }
          }}>
            <View style={{ paddingBottom: 150 }}>
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