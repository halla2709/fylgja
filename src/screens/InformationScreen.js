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
import { Ionicons } from '@expo/vector-icons';
import InformationListItem from '../components/InformationListItem';
import InformationScraper from "../controllers/InformationScraper";


export class InformationScreen extends React.Component {

    constructor() {
        super();
        this.state = {
            status: false,
            icon: true,
            data: []
        }
        this.scraper = new InformationScraper();
        try{
            this.scraper.init();
          }
          catch(err) {
            console.error("Could not open information scaper", err);
          }
    }


    static navigationOptions = {
        title: 'Upplýsingar',
    };

    componentDidMount() {
        const allData = this.scraper.getData();
        this.setState({data: allData});
        var self = this;
        this.scraper.setDataChangedCallback((data)=>{
            self.setState({data: data});
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
                                    <ActivityIndicator size="large" color="#0000ff" />
                                    :
                                    infoItems}
                            </ScrollView>
                        </ImageBackground>
                    </View>
                ) : null
            );
            
    }
}
