import React from 'react';
import {Text, View, Button, Alert, TouchableOpacity, ScrollView } from 'react-native';
import { Font } from 'expo';
import SearchBar from 'react-native-search-bar';
import Styles from './../styles/Styles';

export class SearchScreen extends React.Component {
  render() {
    return (
        this.props.screenProps.fontLoaded ? (
          <View style={styles.wholepage}>
       <ScrollView contentContainerStyle={styles.contentContainer}>
        
      <View style={styles.titlecontainer}>
        <Text style={styles.title}> Fylgjan </Text>
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

        ) : null
      
  
/*
  <SearchBar
ref='searchBar'
placeholder='Search'
onSearchButtonPress={() => {Alert.alert("YAY þú leitaðir :)")}}
onCancelButtonPress={() => {Alert.alert("Hættir við að leita :(")}}
/>
*/

        
    );
  }
    
}
