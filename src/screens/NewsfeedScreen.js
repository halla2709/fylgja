import React from 'react';
import {Text,
    View,
    Button,
    Alert,
    TouchableOpacity,
    Image,
    ScrollView} from 'react-native';
import { Font } from 'expo';
import Styles from './../styles/Styles';

export class NewsFeedScreen extends React.Component {

    static navigationOptions = {
        title: 'Fréttaveita',
      };

    render() {
        return(
                this.props.screenProps.fontLoaded ? (
             <View contentContainerStyle={Styles.informationwholepage}>

    
                    <View style={Styles.subchaptercontainer}>
                        <Text style={Styles.h22}>Frétt</Text>
                    </View>
    
                    <View style={Styles.pcontainer}>
                        <Text style={Styles.p} layout="row">Frétt blabla</Text>
                    </View>
    
    
                <ScrollView style = {{ marginBottom: 150 }} > 
                <View style={Styles.pcontainer}>
                    <Text style={Styles.p} layout="row"></Text>
                </View> 
                </ScrollView>
    
                </View>
                
                ) : null);
    }
}