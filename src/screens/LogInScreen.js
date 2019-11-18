import React from 'react';
import { AsyncStorage, Text, View, TouchableOpacity, TextInput, ImageBackground } from 'react-native';
import Styles from './../styles/Styles';

export class LogInScreen extends React.Component {
  ACCESS_WORD = "obstetrix";
  static navigationOptions = {
    header: null
  }

  constructor(props) {
    super(props);
    this.state = {
      fontLoaded: props.screenProps.fontLoaded,
      show: false
    };
  }
  async componentDidMount() {
    try {
      const value = await AsyncStorage.getItem('hasLoggedIn');
      if (value) {
        // reroute
        console.log("Has logged in");
        this.props.navigation.navigate('App');
      }
      else {
        this.setState({ show: true });
      }
    } catch (error) {
      // Error retrieving data
      console.error(error);
      this.setState({ show: true });
    }
  }

  componentWillReceiveProps(newProps) {
    if (this.state.fontLoaded !== newProps.screenProps.fontLoaded) {
      this.setState({ fontLoaded: newProps.screenProps.fontLoaded });
    }
  }

  onSubmit(text) {
    if(text === this.ACCESS_WORD) {
      AsyncStorage.setItem('hasLoggedIn', 'true')
      .then(()=>{console.log("saved");})
      .catch(()=>{console.error("Could not save");});
      this.props.navigation.navigate('DrawerStack');
    }
  }

  render() {
    return (
      this.state.fontLoaded ? (
        this.state.show ?
          (
            <View style={Styles.wholepage}>
              <ImageBackground source={require('../assets/images/bluegray.jpg')} resizeMode="cover" style={{ width: '100%', height: '100%', opacity: 0.9 }}>

                <View style={Styles.titlecontainer}>
                  <Text style={Styles.title}> F<Text style={Styles.smallTitle}>YLGJA </Text> </Text>
                </View>
                <View style={Styles.loginContainer}>
                  <View>
                  
                  <Text style={Styles.pBoldCenter}>Þetta app er einungis ætlað meðlimum Ljósmæðrafélagsins.</Text>
                  <Text style={Styles.pBoldCenter}> Vinsamlegast sláðu inn aðgangsorð eða hafðu samband við formann Ljósmæðrafélagsins.</Text>
                  </View>
                  <TextInput autoCapitalize="none" autoCorrect={false} placeholder="Aðgangsorð..." 
                    returnKeyType="go" secureTextEntry={true}
                    onSubmitEditing={(input) => this.onSubmit(input.nativeEvent.text)} style={Styles.input}></TextInput>
                </View>
              </ImageBackground>
            </View >
          ) : null
      ) : null
    );
  }
}