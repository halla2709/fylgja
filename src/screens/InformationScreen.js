import React, { Component } from 'react';
import {
    Text,
    View,
    Button,
    Alert,
    TouchableOpacity,
    Image,
    ImageBackground,
    ScrollView,
    ActivityIndicator
} from 'react-native';
import { Font } from 'expo';
import Styles from './../styles/Styles';
import InformationListItem from '../components/InformationListItem';
import { Scraper } from "../controllers/InformationScraper";
import { SearchBar } from 'react-native-elements';
import { GetInformationChapters } from './../controllers/SearchHelper';

export class InformationScreen extends React.Component {

    constructor() {
        super();
        this.state = {
            status: false,
            icon: true,
            data: []
        }
        this.currentFilter = "";
    }
    static navigationOptions = {
        title: 'Upplýsingar',
    };

    async componentDidMount() {
        console.log("Information screen did mount");
        const allData = GetInformationChapters();
        this.setState({ data: allData });
        var self = this;
        Scraper.setDataChangedCallback((data) => {
            console.log("Information screen got new data");
            const allData = GetInformationChapters(this.currentFilter);     
            self.setState({ data: allData });
        });
    }

    render() {
        const infoItems = [];
        this.state.data.forEach(dataItem => {
            infoItems.push(<InformationListItem data={dataItem.data} key={dataItem.name} title={dataItem.name} />);
        });

        return (
            this.props.screenProps.fontLoaded ? (
                <View contentContainerStyle={Styles.informationwholepage}>
                    <ImageBackground source={require('../assets/images/bluegray.jpg')} resizeMode="cover" style={{ width: '100%', height: '100%' }}>
                        <ScrollView style={{ marginBottom: 1 }} >
                            {this.state.data.length === 0 ?
                                <View>
                                    <ActivityIndicator style={{ margin: 20 }} size="large" color="#0000ff" />
                                    <Text style={{ fontFamily: 'merriweather-light', fontSize: 20, color: "#0000ff", textAlign: "center" }}>Sæki gögn af vefsíðu</Text>
                                    <Text style={{ fontFamily: 'opensans-regular', fontSize: 12, color: "#0000ff", textAlign: "center" }}>Ef þú hefur beðið lengi, athugaðu nettenginguna þína</Text>
                                </View>
                                :
                                <View>
                                <SearchBar lightTheme round style={Styles.searchBar}
                                    placeholder='Skrifaðu leitarorð hér...'
                                    placeholderTextColor='rgb(189, 194, 201)'
                                    searchIcon={{ color: 'grey', padding: 3 }}
                                    clearIcon={{ color: 'grey' }}
                                    inputStyle={{ color: 'black', fontSize: 18, backgroundColor: 'white' }} //Style TextInput
                                    inputContainerStyle={Styles.p}
                                    containerStyle={{ width: '100%', alignSelf: 'center', marginBottom: 10, backgroundColor: 'rgb(238,249,251)', borderRadius: 10, }}

                                    onChangeText={(searchString) => {
                                        this.currentFilter = searchString;
                                        const filteredChapters = GetInformationChapters(searchString);
                                        console.log("filtered", filteredChapters.length);
                                        this.setState({ data: filteredChapters });
                                    }}
                                    onClear={() => {
                                        this.currentFilter = "";
                                        const allChapters = GetInformationChapters(searchString)
                                        this.setState({ data: allChapters });
                                    }}
                                />
                                    {infoItems}
                                    </View>}
                            </ScrollView>
                    </ImageBackground>
                </View>
            ) : null
        );

    }
}
