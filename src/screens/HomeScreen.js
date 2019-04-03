import React from 'react';
import { Text, View, TouchableOpacity, Image, ImageBackground, Dimensions, } from 'react-native';
import Styles from './../styles/Styles';
import { Icon } from 'react-native-elements'; 
<Image source={require("../assets/images/2.png")}/>

export class HomeScreen extends React.Component {
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

       
    var titlecontainer =
    <View style={Styles.titlecontainer}>
        <Text style={Styles.title}> F<Text style={Styles.smallTitle}>YLGJA </Text> </Text>
      </View>
      
    var imagecontainer =
    <View style={Styles.imagecontainer}>
    
      <Image resizeMode="contain" style={Styles.image} source={require('../assets/images/storkur.png')} />
      
    </View>

    var buttoncontainer =
    <View style={Styles.buttoncontainer}>
        <TouchableOpacity style={Styles.button1} onPress={() => this.props.navigation.navigate('NewsFeedStack', {drawerContent: "news"})}>
       
       <View style={{flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center',}}>
            <Icon reverse name='newspaper-o' type='font-awesome' color='#FF3A0D' size={30} /> 
            <View style={{flex: 1}}>
            <Text style={Styles.buttontitle1}>Fréttaveita</Text>
            <Text style={Styles.buttontext1}>Fréttir og viðburðir frá ljosmaedrafelag.is</Text>
            </View>
            </View>
        </TouchableOpacity>

        <TouchableOpacity style={Styles.button2} onPress={() => this.props.navigation.navigate('InformationStack', {drawerContent: "information"})}>
        <View style={{flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center',}}>
        <Icon reverse name='md-information-circle' type='ionicon' color='#1500FF' size={30} /> 
            <View style={{flex: 1}}>
            <Text style={Styles.buttontitle2}>Upplýsingar</Text>
            <Text style={Styles.buttontext2}>Símanúmer, heimasíður, þjónustur og fleira</Text>
            </View>
            </View>
        </TouchableOpacity>

        <TouchableOpacity style={Styles.button3} onPress={() => this.props.navigation.navigate('ReaderStack')}>
        <View style={{flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center',}}>
        <Icon reverse name='open-book' type='entypo' color='#05bc00' size={30} /> 
          
          <View style={{flex: 1}}>
          <Text style={Styles.buttontitle3}>Handbók</Text>
          <Text style={Styles.buttontext3}>Fylgjan á rafrænu formi</Text>
          </View>
          </View>
        </TouchableOpacity>

      </View>

return (
  this.state.fontLoaded ? (

    this.state.isLargeWindow ? (
      
      <View style={Styles.wholepage}>
      <ImageBackground source={require('../assets/images/bluegray.jpg')} resizeMode="cover" style={{width: '100%', height: '100%', opacity:0.9}}>
      
        {titlecontainer}
        {imagecontainer}
       
        {buttoncontainer}
        </ImageBackground>
      </View>
    ) :
      (
        <View style={Styles.splitpage}>
          <View style={Styles.wholepage}>
          <ImageBackground source={require('../assets/images/bluegray.jpg')} resizeMode="cover" style={{width: '100%', height: '100%', opacity:0.9}}>
           
           {titlecontainer}
            {imagecontainer}
            </ImageBackground>
          </View>
          <View style={Styles.wholepage}>
            {buttoncontainer}
            
          </View>
        </View>
      )
  ) : null
    );

  }
}