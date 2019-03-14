import React, { Component } from 'react';
import {
    Text,
    View,
    Button,
    Alert,
    TouchableOpacity,
    Image,
    ImageBackground,
    ScrollView
} from 'react-native';
import {Font} from 'expo';
import Styles from './../styles/Styles';
import {Ionicons} from '@expo/vector-icons';
import InformationListItem from '../components/InformationListItem';
import Information from "../assets/testContent/info.js";


export class InformationScreen extends React.Component {

    constructor(){
        super();
        //this.DataKeeper = new Information();
        //console.log(this.DataKeeper);
        this.state ={
        status:false,
        icon:true
        }
    }


    static navigationOptions = {
        title: 'Upplýsingar',
      };

    
    ShowHideTextComponentView = () =>{
        if(this.state.status == true)
        {
            this.setState({status: false})
            this.setState({icon: true})
        }
        else
        {
          this.setState({status: true})
          this.setState({icon: false})
        }
      }

    render() {
        const allData = Information.getData();
        const infoItems = [];
        allData.forEach(dataItem => {
            infoItems.push(<InformationListItem data={dataItem.data} key={dataItem.name} title={dataItem.name} />);
        });
        return (
            this.props.screenProps.fontLoaded ? (

         <View contentContainerStyle={Styles.informationwholepage}>
         <ImageBackground source={require('../assets/images/bluegray.jpg')} resizeMode="cover" style={{width: '100%', height: '100%'}}>
      
            <ScrollView style = {{ marginBottom: 1 }} >
                {infoItems}
            </ScrollView>
            </ImageBackground>
            </View>
            
            ) : null);
            
                //<InformationListItem data={Information.getData()}/>
    }

}
