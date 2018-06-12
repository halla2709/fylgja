import React from 'react';
import { Text, View, Button, Alert, TouchableHighlight, Image, ScrollView } from 'react-native';
import { Font } from 'expo';
import SearchBar from 'react-native-search-bar';
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
    this.numberOfChapters = Chapters.length;
    this.textBlockYs = [];
    this.textBlocks = this.getChapterViews(this.chapter); 
    this.state = {toScrollTo: 0};   
  }

  render() {
    return (
      this.props.screenProps.fontLoaded ? (
        <View contentContainerStyle={Styles.readerwholepage}>
          <View style={{ paddingBottom: 15 }}>
            <View style={Styles.decorationcontainer}>
              <Image resizeMode="contain" source={require('../assets/images/3.png')} />
            </View>
            <View style={Styles.chaptercontainer}>
              <TouchableHighlight style={Styles.leftarrow} onPress={()=>{this.props.navigation.navigate('Reader', {drawerContent: "chapters", currentChapter: SwitchChapter(this.chapter.key, -1)})}} underlayColor="rgb(245,245,245)">
                <Ionicons name="ios-arrow-back" size={42} color="rgb(34,82,171)" />
              </TouchableHighlight>
              <View style={Styles.chaptertext}>
                <Text style={Styles.h1}> {this.chapter.name} </Text>
              </View>
              <TouchableHighlight style={Styles.rightarrow} onPress={()=>{ this.props.navigation.navigate('Reader', {drawerContent: "chapters", currentChapter: SwitchChapter(this.chapter.key, 1)}) }}
                underlayColor="rgb(245,245,245)">
                <Ionicons name="ios-arrow-forward" size={42} color="rgb(34,82,171)" />
              </TouchableHighlight>
            </View>
            <View style={Styles.decorationcontainer}>
              <Image resizeMode="contain" source={require('../assets/images/4.png')} />
            </View>
          </View>
          <ScrollView style={{ marginBottom: 150 }} ref={(scrollView) => {
            if(scrollView != null) {
              scrollView.scrollTo({x:0, y:this.state.toScrollTo, animated:true});
            }
          }}>
            <View style={Styles.pcontainer}>
              <Text style={Styles.p} layout="row">{this.chapter.content}</Text>
            </View>
            {this.textBlocks}
            <View style={{ alignItems: 'center' }}>
              <Image resizeMode="contain" style={{ width: '40%' }} source={require('../assets/images/2.png')} />
              <Text style={Styles.h3}> Skilgreining á ljósmóðurstarfinu </Text>
              <Text style={Styles.h3}> Samþykkt af Alþjóða samtökum ljósmæðra ICM, Alþjóðaheilbrigðisstofnuninni WHO, og Alþjóðasamtökum fæðingar- og kvensjúkdómalækna FIGO árið 1992.</Text>
              <Text style={Styles.h3}> „Ljósmóðir er einstaklingur, sem hefur lokið námi í ljósmóðurfræði sem er viðurkennt í því landi sem það var stundað. Hún hefur lokið náminu með viðunandi vitnisburði og hlotið leyfi viðkomandi yfirvalda til að stunda ljósmæðrastörf.
              Ljósmóðir þarf að geta séð um nauðsynlegt eftirlit, umönnun og ráðgjöf til kvenna á meðgöngu, í fæðingu og sængurlegu, stundað fæðingarhjálp á eigin ábyrgð og annast nýbura og ungbörn. Þessi umönnun felur í sér fyrirbyggjandi aðgerðir, greiningu á frávikum hjá móður og
              barni, aðstoð við læknismeðferð og bráðahjálp í fjarveru læknis. Ljósmóðir gegnir mikilvægu hlutverki í heilbrigðisfræðslu og ráðgjöf ekki aðeins fyrir konur, heldur einnig fyrir fjölskylduna og þjóðfélagið í heild. Hlutverk ljósmóður ætti að fela í sér fjölskylduáætlun, undirbúning
              fyrir foreldrahlutverkið, fræðslu fyrir fæðinguna, umönnun barna og einnig að hluta til fræðslu vegna kvensjúkdóma. Ljósmóðir getur stafað á sjúkrahúsum, á stofu, á heilsugæslustöðvum, í heimahúsi eða annarstaðar í heilbrigðisþjónustunni." 
              </Text>
            </View>
          </ScrollView>
        </View>
      ) : null
    );
  }
}
