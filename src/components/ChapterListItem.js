import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, FlatList, PixelRatio } from 'react-native'

class ChapterListItem extends React.Component {
    constructor(props) {
        super();
    }

    isCurrentChapter() {
        if(this.props.currentChapter) {
            const currentKeys = this.props.currentChapter.split(".");
            const chapterKeys = this.props.chapter.key.split(".");
            return currentKeys[this.props.level] == chapterKeys[this.props.level];
        }
        return false;
    }

    render() {
        this.subChapterView;
        if(this.isCurrentChapter()) {
            var subChapters = this.props.chapter.subchapters;
            if (subChapters && subChapters.length > 0) {
                this.subChapterView = <FlatList
                    data={subChapters}
                    renderItem={({ item }) => 
                        <ChapterListItem chapter={item} level={this.props.level+1} currentChapter={this.props.currentChapter} onChapterPressed={(chapterKey) => this.props.onChapterPressed(chapterKey)}/>}
                />
            }
        }
        else {
            this.subChapterView = null;
        }
        var fancy = this.isCurrentChapter() ? '☼' : "" ;
        var fontSize = (this.props.level == 0 ? 20 : 18)/PixelRatio.getFontScale();
        var fontFamily = this.isCurrentChapter() ? 'dosis-bold' : 'dosis-regular';
        var indent = "";
        var mypadding = 2;
        var anotherpadding = 4;
        for (var i = 0; i < this.props.level; i++) {
         //   indent += "   ";
            mypadding = 22 ;
        }

        const styles = StyleSheet.create({
            text: {
                fontFamily: fontFamily,
                fontSize: fontSize,
                color: '#3a3a3a',
                paddingLeft: mypadding,
                paddingBottom: anotherpadding,

            }
        });

        var text = "";
        if (this.props.chapter.name !== "#EkkiBirta#" && this.props.chapter.name.length > 0) {
            text = fancy + indent + this.props.chapter.name;
            return (
                <View>
                    <TouchableOpacity onPress={() => {
                        this.props.onChapterPressed(this.props.chapter.key)}}>
                        <View> 
                            <Text style={styles.text}>
                            {text}
                            </Text>
                        </View>
                    </TouchableOpacity>
                    {this.subChapterView}
                </View>
            );
        }      
        return null;
    }
}

export default ChapterListItem;