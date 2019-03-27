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
import InformationListItem from '../components/InformationListItem';
import Information from "../assets/testContent/info.js";


export class NewsFeedScreen extends React.Component {

    static navigationOptions = {
        title: 'Fréttir og Viðburðir'
    };

 


    render() {
        const allData = News.getData();
        const infoItems = [];
        allData.forEach(news => {
            infoItems.push(
            <Card key={news.key}>
                <View style={{paddingRight: 5,alignContent: "flex-end", alignItems: 'flex-end', alignSelf: 'flex-end'}}>
                    <Text style={Styles.dateText}>{news.date}</Text>
                </View>
                <View style={{flex:1, flexDirection: "row", paddingRight:5, paddingLeft: 10}}>
                   <Icon style={{flex:1}} name='newspaper-o' type='font-awesome' color='rgb(131,27,0)' size={30} /> 
                   <CardTitle title={news.title} style={{flex:1, alignSelf: 'center'}}/>
               </View>
                   
               <CardContent text={news.text}/>
                   <CardAction onPress={() => {news.href}} separator={true} inColumn={false}>
                       <CardButton title="Opna Frétt" color="rgb(34,82,171)" />
                   </CardAction>
            </Card> )
               });
        return (this.props.screenProps.fontLoaded
            ? (
                <View contentContainerStyle={Styles.informationwholepage}>

                    <ScrollView>
                        {infoItems}                        
                    </ScrollView>

                </View>

            )
            : null);
    }
}