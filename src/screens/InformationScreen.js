import React, { Component } from 'react';
import {
    AppRegistry,
    Text,
    View,
    Button,
    Alert,
    TouchableOpacity,
    Image,
    ScrollView
} from 'react-native';
import {Font} from 'expo';
import Styles from './../styles/Styles';
import {Ionicons} from '@expo/vector-icons';
import Information from "../assets/testContent/info.js";


export class InformationScreen extends React.Component {

    constructor(){
        super();
        this.state ={
        status:false
        }
    }

    ShowHideTextComponentView = () =>{
        if(this.state.status == true)
        {
          this.setState({status: false})
        }
        else
        {
          this.setState({status: true})
        }
      }


    render() {
        return (
            this.props.screenProps.fontLoaded ? (

         <View contentContainerStyle={Styles.informationwholepage}>
            <View style={{ paddingBottom: 15 }}>
                <View style={Styles.chaptercontainer}>              
        
                    <View style={Styles.chaptertext}>
                        <Text style={Styles.h1}> Upplýsingar 
                        </Text>
                        <Image resizeMode="contain" style={{width: '50%'}} source={require('../assets/images/6.png')} />                        
                    </View>
                </View>
                
            </View>
            

            <ScrollView style = {{ marginBottom: 150 }} >
                
                <TouchableOpacity onPress={this.ShowHideTextComponentView}>
                  <View style={Styles.infosubchaptercontainer}>
                  
                    <Text style={Styles.h22}>Eitthvað mjög gaman </Text>
                    <Ionicons style={Styles.plusbutton} name="md-add" size={30}/>
                  </View>
                </TouchableOpacity> 
                   
                <View style={Styles.informationcontainer}>
                {
                    this.state.status ? <Text style={Styles.p} layout="row">
                    Hallo, {Information.phone}, {Information.fax}
                    </Text> : null
                }              
                </View>
            </ScrollView>
            </View>
            
            ) : null);
    }

}
