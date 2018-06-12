import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, FlatList } from 'react-native'
import { withNavigation } from 'react-navigation'

class ChapterListItem extends React.Component {
    _onPress = (chapterKey) => {
        var naviagteFunction = this.props.navigation ? this.props.navigation.navigate : this.props.extraData.navigate;
        naviagteFunction("Reader", { drawerContent: "chapters", currentChapter: chapterKey });
    };

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
                        <ChapterListItem chapter={item} level={this.props.level+1}
                        extraData={{currentChapter:this.props.currentChapter, navigate:this.props.navigation.navigate}}/>}
                />
            }
        }
        else {
            this.subChapterView = null;
        }

        var fontSize = this.props.level == 0 ? 24 : 16;
        var indent = "";
        for (var i = 0; i < this.props.level; i++) {
            indent += "   ";
        }

        const styles = StyleSheet.create({
            text: {
                fontSize: fontSize
            }
        });

        return (
            <View>
                <TouchableOpacity onPress={() => {
                    this._onPress(this.props.chapter.key)}}>
                    <View>
                        <Text style={styles.text}>
                            {indent + this.props.chapter.name}
                        </Text>
                    </View>
                </TouchableOpacity>
                {this.subChapterView}
            </View>
        );
    }
}

export default withNavigation(ChapterListItem);