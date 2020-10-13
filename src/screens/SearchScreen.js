import React from 'react';
import {
  Text,
  View,
  ScrollView,
  ImageBackground,
  PixelRatio,
  ActivityIndicator
} from 'react-native';
import Styles from './../styles/Styles';
import { SearchBar } from 'react-native-elements';
import { SearchChapterTitles } from './../controllers/SearchHelper';
import { GetChapters, SetChaptersLoadedCallback } from "../controllers/Chapters.js";

export class SearchScreen extends React.Component {

  static navigationOptions = {
    title: 'Handbók',
  };

  getChapterView(chapter, level) {
    if (chapter.name.length > 0) {
      return <Text
        key={chapter.key}
        style={(level === 1 ? Styles.searchh1 : Styles.searchh2)}
        onPress={() => this.props.navigation.navigate('Reader', {
          drawerContent: "chapters",
          currentChapter: chapter.key
        })}>{chapter.name}</Text>
    }
  }

  getChapterViews(chapters) {
    let chapterBlocks = [];
    chapters.forEach(chapter => {
      chapterBlocks.push(this.getChapterView(chapter, 1));
      if (chapter.subchapters) {
        chapter.subchapters.forEach(subchapter => {
          chapterBlocks.push(this.getChapterView(subchapter, 2));
        });

      }
    });
    return chapterBlocks;
  }

  constructor(props) {
    super(props);
    this.chapters = GetChapters();
    this.state = { currentChapterBlocks: this.getChapterViews(this.chapters), loaded: this.chapters.length > 0 };
    var self = this;
    SetChaptersLoadedCallback(function (newChapters) {
      self.chapters = newChapters;
      self.setState({ currentChapterBlocks: self.getChapterViews(self.chapters), loaded: true });
    });
  }

  render() {
    return (
      this.props.screenProps.fontLoaded ? (
        this.state.loaded ? (
          <View style={Styles.searchwholepage} behavior="padding" enabled>
              <ImageBackground source={require('../assets/images/bluegray.jpg')} resizeMode="cover" style={{ height:'100%', width: '100%' }}>
                <SearchBar lightTheme round style={Styles.searchBar}
                  placeholder='Skrifaðu leitarorð hér...'
                  placeholderTextColor='rgb(189, 194, 201)'
                  searchIcon={{ color: 'grey', padding: 3, type: 'material-community' }}
                  clearIcon={{ color: 'grey', type: 'material-community' }}
                  inputStyle={{ color: 'black', fontSize: 18 / PixelRatio.getFontScale(), backgroundColor: 'white' }} //Style TextInput
                  inputContainerStyle={Styles.p}
                  containerStyle={{ width: '70%', alignSelf: 'center', marginBottom: 10, backgroundColor: 'rgb(238,249,251)', borderRadius: 10, }}
                  onChangeText={(searchString) => {
                    this.setState({ currentChapterBlocks: this.getChapterViews(SearchChapterTitles(searchString)) });
                  }}
                  onClear={() => {
                    this.setState({ currentChapterBlocks: this.getChapterViews(this.chapters) });
                  }}
                />
                <ScrollView style={{ height:'100%', width: '100%', paddingHorizontal: 8, paddingBottom: 10 }}>
                  <View style={Styles.searchresult}>
                    {
                      this.state.currentChapterBlocks.length > 0 ?
                        this.state.currentChapterBlocks
                        :
                        <Text style={Styles.searchedtext}>Engar niðurstöður fundust, vinsamlegast reynið aftur.</Text>
                      }
                  </View>
                </ScrollView>
              </ImageBackground>
          </View>
        ) :
          (
            <View>
              <ActivityIndicator style={{ margin: 20 }} size="large" color="#0000ff" />
              <Text style={{ fontFamily: 'merriweather-light', fontSize: 20, color: "#0000ff", textAlign: "center" }}>Sæki gögn</Text>
              <Text style={{ fontFamily: 'opensans-regular', fontSize: 12, color: "#0000ff", textAlign: "center" }}>Ef þú hefur beðið lengi, athugaðu þá nettenginguna þína</Text>
            </View>
          )
      )
        : null
    );
  }
}
