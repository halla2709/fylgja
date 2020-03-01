import React from 'react';
import { Text, View, TouchableHighlight, Image, ScrollView, Dimensions } from 'react-native';
import Styles from './../styles/Styles';
import { Ionicons } from '@expo/vector-icons';
const chaptersInfo = require("../assets/content/chapters.json");
const chapterTitles = require("../assets/content/chaptertitles.json")
var chapters = [];
function CreateChapters() {
    console.log("Create chapters!");
    chapterTitles.forEach((title, chapterIndex) => {
        if(chaptersInfo[title]) {
            var chapter = chaptersInfo[title];
            chapter.key = ""+(chapterIndex+1);
            chapter.subchapters.forEach((subchapter, subIndex) => {
                subchapter.key = chapter.key+"."+(subIndex+1);
            });
            chapters.push(chapter);
        }
        else {
            console.error("Missing chapter " + title + "!!!");
        }
    });
}

function GetChapters() {
    if (chapters.length === 0)
        CreateChapters();
    return chapters;    
}

function ElementToView(element, key) {
    console.log("Element type:" + element.type);
    if(element.type == "list") {
        var items = [];
        element.content.items.forEach(function(item, index) {
            items.push(<Text style={Styles.p} key={key+index}>{item}</Text>);
        });
        return <View key={key}>
            <Text style={Styles.pBold}>{element.content.header}</Text>
            {items}
        </View>
    }
    else if(element.type == "text") {
        return <View key={key}>
            <Text style={Styles.p}>{element.content}</Text>
        </View>
    }
    else if(element.type == "image") {
        return <View key={key}>
            <Text style={Styles.pA}>{element.content}</Text>
        </View>
    }
    else {
        return <View key={key}><Text>{element.type}</Text></View>
    }
}

function GetViewBlocks(elements, title) {
    var blocks = [];
    elements.forEach((element, index) => {
        blocks.push(ElementToView(element, title+index));
    });
    return blocks;
}

async function ChapterElementsToViews(chapter) {
    var blocks = GetViewBlocks(chapter.elements, chapter.name);
    chapter.subchapters.forEach(subchapter => {
      console.log("Sub: " + subchapter.name);
      var subchapterBlocks = GetViewBlocks(subchapter.elements, chapter.name+subchapter.name);
      blocks.push(
      <View style={{ marginBottom: 10 }} key={subchapter.key}>
        <View style={Styles.subchaptercontainer}>
              <Text style={Styles.h2}>{subchapter.name}</Text>
            </View>

        <View style={Styles.pcontainer}>
          {subchapterBlocks}
        </View>
      </View>);
    });
    return blocks;
    /** scroll to chapter....
     onLayout={(event) => {
        var { x, y, width, height } = event.nativeEvent.layout;
        this.onViewLayout(subchapter.key, y);
      }
    }
    */
}

export {
    GetChapters,
    ChapterElementsToViews
};