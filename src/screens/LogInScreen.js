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
      show: false,
      showwrongpwtext: false,
    };
  }
  async componentDidMount() {
    try {
      //const value = false;
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
      console.error(errortext);
      this.setState({ show: true });
    }
  }

  componentDidUpdate(prevProps) {
    if (prevProps.screenProps.fontLoaded !== this.props.screenProps.fontLoaded) {
     this.setState({ fontLoaded: this.props.screenProps.fontLoaded });
   }
  }

  onSubmit(text) {
    if(text === this.ACCESS_WORD) {
      AsyncStorage.setItem('hasLoggedIn', 'true')
      .then(()=>{console.log("saved");})
      .catch(()=>{console.error("Could not save");});
      this.props.navigation.navigate('DrawerStack');
    }
    else
    {
      console.log("Rangt lykilorð, reyndu aftur");
      this.setState({ showwrongpwtext: true });
    }

  }

  render() {
    return (
      this.state.fontLoaded ? (
        this.state.show ? (      
          this.state.showwrongpwtext ? (
    
            <View style={Styles.wholepage}>
              <ImageBackground source={require('../assets/images/bluegray.jpg')} resizeMode="cover" style={{ width: '100%', height: '100%', opacity: 0.9 }}>

                <View style={Styles.titlecontainer}>
                  <Text style={Styles.title}> F<Text style={Styles.smallTitle}>YLGJA </Text> </Text>
                </View>
                <View style={Styles.loginContainer}>
                  <View>
                  
                  <Text style={Styles.pBoldCenter}>Fylgjan er einungis ætlað meðlimum Ljósmæðrafélagsins.</Text>
                  <Text style={Styles.pBoldCenter}>Vinsamlegast sláðu inn aðgangsorð eða hafðu samband við formann Ljósmæðrafélagsins.</Text>
                  </View>  

                 
                  
                  <TextInput autoCapitalize="none" autoCorrect={false} placeholder="Aðgangsorð..." 
                    returnKeyType="go" secureTextEntry={true}
                    onSubmitEditing={(input) => this.onSubmit(input.nativeEvent.text)} style={Styles.input}></TextInput>

                  <View><Text style = {Styles.wrongpw}>Rangt lykilorð, reyndu aftur</Text></View>
                  </View> 


              </ImageBackground>
            </View >
            
          ) :  

          <View style={Styles.wholepage}>
          <ImageBackground source={require('../assets/images/bluegray.jpg')} resizeMode="cover" style={{ width: '100%', height: '100%', opacity: 0.9 }}>

            <View style={Styles.titlecontainer}>
              <Text style={Styles.title}> F<Text style={Styles.smallTitle}>YLGJA </Text> </Text>
            </View>
            <View style={Styles.loginContainer}>
              <View>
              
              <Text style={Styles.pBoldCenter}>Fylgjan er einungis ætlað meðlimum Ljósmæðrafélagsins.</Text>
              <Text style={Styles.pBoldCenter}>Vinsamlegast sláðu inn aðgangsorð eða hafðu samband við formann Ljósmæðrafélagsins.</Text>
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