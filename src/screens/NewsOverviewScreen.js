import React from 'react';
import {
    View,
    ImageBackground,
    Dimensions,
    ScrollView,
    ActivityIndicator,
    Text,
    PixelRatio
} from 'react-native';
import {
    Card,
    CardTitle,
    CardContent,
    CardAction,
    CardButton,

} from 'react-native-cards';
import Styles from './../styles/Styles';
import { GetNews, GetDate } from './../controllers/NewsFeedHelper';

export class NewsOverviewScreen extends React.Component {

    static navigationOptions = {
        title: 'Fréttir og Viðburðir - Yfirlit'
    };

    constructor(props) {
        super(props);
        this.state = {
            fontLoaded: props.screenProps.fontLoaded,
            isLargeWindow: Dimensions.get('window').height > 500,
            newsLoaded: false
        };
    }

    componentWillReceiveProps(newProps) {
        if (this.state.fontLoaded !== newProps.screenProps.fontLoaded) {
            this.setState({ fontLoaded: newProps.screenProps.fontLoaded });
        }
    }

    async componentDidMount() {
        var data = { frett: [], vidburdur: [], radstefna: [], malstofa: [] };
        Promise.all([
            GetNews('https://www.ljosmaedrafelag.is/rss.ashx?catId=136&cnt=1'),
            GetNews('https://www.ljosmaedrafelag.is/rss.ashx?catId=132&cnt=1'),
            GetNews('https://www.ljosmaedrafelag.is/rss.ashx?catId=148&cnt=1'),
            GetNews('https://www.ljosmaedrafelag.is/rss.ashx?catId=149&cnt=1')
        ])
            .then((items) => {
                data.frett = items[0][0];
                console.log(data.frett);
                data.vidburdur = items[1][0];
                data.radstefna = items[2][0];
                data.malstofa = items[3][0];
                this.setState({ news: data, newsLoaded: true });

            }).catch((e) => { console.error(e); });
    }

    GetNewestString(objectName) {
        var st = "Nýjast, birt " + (this.state.newsLoaded ? GetDate(this.state.news[objectName].published) : "") + "\n";
        st += (this.state.newsLoaded ? this.state.news[objectName].title : "")
        return st;
    }
    render() {
        Dimensions.addEventListener("change", (dimension) => {
            this.setState(() => {
                return { isLargeWindow: dimension.window.height > 500 };
            })
        });

        var frettirContainer =
            <View style={{ flex: 1 }}>
                <Card>
                    <CardTitle title="Fréttir"/>
                    <CardContent text={ this.GetNewestString("frett")} />
                    <CardAction separator={true} inColumn={false} style={{ alignContent: 'center', alignItems: 'center', alignSelf: 'center' }}>
                        <CardButton onPress={() => { this.props.navigation.navigate("News", {contentID: 136}) }} style={{ width: '90%', alignSelf: 'center', borderColor:'rgb(34,82,171)' }} title="Skoða allar fréttir" color="rgb(34,82,171)" />
                    </CardAction>

                </Card>
            </View>

        var vidburdirContainer =
            <View style={{ flex: 1 }}>
                <Card>
                    <CardTitle title="Viðburðir" />
                    <CardContent text={this.GetNewestString("vidburdur")} />
                    <CardAction separator={true} inColumn={false} style={{ alignContent: 'center', alignItems: 'center', alignSelf: 'center'}}>
                        <CardButton onPress={() => { this.props.navigation.navigate("News", {contentID: 132}); }} style={{ width: '90%', alignSelf: 'center', borderColor:'rgb(34,82,171)'}} title="Skoða alla viðburði" color="rgb(34,82,171)" />
                    </CardAction>
                </Card>
            </View>

        var malstofurContainer =
            <View style={{ flex: 1 }}>
                <Card>
                    <CardTitle title="Málstofur og Fræðslufundir" />
                    <CardContent text={this.GetNewestString("malstofa")} />
                    <CardAction separator={true} inColumn={false} style={{ alignContent: 'center', alignItems: 'center', alignSelf: 'center'}}>
                        <CardButton onPress={() => { this.props.navigation.navigate("News", {contentID: 149}); }} style={{ width: '90%', alignSelf: 'center', borderColor:'rgb(34,82,171)'}} title="Skoða allar málstofur og fræðslufundi" color="rgb(34,82,171)" />
                    </CardAction>
                </Card>
            </View>

        var radstefnurContainer =
            <View style={{ flex: 1 }}>
                <Card>
                    <CardTitle title="Ráðstefnur" />
                    <CardContent text={this.GetNewestString("radstefna")} />
                    <CardAction separator={true} inColumn={false} style={{ alignContent: 'center', alignItems: 'center', alignSelf: 'center' }}>
                        <CardButton onPress={() => { this.props.navigation.navigate("News", {contentID: 148}); }} style={{  width: '90%', alignSelf: 'center', borderColor:'rgb(34,82,171)'}} title="Skoða allar ráðstefnur" color="rgb(34,82,171)" />
                    </CardAction>
                </Card>
            </View>


        return (this.props.screenProps.fontLoaded ? (
            this.state.newsLoaded ? (
                (this.state.isLargeWindow && PixelRatio.getFontScale() < 1.5) ? (
                    <View style={{ flex: 1 }} contentContainerStyle={Styles.informationwholepage}>
                        <ImageBackground source={require('../assets/images/bluegray.jpg')} resizeMode="cover" style={{ width: '100%', height: '100%' }}>
                            {frettirContainer}
                            {vidburdirContainer}
                            {malstofurContainer}
                            {radstefnurContainer}
                        </ImageBackground>
                    </View>
                ) :
                    (
                        <View style={Styles.splitpage}>
                            <View style={{ flex: 1 }} contentContainerStyle={Styles.informationwholepage}>
                                <ImageBackground source={require('../assets/images/bluegray.jpg')} resizeMode="cover" style={{ width: '100%', height: '100%' }}>
                                    <ScrollView>
                                        {frettirContainer}
                                        {vidburdirContainer}
                                        {malstofurContainer}
                                        {radstefnurContainer}
                                    </ScrollView>
                                </ImageBackground>
                            </View>
                        </View>)
            ) :
                (
                    <View>
            <ActivityIndicator style={{margin:20}}size="large" color="#0000ff" />
            <Text style={{fontFamily: 'merriweather-light',fontSize: 20,color:"#0000ff",textAlign:"center"}}>Sæki gögn af vefsíðu</Text>
            <Text style={{fontFamily: 'opensans-regular',fontSize: 12,color:"#0000ff",textAlign:"center"}}>Ef þú hefur beðið lengi, athugaðu nettenginguna þína</Text>
            </View>
                )
        ) : null
        );
    }
}