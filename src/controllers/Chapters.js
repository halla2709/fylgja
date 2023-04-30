import React from 'react';
import { Text, View, TouchableHighlight, Image, ScrollView, Dimensions, Alert } from 'react-native';
import Styles from './../styles/Styles';
var chaptersData, chapterTitles;
var chapters = [];
var waitingForChapters = false;
var chaptersReloadedCb;

async function getJson(uri) {
    try {
        var response = await fetch(uri);
        var json = await response.json();
        return json;
    }
    catch(err) {
        if(err.message === "JSON Parse error: Unrecognized token '﻿'" || err.message === "JSON Parse error: Unrecognized token ''")  {
            Alert.alert(
                "Gat ekki lesið JSON",
                uri + "\nÞað gæti verið að skjalið sé ekki vistað með UTF-8 encoding. Skoðið leiðbeiningarnar um hvernig skal gera það og hlaðið skránni upp aftur."
              );
        } else {
            Alert.alert(
            "Gat ekki lesið JSON frá",
            uri + "\n" + err + ". Ef vandræðin hafa með skrána að gera athugið JSON-ið með góðum validator."
          );
        }
        throw "Unable to parse json from " + uri + ". " + err;  
    }
}

async function DownloadChapters() {
    try {
        var result = await Promise.all([
            getJson("https://ljosmaedrafelag.is/fylgja-app/chapters"),
            getJson("https://ljosmaedrafelag.is/fylgja-app/chaptertitles")]);
            chaptersData = result[0];
            chapterTitles = result[1];
            if (waitingForChapters)
                CreateChapters();
    } catch (err) {
        console.warn(err);
    }    
}

function HasImages(chapter) {
    if (chapter.elements) {
        for (var i = 0; i < chapter.elements.length; i++) {
            if (chapter.elements[i].type == "image") {
                return true;
            }
        }
    }
    return false;
}

function CreateChapters() {
    if (!chapterTitles || !chaptersData) {
        console.warn("Not ready");
        waitingForChapters = true;
        return;
    }
    console.log("Create chapters!");
    var missingChapters = "";
    chapterTitles.forEach((title, chapterIndex) => {
        if (chaptersData[title]) {
            var chapter = chaptersData[title];
            chapter.hasImages = HasImages(chapter);
            chapter.key = "" + (chapterIndex + 1);
            if (chapter.subchapters) {
                chapter.subchapters.forEach((subchapter, subIndex) => {
                    chapter.hasImages = HasImages(subchapter) || chapter.hasImages;
                    subchapter.key = chapter.key + "." + (subIndex + 1);
                });
            }
            chapters.push(chapter);
        }
        else {
            missingChapters += title + " ";
            chapters.push({ hasImages: false, key: "" + (chapterIndex + 1), elements: [], name: title })
        }
    });
    if(missingChapters.length > 0) {            
        Alert.alert(
            "Vantar kafla",
            "Eftirfarandi kaflaheiti fundust ekki í chapters.txt.\n" + missingChapters 
          );
    }
    if (chaptersReloadedCb)
        chaptersReloadedCb(chapters);
    waitingForChapters = false;
}

function GetChapters() {
    if (chapters.length === 0)
        CreateChapters();
    return chapters;
}

function KeyForName(name, subName) {
    var foundKey;
    chapters.forEach(chapter => {
        if (name === chapter.name) {
            foundKey = chapter.key;
            chapter.subchapters.forEach(subchapter => {
                if (subName === subchapter.name) {
                    foundKey = subchapter.key;
                    return;
                }
            });
            return;
        }
    });
    return foundKey;
}

function GetImageDimensions(imageWidth, imageHeight) {
    var screenWidth = Dimensions.get('window').width;
    if (imageWidth > screenWidth) {
        var wantedImageWidth = 0.85 * screenWidth;
        var ratio = wantedImageWidth / imageWidth;
        return { width: wantedImageWidth, height: ratio * imageHeight };
    }
    return { width: imageWidth, height: imageHeight };
}

async function GetImageView(element, key) {
    if (!(element.content.endsWith(".png") || element.content.endsWith(".jpeg") || element.content.endsWith(".jpg") || element.content.endsWith(".bmp") || element.content.endsWith(".gif"))) {
        console.warn("Not a valid image url " + element.content);
        <View key={key} style={Styles.readerImage}>
            <Text style={Styles.p}>Missing image...</Text>
        </View>
    }
    await new Promise((resolve, reject) => {
        Image.getSize(element.content, function (w, h) {
            element.dimensions = GetImageDimensions(w, h);
            resolve();
        }, function (err) {
            console.error(err);
            element.dimensions = { width: 200, height: 200 };
            reject();
        });
    });
    return <View key={key} style={Styles.readerImage}>
        <Image source={{ uri: element.content }} style={{ width: element.dimensions.width, height: element.dimensions.height }} />
    </View>
}

function GetText(textItem, key, array, italic) {
    var style = italic ? Styles.pItalic : Styles.p;
    if (typeof textItem === "string") {
        array.push(<Text style={style} key={key + "0"}>{textItem}</Text>);
    } else {
        textItem.forEach(function (item, index) {
            array.push(<Text style={style} key={key + index}>{item}</Text>)
        });
    }
    return array;
}

function GetListText(listItem, key, array, prefix) {
    if (typeof listItem === "string") {
        array.push(<Text style={Styles.p} key={key + "0"}><Text style={Styles.pBold} key={key + "0b"}>{prefix}</Text>{listItem}</Text>);
    }
    else {
        array.push(<Text style={Styles.p} key={key + "0"}><Text style={Styles.pBold} key={key + "0b"}>{prefix}</Text>{listItem[0]}</Text>);
        listItem.forEach(function (item, index) {
            if (index === listItem.length - 1)
                array.push(<Text style={Styles.p} key={key + index}>{item}</Text>)
            else if (index > 0)
                array.push(<Text style={Styles.p} key={key + index}>{item}</Text>)
        });
    }
}

async function ElementToView(element, key) {
    if (element.type == "list") {
        var items = [];
        if (element.content.header)
            items.push(<Text key={key + "header"} style={Styles.pSubchapterBold}>{element.content.header}</Text>);

        element.content.items.forEach(function (item, index) {
            GetListText(item, key + index, items, "▪ ");
        });
        return <View key={key} style={Styles.elementcontainer}>
            {items}
        </View>
    }
    else if (element.type == "text") {
        return <View key={key} style={Styles.elementcontainer}>
            {GetText(element.content, key, [])}
        </View>
    }
    else if (element.type == "italics") {
        return <View key={key} style={Styles.elementcontainer}>
            {GetText(element.content, key, [], true)}
        </View>
    }
    else if (element.type == "image") {
        return await GetImageView(element, key);
    }
    else if (element.type == "numberList") {
        var items = [];
        if (element.content.header)
            items.push(<Text key={key + "header"} style={Styles.pSubchapterBold}>{element.content.header}</Text>);

        element.content.items.forEach(function (item, index) {
            GetListText(item, key + index, items, (index + 1) + ". ");
        });

        return <View key={key} style={Styles.elementcontainer}>
            {items}
        </View>

    }
    else {
        return <View key={key} style={Styles.elementcontainer}><Text>{element.type}</Text></View>
    }
}

async function GetViewBlocks(elements, title) {
    if (elements) {
        async function ElementToViewFactory(el, i) {
            return await ElementToView(el, title + i);
        }
        return await Promise.all(elements.map(ElementToViewFactory));
    }
    return [];
}


async function ChapterElementsToViews(chapter, parent) {
    var blocks = await GetViewBlocks(chapter.elements, chapter.name);
    if (chapter.subchapters) {
        async function GetSubchapterBlocks(subchapter) {
            var subchapterBlocks = await GetViewBlocks(subchapter.elements, chapter.name + subchapter.name);
            return (
                <View style={{ marginBottom: 10 }} key={subchapter.key} onLayout={(event) => {
                    var { x, y, width, height } = event.nativeEvent.layout;
                    parent.onViewLayout(subchapter.key, y);
                }}>
                    <View style={Styles.subchaptercontainer}>
                        <Text style={Styles.h2subchapter}>{subchapter.name}</Text>
                    </View>

                    <View style={Styles.pcontainer}>
                        {subchapterBlocks}
                    </View>
                </View>);
        }
        var allSubchapterBlocks = await Promise.all(chapter.subchapters.map(GetSubchapterBlocks));
        blocks = blocks.concat(allSubchapterBlocks);
    }
    return blocks;
}

function SetChaptersLoadedCallback(cb) {
    chaptersReloadedCb = cb;
}

export {
    GetChapters,
    ChapterElementsToViews,
    KeyForName,
    DownloadChapters,
    SetChaptersLoadedCallback
};