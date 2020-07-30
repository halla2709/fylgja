import React from 'react'
import { Text, View, Image, ScrollView, FlatList, TouchableOpacity } from 'react-native'
import { StackActions, NavigationActions } from 'react-navigation'
import ChapterListItem from './ChapterListItem'
import styles from '../styles/Styles'
import { GetChapters } from "../controllers/Chapters.js";
import { GetCurrentRouteParams } from '../controllers/NavigationHelper.js';

export default class DrawerComponent extends React.Component {
  onChapterPressed(chapterKey) {
    this.props.navigation.closeDrawer();
    this.props.navigation.dispatch(
      StackActions.replace({ routeName: "Reader", params: {drawerContent: "chapters", currentChapter: chapterKey}})
    );
  }

  navigate(navigation, options) {
    this.props.navigation.closeDrawer(); 
    this.props.navigation.navigate(navigation, options);
  }

  GenerateDrawerContent() {
    if(this.currentRouteParams.drawerContent === "chapters") {
      this.drawerContent = 
     <FlatList 
          data={GetChapters()}
          renderItem={({ item }) => 
          <ChapterListItem style={styles.chapterlist} chapter={item} level={0} currentChapter={this.currentRouteParams.currentChapter} onChapterPressed={(chapterKey) => this.onChapterPressed(chapterKey)}/>}
          extraData={currentChapter = this.currentRouteParams.currentChapter}
        />
    }  
    else {
      this.drawerContent = [];
    } 
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (nextProps.screenProps.fontLoaded && this.props.screenProps.fontLoaded !== nextProps.screenProps.fontLoaded) 
      return true;
    var newRouteParams = GetCurrentRouteParams(nextProps.navigation.state);

    if (newRouteParams === undefined) newRouteParams = {};
    const keys1 = Object.keys(this.currentRouteParams);
    const keys2 = Object.keys(newRouteParams);

    if (keys1.length !== keys2.length)
      return true;

    for (let key of keys1) {
      if (this.currentRouteParams[key] !== newRouteParams[key])
        return true;
    }
    return false;
  }

  GetDrawerContent(routeParams) {
    if(routeParams == null) 
      this.currentRouteParams = {};
    else
      this.currentRouteParams = routeParams;

    this.GenerateDrawerContent();
  }

  render() {
    this.GetDrawerContent(GetCurrentRouteParams(this.props.navigation.state));
    return (
      this.props.screenProps.fontLoaded ? (
    <View style={styles.drawer}>
      <TouchableOpacity onPress={() => { this.navigate('Home') } }> 
        <View style={styles.drawerLogo}>
          <Image resizeMode='contain' style={styles.drawerImage} source={require('../assets/images/logo.png')} />
            <View style={styles.drawerLogoText}>
            <Text style={styles.ljosmaedrafelagInfo1}>Ljósmæðrafélag</Text>
            <Text style={styles.ljosmaedrafelagInfo2}>Íslands</Text>
            </View>
            </View>
        </TouchableOpacity>
      

      {this.drawerContent}
        
      <View style={styles.drawerButtons} > 
        <TouchableOpacity  onPress={() => this.navigate('NewsFeedStack', { drawerContent: "news" })}>
          <Text style={styles.drawerItem1}> Fréttaveita </Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => this.navigate('InformationStack', { drawerContent: "information" })}>
         <Text style={styles.drawerItem2}> Upplýsingar </Text>
        </TouchableOpacity>
        
        <TouchableOpacity onPress={() => this.navigate('ReaderStack')}>
         <Text style={styles.drawerItem3}> Handbók  </Text>
        </TouchableOpacity>

      </View>
    </View>

)
: null

    )
  }
}


