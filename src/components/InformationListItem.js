import React from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
import {Ionicons} from '@expo/vector-icons';
import Styles from './../styles/Styles';

export default class InformationListItem extends React.Component {
    componentWillMount() { 
        this.setState( { 
            status:false,
            icon:true
            });
    }

    ShowHideTextComponentView = () => {
        if (this.state.status == true) {
            this.setState({ status: false, icon: true });
        }
        else {
            this.setState({ status: true, icon: false });
        }
    }
    

    render() {

        const allData = this.props.data;
        const infoItems = [];
        allData.forEach(dataItem => {
        infoItems.push(<Text style={{flex:1}} numberOfLines={1}>{dataItem.text}</Text>);
    });       


        return (
            <View>

                <TouchableOpacity onPress={this.ShowHideTextComponentView}>
                    <View style={Styles.infosubchaptercontainer}>
                        <Text numberOfLines={1} style={Styles.h22}>{this.props.title}</Text>
                        {
                            this.state.icon ?
                                <Ionicons style={Styles.plusbutton} name="md-add" size={30} /> : <Ionicons style={Styles.plusbutton} name="md-remove" size={30} />}
                    </View>
                </TouchableOpacity>

                <View style={Styles.informationcontainer}>
                
                    {
                        this.state.status ? {infoItems} : null
                    }
                </View>
            </View>
        )
    }
}

