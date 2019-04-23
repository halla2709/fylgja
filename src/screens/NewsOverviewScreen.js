import React from 'react';
import {
    View,
    ImageBackground,
    Dimensions,
    ScrollView,
    ActivityIndicator
} from 'react-native';
import {
    Card,
    CardTitle,
    CardContent,
    CardAction,
    CardButton,

} from 'react-native-cards';
import Styles from './../styles/Styles';
import { GetNews } from './../controllers/NewsFeedHelper';

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
                data.vidburdur = items[1][0];
                data.radstefna = items[2][0];
                data.malstofa = items[3][0];
                this.setState({ news: data, newsLoaded: true });

            }).catch((e) => { console.error(e); });
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

                    <CardTitle title="Fréttir" />
                    <CardContent text={ "Nýjast: " + (this.state.newsLoaded ? this.state.news.frett.title : null)} />
                    <CardAction separator={true} inColumn={false} style={{ alignContent: 'center', alignItems: 'center', alignSelf: 'center' }}>
                        <CardButton onPress={() => { this.props.navigation.navigate("News", {contentID: 136}) }} style={{ width: '85%', alignContent: 'center', borderColor:'rgb(34,82,171)' }} title="Skoða allar fréttir" color="rgb(34,82,171)" />
                    </CardAction>

                </Card>
            </View>

        var vidburdirContainer =
            <View style={{ flex: 1 }}>
                <Card>
                    <CardTitle title="Viðburðir" style={{ alignSelf: 'center', alignContent: 'center', alignItems:'center'}} />
                    <CardContent text={"Nýjast: " + (this.state.newsLoaded ? this.state.news.vidburdur.title : null)} />
                    <CardAction separator={true} inColumn={false} style={{ alignContent: 'center', alignItems: 'center', alignSelf: 'center'}}>
                        <CardButton onPress={() => { this.props.navigation.navigate("News", {contentID: 132}); }} style={{ width: '85%', alignContent: 'center', borderColor:'rgb(34,82,171)'}} title="Skoða alla viðburði" color="rgb(34,82,171)" />
                    </CardAction>
                </Card>
            </View>

        var malstofurContainer =
            <View style={{ flex: 1 }}>
                <Card>
                    <CardTitle title="Málstofur og Fræðslufundir" style={{ flex: 1, alignSelf: 'center' }} />
                    <CardContent text={"Nýjast: " + (this.state.newsLoaded ? this.state.news.malstofa.title : null)} />
                    <CardAction separator={true} inColumn={false}>
                        <CardButton onPress={() => { this.props.navigation.navigate("News", {contentID: 149}); }} style={{ width: '85%', alignContent: 'center', borderColor:'rgb(34,82,171)'}} title="Skoða allar málstofur og fræðslufundi" color="rgb(34,82,171)" />
                    </CardAction>
                </Card>
            </View>

        var radstefnurContainer =
            <View style={{ flex: 1 }}>
                <Card>
                    <CardTitle title="Ráðstefnur" style={{ flex: 1, alignSelf: 'center' }} />
                    <CardContent text={"Nýjast: " + (this.state.newsLoaded ? this.state.news.radstefna.title : null)} />
                    <CardAction separator={true} inColumn={false} style={{ alignContent: 'center', alignItems: 'center', alignSelf: 'center' }}>
                        <CardButton onPress={() => { this.props.navigation.navigate("News", {contentID: 148}); }} style={{  width: '85%', alignContent: 'center', borderColor:'rgb(34,82,171)'}} title="Skoða allar ráðstefnur" color="rgb(34,82,171)" />
                    </CardAction>
                </Card>
            </View>


        return (this.props.screenProps.fontLoaded ? (
            this.state.newsLoaded ? (
                this.state.isLargeWindow ? (
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
                        <ActivityIndicator size="large" color="#0000ff" />
                    </View>
                )
        ) : null
        );
    }
}