import React from 'react';
import {
    View,
    ScrollView,
    Text,
    ActivityIndicator,
    TouchableWithoutFeedback
} from 'react-native';
import { Icon } from 'react-native-elements'; 
import {
    Card,
    CardTitle,
    CardContent,
    CardAction,
    CardButton
} from 'react-native-cards';
import Styles from './../styles/Styles';
import * as rssParser from 'react-native-rss-parser';
import News from "../assets/testContent/news.js";

export class NewsFeedScreen extends React.Component {

    static navigationOptions = {
        title: 'Fréttaveita'
    };

    constructor(props) {
        super(props);
        console.log("constructor")
        this.numberLoaded = 0;
        this.data = [];
        this.state = {newsLoaded: false};
    }

    getNews(link) {
        fetch(link)
            .then((response) => response.text())
            .then((responseData) => rssParser.parse(responseData))
            .then((rss) => {
                console.log(rss.title);
                console.log(rss.items.length);
                if(rss.items.length > 0) {
                    this.data = rss.items;
                }
                this.setState({newsLoaded: true});
            });
    }

    async componentDidMount() {
        this.getNews('https://www.ljosmaedrafelag.is/rss.ashx?catId=136&cnt=10');
        /*this.getNews('https://www.ljosmaedrafelag.is/rss.ashx?catId=132&cnt=10');
        this.getNews('https://www.ljosmaedrafelag.is/rss.ashx?catId=149&cnt=10');
        this.getNews('https://www.ljosmaedrafelag.is/rss.ashx?catId=148&cnt=10');*/        
    }

    getRawText(element) {
        if(element.description.substring(0,1) === "<") {
            element.description = element.description.substring(3, element.description.length-4);
        }
        return element.description;
    }

    openNewsItem(index) {
        this.data[index].description += "opnopnopnopnopnopnopnopnopnopnopnopnopnopnpo nopdnfialsdfkhdasjkfbaewuifbvidlbuvialnflidsubadsfbweak";
        this.forceUpdate();
        console.log("Opening " + index);
    }

    render() {
        var cards = [];
        var cnt = 0;
        this.data.forEach(element => {
            var index = cnt;
            cards.push(
                <TouchableWithoutFeedback key={cnt++} onPress={() => {this.openNewsItem(index)}}>
                    <View>
                    <Card>
                        <View style={{ flex: 1, flexDirection: "row", paddingRight: 5, paddingLeft: 10 }}>
                            <Icon style={{ flex: 1 }} name='newspaper-o' type='font-awesome' color='rgb(131,27,0)' size={30} />
                            <CardTitle title={element.title} style={{ flex: 1, alignSelf: 'center' }} />
                        </View>
                        <CardContent text={this.getRawText(element)} />
                        <CardAction separator={true} inColumn={false}>
                            <CardButton onPress={() => { console.log("OPEN news", element.link); }} title="Opna Frétt" color="rgb(251,199,6)" style={{}} />
                        </CardAction>
                    </Card>
                    </View>
                </TouchableWithoutFeedback>
            );
        });
        var view = (this.state.newsLoaded ?  (
            <View contentContainerStyle={Styles.informationwholepage}>
                <ScrollView>
                    {cards}                    
                </ScrollView>
            </View>
        )
        :
        ( <View>
            <ActivityIndicator size="large" color="#0000ff" />
            </View> )
    )

        return (this.props.screenProps.fontLoaded ? view : null);
    }
}