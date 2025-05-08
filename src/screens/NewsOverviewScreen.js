import React from 'react';
import {
    View,
    ImageBackground,
    Dimensions,
    ScrollView,
    ActivityIndicator,
    Text,
    PixelRatio,
    Button,
    Image
} from 'react-native';
import { Card } from '@rneui/themed'
import Styles from './../styles/Styles';
import { GetNews, GetDate } from './../controllers/NewsFeedHelper';
import { MainUrlContext } from '../components/MainUrlProvider.js';

export class NewsOverviewScreen extends React.Component {

    static navigationOptions = {
        title: 'Fréttir og Viðburðir - Yfirlit'
    };

    static contextType = MainUrlContext;

    constructor(props) {
        super(props);
        this.state = {
            isLargeWindow: Dimensions.get('window').height > 700,
            newsLoaded: false
        };
    }

    async componentDidMount() {
        this.dimensionsListener = Dimensions.addEventListener("change", this.dimensionChanged);
        // var data = { frett: [], vidburdur: [], radstefna: [], malstofa: [] };
        // Promise.all([
        //     GetNews(this.context.mainUrl + '/rss.ashx?catId=136&cnt=1'),
        //     GetNews(this.context.mainUrl + '/rss.ashx?catId=132&cnt=1'),
        //     GetNews(this.context.mainUrl + '/rss.ashx?catId=148&cnt=1'),
        //     GetNews(this.context.mainUrl + '/rss.ashx?catId=149&cnt=1')
        // ])
        //     .then((items) => {
        //         data.frett = items[0][0];
        //         data.frett.date = new Date(data.frett.published);
        //         data.vidburdur = items[1][0];
        //         data.vidburdur.date = new Date(data.vidburdur.published);
        //         data.radstefna = items[2][0];
        //         data.radstefna.date = new Date(data.radstefna.published);
        //         data.malstofa = items[3][0];
        //         data.malstofa.date = new Date(data.malstofa.published);
        //         console.log("Got news");
        //         this.TagNewest(data);
        //         this.setState({ news: data, newsLoaded: true });
        //     }).catch((e) => { console.error(e); });
    }

    TagNewest(data) {
        var newest = data.frett.date > data.vidburdur.date ? data.frett : data.vidburdur;
        newest = newest.date > data.radstefna.date ? newest : data.radstefna;
        newest = newest.date > data.malstofa.date ? newest : data.malstofa;
        newest.newest = true;
    }

    GetNewestString(objectName) {
        if (!this.state.newsLoaded)
            return "";
        var dataObject = this.state.news[objectName];
        var st = dataObject.newest ? "► " : "";
        st += "Nýjast, birt " + GetDate(dataObject.published) + "\n" + dataObject.title + "\n";
        return st;
    }

    dimensionChanged = (dimension) => {
        this.setState(() => {
            return { isLargeWindow: dimension.window.height > 700 };
        });
    }

    componentWillUnmount() {
        this.dimensionsListener.remove();
    }

    render() {
        var frettirContainer =
            <Card>
                <Card.Title>Fréttir</Card.Title>
                <Card.Divider />
                <Text>{this.GetNewestString("frett")}</Text>
                <Button onPress={() => { this.props.navigation.navigate("News", { contentID: 136 }) }} title="Skoða fleiri" color="rgb(34,82,171)" width="50%" />
            </Card>

        var vidburdirContainer =
            <Card>
                <Card.Title>Viðburðir</Card.Title>
                <Card.Divider />
                <Text>{this.GetNewestString("vidburdur")}</Text>
                <Button onPress={() => { this.props.navigation.navigate("News", { contentID: 132 }) }} title="Skoða fleiri" color="rgb(34,82,171)" />
            </Card>

        var malstofurContainer =
            <Card>
                <Card.Title>Málstofur og Fræðslufundir</Card.Title>
                <Card.Divider />
                <Text>{this.GetNewestString("malstofa")}</Text>
                <Button onPress={() => { this.props.navigation.navigate("News", { contentID: 149 }) }} title="Skoða fleiri" color="rgb(34,82,171)" />
            </Card>

        var radstefnurContainer =
            <Card>
                <Card.Title>Ráðstefnur</Card.Title>
                <Card.Divider />
                <Text>{this.GetNewestString("radstefna")}</Text>
                <Button onPress={() => { this.props.navigation.navigate("News", { contentID: 148 }) }} title="Skoða fleiri" color="rgb(34,82,171)" />
            </Card>

        return (
            <View style={Styles.wholepage}>
                <ImageBackground source={require('../assets/images/bluegray.jpg')} resizeMode="cover" style={{ width: '100%', height: '100%', opacity: 0.9 }}>
                    <View style={{flex: 1, padding: 16, paddingTop: 40}}>
                    <Text style={{ fontFamily: 'merriweather-light', fontSize: 20, color: "#0000ff", textAlign: "center" }}>Ný fréttaveita í vinnslu.</Text>
                    <Text style={{ fontFamily: 'merriweather-light', fontSize: 20, color: "#0000ff", textAlign: "center" }}>Vinsamlegast reyndu aftur síðar.</Text>
                    </View>
                    <View style={Styles.imagecontainer}>
                        <Image resizeMode="center" style={Styles.image} source={require('../assets/images/storkur.png')} />
                    </View>

                </ImageBackground>
            </View>)

        // return (
        //     this.state.newsLoaded ? (
        //         (this.state.isLargeWindow && PixelRatio.getFontScale() < 1.2) ? (
        //             <View style={{ flex: 1 }} contentContainerStyle={Styles.informationwholepage}>
        //                 <ImageBackground source={require('../assets/images/bluegray.jpg')} resizeMode="cover" style={{ width: '100%', height: '100%' }}>
        //                     <ScrollView>
        //                         {frettirContainer}
        //                         {vidburdirContainer}
        //                         {malstofurContainer}
        //                         {radstefnurContainer}
        //                     </ScrollView>
        //                 </ImageBackground>
        //             </View>
        //         ) :
        //             (
        //                 <View style={Styles.splitpage}>
        //                     <View style={{ flex: 1 }} contentContainerStyle={Styles.informationwholepage}>
        //                         <ImageBackground source={require('../assets/images/bluegray.jpg')} resizeMode="cover" style={{ width: '100%', height: '100%' }}>
        //                             <ScrollView>
        //                                 {frettirContainer}
        //                                 {vidburdirContainer}
        //                                 {malstofurContainer}
        //                                 {radstefnurContainer}
        //                             </ScrollView>
        //                         </ImageBackground>
        //                     </View>
        //                 </View>)
        //     ) :
        //         (
        //             <View>
        //     <ActivityIndicator style={{margin:20}}size="large" color="#0000ff" />
        //     <Text style={{fontFamily: 'merriweather-light',fontSize: 20,color:"#0000ff",textAlign:"center"}}>Sæki gögn</Text>
        //     <Text style={{fontFamily: 'opensans-regular',fontSize: 12,color:"#0000ff",textAlign:"center"}}>Ef þú hefur beðið lengi, athugaðu nettenginguna þína</Text>
        //     </View>
        //         )
        // );
    }
}