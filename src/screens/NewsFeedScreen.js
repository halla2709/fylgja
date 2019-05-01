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
import { GetNewsJson } from './../controllers/NewsFeedHelper';


export class NewsFeedScreen extends React.Component {

    static navigationOptions = {
        title: 'Fréttir og Viðburðir'
    };

    constructor(props) {
        super(props);
        this.contentID = props.navigation.state.params.contentID;
        this.data = [];
        this.state = {newsLoaded: false, states: []};
    }

    ShowHideTextComponentView = (element) =>{
        if(element.status)
        {
            element.status = false;
        }
        else
        {
            element.status = true;
        }
      }

    async componentDidMount() {
        GetNewsJson("https://www.ljosmaedrafelag.is/api/articles/GetArticleList?count=10&catId="+this.contentID+"&skip=0")
            .then((items) => {
                this.data = items;
                this.setState({newsLoaded: true});
            });
        //GetNews('https://www.ljosmaedrafelag.is/rss.ashx?catId='+this.contentID+'&cnt=10')
        //   .then((items) => { this.data = items; this.setState({newsLoaded: true}); });      
    }

    getRawText(text) {
        if(text.substring(0,1) === "<") {
            return text.substring(3, text.length-4);
        }
        return text;
    }

    getDate(dateString) {
        var date = new Date(dateString);
        var monthNames = [
            "Janúar", "Febrúar", "Mars",
            "Apríl", "Maí", "Júní", "Júlí",
            "Ágúst", "September", "Október",
            "Nóvember", "Desember"
          ];
        
          var day = date.getDate();
          var monthIndex = date.getMonth();
          var year = date.getFullYear();
        
          return day + '. ' + monthNames[monthIndex] + ' ' + year;
    }

    toggleNewsItem(index) {
        var states = this.state.states;
        var currentValue = states[index] ? states[index] : false;
        states[index] = !currentValue;
        this.setState({states});
    }

    render() {
        var cards = [];
        var cnt = 0;
        this.data.forEach(element => {
            var index = cnt;
            cards.push(
                <TouchableWithoutFeedback key={cnt++} onPress={() => {this.toggleNewsItem(index)}}>
                    <View>
                        <Card>
                            <View style={{ paddingRight: 5, alignContent: "flex-end", alignItems: 'flex-end', alignSelf: 'flex-end' }}>
                                <Text style={Styles.dateText}>{this.getDate(element.displayDate)}</Text>
                            </View>
                            <View style={{ flex: 1, flexDirection: "row", paddingRight: 5, paddingLeft: 10 }}>
                                <Icon style={{ flex: 1 }} name='newspaper-o' type='font-awesome' color='rgb(131,27,0)' size={30} />
                                <CardTitle title={element.title} style={{ flex: 1, alignSelf: 'center' }} />
                            </View>
                            
                            <CardContent text={this.state.states[index] ? this.getRawText(element.bodyText) : this.getRawText(element.entryText)} />
                            <CardAction separator={true} inColumn={false}>
                            <View style={{alignSelf:"center", alignContent:"center", alignItems:"center"}}>
                                <CardButton onPress={()=>{element.link}} title="Opna Frétt" color="rgb(34,82,171)" />
                            </View>
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
