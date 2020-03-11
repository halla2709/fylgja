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
        console.log(title);
        if(chaptersInfo[title]) {
            console.log("Found");
            var chapter = chaptersInfo[title];
            chapter.key = ""+(chapterIndex+1);
            if(chapter.subchapters) {
                chapter.subchapters.forEach((subchapter, subIndex) => {
                    subchapter.key = chapter.key+"."+(subIndex+1);
                });
            }
            chapters.push(chapter);
        }
        else {
            console.error("Missing chapter " + title + "!!!");
        }
    });
    console.log("Chapters length", chapters.length);
}

function GetChapters() {
    if (chapters.length === 0)
        CreateChapters();
    return chapters;    
}

function GetText(textItem, key, array) {
    if(typeof textItem === "string") {
        array.push(<Text style={Styles.p} key={key}>{textItem}</Text>);
    } else {
        textItem.forEach(function(item, index) {
            array.push(<Text style={Styles.p} key={key+index}>{item}</Text>)
        });
    }
    return array;
}

function ElementToView(element, key) {
    console.log("Element type:" + element.type);
    if(element.type == "list") {
        var items = [];
        if (element.content.header) 
            items.push(<Text key={key+"header"} style={Styles.pBold}>{element.content.header}</Text>);
        
        element.content.items.forEach(function(item, index) {
            GetText(item, key+index, items);
        });
        return <View key={key} style={Styles.elementcontainer}>
            {items}
        </View>
    }
    else if(element.type == "text") {
        return <View key={key} style={Styles.elementcontainer}>
            {GetText(element.content,key,[])}
        </View>
    }
    else if(element.type == "image") {
        return <View key={key}>
            <Text style={Styles.pA}>IMAGE</Text>
        </View>
    }
    else if(element.type == "numberList") {
        var items = [];
        if (element.content.header) 
            items.push(<Text key={key+"header"} style={Styles.pBold}>{element.content.header}</Text>);
        
        element.content.items.forEach(function(item, index) {
            if(typeof item === "string") {
                item = (index+1)+". " + item;
            } else {
                item[0] = (index+1)+". " + item[0];
            }
            GetText(item, key+index, items);
        });
        return <View key={key} style={Styles.elementcontainer}>
            {items}
        </View>

    }
    else {
        return <View key={key} style={Styles.elementcontainer}><Text>{element.type}</Text></View>
    }
}

function GetViewBlocks(elements, title) {
    var blocks = [];
    if (elements) {
        elements.forEach((element, index) => {
            blocks.push(ElementToView(element, title+index));
        });
    }
    return blocks;
}

async function ChapterElementsToViews(chapter) {
    var blocks = GetViewBlocks(chapter.elements, chapter.name);
    if (chapter.subchapters) {
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
    }
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