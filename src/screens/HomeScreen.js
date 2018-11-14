import React from 'react';
import Favicon from 'react-favicon';
import { Text, View, Button, Alert, TouchableOpacity, Image, Dimensions } from 'react-native';
import Styles from './../styles/Styles';
<Image source={require("./assets/2.png")}/>

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
        <TouchableOpacity style={Styles.buttons} onPress={() => this.props.navigation.navigate('Search', {drawerContent: "chapters"})}>
          <Image source={require("../assets/tinyhand.png")}/>
        </TouchableOpacity>

        <TouchableOpacity style={Styles.buttons} onPress={() => this.props.navigation.navigate('Information', {drawerContent: "information"})}>
          <Text style={Styles.buttontext}>Upplýsingar</Text>
          <Text style={Styles.buttontext}>símanúmer, heimasíður, þjónustur, um ljósmæður og ljósmæðrafélag</Text>
        </TouchableOpacity>

        <TouchableOpacity style={Styles.buttons} onPress={() => this.props.navigation.navigate('NewsFeed', {drawerContent: "news"})}>
          <Text style={Styles.buttontext}>Fréttaveita</Text>
          <Text style={Styles.buttontext}>fréttir frá ljósmæðrafélag.is</Text>
        </TouchableOpacity>

      </View>

    return (
      this.state.fontLoaded ? (

        this.state.isLargeWindow ? (
          
          <View style={Styles.wholepage}>
            {titlecontainer}
            {imagecontainer}
            {buttoncontainer}
          </View>
        ) :
          (
            <View style={Styles.splitpage}>
              <View style={Styles.wholepage}>
                {titlecontainer}
                {imagecontainer}
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

