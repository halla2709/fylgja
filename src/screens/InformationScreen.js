import React, { Component } from 'react';
import {
    AppRegistry,
    Text,
    View,
    Button,
    Alert,
    TouchableOpacity,
    Image,
    ScrollView
} from 'react-native';
import {Font} from 'expo';
import Styles from './../styles/Styles';
import {Ionicons} from '@expo/vector-icons';
import Information from "../assets/testContent/info.js";


export class InformationScreen extends React.Component {

    constructor(){
        super();
        this.state ={
        status:false,
        icon:true
        }
    }
   

    
    ShowHideTextComponentView = () =>{
        if(this.state.status == true)
        {
            this.setState({status: false})
            this.setState({icon: true})
        }
        else
        {
          this.setState({status: true})
          this.setState({icon: false})
        }
      }

    render() {
        return (
            this.props.screenProps.fontLoaded ? (

         <View contentContainerStyle={Styles.informationwholepage}>
            <View style={{ paddingBottom: 5 }}>
                <View style={Styles.chaptercontainer}>              
        
                    <View style={Styles.chaptertext}>
                        <Text style={Styles.h1}> Upplýsingar 
                        </Text>
                        <Image resizeMode="contain" style={{width: '50%'}} source={require('../assets/images/6.png')} />                        
                    </View>
                </View>    
            </View>
            
            <ScrollView style = {{ marginBottom: 150 }} >
                
                <TouchableOpacity onPress={this.ShowHideTextComponentView}>
                  <View style={Styles.infosubchaptercontainer}>
                    <Text style={Styles.h22}>Skilgreining á ljósmóðurstarfinu</Text>
                    {
                    this.state.icon ?
                        <Ionicons style={Styles.plusbutton} name="md-add" size={30}/> : null }
                  </View>
                </TouchableOpacity> 
                   
                <View style={Styles.informationcontainer}>
                {
                    this.state.status ? <Text style={Styles.p} layout="row">
                    <Text style={Styles.h3}>Skilgreining á ljósmóðurstarfinu </Text>
              <Text style={Styles.h3}>Samþykkt af Alþjóða samtökum ljósmæðra ICM, Alþjóðaheilbrigðisstofnuninni WHO, og Alþjóðasamtökum fæðingar- og kvensjúkdómalækna FIGO árið 1992.</Text>
              <Text style={Styles.h3}>„Ljósmóðir er einstaklingur, sem hefur lokið námi í ljósmóðurfræði sem er viðurkennt í því landi sem það var stundað. Hún hefur lokið náminu með viðunandi vitnisburði og hlotið leyfi viðkomandi yfirvalda til að stunda ljósmæðrastörf.
              Ljósmóðir þarf að geta séð um nauðsynlegt eftirlit, umönnun og ráðgjöf til kvenna á meðgöngu, í fæðingu og sængurlegu, stundað fæðingarhjálp á eigin ábyrgð og annast nýbura og ungbörn. Þessi umönnun felur í sér fyrirbyggjandi aðgerðir, greiningu á frávikum hjá móður og
              barni, aðstoð við læknismeðferð og bráðahjálp í fjarveru læknis. Ljósmóðir gegnir mikilvægu hlutverki í heilbrigðisfræðslu og ráðgjöf ekki aðeins fyrir konur, heldur einnig fyrir fjölskylduna og þjóðfélagið í heild. Hlutverk ljósmóður ætti að fela í sér fjölskylduáætlun, undirbúning
              fyrir foreldrahlutverkið, fræðslu fyrir fæðinguna, umönnun barna og einnig að hluta til fræðslu vegna kvensjúkdóma. Ljósmóðir getur stafað á sjúkrahúsum, á stofu, á heilsugæslustöðvum, í heimahúsi eða annarstaðar í heilbrigðisþjónustunni." 
              </Text>
                    </Text> : null
                }              
                </View>

                <TouchableOpacity onPress={this.ShowHideTextComponentView}>
                  <View style={Styles.infosubchaptercontainer}>
                    <Text style={Styles.h22}>Skilgreining á ljósmóðurstarfinu</Text>
                    {
                    this.state.icon ?
                        <Ionicons style={Styles.plusbutton} name="md-add" size={30}/> : null }
                  </View>
                </TouchableOpacity> 
                   
                <View style={Styles.informationcontainer}>
                {
                    this.state.status ? <Text style={Styles.p} layout="row">
                    <Text style={Styles.h3}>Skilgreining á ljósmóðurstarfinu </Text>
              <Text style={Styles.h3}>Samþykkt af Alþjóða samtökum ljósmæðra ICM, Alþjóðaheilbrigðisstofnuninni WHO, og Alþjóðasamtökum fæðingar- og kvensjúkdómalækna FIGO árið 1992.</Text>
              <Text style={Styles.h3}>„Ljósmóðir er einstaklingur, sem hefur lokið námi í ljósmóðurfræði sem er viðurkennt í því landi sem það var stundað. Hún hefur lokið náminu með viðunandi vitnisburði og hlotið leyfi viðkomandi yfirvalda til að stunda ljósmæðrastörf.
              Ljósmóðir þarf að geta séð um nauðsynlegt eftirlit, umönnun og ráðgjöf til kvenna á meðgöngu, í fæðingu og sængurlegu, stundað fæðingarhjálp á eigin ábyrgð og annast nýbura og ungbörn. Þessi umönnun felur í sér fyrirbyggjandi aðgerðir, greiningu á frávikum hjá móður og
              barni, aðstoð við læknismeðferð og bráðahjálp í fjarveru læknis. Ljósmóðir gegnir mikilvægu hlutverki í heilbrigðisfræðslu og ráðgjöf ekki aðeins fyrir konur, heldur einnig fyrir fjölskylduna og þjóðfélagið í heild. Hlutverk ljósmóður ætti að fela í sér fjölskylduáætlun, undirbúning
              fyrir foreldrahlutverkið, fræðslu fyrir fæðinguna, umönnun barna og einnig að hluta til fræðslu vegna kvensjúkdóma. Ljósmóðir getur stafað á sjúkrahúsum, á stofu, á heilsugæslustöðvum, í heimahúsi eða annarstaðar í heilbrigðisþjónustunni." 
              </Text>
                    </Text> : null
                }              
                </View>


            </ScrollView>
            </View>
            
            ) : null);
    }

}
