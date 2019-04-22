import React from 'react'
import {
    Text, View, TouchableOpacity,
    ActivityIndicator, StyleSheet
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

    getStyle(type) {
        switch (type) {
            case 'p': return Styles.p;
            case 'a': return Styles.p;
            case 'stong': return StyleSheet.flatten([Styles.pBold, Style.columnItem]);
            case 'a href': return Styles.pBoldCenter;
            case 'p a': return Styles.pBold;
            case 'span': return Styles.pBoldCenter;
            case 'href': return Styles.p;
            default: return Styles.p;
        }
    }

    getTextWithStyle(data) {
        switch (data.type) {
            case 'p': return <Text style={Styles.p} key={data.key}>{data.text}</Text>;
            case 'a': return <Text style={Styles.p} key={data.key}>{data.text}</Text>;
            case 'stong': return <Text style={Styles.pBold} key={data.key}>{data.text}</Text>;
            case 'a href': return <Text style={Styles.pBoldCenter} key={data.key}>{data.text}</Text>;
            case 'p a': return <Text style={Styles.pBold} key={data.key}>{data.text}</Text>;
            case 'span': return <Text style={Styles.pBoldCenter} key={data.key}>{data.text}</Text>;
            case 'href': return <Text style={Styles.p} key={data.key}>{data.text}</Text>;
            default: return <Text style={Styles.p} key={data.key}>{data.text}</Text>;
        }
    }

    splitColumns(columns) {
        var result = [];
        while (columns[0]) {
            result.push(columns.splice(0, 3));
        }
        return result;
    }

    render() {
        const allData = this.props.data;
        const self = this;
        const infoItems = [];
        allData.forEach(dataItem => {
            if (dataItem.type == "table") {
                var rows = [];
                dataItem.rows.forEach(function (dataRow) {
                    var columns = [];
                    dataRow.columns.forEach(function (dataColumn) {
                        if (dataColumn.type === 'strong') {
                            console.log("Is header ", dataColumn.text);
                            columns.push(<Text style={[Styles.pBold, Styles.columnItem]} key={dataColumn.key}>{dataColumn.text}</Text>);
                        }
                        else {
                            columns.push(<Text style={[Styles.p, Styles.columnItem]} key={dataColumn.key}>{dataColumn.text}</Text>);
                        }
                    });

                    rows.push(
                        <View
                            style={{
                                borderBottomColor: 'black',
                                borderBottomWidth: StyleSheet.hairlineWidth
                            }}
                        />);
                    self.splitColumns(columns).forEach((splitColumns, index) => {
                        rows.push(
                            <View key={dataRow.key + "." + index} style={{ flex: 1, alignSelf: 'stretch', flexDirection: 'row' }}>
                                {splitColumns}
                            </View>
                        );
                    })

                });

                infoItems.push(
                    <View key={dataItem.key} style={{ flex: 1 }}>
                        {rows}
                    </View>)
            }
            else {
                infoItems.push(this.getTextWithStyle(dataItem));
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

