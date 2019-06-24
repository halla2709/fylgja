import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, FlatList, PixelRatio } from 'react-native'

class ChapterListItem extends React.Component {
    constructor(props) {
        super();
    }

    shouldOpenChapter(currentChapterKey, level, chapter) {
        const currentKeys = currentChapterKey.split(".");
        const chapterKeys = chapter.key.split(".");
        return currentKeys[level] == chapterKeys[level];
    }

    render() {
        this.subChapterView;
        if(this.props.currentChapter && this.shouldOpenChapter(this.props.currentChapter, this.props.level, this.props.chapter)) {
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
        
        var fontSize = (this.props.level == 0 ? 20 : 17)/PixelRatio.getFontScale();
        var indent = "";
        for (var i = 0; i < this.props.level; i++) {
            indent += "   ";
        }

        const styles = StyleSheet.create({
            text: {
                fontFamily: 'dosis-regular',
                fontSize: fontSize,
                color: '#3a3a3a',

            }
        });

        var text = "";
        if (this.props.chapter.name !== "#EkkiBirta#") {
            text = indent + this.props.chapter.name;

                 
        }
        
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
}

export default ChapterListItem;