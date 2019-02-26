import React from 'react';
import { Text, View,  TouchableHighlight, Image, ScrollView, ImageBackground } from 'react-native';
import Styles from './../styles/Styles';
import { Ionicons } from '@expo/vector-icons';
import Chapters from "../assets/testContent/chapters.js";
import { SwitchChapter } from '../controllers/NavigationHelper.js';

export class ReaderScreen extends React.Component {

  onViewLayout(key, y) {
    if(key === this.props.navigation.state.params.currentChapter) {
      this.setState({toScrollTo: y});
    }
  }

  getChapter(chapterKey) {
    const topChapter = chapterKey.split(".")[0];
    return Chapters[topChapter - 1];
  }

  getChapterViews(chapter) {
    var textBlocks = [];
    chapter.subchapters.forEach(subchapter => {
      textBlocks.push(<View key={subchapter.key} onLayout={(event) => {
        var {x, y, width, height} = event.nativeEvent.layout;
        this.onViewLayout(subchapter.key, y);
      }}>
        <View style={Styles.subchaptercontainer}>
          <Text style={Styles.h2}>{subchapter.name}</Text>
        </View>
        <View style={Styles.pcontainer}>
          <Text style={Styles.p} layout="row">{subchapter.content}</Text>
        </View>
      </View>)
    });
    return textBlocks;
  }

  constructor(props) {
    super(props);
    this.chapter = this.getChapter(props.navigation.state.params.currentChapter);
    console.log("Chapter " + props.navigation.state.params.currentChapter);
    //console.log(this.chapter);
    this.numberOfChapters = Chapters.length;
    this.textBlockYs = [];
    this.textBlocks = this.getChapterViews(this.chapter); 
    this.state = {toScrollTo: 0};
  }

  render() {
    return (
      this.props.screenProps.fontLoaded ? (
        <View contentContainerStyle={Styles.readerwholepage}>
         
          <View style={{ paddingBottom: 5 }}>
            <View style={Styles.decorationcontainer}>
              <Image style={Styles.readerdecoration} resizeMode="contain" source={require('../assets/images/11.png')} />
            </View>
            <View style={Styles.chaptercontainer}>
              <TouchableHighlight style={Styles.leftarrow} onPress={()=>{console.log("Left arrow pressed"); this.props.navigation.replace('Reader', {drawerContent: "chapters", currentChapter: SwitchChapter(this.chapter.key, -1)});}} underlayColor="rgb(245,245,245)">
                <Ionicons name="ios-arrow-back" size={42} color="rgb(34,82,171)" />
              </TouchableHighlight>
              <View style={Styles.chaptertext}>
                <Text style={Styles.h1}> {this.chapter.name} </Text>
              </View>
              <TouchableHighlight style={Styles.rightarrow} onPress={()=>{console.log("Right arrow pressed"); this.props.navigation.replace('Reader', {drawerContent: "chapters", currentChapter: SwitchChapter(this.chapter.key, 1)});}}
                underlayColor="rgb(245,245,245)">
                <Ionicons name="ios-arrow-forward" size={42} color="rgb(34,82,171)" />
              </TouchableHighlight>
            </View>
            <View style={Styles.decorationcontainer}>
              <Image style={Styles.readerdecoration} resizeMode="contain" source={require('../assets/images/10.png')} />
            </View>
          </View>
          <ScrollView style={{ padding: 10, width: '100%', backgroundColor: 'rgb(248,248,249)', borderRadius: 10, opacity: 0.95, }} ref={(scrollView) => {
            if(scrollView != null) {
              scrollView.scrollTo({x:0, y:this.state.toScrollTo, animated:true});
            }
          }}>
            <View style={Styles.pcontainer}>
              <Text style={Styles.p} layout="row">{this.chapter.content}</Text>
            </View>
            {this.textBlocks}
      
          </ScrollView>
        </View>
      ) : null
    );
  }
}

