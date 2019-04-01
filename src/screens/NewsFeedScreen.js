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
import InformationListItem from '../components/InformationListItem';
import Information from "../assets/testContent/info.js";
import { GetNews } from './../controllers/NewsFeedHelper';


export class NewsFeedScreen extends React.Component {

    static navigationOptions = {
        title: 'Fréttir og Viðburðir'
    };

    constructor(props) {
        super(props);
        this.contentID = props.navigation.state.params.contentID;
        this.data = [];
        this.state = {newsLoaded: false};
    }

    async componentDidMount() {
        GetNews('https://www.ljosmaedrafelag.is/rss.ashx?catId='+this.contentID+'&cnt=10')
            .then((items) => { this.data = items; this.setState({newsLoaded: true}); });      
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
                            <View style={{ paddingRight: 5, alignContent: "flex-end", alignItems: 'flex-end', alignSelf: 'flex-end' }}>
                                <Text style={Styles.dateText}>{element.pubDate}</Text>
                            </View>
                            <View style={{ flex: 1, flexDirection: "row", paddingRight: 5, paddingLeft: 10 }}>
                                <Icon style={{ flex: 1 }} name='newspaper-o' type='font-awesome' color='rgb(131,27,0)' size={30} />
                                <CardTitle title={element.title} style={{ flex: 1, alignSelf: 'center' }} />
                            </View>

                            <CardContent text={this.getRawText(element)} />
                            <CardAction separator={true} inColumn={false}>
                                <CardButton onPress={()=>{}} title="Opna Frétt" color="rgb(34,82,171)" />
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
