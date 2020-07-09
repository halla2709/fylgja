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
    StackActions.reset({ index:0, actions:[
      NavigationActions.navigate({ routeName: 'Reader', params: {drawerContent: "chapters", currentChapter: chapterKey}}),
  ]});
    //NavigationActions.navigate({ routeName: 'Reader', params: {drawerContent: "chapters", currentChapter: chapterKey}});
    /* this.props.navigation.dispatch(
      NavigationActions.navigate({ routeName: 'Main', params: {}, action: 
        StackActions.reset({ index:0, actions:[
          NavigationActions.navigate({ routeName: 'Reader', params: {drawerContent: "chapters", currentChapter: chapterKey}}),
      ]})
      })
      ); */
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
      this.drawerContent = null;
    } 
  }

  GetDrawerContent(routeParams) {
    if(routeParams == null) 
      return;
    if (this.drawerContent != null) {
      if(routeParams.drawerContent === "chapters" && routeParams.currentChapter == this.currentRouteParams.currentChapter) {
        return;
      }
      this.currentRouteParams = routeParams;
      this.GenerateDrawerContent();
    }
    else {
      this.currentRouteParams = routeParams;
      this.GenerateDrawerContent();
    }    
  }

  render() {
    const { navigation } = this.props;
    this.GetDrawerContent(GetCurrentRouteParams(navigation.state));
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
          <Text style={styles.drawerItem}> Fréttaveita </Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => this.navigate('InformationStack', { drawerContent: "information" })}>
         <Text style={styles.drawerItem}> Upplýsingar </Text>
        </TouchableOpacity>
        
        <TouchableOpacity onPress={() => this.navigate('ReaderStack')}>
         <Text style={styles.drawerItem}> Handbók  </Text>
        </TouchableOpacity>

      </View>
    </View>

)
: null

    )
  }
}


