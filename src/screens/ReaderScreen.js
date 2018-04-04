import React from 'react';
import {Text, View, Button, Alert, TouchableOpacity, ScrollView } from 'react-native';
import { Font } from 'expo';
import SearchBar from 'react-native-search-bar';
import Styles from './../styles/Styles';
import { Ionicons } from '@expo/vector-icons';
import { Table, Row, Rows } from 'react-native-table-component';

export class ReaderScreen extends React.Component {
  render() {
    return (
        this.props.screenProps.fontLoaded ? (
//<Ionicons name="md-search" size={42} color="rgb(128,128,128)" />
       <ScrollView contentContainerStyle={Styles.readerwholepage}>

      
      <View style={Styles.chaptercontainer}>
      <Ionicons name="ios-arrow-back" style={Styles.leftarrow} size={42} color="rgb(34,82,171)" />
      
      <View style={Styles.chaptertext}>
      <Text style={Styles.h1}>1. Blóðþrýstingur í yfirvigt með tvíbura og annað vesen </Text>
      </View>

      <Ionicons name="ios-arrow-forward" style={Styles.rightarrow} size={42} color="rgb(34,82,171)" />
      </View>

      <View style={Styles.subchaptercontainer}>
        <Text style={Styles.h2}> 1.2. Tafla yfir þyngdir </Text>
      </View>
      
      <View style={Styles.pcontainer}>
        <Text style={Styles.p} layout="row">Lorem ipsum dolor sit amet, suas eius decore an ius, congue scaevola pertinax qui an. Te eum tota nihil consul, dolores apeirian eos ut, eum falli debet tantas id. Velit doming ad sit, duo justo perpetua no. Sit eu alterum facilisi quaestio, autem sonet nonumy ad duo, oporteat voluptaria neglegentur ad mei. Ludus aperiri sanctus per an.

          Nam bonorum eloquentiam cu. Sumo platonem vix ea, et pro simul assueverit. Dolore delicatissimi usu in, sed commodo dolores detraxit id. Ne illud viderer vix, id amet homero convenire eam, per te epicurei argumentum. Te lorem invenire mea, cu tale indoctum incorrupte eos, harum libris vim ei.
     Lorem ipsum dolor sit amet, suas eius decore an ius, congue scaevola pertinax qui an. Te eum tota nihil consul, dolores apeirian eos ut, eum falli debet tantas id. Velit doming ad sit, duo justo perpetua no. Sit eu alterum facilisi quaestio, autem sonet nonumy ad duo, oporteat voluptaria neglegentur ad mei. Ludus aperiri sanctus per an.

          Nam bonorum eloquentiam cu. Sumo platonem vix ea, et pro simul assueverit. Dolore delicatissimi usu in, sed commodo dolores detraxit id. Ne illud viderer vix, id amet homero convenire eam, per te epicurei argumentum. Te lorem invenire mea, cu tale indoctum incorrupte eos, harum libris vim ei.
     Lorem ipsum dolor sit amet, suas eius decore an ius, congue scaevola pertinax qui an. Te eum tota nihil consul, dolores apeirian eos ut, eum falli debet tantas id. Velit doming ad sit, duo justo perpetua no. Sit eu alterum facilisi quaestio, autem sonet nonumy ad duo, oporteat voluptaria neglegentur ad mei. Ludus aperiri sanctus per an.

          Nam bonorum eloquentiam cu. Sumo platonem vix ea, et pro simul assueverit. Dolore delicatissimi usu in, sed commodo dolores detraxit id. Ne illud viderer vix, id amet homero convenire eam, per te epicurei argumentum. Te lorem invenire mea, cu tale indoctum incorrupte eos, harum libris vim ei.
      Lorem ipsum dolor sit amet, suas eius decore an ius, congue scaevola pertinax qui an. Te eum tota nihil consul, dolores apeirian eos ut, eum falli debet tantas id. Velit doming ad sit, duo justo perpetua no. Sit eu alterum facilisi quaestio, autem sonet nonumy ad duo, oporteat voluptaria neglegentur ad mei. Ludus aperiri sanctus per an.

          Nam bonorum eloquentiam cu. Sumo platonem vix ea, et pro simul assueverit. Dolore delicatissimi usu in, sed commodo dolores detraxit id. Ne illud viderer vix, id amet homero convenire eam, per te epicurei argumentum. Te lorem invenire mea, cu tale indoctum incorrupte eos, harum libris vim ei.
      </Text> 
      </View>

      </ScrollView>
   
        ) : null

    );
  }
    
}
