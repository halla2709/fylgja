import React from 'react';
import {
  Text,
  View,
  ScrollView,
  KeyboardAvoidingView,
  ImageBackground,
  PixelRatio
} from 'react-native';
import Styles from './../styles/Styles';
import { SearchBar } from 'react-native-elements';
import { SearchChapterTitles } from './../controllers/SearchHelper';
import { GetChapters } from "../controllers/Chapters.js";

export class SearchScreen extends React.Component {

  static navigationOptions = {
    title: 'Handbók',
  };

  getChapterView(chapter, level) {
    if (chapter.name !== "#EkkiBirta#" && chapter.name.length > 0) {
      return <Text
      key={chapter.key}
      style={(level === 1 ? Styles.searchh1 : Styles.searchh2)}
      onPress={() => this.props.navigation.navigate('Reader', {
        drawerContent: "chapters",
        currentChapter: chapter.key})}>{chapter.name}</Text>
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
    this.state = {currentChapterBlocks:this.getChapterViews(this.chapters)};
  }

  render() {
    return (
      this.props.screenProps.fontLoaded ? (

        <KeyboardAvoidingView style={Styles.searchwholepage} behavior="padding" enabled>

          <View style={Styles.searchcontainer}>
          <ImageBackground source={require('../assets/images/bluegray.jpg')} resizeMode="cover" style={{width: '100%', height: '100%'}}>
      
         
            <SearchBar lightTheme round style={Styles.searchBar} 
            placeholder='Skrifaðu leitarorð hér...'
            placeholderTextColor='rgb(189, 194, 201)'
            searchIcon={{color: 'grey', padding:3,type: 'material-community'}}
            clearIcon={{color: 'grey',type: 'material-community'}}
            inputStyle={{color: 'black', fontSize: 18/PixelRatio.getFontScale(), backgroundColor: 'white'}} //Style TextInput
            inputContainerStyle={Styles.p}
            containerStyle={{ width: '70%', alignSelf: 'center', marginBottom: 10, backgroundColor: 'rgb(238,249,251)', borderRadius: 10,}}

            onChangeText={(searchString) => {
              this.setState({currentChapterBlocks: this.getChapterViews(SearchChapterTitles(searchString))});
            }}
              onClear={() => { 
              this.setState({currentChapterBlocks: this.getChapterViews(this.chapters)});
            }}
              />
               
            <ScrollView style={{ width: '100%', paddingHorizontal: 8, paddingBottom: 10}}>
            
              <View style={Styles.searchresult}>
              
                {this.state.currentChapterBlocks}
              </View>
            </ScrollView>
            </ImageBackground>
          </View>
          

        </KeyboardAvoidingView>

      )
        : null
    );
  }
}
