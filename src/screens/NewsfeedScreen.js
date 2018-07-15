import React from 'react';
import {
    Text,
    View,
    Button,
    Alert,
    TouchableOpacity,
    Image,
    ScrollView
} from 'react-native';
import {
    Card,
    CardTitle,
    CardContent,
    CardAction,
    CardButton,
    CardImage
} from 'react-native-cards';
import {Font} from 'expo';
import Styles from './../styles/Styles';

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

                        <CardTitle title="Ljósmæður semja um betri kjör" 
                        style={{alignSelf: 'center'}}/>
                            <CardImage
                                source={{
                                uri: 'https://stundin.is/media/uploads/images/thumbs/ORyWzCKJLjhl_992x620_b-dgS2DF.jpg'}}
                                
                                />

                            <CardContent
                                text="Bjarni Ben játar sigur og semur við ljósmæður um laun og bla bla bla bla bla bla bla bla..."/>
                            <CardAction separator={true} inColumn={false}>
                                <CardButton onPress={() => {}} title="Opna Frétt" color="rgb(251,199,6)"/>
                            </CardAction>
                        </Card>
                    </ScrollView>

                </View>

            )
            : null);
    }
}