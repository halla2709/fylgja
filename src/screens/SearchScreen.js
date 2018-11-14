import React from 'react';
import {
  Text,
  View,
  Button,
  Alert,
  TouchableOpacity,
  ScrollView,
  TextInput,
  KeyboardAvoidingView
} from 'react-native';
import { Font } from 'expo';
import Styles from './../styles/Styles';
import { Ionicons } from '@expo/vector-icons';
import { SearchBar } from 'react-native-elements';
import { SearchChapterTitles } from './../controllers/SearchHelper';
import Chapters from "../assets/testContent/chapters.js";

export class SearchScreen extends React.Component {

  static navigationOptions = {
    title: 'Handbók',
  };

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

        <KeyboardAvoidingView style={Styles.searchwholepage} behavior="padding" enabled>

          <View style={Styles.searchtitlecontainer}>
            <Text style={Styles.title}>
              F<Text style={Styles.smallTitle}>YLGJA
              </Text>
            </Text>
          </View>

          <View style={Styles.searchcontainer}>
            <SearchBar lightTheme round style={Styles.searchBar} 
            placeholder='Skrifaðu leitarorð hér...'
            placeholderTextColor='rgb(189, 194, 201)'
            searchIcon={{color: 'grey', padding:2}}
            clearIcon={{color: 'grey'}}
            inputStyle={{color: 'black', fontSize: 18, backgroundColor: 'white'}} //Style TextInput
            inputContainerStyle={Styles.p}
            containerStyle={{backgroundColor: 'rgb(239,239,239)', width: '90%'}}

            onChangeText={(searchString) => {
              this.setState({currentChapterBlocks: this.getChapterViews(SearchChapterTitles(searchString))});
            }}
              onClear={() => { 
              this.setState({currentChapterBlocks: this.getChapterViews(Chapters)});
            }}
              />

            <ScrollView style={{
              width: '100%'
            }}>
              <View style={Styles.searchresult}>
                {this.state.currentChapterBlocks}
              </View>
            </ScrollView>
          </View>

        </KeyboardAvoidingView>

      )
        : null
    );
  }
}
