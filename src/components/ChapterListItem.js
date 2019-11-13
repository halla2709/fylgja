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
        else if(this.subChapterView) {
            this.subChapterView = null;
        }
        
        var fontSize = (this.props.level == 0 ? 20 : 17)/PixelRatio.getFontScale();
        var fontFamily = this.isCurrentChapter() ? 'dosis-bold' : 'dosis-regular';
        var indent = "";
        for (var i = 0; i < this.props.level; i++) {
            indent += "   ";
        }

        const styles = StyleSheet.create({
            text: {
                fontFamily: fontFamily,
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