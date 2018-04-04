import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, FlatList } from 'react-native'

export default class ChapterListItem extends React.Component {

    _onPress = () => {
        console.log(this.props.chapter);
        //this.props.onPressItem(this.props.id);
    };

    render() {
        var subChapterView;
        var subChapters = this.props.chapter.subchapters;
        if (subChapters && subChapters.length > 0) {
            subChapterView = <FlatList
                data={subChapters}
                renderItem={({ item }) => <ChapterListItem chapter={item} level={this.props.level+1}/>}
            />
        }

        var fontSize = this.props.level == 0 ? 24 : 16;
        var indent = "";
        for(var i = 0; i < this.props.level; i++) {
            indent += "   ";
        }
        
const styles = StyleSheet.create({
    text: {
      fontSize: fontSize
    }
  });
        return (
            <View>
                <TouchableOpacity onPress={this._onPress}>
                    <View>
                        <Text style={styles.text}>
                            {indent + this.props.chapter.key}
                        </Text>
                    </View>
                </TouchableOpacity>
                {subChapterView}
            </View>
        );
    }
}