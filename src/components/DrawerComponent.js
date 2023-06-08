import React from 'react'
import { Text, View, Image, FlatList, TouchableOpacity, StatusBar } from 'react-native'
import { StackActions } from '@react-navigation/native';
import ChapterListItem from './ChapterListItem'
import styles from '../styles/Styles'
import { GetChapters } from "../controllers/Chapters.js";

export default class DrawerComponent extends React.Component {
  onChapterPressed(chapterKey) {
    this.props.navigation.closeDrawer();
    this.props.navigation.dispatch(
      StackActions.replace("Reader", { drawerContent: "chapters", currentChapter: chapterKey })
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

  shouldComponentUpdate(nextProps) {
    var newRouteParams = this.GetCurrentRouteParams(nextProps.state);

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

  GetCurrentRouteParams(state) {
      if (state.index || state.index === 0) {
          return this.GetCurrentRouteParams(state.routes[state.index]);
      }
      else if (state.state) {
          return this.GetCurrentRouteParams(state.state);
      }
      else {
          return state.params;
      }
  }

  GetDrawerContent(routeParams) {
    if(routeParams == null) 
      this.currentRouteParams = {};
    else
      this.currentRouteParams = routeParams;

    this.GenerateDrawerContent();
  }

  render() {
    this.GetDrawerContent(this.GetCurrentRouteParams(this.props.state));
    return (
    <View style={styles.drawer}>
      <StatusBar backgroundColor={'rgb(34,82,171)'}/>
      <TouchableOpacity onPress={() => { this.navigate('HomeStack') } }> 
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
  }
}


