import React from 'react';
import {
    Text,
    View,
    ImageBackground,
    ScrollView,
    ActivityIndicator
} from 'react-native';
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
            data: [],
            searchingText: false,
            textMoreThanThree: false,
        }
        this.currentFilter = "";
    }
    static navigationOptions = {
        title: 'Upplýsingar',
    };

    componentWillMount() {
        console.log("Information screen will mount");
    }

    async componentDidMount() {
        const allData = GetInformationChapters();
        if (allData.length == 0)
            Scraper.init();        
        this.setState({ data: allData });
        var self = this;
        Scraper.setDataChangedCallback((data) => {
            console.log("Information screen got new data");
            const allData = GetInformationChapters(self.currentFilter);     
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
                                        if(searchString.length > 2)
                                        {
                                            this.currentFilter = searchString;
                                            const filteredChapters = GetInformationChapters(searchString);
                                            this.setState({ data: filteredChapters, searchingText: true });
                                       
                                        } 
                                        else {
                                            this.currentFilter = "";
                                            const allChapters = GetInformationChapters(searchString)
                                            this.setState({ data: allChapters, searchingText: false});
                                        }

                                        
                                    }}
                                    onClear={() => {
                                        this.currentFilter = "";
                                        const allChapters = GetInformationChapters(searchString)
                                        this.setState({ data: allChapters, searchingText: false});
                                        
                                    }}
                                />
                               {this.state.searchingText ? 
                                <Text style={Styles.p}>Leita að niðurstöðum sem innihalda: {this.currentFilter}</Text>:null}
                               
                                
                                    
                                {infoItems}
                                </View>
                                }
                            </ScrollView>
                    </ImageBackground>
                </View>
            ) : null
        );

    }
}
