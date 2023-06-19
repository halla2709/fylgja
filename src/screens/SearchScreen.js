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
import { useState, useContext } from 'react';
import { DrawerContentChanger } from '../components/DrawerContentContext';

export function SearchScreen({ navigation, route }) {
  const setChapterKey = useContext(DrawerContentChanger);
  function getChapterView(chapter, level) {
    if (chapter.name.length > 0) {
      return <Text
        key={chapter.key}
        style={(level === 1 ? Styles.searchh1 : Styles.searchh2)}
        onPress={() => {
          setChapterKey(chapter.key);
          navigation.navigate('Reader', {
            drawerContent: "chapters"
          })
        }}>{chapter.name}</Text>
    }
  }

  function getChapterViews(chapters) {
    let chapterBlocks = [];
    chapters.forEach(chapter => {
      chapterBlocks.push(getChapterView(chapter, 1));
      if (chapter.subchapters) {
        chapter.subchapters.forEach(subchapter => {
          chapterBlocks.push(getChapterView(subchapter, 2));
        });
      }
    });
    return chapterBlocks;
  }

  const chapters = GetChapters();
  const [currentChapterBlocks, setCurrentChapterBlocks] = useState(getChapterViews(chapters));
  const [loaded, setLoaded] = useState(chapters.length > 0);
  const [searchString, setSearchString] = useState("");
  
  if (!loaded) {
    SetChaptersLoadedCallback(function (newChapters) {
      setLoaded(true);
      setCurrentChapterBlocks(getChapterViews(newChapters));
    });
  }

  return (
    loaded ? (
      <View style={Styles.searchwholepage} behavior="padding" enabled>
        <ImageBackground source={require('../assets/images/bluegray.jpg')} resizeMode="cover" style={{ height: '100%', width: '100%' }}>
          <SearchBar lightTheme round style={Styles.searchBar} value={searchString}
            placeholder=' Skrifaðu leitarorð hér...'
            inputStyle={{ color: 'black', fontSize: 18 / PixelRatio.getFontScale(), backgroundColor: 'white' }} //Style TextInput
            inputContainerStyle={{ backgroundColor: 'white' }}
            containerStyle={{ width: '85%', alignSelf: 'center', marginBottom: 10, backgroundColor: 'transparent' }}
            onChangeText={(searchString) => {
              setSearchString(searchString);
              setCurrentChapterBlocks(getChapterViews(SearchChapterTitles(searchString)));
            }}
            onClear={() => {
              setCurrentChapterBlocks(getChapterViews(chapters));
            }}
          />
          <ScrollView style={{ height: '100%', width: '100%', paddingHorizontal: 8, paddingBottom: 10 }}>
            <View style={Styles.searchresult}>
              {
                currentChapterBlocks.length > 0 ?
                  currentChapterBlocks
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
  );
}
