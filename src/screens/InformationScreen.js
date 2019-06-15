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
import InformationScraper from "../controllers/InformationScraper";
import { Clipboard } from 'react-native';


export class InformationScreen extends React.Component {
    
    readFromClipboard = async () => {   
        const clipboardContent = await Clipboard.getString();   
        this.setState({ clipboardContent }); 
      };

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
                                    <View>
                                    <ActivityIndicator style={{margin:20}}size="large" color="#0000ff" />
                                    <Text style={{fontFamily: 'merriweather-light',fontSize: 20,color:"#0000ff",textAlign:"center"}}>Sæki gögn af vefsíðu</Text>
                                    <Text style={{fontFamily: 'opensans-regular',fontSize: 12,color:"#0000ff",textAlign:"center"}}>Ef þú hefur beðið lengi, athugaðu nettenginguna þína</Text>
                                    </View>
                                    :
                                    infoItems}
                            </ScrollView>
                        </ImageBackground>
                    </View>
                ) : null
            );
            
    }
}
