import React from 'react'
import {
    Text, View, TouchableOpacity,
    ActivityIndicator,
} from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import Styles from './../styles/Styles';


export default class InformationListItem extends React.Component {
    componentWillMount() {
        this.setState({
            status: false,
            icon: true
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
            if (dataItem.type === 'p') {
                infoItems.push(
                    <Text style={Styles.p} key={dataItem.key}> {dataItem.text}</Text>)
            }

            else if (dataItem.type === 'strong') {
                infoItems.push(
                    <Text style={Styles.pBold} key={dataItem.key}> {dataItem.text}</Text>)
            }

            else if (dataItem.type === 'a') {
                infoItems.push(
                    <Text style={Styles.p} key={dataItem.key}> {dataItem.text}</Text>)
            }

            else if (dataItem.type === 'a href') {
                infoItems.push(
                    <Text style={Styles.p} key={dataItem.key}> {dataItem.text}</Text>)
            }

            else if (dataItem.type === 'href') {
                infoItems.push(
                    <Text style={Styles.p} key={dataItem.key}> {dataItem.text}</Text>)
            }

            else if (dataItem.type == "table") {
                var rows = [];
                dataItem.rows.forEach(function(dataRow) {
                    var columns = [];
                    dataRow.columns.forEach(function(dataColumn) {
                        columns.push(
                            <Text style={Styles.p} key={dataColumn.key}>{dataColumn.text}</Text>
                        );
                    });
                    rows.push(
                        <View key={dataRow.key} style={{ flex: 1, alignSelf: 'stretch', flexDirection: 'row', width: '100%'}}>
                            {columns}
                        </View>
                    );
                });

                infoItems.push(
                    <View key={dataItem.key} style={{ flex: 1, alignSelf: 'stretch', flexDirection: 'column' }}>
                        {rows}
                    </View>)
            }
        });

        return (
            <View>

                <TouchableOpacity onPress={this.ShowHideTextComponentView}>
                    {
                        this.state.icon ?
                            <View style={Styles.infosubchaptercontainerplus}>
                                <View style={Styles.info1}>
                                    <Text numberOfLines={1} style={Styles.h2informationplus}>{this.props.title}</Text>
                                </View>
                                <View style={Styles.info2}>
                                    <Ionicons style={Styles.plusbutton} name="md-add" size={30} />
                                </View>
                            </View>
                            :
                            <View style={Styles.infosubchaptercontainerminus}>
                                <View style={Styles.info1}>
                                    <Text numberOfLines={1} style={Styles.h2informationminus}>{this.props.title}</Text>
                                </View>
                                <View style={Styles.info2}>
                                    <Ionicons style={Styles.minusbutton} name="md-remove" size={30} />
                                </View>
                            </View>
                    }
                </TouchableOpacity>

                <View style={Styles.informationcontainer}>
                    {
                        this.state.status ?
                            <View style={{ flex: 1 }}>{infoItems}</View> : null
                    }
                </View>
            </View>
        )
    }
}

