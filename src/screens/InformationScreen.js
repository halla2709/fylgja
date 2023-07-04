import React, { useState, useEffect } from 'react';
import {
    Text,
    View,
    ImageBackground,
    ScrollView,
    ActivityIndicator,
    PixelRatio,
} from 'react-native';
import Styles from './../styles/Styles';
import InformationListItem from '../components/InformationListItem';
import { Scraper } from "../controllers/InformationScraper";
import { SearchBar } from 'react-native-elements';
import { GetAllInformationChapters, GetFilteredInformationChapters } from '../controllers/SearchHelper';


export function InformationScreen({ navigation, route }) {
    const [data, setData] = useState([]);
    const [isFiltering, setIsFiltering] = useState(false);
    const [loaded, setLoaded] = useState(false);
    const [searchString, setSearchString] = useState("");
    var infoItems = [];

    useEffect(() => {

        if (loaded) {

            if (searchString.length > 2) {

                GetFilteredInformationChapters(searchString).then(function (filteredChapters) {
                    setData(filteredChapters);
                });
                setIsFiltering(true);

            }
            else if (searchString.length === 0 && isFiltering) {
                setData(GetAllInformationChapters());
                setIsFiltering(false);
            }
        }

    }, [searchString])

    useEffect(() => {

        const currentData = GetAllInformationChapters();

        Scraper.setDataChangedCallback((data) => {
            setData(GetAllInformationChapters());
            setLoaded(true);
        });

        if (currentData.length == 0) {
            Scraper.init();

        }
        else {
            setData(GetAllInformationChapters());
            setLoaded(true);
        }
    }, [])

    data.forEach(dataItem => {
        infoItems.push(<InformationListItem data={dataItem.data} key={dataItem.name} title={dataItem.name} />);
    });


    return (
        <View contentContainerStyle={Styles.informationwholepage}>
            <ImageBackground source={require('../assets/images/bluegray.jpg')} resizeMode="cover" style={{ width: '100%', height: '100%' }}>
                <ScrollView style={{ marginBottom: 1 }} >
                    {
                        loaded ? (
                            <View>
                                <SearchBar lightTheme round style={Styles.searchBar}
                                    value={searchString}
                                    placeholder=' Skrifaðu leitarorð hér...'
                                    inputStyle={{ color: 'black', fontSize: 18 / PixelRatio.getFontScale(), backgroundColor: 'white' }} //Style TextInput
                                    inputContainerStyle={{ backgroundColor: 'white' }}
                                    containerStyle={{ width: '85%', alignSelf: 'center', marginBottom: 10, backgroundColor: 'transparent' }}
                                    onChangeText={(searchString) => {
                                        setSearchString(searchString);
                                    }}
                                    onClear={() => {
                                        setSearchString("");
                                    }}
                                />
                                {isFiltering ? <Text style={Styles.searchedtext}>Sýni leitarniðurstöður sem innihalda: {searchString}</Text> : null}
                                {infoItems}
                            </View>)
                            :
                            (<View>
                                <ActivityIndicator style={{ margin: 20 }} size="large" color="#0000ff" />
                                <Text style={{ fontFamily: 'merriweather-light', fontSize: 20, color: "#0000ff", textAlign: "center" }}>Sæki gögn</Text>
                                <Text style={{ fontFamily: 'opensans-regular', fontSize: 12, color: "#0000ff", textAlign: "center" }}>Ef þú hefur beðið lengi, athugaðu þá nettenginguna þína</Text>
                            </View>)}
                </ScrollView>
            </ImageBackground>
        </View>
    );
}
