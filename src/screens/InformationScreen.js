import React from 'react';
import {
    Text,
    View,
    ImageBackground,
    ScrollView,
    ActivityIndicator,
    PixelRatio
} from 'react-native';
import Styles from './../styles/Styles';
import InformationListItem from '../components/InformationListItem';
import { Scraper } from "../controllers/InformationScraper";
import { SearchBar } from 'react-native-elements';
import { GetAllInformationChapters, GetFilteredInformationChapters } from '../controllers/SearchHelper';

export class InformationScreen extends React.Component {
    constructor() {
        super();
        this.state = {
            status: false,
            icon: true,
            data: [],
            searchingText: false,
            textMoreThanThree: false,
            loaded: false
        }
        this.currentFilter = "";
        this.infoItems = [];
        this.timeoutID = 0;
    }
    static navigationOptions = {
        title: 'Upplýsingar',
    };

    async componentDidMount() {
        const allData = GetAllInformationChapters();
        if (allData.length == 0) {
            this.setState({ data: [], loaded: false });
            Scraper.init();
        }
        else
            this.setState({ data: allData, loaded: true });

        var self = this;
        Scraper.setDataChangedCallback((data) => {
            self.setState({ data: GetAllInformationChapters(), loaded: true });
        });
    }

    async search() {
        if (this.currentFilter.length > 2) {
            const self = this;
            GetFilteredInformationChapters(this.currentFilter).then(function(filteredChapters){
                self.setState({ data: filteredChapters });
            });
            this.setState({ searchingText: true });
        }
        else if (this.currentFilter.length === 0) {
            this.currentFilter = "";
            const allChapters = GetAllInformationChapters()
            this.setState({ data: allChapters, searchingText: false });
        }
    }

    getInfoViews() {
        if (this.infoItems.length == 0) {
            this.state.data.forEach(dataItem => {
                this.infoItems.push(<InformationListItem data={dataItem.data} key={dataItem.name} title={dataItem.name} />);
            });
        }
        
        if (this.infoItems.length === this.state.data.length) {
            return this.infoItems;
        }
        else {
            var visibleInfo = [];
            var dataIndex = 0;
            for (var infoIndex = 0; infoIndex < this.infoItems.length; infoIndex++) {
                if(dataIndex === this.state.data.length) break;
                const nextInfo = this.infoItems[infoIndex];
                const nextData = this.state.data[dataIndex];
                if (nextData.name === nextInfo.key) {
                    visibleInfo.push(nextInfo);
                    dataIndex++;
                }
            }
            return visibleInfo;
        }

    }

    render() {
        const infoItems = this.getInfoViews();

        return (
            this.props.screenProps.fontLoaded ? (
                <View contentContainerStyle={Styles.informationwholepage}>
                    <ImageBackground source={require('../assets/images/bluegray.jpg')} resizeMode="cover" style={{ width: '100%', height: '100%' }}>
                        <ScrollView style={{ marginBottom: 1 }} >
                            {this.state.loaded ?
                                <View>
                                    <SearchBar showLoading={this.state.searchingText} lightTheme round style={Styles.searchBar}
                                        placeholder='Skrifaðu þrjá stafi eða fleiri til að leita...'
                                        placeholderTextColor='rgb(189, 194, 201)'
                                        searchIcon={{ color: 'grey', padding: 3, type: 'material-community' }}
                                        clearIcon={{ color: 'grey', type: 'material-community'}}
                                        inputStyle={{ color: 'black', fontSize: 18 / PixelRatio.getFontScale(), backgroundColor: 'white' }} //Style TextInput
                                        inputContainerStyle={Styles.p}
                                        containerStyle={{ width: '100%', alignSelf: 'center', marginBottom: 10, backgroundColor: 'rgb(238,249,251)', borderRadius: 10, }}

                                        onChangeText={(searchString) => {
                                            this.currentFilter = searchString;
                                            if (this.timeoutID > 0) {
                                                clearTimeout(this.timeoutID);
                                            }
                                            this.timeoutID = setTimeout(this.search.bind(this), 1500);
                                        }}
                                        onClear={() => {
                                            this.currentFilter = "";
                                            const allChapters = GetAllInformationChapters(searchString)
                                            this.setState({ data: allChapters, searchingText: false });

                                        }}
                                    />
                                    {this.state.searchingText ? <Text style={Styles.searchedtext}>Sýni leitarniðurstöður sem innihalda: {this.currentFilter}</Text> : null }
                                    {infoItems}
                                </View>
                                :
                                <View>
                                    <ActivityIndicator style={{ margin: 20 }} size="large" color="#0000ff" />
                                    <Text style={{ fontFamily: 'merriweather-light', fontSize: 20, color: "#0000ff", textAlign: "center" }}>Sæki gögn</Text>
                                    <Text style={{ fontFamily: 'opensans-regular', fontSize: 12, color: "#0000ff", textAlign: "center" }}>Ef þú hefur beðið lengi, athugaðu þá nettenginguna þína</Text>
                                </View>
                            }
                        </ScrollView>
                    </ImageBackground>
                </View>
            ) : null
        );

    }
}
