import React from 'react';
import {
  Text,
  View,
  Button,
  Alert,
  TouchableOpacity,
  ScrollView,
  TextInput,
  KeyboardAvoidingView,
  Icon, 
  ImageBackground
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
    if (chapter.name === "#EkkiBirta#") {
      return <Text
      key={chapter.key}
      style={(level === 1 ? Styles.searchh1 : Styles.searchh2)}
      onPress={() => this.props.navigation.navigate('Reader', {
        drawerContent: "chapters",
        currentChapter: chapter.key})}/>

    } else {
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
    this.state = {currentChapterBlocks:this.getChapterViews(Chapters)};
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
            searchIcon={{color: 'grey', padding:3,}}
            clearIcon={{color: 'grey'}}
            inputStyle={{color: 'black', fontSize: 18, backgroundColor: 'white'}} //Style TextInput
            inputContainerStyle={Styles.p}
            containerStyle={{ width: '70%', alignSelf: 'center', marginBottom: 10, backgroundColor: 'rgb(238,249,251)', borderRadius: 10,}}

            onChangeText={(searchString) => {
              this.setState({currentChapterBlocks: this.getChapterViews(SearchChapterTitles(searchString))});
            }}
              onClear={() => { 
              this.setState({currentChapterBlocks: this.getChapterViews(Chapters)});
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
