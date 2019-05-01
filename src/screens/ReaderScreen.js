import React from 'react';
import { Text, View,  TouchableHighlight, Image, ScrollView, Dimensions, } from 'react-native';
import Styles from './../styles/Styles';
import { Ionicons } from '@expo/vector-icons';
import Chapters from "../assets/testContent/chapters.js";
import { SwitchChapter } from '../controllers/NavigationHelper.js';
//import ImageSize from 'react-native-image-size';

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

      textBlocks.push(
      <View style={{marginBottom: 10}} key={subchapter.key} onLayout={(event) => {
        var {x, y, width, height} = event.nativeEvent.layout;
        this.onViewLayout(subchapter.key, y);}}>
        <View style={Styles.subchaptercontainer}>
          <Text style={Styles.h2}>{subchapter.name}</Text>
        </View>

        <View style={Styles.pcontainer}>
          <Text style={Styles.p} layout="row">{subchapter.content}</Text>
        </View>

        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <Image resizeMode="center" source={subchapter.image} style={{width: 200, height:200 }} />  
        </View>
      </View>)

    });
    return textBlocks;
  }



  constructor(props) {
    super(props);
    this.chapter = this.getChapter(props.navigation.state.params.currentChapter);
    this.numberOfChapters = Chapters.length;
    this.textBlockYs = [];
    this.textBlocks = this.getChapterViews(this.chapter); 
    this.state = {toScrollTo: 0};
  }

  render() {
    return (
      this.props.screenProps.fontLoaded ? (
        <View contentContainerStyle={Styles.readerwholepage}>

           
         
          <View style={{borderColor:"rgb(34,82,171)", borderRadius: 10, borderBottomWidth:0.5, width: '99%', alignSelf: 'center',}}>
            <View style={Styles.decorationcontainer}>
              <Image style={Styles.readerdecoration} resizeMode="contain" source={require('../assets/images/11.png')} />
            </View>
            <View style={Styles.chaptercontainer}>
              <TouchableHighlight style={Styles.leftarrow} onPress={()=>{this.props.navigation.replace('Reader', {drawerContent: "chapters", currentChapter: SwitchChapter(this.chapter.key, -1)});}} underlayColor="rgb(245,245,245)">
                <Ionicons name="ios-arrow-back" size={42} color="rgb(34,82,171)" />
              </TouchableHighlight>
              <View style={Styles.chaptertext}>
                <Text style={Styles.h1reader}> {this.chapter.name} </Text>
              </View>
              <TouchableHighlight style={Styles.rightarrow} onPress={()=>{this.props.navigation.replace('Reader', {drawerContent: "chapters", currentChapter: SwitchChapter(this.chapter.key, 1)});}} underlayColor="rgb(245,245,245)">
                <Ionicons name="ios-arrow-forward" size={42} color="rgb(34,82,171)" />
              </TouchableHighlight>
            </View>
            <View style={Styles.decorationcontainer}>
              <Image style={Styles.readerdecoration} resizeMode="contain" source={require('../assets/images/10.png')} />
            </View>
          </View>

            
          <ScrollView style={{ height: '100%',paddingHorizontal: 5, width: '99%', alignSelf: 'center', backgroundColor: 'rgb(248,248,249)', borderRadius: 10, opacity: 0.95, }} ref={(scrollView) => {
            if(scrollView != null) {
              scrollView.scrollTo({x:0, y:this.state.toScrollTo, animated:true}); }}}>

              
           <View style={{paddingBottom: 150}}>
              <Text style={Styles.p} layout="row">{this.chapter.content}</Text>
                {this.textBlocks} 
            </View> 
         </ScrollView>
         
    
          
        </View>
      ) : null
    );
  }
}

