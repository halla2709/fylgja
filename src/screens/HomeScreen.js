import React from 'react';
import { Text, View, Button, Alert, TouchableOpacity, Image } from 'react-native';
import { Font } from 'expo';
import Styles from './../styles/Styles'

export class HomeScreen extends React.Component {
  state = {
    fontLoaded: false
  };

  async componentDidMount() {
    await Font.loadAsync({
      'merriweather-black': require('../assets/fonts/Merriweather/Merriweather-Black.ttf'),
      'dosis-medium': require('../assets/fonts/Dosis/Dosis-Medium.ttf'),
      'opensans-regular': require('../assets/fonts/Open_Sans/OpenSans-Regular.ttf'),

    });
    this.setState({ fontLoaded: true });
  }

  render() {
    return (
      <View>
        <View style={Styles.imagecontainer}>
          <Image style={Styles.image} source={require('../assets/images/storkur.png')} />
        </View>

        <View style={Styles.textcontainer}>

          {
            this.state.fontLoaded ? (
              <Text style={Styles.title}> Fylgja </Text>
            ) : null
          }

          <TouchableOpacity style={Styles.buttons} onPress={() => this.props.navigation.navigate('Search')}>
            <Text>Fylgjan</Text>
          </TouchableOpacity>

          <TouchableOpacity style={Styles.buttons} onPress={() => this.props.navigation.navigate('Search')}>
            <Text>Upplýsingar</Text>
          </TouchableOpacity>

          <TouchableOpacity style={Styles.buttons} onPress={() => this.props.navigation.navigate('Search')}>
            <Text>Fréttaveita</Text>
          </TouchableOpacity>


        </View>
      </View>

    );
  }
}

