import React, {useState, useEffect, useContext, useRef} from 'react';
import { Text, View, TouchableHighlight, ScrollView, useWindowDimensions } from 'react-native';
import Styles from './../styles/Styles';
import Ionicons from '@expo/vector-icons/Ionicons';
import { GetChapters, ChapterElementsToViews, KeyForName } from "../controllers/Chapters.js";
import { GetNextChapterNumber } from '../controllers/NavigationHelper.js';
import Hyperlink from 'react-native-hyperlink';
import * as WebBrowser from 'expo-web-browser';
import { DrawerContentChanger, DrawerContentContext } from '../components/DrawerContentContext';

export function ReaderScreen ({ navigation, route }) {
  const chapterKey = useContext(DrawerContentContext);
  const setChapterKey = useContext(DrawerContentChanger);

  const dimensions = useWindowDimensions();
  const chapters = GetChapters();
  const topChapter = chapterKey.split(".")[0];
  const [chapterViews, setChapterViews] = useState([]);
  const chapter = useRef(chapters[topChapter-1]);
  const scrollViewRef = useRef(null);

  useEffect(() => {
    ChapterElementsToViews(chapter.current, onChapterViewLayout)
    .then(function(views) {
      setChapterViews(views);
    })
    .catch(function(error) {
      console.error("Could not create chapter views");
      console.error(error);
    });
  }, [dimensions]);

  function changeChapter(newChapterKey) {
    setChapterKey(newChapterKey);
  }

  function onChapterViewLayout(subchapterKey, yPos) {
    if (subchapterKey === chapterKey && scrollViewRef.current) {
      scrollViewRef.current.scrollTo({y: yPos, animated: true});
      scrollViewRef.current = null; // til að skrolla bara einu sinni, ekki þegar skjánum er flippað
    }
  }

  function getUrlText(url) {
    if (url.match(/\/\/fylgja\.app\/((.+)\/)((.*)\/)/)) {
      return "hér"
    }
    var simpleLinkMatch = url.match(/https?:\/\/(www\.)?(\w+\.\w+)\/?$/);
    if (simpleLinkMatch) {
      return simpleLinkMatch[2];
    }
    else
      return url.endsWith('.pdf') ? 'Sækja skjal' : 'Opna hlekk';
  }

  function openUrl(url) {
    var matches = url.match(/\/\/fylgja\.app\/((.+)\/)((.*)\/)/);
    if (matches) {
      var newKey = KeyForName(matches[2].replace(/_/g, " "), matches[4].replace(/_/g, " "));
      if (newKey) {
        changeChapter(newKey);
      }
    } else {
      WebBrowser.openBrowserAsync(url);
    }
  }

  function SwitchChapter(direction) {
    changeChapter(GetNextChapterNumber(chapterKey, direction));
  }

  return (
    <View contentContainerStyle={Styles.readerwholepage}>
      <View style={{ borderColor: "rgb(34,82,171)", padding: 10, borderRadius: 10, borderBottomWidth: 0.5, width: '95%', alignSelf: 'center', }}>
        <View style={Styles.chaptercontainer}>
          <TouchableHighlight style={Styles.leftarrow} onPress={() => { SwitchChapter(-1) }} underlayColor="rgb(245,245,245)">
            <Ionicons name="arrow-back" size={30} color="rgb(34,82,171)" />
          </TouchableHighlight>
          <View style={Styles.chaptertext}>
            <Text style={Styles.h1reader}> {chapter.current.name} </Text>
          </View>
          <TouchableHighlight style={Styles.rightarrow} onPress={() => { SwitchChapter(1); }} underlayColor="rgb(245,245,245)">
            <Ionicons name="arrow-forward" size={30} color="rgb(34,82,171)" />
          </TouchableHighlight>
        </View>
      </View>


      <ScrollView style={{ height: '100%', opacity: 0.8, paddingTop: 3, paddingRight: 10, paddingLeft: 10, backgroundColor: 'rgb(243,243,243)', marginBottom: 50 }}
        ref={scrollViewRef}
      >
        <View style={{ paddingBottom: 220 }}>
          <Hyperlink linkStyle={{ color: 'rgb(34,82,171)', fontWeight: 'bold', textDecorationLine: 'underline' }} onPress={(url, text) => openUrl(url)}
            linkText={url => getUrlText(url)}>
            {chapterViews}
          </Hyperlink>
        </View>
      </ScrollView>
    </View>
  );
}
