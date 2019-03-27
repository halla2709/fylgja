import React from 'react';
import {
    View,
    ImageBackground,
    Dimensions,
    ScrollView
} from 'react-native';
import {
    Card,
    CardTitle,
    CardContent,
    CardAction,
    CardButton,
    
} from 'react-native-cards';
import Styles from './../styles/Styles';


export class NewsOverviewScreen extends React.Component {

    static navigationOptions = {
        title: 'Fréttir og Viðburðir - Yfirlit'
    };

    constructor(props) {
        super(props);
        this.state = {
          fontLoaded: props.screenProps.fontLoaded,
          isLargeWindow: Dimensions.get('window').height > 500
        };
      }
    
      componentWillReceiveProps(newProps) {
        if (this.state.fontLoaded !== newProps.screenProps.fontLoaded) {
          this.setState({fontLoaded: newProps.screenProps.fontLoaded});
        }
      }
    
      render() {
        Dimensions.addEventListener("change", (dimension) => {
          this.setState(() => {
            return {isLargeWindow: dimension.window.height > 500};
          })
        });
   


                
        var frettirContainer =
        <View style={{flex: 1}}>
            <Card>
        
                <CardTitle title="Fréttir" style={{flex:1, alignSelf: 'center'}}/>
                <CardContent text="Texti fyrir frétt"/>
                    <CardAction onPress={() => {href}} separator={true} inColumn={false} style={{alignContent:'center', alignItems: 'center', alignSelf: 'center'}}>
                    <CardButton style={{backgroundColor:'rgb(34,82,171)', width: '85%', alignContent:'center'}} title="Skoða allar fréttir"  color="#ffffff" />
                    </CardAction>
                
            </Card>
        </View>

        var vidburdirContainer =
        <View style={{flex: 1}}>
            <Card>
                <CardTitle title="Viðburðir" style={{flex:1, alignSelf: 'center'}}/>  
                <CardContent text="Texti fyrir viðburð"/>
                    <CardAction onPress={() => {href}} separator={true} inColumn={false} style={{alignContent:'center', alignItems: 'center', alignSelf: 'center'}}>
                    <CardButton style={{backgroundColor:'rgb(34,82,171)', width: '85%', alignContent:'center'}} title="Skoða alla viðburði"  color="#ffffff" />
                    </CardAction>
            </Card>
        </View>

        var malstofurContainer =
        <View style={{flex: 1}}>
        <Card>
                <CardTitle title="Málstofur og Fræðslufundir" style={{flex:1, alignSelf: 'center'}}/>

                <CardContent text="Texti fyrir málstofu"/>
                    <CardAction onPress={() => {href}} separator={true} inColumn={false} style={{alignContent:'center', alignItems: 'center', alignSelf: 'center'}}>
                    <CardButton style={{backgroundColor:'rgb(34,82,171)', width: '85%', alignContent:'center'}} title="Skoða allar málstofur og fræðslufundi"  color="#ffffff" />
                    </CardAction>
            </Card>
        </View>

        var radstefnurContainer =
        <View style={{flex: 1}}>
        <Card>
                <CardTitle title="Ráðstefnur" style={{flex:1, alignSelf: 'center'}}/>
                
                <CardContent text="Texti fyrir ráðstefnu"/>
                    <CardAction onPress={() => {href}} separator={true} inColumn={false} style={{alignContent:'center', alignItems: 'center', alignSelf: 'center'}}>
                    <CardButton style={{backgroundColor:'rgb(34,82,171)', width: '85%', alignContent:'center'}} title="Skoða allar ráðstefnur"  color="#ffffff" />
                    </CardAction>
            </Card>
        </View>
                
                
                return (this.props.screenProps.fontLoaded ? (
                        this.state.isLargeWindow ? ( 
                    <View style= {{flex:1}} contentContainerStyle={Styles.informationwholepage}>
                    <ImageBackground source={require('../assets/images/bluegray.jpg')} resizeMode="cover" style={{width: '100%', height: '100%'}}>
                    
                    {frettirContainer}
                    {vidburdirContainer}
                    {malstofurContainer}
                    {radstefnurContainer}
                    
            
                </ImageBackground>
                </View>

                ) :
                (

        <View style={Styles.splitpage}>
        <View style= {{flex:1}} contentContainerStyle={Styles.informationwholepage}>
            <ImageBackground source={require('../assets/images/bluegray.jpg')} resizeMode="cover" style={{width: '100%', height: '100%'}}>
            <ScrollView>
            {frettirContainer}
            {vidburdirContainer}
            {malstofurContainer}
            {radstefnurContainer}
            </ScrollView>
    
        </ImageBackground>
        </View>
        </View>)

                )  : null
                );
    }
}