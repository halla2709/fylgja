import React from 'react';
import {Text, View, Button, Alert, TouchableOpacity, Image, ScrollView } from 'react-native';
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

<View contentContainerStyle={Styles.readerwholepage}>
  <View style={{paddingBottom: 15}}>
      <View style={Styles.decorationcontainer}>
        <Image resizeMode="contain" source={require('../assets/images/3.png')} />
      </View>
      
      <View style={Styles.chaptercontainer}>
      <Ionicons name="ios-arrow-back" style={Styles.leftarrow} size={42} color="rgb(34,82,171)" />
      
      <View style={Styles.chaptertext}>
      <Text style={Styles.h1}>Óvænt fæðingarhjálp </Text>
      </View>

      <Ionicons name="ios-arrow-forward" style={Styles.rightarrow} size={42} color="rgb(34,82,171)" />
      </View>

      <View style={Styles.decorationcontainer}>
        <Image resizeMode="contain" source={require('../assets/images/4.png')} />
      </View>
  </View>
  <ScrollView style={{marginBottom: 150}}>
      <View style={Styles.subchaptercontainer}>
        <Text style={Styles.h2}> Undirbúningur </Text>
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
      Lorem ipsum dolor sit amet, suas eius decore an ius, congue scaevola pertinax qui an. Te eum tota nihil consul, dolores apeirian eos ut, eum falli debet tantas id. Velit doming ad sit, duo justo perpetua no. Sit eu alterum facilisi quaestio, autem sonet nonumy ad duo, oporteat voluptaria neglegentur ad mei. Ludus aperiri sanctus per an.
      Nam bonorum eloquentiam cu. Sumo platonem vix ea, et pro simul assueverit. Dolore delicatissimi usu in, sed commodo dolores detraxit id. Ne illud viderer vix, id amet homero convenire eam, per te epicurei argumentum. Te lorem invenire mea, cu tale indoctum incorrupte eos, harum libris vim ei.
      Lorem ipsum dolor sit amet, suas eius decore an ius, congue scaevola pertinax qui an. Te eum tota nihil consul, dolores apeirian eos ut, eum falli debet tantas id. Velit doming ad sit, duo justo perpetua no. Sit eu alterum facilisi quaestio, autem sonet nonumy ad duo, oporteat voluptaria neglegentur ad mei. Ludus aperiri sanctus per an.
      Nam bonorum eloquentiam cu. Sumo platonem vix ea, et pro simul assueverit. Dolore delicatissimi usu in, sed commodo dolores detraxit id. Ne illud viderer vix, id amet homero convenire eam, per te epicurei argumentum. Te lorem invenire mea, cu tale indoctum incorrupte eos, harum libris vim ei.
      Lorem ipsum dolor sit amet, suas eius decore an ius, congue scaevola pertinax qui an. Te eum tota nihil consul, dolores apeirian eos ut, eum falli debet tantas id. Velit doming ad sit, duo justo perpetua no. Sit eu alterum facilisi quaestio, autem sonet nonumy ad duo, oporteat voluptaria neglegentur ad mei. Ludus aperiri sanctus per an.
      Nam bonorum eloquentiam cu. Sumo platonem vix ea, et pro simul assueverit. Dolore delicatissimi usu in, sed commodo dolores detraxit id. Ne illud viderer vix, id amet homero convenire eam, per te epicurei argumentum. Te lorem invenire mea, cu tale indoctum incorrupte eos, harum libris vim ei.
      Lorem ipsum dolor sit amet, suas eius decore an ius, congue scaevola pertinax qui an. Te eum tota nihil consul, dolores apeirian eos ut, eum falli debet tantas id. Velit doming ad sit, duo justo perpetua no. Sit eu alterum facilisi quaestio, autem sonet nonumy ad duo, oporteat voluptaria neglegentur ad mei. Ludus aperiri sanctus per an.
      Nam bonorum eloquentiam cu. Sumo platonem vix ea, et pro simul assueverit. Dolore delicatissimi usu in, sed commodo dolores detraxit id. Ne illud viderer vix, id amet homero convenire eam, per te epicurei argumentum. Te lorem invenire mea, cu tale indoctum incorrupte eos, harum libris vim ei.
      Lorem ipsum dolor sit amet, suas eius decore an ius, congue scaevola pertinax qui an. Te eum tota nihil consul, dolores apeirian eos ut, eum falli debet tantas id. Velit doming ad sit, duo justo perpetua no. Sit eu alterum facilisi quaestio, autem sonet nonumy ad duo, oporteat voluptaria neglegentur ad mei. Ludus aperiri sanctus per an.
      Nam bonorum eloquentiam cu. Sumo platonem vix ea, et pro simul assueverit. Dolore delicatissimi usu in, sed commodo dolores detraxit id. Ne illud viderer vix, id amet homero convenire eam, per te epicurei argumentum. Te lorem invenire mea, cu tale indoctum incorrupte eos, harum libris vim ei.
      Lorem ipsum dolor sit amet, suas eius decore an ius, congue scaevola pertinax qui an. Te eum tota nihil consul, dolores apeirian eos ut, eum falli debet tantas id. Velit doming ad sit, duo justo perpetua no. Sit eu alterum facilisi quaestio, autem sonet nonumy ad duo, oporteat voluptaria neglegentur ad mei. Ludus aperiri sanctus per an.
      Nam bonorum eloquentiam cu. Sumo platonem vix ea, et pro simul assueverit. Dolore delicatissimi usu in, sed commodo dolores detraxit id. Ne illud viderer vix, id amet homero convenire eam, per te epicurei argumentum. Te lorem invenire mea, cu tale indoctum incorrupte eos, harum libris vim ei.
      Lorem ipsum dolor sit amet, suas eius decore an ius, congue scaevola pertinax qui an. Te eum tota nihil consul, dolores apeirian eos ut, eum falli debet tantas id. Velit doming ad sit, duo justo perpetua no. Sit eu alterum facilisi quaestio, autem sonet nonumy ad duo, oporteat voluptaria neglegentur ad mei. Ludus aperiri sanctus per an.
      Nam bonorum eloquentiam cu. Sumo platonem vix ea, et pro simul assueverit. Dolore delicatissimi usu in, sed commodo dolores detraxit id. Ne illud viderer vix, id amet homero convenire eam, per te epicurei argumentum. Te lorem invenire mea, cu tale indoctum incorrupte eos, harum libris vim ei.
      Lorem ipsum dolor sit amet, suas eius decore an ius, congue scaevola pertinax qui an. Te eum tota nihil consul, dolores apeirian eos ut, eum falli debet tantas id. Velit doming ad sit, duo justo perpetua no. Sit eu alterum facilisi quaestio, autem sonet nonumy ad duo, oporteat voluptaria neglegentur ad mei. Ludus aperiri sanctus per an.
      Nam bonorum eloquentiam cu. Sumo platonem vix ea, et pro simul assueverit. Dolore delicatissimi usu in, sed commodo dolores detraxit id. Ne illud viderer vix, id amet homero convenire eam, per te epicurei argumentum. Te lorem invenire mea, cu tale indoctum incorrupte eos, harum libris vim ei.
      Lorem ipsum dolor sit amet, suas eius decore an ius, congue scaevola pertinax qui an. Te eum tota nihil consul, dolores apeirian eos ut, eum falli debet tantas id. Velit doming ad sit, duo justo perpetua no. Sit eu alterum facilisi quaestio, autem sonet nonumy ad duo, oporteat voluptaria neglegentur ad mei. Ludus aperiri sanctus per an.
      Nam bonorum eloquentiam cu. Sumo platonem vix ea, et pro simul assueverit. Dolore delicatissimi usu in, sed commodo dolores detraxit id. Ne illud viderer vix, id amet homero convenire eam, per te epicurei argumentum. Te lorem invenire mea, cu tale indoctum incorrupte eos, harum libris vim ei.
      Lorem ipsum dolor sit amet, suas eius decore an ius, congue scaevola pertinax qui an. Te eum tota nihil consul, dolores apeirian eos ut, eum falli debet tantas id. Velit doming ad sit, duo justo perpetua no. Sit eu alterum facilisi quaestio, autem sonet nonumy ad duo, oporteat voluptaria neglegentur ad mei. Ludus aperiri sanctus per an.

          Nam bonorum eloquentiam cu. Sumo platonem vix ea, et pro simul assueverit. Dolore delicatissimi usu in, sed commodo dolores detraxit id. Ne illud viderer vix, id amet homero convenire eam, per te epicurei argumentum. Te lorem invenire mea, cu tale indoctum incorrupte eos, harum libris vim ei.
      </Text> 
      </View>


      <View style={Styles.subchaptercontainer}>
        <Text style={Styles.h2}> Fæðing </Text>
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
      Lorem ipsum dolor sit amet, suas eius decore an ius, congue scaevola pertinax qui an. Te eum tota nihil consul, dolores apeirian eos ut, eum falli debet tantas id. Velit doming ad sit, duo justo perpetua no. Sit eu alterum facilisi quaestio, autem sonet nonumy ad duo, oporteat voluptaria neglegentur ad mei. Ludus aperiri sanctus per an.
      Nam bonorum eloquentiam cu. Sumo platonem vix ea, et pro simul assueverit. Dolore delicatissimi usu in, sed commodo dolores detraxit id. Ne illud viderer vix, id amet homero convenire eam, per te epicurei argumentum. Te lorem invenire mea, cu tale indoctum incorrupte eos, harum libris vim ei.
      Lorem ipsum dolor sit amet, suas eius decore an ius, congue scaevola pertinax qui an. Te eum tota nihil consul, dolores apeirian eos ut, eum falli debet tantas id. Velit doming ad sit, duo justo perpetua no. Sit eu alterum facilisi quaestio, autem sonet nonumy ad duo, oporteat voluptaria neglegentur ad mei. Ludus aperiri sanctus per an.
      Nam bonorum eloquentiam cu. Sumo platonem vix ea, et pro simul assueverit. Dolore delicatissimi usu in, sed commodo dolores detraxit id. Ne illud viderer vix, id amet homero convenire eam, per te epicurei argumentum. Te lorem invenire mea, cu tale indoctum incorrupte eos, harum libris vim ei.
      Lorem ipsum dolor sit amet, suas eius decore an ius, congue scaevola pertinax qui an. Te eum tota nihil consul, dolores apeirian eos ut, eum falli debet tantas id. Velit doming ad sit, duo justo perpetua no. Sit eu alterum facilisi quaestio, autem sonet nonumy ad duo, oporteat voluptaria neglegentur ad mei. Ludus aperiri sanctus per an.
      Nam bonorum eloquentiam cu. Sumo platonem vix ea, et pro simul assueverit. Dolore delicatissimi usu in, sed commodo dolores detraxit id. Ne illud viderer vix, id amet homero convenire eam, per te epicurei argumentum. Te lorem invenire mea, cu tale indoctum incorrupte eos, harum libris vim ei.
      Lorem ipsum dolor sit amet, suas eius decore an ius, congue scaevola pertinax qui an. Te eum tota nihil consul, dolores apeirian eos ut, eum falli debet tantas id. Velit doming ad sit, duo justo perpetua no. Sit eu alterum facilisi quaestio, autem sonet nonumy ad duo, oporteat voluptaria neglegentur ad mei. Ludus aperiri sanctus per an.
      Nam bonorum eloquentiam cu. Sumo platonem vix ea, et pro simul assueverit. Dolore delicatissimi usu in, sed commodo dolores detraxit id. Ne illud viderer vix, id amet homero convenire eam, per te epicurei argumentum. Te lorem invenire mea, cu tale indoctum incorrupte eos, harum libris vim ei.
      Lorem ipsum dolor sit amet, suas eius decore an ius, congue scaevola pertinax qui an. Te eum tota nihil consul, dolores apeirian eos ut, eum falli debet tantas id. Velit doming ad sit, duo justo perpetua no. Sit eu alterum facilisi quaestio, autem sonet nonumy ad duo, oporteat voluptaria neglegentur ad mei. Ludus aperiri sanctus per an.
      </Text> 
      </View>

      <View style={Styles.subchaptercontainer}>
        <Text style={Styles.h2}> Aðhlynning móður eftir fæðingu </Text>
      </View>
      
      <View style={Styles.pcontainer}>
        <Text style={Styles.p} layout="row">
          Nam bonorum eloquentiam cu. Sumo platonem vix ea, et pro simul assueverit. Dolore delicatissimi usu in, sed commodo dolores detraxit id. Ne illud viderer vix, id amet homero convenire eam, per te epicurei argumentum. Te lorem invenire mea, cu tale indoctum incorrupte eos, harum libris vim ei.
      Lorem ipsum dolor sit amet, suas eius decore an ius, congue scaevola pertinax qui an. Te eum tota nihil consul, dolores apeirian eos ut, eum falli debet tantas id. Velit doming ad sit, duo justo perpetua no. Sit eu alterum facilisi quaestio, autem sonet nonumy ad duo, oporteat voluptaria neglegentur ad mei. Ludus aperiri sanctus per an.
      Nam bonorum eloquentiam cu. Sumo platonem vix ea, et pro simul assueverit. Dolore delicatissimi usu in, sed commodo dolores detraxit id. Ne illud viderer vix, id amet homero convenire eam, per te epicurei argumentum. Te lorem invenire mea, cu tale indoctum incorrupte eos, harum libris vim ei.
      Lorem ipsum dolor sit amet, suas eius decore an ius, congue scaevola pertinax qui an. Te eum tota nihil consul, dolores apeirian eos ut, eum falli debet tantas id. Velit doming ad sit, duo justo perpetua no. Sit eu alterum facilisi quaestio, autem sonet nonumy ad duo, oporteat voluptaria neglegentur ad mei. Ludus aperiri sanctus per an.
      Nam bonorum eloquentiam cu. Sumo platonem vix ea, et pro simul assueverit. Dolore delicatissimi usu in, sed commodo dolores detraxit id. Ne illud viderer vix, id amet homero convenire eam, per te epicurei argumentum. Te lorem invenire mea, cu tale indoctum incorrupte eos, harum libris vim ei.
      Lorem ipsum dolor sit amet, suas eius decore an ius, congue scaevola pertinax qui an. Te eum tota nihil consul, dolores apeirian eos ut, eum falli debet tantas id. Velit doming ad sit, duo justo perpetua no. Sit eu alterum facilisi quaestio, autem sonet nonumy ad duo, oporteat voluptaria neglegentur ad mei. Ludus aperiri sanctus per an.
      Nam bonorum eloquentiam cu. Sumo platonem vix ea, et pro simul assueverit. Dolore delicatissimi usu in, sed commodo dolores detraxit id. Ne illud viderer vix, id amet homero convenire eam, per te epicurei argumentum. Te lorem invenire mea, cu tale indoctum incorrupte eos, harum libris vim ei.
      Lorem ipsum dolor sit amet, suas eius decore an ius, congue scaevola pertinax qui an. Te eum tota nihil consul, dolores apeirian eos ut, eum falli debet tantas id. Velit doming ad sit, duo justo perpetua no. Sit eu alterum facilisi quaestio, autem sonet nonumy ad duo, oporteat voluptaria neglegentur ad mei. Ludus aperiri sanctus per an.
      Nam bonorum eloquentiam cu. Sumo platonem vix ea, et pro simul assueverit. Dolore delicatissimi usu in, sed commodo dolores detraxit id. Ne illud viderer vix, id amet homero convenire eam, per te epicurei argumentum. Te lorem invenire mea, cu tale indoctum incorrupte eos, harum libris vim ei.
      Lorem ipsum dolor sit amet, suas eius decore an ius, congue scaevola pertinax qui an. Te eum tota nihil consul, dolores apeirian eos ut, eum falli debet tantas id. Velit doming ad sit, duo justo perpetua no. Sit eu alterum facilisi quaestio, autem sonet nonumy ad duo, oporteat voluptaria neglegentur ad mei. Ludus aperiri sanctus per an.
      Nam bonorum eloquentiam cu. Sumo platonem vix ea, et pro simul assueverit. Dolore delicatissimi usu in, sed commodo dolores detraxit id. Ne illud viderer vix, id amet homero convenire eam, per te epicurei argumentum. Te lorem invenire mea, cu tale indoctum incorrupte eos, harum libris vim ei.
      Lorem ipsum dolor sit amet, suas eius decore an ius, congue scaevola pertinax qui an. Te eum tota nihil consul, dolores apeirian eos ut, eum falli debet tantas id. Velit doming ad sit, duo justo perpetua no. Sit eu alterum facilisi quaestio, autem sonet nonumy ad duo, oporteat voluptaria neglegentur ad mei. Ludus aperiri sanctus per an.
      Unnur waz here
      </Text> 
      </View>

      <View style={{alignItems:'center'}}>
    <Image resizeMode="contain" style={{width:'40%'}} source={require('../assets/images/2.png')} />
      </View>

  </ScrollView>
</View>


   
        ) : null

    );
  }
    
}
