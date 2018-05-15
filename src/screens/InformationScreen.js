import React from 'react';
import {
    Text,
    View,
    Button,
    Alert,
    TouchableHighlight,
    Image,
    ScrollView
} from 'react-native';
import {Font} from 'expo';
import Styles from './../styles/Styles';
import {Ionicons} from '@expo/vector-icons';
import Information from "../assets/testContent/info.js";


export class InformationScreen extends React.Component {
    render() {
        return (
            this.props.screenProps.fontLoaded ? (
         <View contentContainerStyle={Styles.informationwholepage}>

            <View style={{ paddingBottom: 15 }}>
                <View style={Styles.chaptercontainer}>
             
                    <View style={Styles.chaptertext}>
                        <Text style={Styles.h1}> Upplýsingar </Text>
                    </View>
                </View>
            </View>

            <ScrollView style = {{ marginBottom: 150 }} >
                
                <TouchableHighlight>
                  <View style={Styles.infosubchaptercontainer}>
                    <Text style={Styles.h2}>Um Ljósmóðurfélagið  
                    <Ionicons name="md-add" size={25} color="rgb(34,82,171)" />
                    </Text>
                  </View>
                </TouchableHighlight> 
                   
                <View style={Styles.informationcontainer}>
                    <Text style={Styles.p} layout="row">Ljósmæðrafélag íslands - heimilisfang og blabla</Text>
                </View>

            </ScrollView>

            </View>
            
            ) : null);
    }

}
