import React from 'react';
import {
    View,
    ImageBackground,
    ScrollView,
    Text,
    ActivityIndicator,
    TouchableWithoutFeedback,
} from 'react-native';
import * as WebBrowser from 'expo-web-browser';
import {
    Card,
    CardTitle,
    CardContent,
    CardAction,
    CardButton
} from 'react-native-cards';
import Styles from './../styles/Styles';
import { GetNewsJson, GetDate } from '../controllers/NewsFeedHelper';

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
    }

    getRawText(text) {
        if(text.substring(0,1) === "<") {
            return text.substring(3, text.length-4);
        }
        return text;
    }

    toggleNewsItem(index) {
        var states = this.state.states;
        var currentValue = states[index] ? states[index] : false;
        states[index] = !currentValue;
        this.setState({states});
    }

    getTextWithStyle(data) {
        function goToLink(href) {
            try {
                if (href.startsWith("/")) {
                    WebBrowser.openBrowserAsync("http://www.ljosmaedrafelag.is"+href);
                }
                else if(!href.startsWith("#")){
                    WebBrowser.openBrowserAsync(href);
                }
            }
           catch(e) {
               console.error(e);
           }
        }

        switch (data.type) {
            case 'p': return <Text style={Styles.p} key={data.key}>{data.text}</Text>;
            case 'a': return <Text onPress={ () => {goToLink(data.href)} } style={Styles.pA} key={data.key}>{data.text}</Text>;
            case 'strong': return <Text style={Styles.pBold} key={data.key}>{data.text}</Text>;
            case 'th': return <Text style={Styles.pBold} key={data.key}>{data.text}</Text>;
            case 'a href': return <Text style={Styles.pBoldCenter} key={data.key}>{data.text}</Text>;
            case 'p a': return <Text style={Styles.pBold} key={data.key}>{data.text}</Text>;
            case 'span': return <Text style={Styles.pBoldCenter} key={data.key}>{data.text}</Text>;
            case 'href': return <Text style={Styles.p} key={data.key}>{data.text}</Text>;
            default: return <Text style={Styles.p} key={data.key}>{data.text}</Text>;
        }
    }

    getTextViews(paragraphs, array) {
        var views = [];
        var index = 0;
        var f = this.getTextWithStyle;
        paragraphs.text.forEach(function(p) {
            var texts = [];
            p.forEach(function(textItem) {
                texts.push(f(textItem));
            });
            array.push(
                <Text key={ paragraphs.key+"."+index++ } >{texts}</Text>
            );
        });
        return views;
    }

    render() {
        var cards = [];
        var cnt = 0;
        this.data.forEach(element => {
            var body = [];
            if (element.parsedEntry && element.parsedEntry.length > 0) {
                body.push(<Text style={Styles.pImportant} key={cnt+"parsedEntry"}>{element.parsedEntry}</Text>);
            }
            if(this.state.states[cnt]) {
                element.parsedBody.forEach((data) => {
                    if(data.type == 'p') {
                        this.getTextViews(data, body);
                    }
                    else {
                        body.push(
                            <Text style={Styles.pImportant} key={ data.key } >Ýtið á Opna frétt hér að neðan til að lesa meira.</Text>
                        );
                    }
                });
            }
            else {
                body.push(<Text style={Styles.ptiny} key={cnt+"seemore"}>Sjá meira</Text>);
            }
            var index = cnt;
            cards.push(
                <TouchableWithoutFeedback key={cnt++} onPress={() => {this.toggleNewsItem(index)}}>
                    <View>
                        <Card>
                            <View style={{ paddingRight: 5, alignContent: "flex-end", alignItems: 'flex-end', alignSelf: 'flex-end' }}>
                                <Text style={Styles.dateText}>{GetDate(element.displayDate)}</Text>
                            </View>
                            <View style={{ flex: 1, flexDirection: "row", paddingRight: 5 }}>
                                <CardTitle title={element.title} style={{ flex: 1}} />
                            </View>
                            
                            <CardContent> 
                                <View>{body}</View>
                            </CardContent>
                            <CardAction separator={true} inColumn={false}>
                            <View style={{alignSelf:"center", alignContent:"center", alignItems:"center"}}>
                                <CardButton onPress={()=>{WebBrowser.openBrowserAsync(element.hostUrl+element.url);}} title="Opna Frétt" color="rgb(34,82,171)" />
                            </View>
                            </CardAction>
                        </Card>
                    </View>
                </TouchableWithoutFeedback>
            );
       });
        
        var view = (this.state.newsLoaded ?  (
            <View contentContainerStyle={Styles.informationwholepage}>
                <ImageBackground source={require('../assets/images/bluegray.jpg')} resizeMode="cover" style={{ width: '100%', height: '100%' }}>
                <ScrollView>
                    {cards}                    
                </ScrollView>
                </ImageBackground>
            </View>
        )
        :
        ( <View>
            <ImageBackground source={require('../assets/images/bluegray.jpg')} resizeMode="cover" style={{ width: '100%', height: '100%' }}>       
            <ActivityIndicator style={{margin:20}}size="large" color="#0000ff" />
            <Text style={{fontFamily: 'merriweather-light',fontSize: 20,color:"#0000ff",textAlign:"center"}}>Sæki gögn af vefsíðu</Text>
            <Text style={{fontFamily: 'opensans-regular',fontSize: 12,color:"#0000ff",textAlign:"center"}}>Ef þú hefur beðið lengi, athugaðu nettenginguna þína</Text>
            </ImageBackground>
            </View> )
    )
        return (this.props.screenProps.fontLoaded ? view : null);
    }
}
