import React from 'react';
import {
    View,
    ScrollView,
    Text
} from 'react-native';
import { Icon } from 'react-native-elements'; 
import {
    Card,
    CardTitle,
    CardContent,
    CardAction,
    CardButton,
    
} from 'react-native-cards';
import Styles from './../styles/Styles';

import News from "../assets/testContent/news.js";

export class NewsFeedScreen extends React.Component {

    static navigationOptions = {
        title: 'Fréttaveita'
    };



    render() {


        return (this.props.screenProps.fontLoaded
            ? (
                <View contentContainerStyle={Styles.informationwholepage}>

                    <ScrollView>

                        <Card>
                         <View style={{flex:1, flexDirection: "row", paddingRight:5, paddingLeft: 10}}>
                            <Icon style={{flex:1}} name='newspaper-o' type='font-awesome' color='rgb(131,27,0)' size={30} /> 
                            <CardTitle title= "Titill á frétt" style={{flex:1, alignSelf: 'center'}}/>
                        </View>
                            
                        <CardContent text="Texti á frétt sem má vera rosa langur jájá langur hvað gerist þá hvað gerist ef of langur fer hann hvert? útum allt? hver á að laga það er það ég?"/>
                            <CardAction separator={true} inColumn={false}>
                                <CardButton onPress={() => {}} title="Opna Frétt" href={News.href} color="rgb(251,199,6)" style={{}}/>
                            </CardAction>
                        </Card>

                        <Card>
                         <View style={{flex:1, flexDirection: "row", paddingRight:5, paddingLeft: 10}}>
                            <Icon style={{flex:1}} name='newspaper-o' type='font-awesome' color='rgb(131,27,0)' size={30} /> 
                            <CardTitle title= "Venjulega eðlilega langur titill á frétt" style={{flex:1, alignSelf: 'center'}}/>
                        </View>
                           
                        <CardContent text="Texti á frétt sem má vera rosa langur jájá langur hvað gerist þá hvað gerist ef of langur fer hann hvert? útum allt? hver á að laga það er það ég?"/>
                            <CardAction separator={true} inColumn={false}>
                                <CardButton onPress={() => {}} title="Opna Frétt" href={News.href} color="rgb(251,199,6)"/>
                            </CardAction>
                        </Card>
                        
                    </ScrollView>

                </View>

            )
            : null);
    }
}