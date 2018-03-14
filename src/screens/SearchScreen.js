import React from 'react';
import {Text, View, Button, Alert, TouchableOpacity, ScrollView } from 'react-native';
import { Font } from 'expo';
import SearchBar from 'react-native-search-bar';
import styles from './../styles/Styles'

export class SearchScreen extends React.Component {
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

  render(){

    return (

      <View style={styles.wholepage}>
       <ScrollView contentContainerStyle={styles.contentContainer}>
        
      <View style={styles.titlecontainer}>
      
      {
        this.state.fontLoaded ? (
        <Text style={styles.title}> Fylgjan </Text>
        ) : null
      }
      </View>

     
     
      
        <Text style={styles.p}>Lorem ipsum dolor sit amet, suas eius decore an ius, congue scaevola pertinax qui an. Te eum tota nihil consul, dolores apeirian eos ut, eum falli debet tantas id. Velit doming ad sit, duo justo perpetua no. Sit eu alterum facilisi quaestio, autem sonet nonumy ad duo, oporteat voluptaria neglegentur ad mei. Ludus aperiri sanctus per an.

          Nam bonorum eloquentiam cu. Sumo platonem vix ea, et pro simul assueverit. Dolore delicatissimi usu in, sed commodo dolores detraxit id. Ne illud viderer vix, id amet homero convenire eam, per te epicurei argumentum. Te lorem invenire mea, cu tale indoctum incorrupte eos, harum libris vim ei.
      </Text> 
      <Text style={styles.p}>Lorem ipsum dolor sit amet, suas eius decore an ius, congue scaevola pertinax qui an. Te eum tota nihil consul, dolores apeirian eos ut, eum falli debet tantas id. Velit doming ad sit, duo justo perpetua no. Sit eu alterum facilisi quaestio, autem sonet nonumy ad duo, oporteat voluptaria neglegentur ad mei. Ludus aperiri sanctus per an.

          Nam bonorum eloquentiam cu. Sumo platonem vix ea, et pro simul assueverit. Dolore delicatissimi usu in, sed commodo dolores detraxit id. Ne illud viderer vix, id amet homero convenire eam, per te epicurei argumentum. Te lorem invenire mea, cu tale indoctum incorrupte eos, harum libris vim ei.
      </Text> 
      <Text style={styles.p}>Lorem ipsum dolor sit amet, suas eius decore an ius, congue scaevola pertinax qui an. Te eum tota nihil consul, dolores apeirian eos ut, eum falli debet tantas id. Velit doming ad sit, duo justo perpetua no. Sit eu alterum facilisi quaestio, autem sonet nonumy ad duo, oporteat voluptaria neglegentur ad mei. Ludus aperiri sanctus per an.

          Nam bonorum eloquentiam cu. Sumo platonem vix ea, et pro simul assueverit. Dolore delicatissimi usu in, sed commodo dolores detraxit id. Ne illud viderer vix, id amet homero convenire eam, per te epicurei argumentum. Te lorem invenire mea, cu tale indoctum incorrupte eos, harum libris vim ei.
      </Text> 
      <Text style={styles.p}>Lorem ipsum dolor sit amet, suas eius decore an ius, congue scaevola pertinax qui an. Te eum tota nihil consul, dolores apeirian eos ut, eum falli debet tantas id. Velit doming ad sit, duo justo perpetua no. Sit eu alterum facilisi quaestio, autem sonet nonumy ad duo, oporteat voluptaria neglegentur ad mei. Ludus aperiri sanctus per an.

          Nam bonorum eloquentiam cu. Sumo platonem vix ea, et pro simul assueverit. Dolore delicatissimi usu in, sed commodo dolores detraxit id. Ne illud viderer vix, id amet homero convenire eam, per te epicurei argumentum. Te lorem invenire mea, cu tale indoctum incorrupte eos, harum libris vim ei.
      </Text> 
      </ScrollView>
   
  
    </View>

     
  

      
    );
  }
    
}
