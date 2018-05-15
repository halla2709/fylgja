import React from 'react';
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
import { Font } from 'expo';
import Styles from './../styles/Styles';
import { Ionicons } from '@expo/vector-icons';
import { SearchBar } from 'react-native-elements';
import { SearchChapterTitles } from './../controllers/SearchHelper';
import Chapters from "../assets/testContent/chapters.js";

export class SearchScreen extends React.Component {

  getChapterView(chapter, level) {
    return <Text
      key={chapter.key}
      style={(level === 1 ? Styles.h1 : Styles.h2)}
      onPress={() => this.props.navigation.navigate('Reader', {
        drawerContent: "chapters",
        currentChapter: chapter.key
      })}>{chapter.name}</Text>
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
    this.state = {currentChapterBlocks:this.getChapterViews(Chapters)};
  }

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
            <SearchBar onChangeText={(searchString) => {
              console.log("text changed in search bar to " + searchString);
              this.setState({currentChapterBlocks: this.getChapterViews(SearchChapterTitles(searchString))});
            }}
              onClear={() => {
              console.log("search box cleared"); 
              this.setState({currentChapterBlocks: this.getChapterViews(Chapters)});
            }}
              placeholder='Skrifaðu leitarorð hér...' />

            <ScrollView style={{
              width: '100%'
            }}>
              <View style={Styles.searchresult}>
                {this.state.currentChapterBlocks}
              </View>
            </ScrollView>
          </View>

        </View>

      )
        : null
    );
  }
}
