import React from 'react';
import { Text, View, TouchableOpacity, Image, ImageBackground, Dimensions, PixelRatio } from 'react-native';
import Styles from './../styles/Styles';
import { Ionicons } from '@expo/vector-icons';
<Image source={require("../assets/images/2.png")} />

export class HomeScreen extends React.Component {
  dimensionChanged(dim) {
    this.setState(() => {
      return { isLargeWindow: dim.window.height > 500 };
    });
  }
  
  constructor(props) {
    super(props);
    this.dimensionChanged = this.dimensionChanged.bind(this);
    this.state = {
      fontLoaded: props.screenProps.fontLoaded,
      isLargeWindow: Dimensions.get('window').height > 500
    };
  }

  componentDidUpdate(prevProps) {
    if (prevProps.screenProps.fontLoaded !== this.props.screenProps.fontLoaded) {
     this.setState({ fontLoaded: this.props.screenProps.fontLoaded });
   }
  }
  
  componentDidMount() {
    Dimensions.addEventListener("change", this.dimensionChanged);
  }
  componentWillUnmount() {
    Dimensions.removeEventListener("change", this.dimensionChanged);
  }
 
  render() {
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
        <TouchableOpacity style={Styles.button1} onPress={() => this.props.navigation.navigate('NewsFeedStack', { drawerContent: "news" })}>

          <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', }}>
          <Ionicons name="newspaper-outline" reverse color='rgb(201,52,36)' size={38} />
          
            <View style={{ flex: 1 }}>
              <Text style={Styles.buttontitle1}>Fréttaveita</Text>
              <Text style={Styles.buttontext1}>Fréttir og viðburðir af vef Ljósmæðrafélagsins</Text>
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={Styles.button2} onPress={() => this.props.navigation.navigate('InformationStack', { drawerContent: "information" })}>
          <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', }}>
          <Ionicons name="information-circle-outline" reverse color='rgb(34,82,171)' size={38} />
          
            <View style={{ flex: 1 }}>
              <Text style={Styles.buttontitle2}>Upplýsingar</Text>
              <Text style={Styles.buttontext2}>Símanúmer, ljósmæðraþjónusta, stjórn, nefndir o.fl.</Text>
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={Styles.button3} onPress={() => this.props.navigation.navigate('ReaderStack')}>
          <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', }}>
          <Ionicons name="book-outline" reverse color='rgb(62,135,60)' size={38} />
          
            <View style={{ flex: 1 }}>
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
            <ImageBackground source={require('../assets/images/bluegray.jpg')} resizeMode="cover" style={{ width: '100%', height: '100%', opacity: 0.9 }}>

              {titlecontainer}
              {imagecontainer}

              {buttoncontainer}
            </ImageBackground>
          </View>
        ) :
          (
            <View style={Styles.splitpage}>
              <View style={Styles.wholepage}>
                <ImageBackground source={require('../assets/images/bluegray.jpg')} resizeMode="cover" style={{ width: '100%', height: '100%', opacity: 0.9 }}>
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