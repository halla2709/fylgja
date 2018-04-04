import React from 'react';
import Favicon from 'react-favicon';
import { Text, View, Button, Alert, TouchableOpacity, Image, Dimensions } from 'react-native';
import Styles from './../styles/Styles';

export class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isLargeWindow: Dimensions.get('window').height > 500};
  }

  render() {

    Dimensions.addEventListener("change", (dimension) => {
      this.setState(() => {
        return {isLargeWindow: dimension.window.height > 500};
      })
    });

    var titlecontainer =
      <View style={Styles.titlecontainer}>
        <Text style={Styles.title}> F<Text style={Styles.smallTitle}>YLGJAN </Text> </Text>
      </View>

    var imagecontainer =
      <View style={Styles.imagecontainer}>
        <Image resizeMode="contain" style={Styles.image} source={require('../assets/images/storkur.png')} />
      </View>

    var buttoncontainer =
      <View style={Styles.buttoncontainer}>
        <TouchableOpacity style={Styles.buttons} onPress={() => this.props.navigation.navigate('Search')}>
          <Text style={Styles.buttontext}>Handbók ljósmæðra</Text>
        </TouchableOpacity>

        <TouchableOpacity style={Styles.buttons} onPress={() => this.props.navigation.navigate('Information')}>
          <Text style={Styles.buttontext}>Upplýsingar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={Styles.buttons} onPress={() => this.props.navigation.navigate('NewsFeed')}>
          <Text style={Styles.buttontext}>Fréttaveita</Text>
        </TouchableOpacity>
      </View>

    return (
      this.props.screenProps.fontLoaded ? (

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

