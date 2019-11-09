import React from 'react'
import {
    Text, View, TouchableOpacity,StyleSheet
} from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import Styles from './../styles/Styles';
import * as WebBrowser from 'expo-web-browser';

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

    getTextWithStyle(data) {
        function goToLink(href) {
            try {
                if (href.startsWith("/")) {
                    WebBrowser.openBrowserAsync("http://www.ljosmaedrafelag.is"+href);
                }
                else if(!href.startsWith("#")){
                    WebBrowser.openBrowserAsync(href);
                }
            }
            catch(e) {
                console.error(e);
            }
        }

        switch (data.type) {
            case 'p': return <Text style={Styles.p} key={data.key}>{data.text}</Text>;
            case 'a': return <Text onPress={ () => {goToLink(data.href)} } style={Styles.pA} key={data.key}>{data.text}</Text>;
            case 'strong': return <Text style={Styles.pBold} key={data.key}>{data.text}</Text>;
            case 'th': return <Text style={Styles.pBold} key={data.key}>{data.text}</Text>;
            case 'a href': return <Text style={Styles.pBoldCenter} key={data.key}>{data.text}</Text>;
            case 'p a': return <Text style={Styles.pBold} key={data.key}>{data.text}</Text>;
            case 'span': return <Text style={Styles.pBoldCenter} key={data.key}>{data.text}</Text>;
            case 'href': return <Text style={Styles.p} key={data.key}>{data.text}</Text>;
            case 'h1': return <Text style={Styles.h1Information} key={data.key}>{data.text}</Text>;
            default: return <Text style={Styles.p} key={data.key}>{data.text}</Text>;
        }
    }
    
    getTextViews(paragraphs, array) {
        var views = [];
        var index = 0;
        var f = this.getTextWithStyle;
        paragraphs.text.forEach(function(p) {
            var texts = [];
            p.forEach(function(textItem) {
                texts.push(f(textItem));
            });
            array.push(
                <Text selectable={true} selectionColor="#4E75BC" key={ paragraphs.key+"."+index++ }>{texts}</Text>
            );
        });
        return views;
    }

    formatColumns(columns) {
        var result = [];
        while (columns[0]) {
            result.push(columns.splice(0,2));
        }
        return result;
    }

    goToLink(href) {
        try {
            if (href.startsWith("/")) {
                WebBrowser.openBrowserAsync("http://www.ljosmaedrafelag.is"+href);
            }
            else if(!href.startsWith("#")){
                WebBrowser.openBrowserAsync(href);
            }
        }
        catch(e) {
            console.error(e);
        }
    }
    
    render() {
        const allData = this.props.data;
        const self = this;
        var infoItems = [];
        allData.forEach(dataItem => {
            if (dataItem.type == "table") {
                var rows = [];
                dataItem.rows.forEach(function (dataRow) {
                    var columns = [];
                    dataRow.columns.forEach(function (dataColumn) {
                            if (dataColumn.type === 'strong') {
                                columns.push(<Text selectable={true} selectionColor="#2252AB" style={[Styles.pBoldCenterU, Styles.columnItem]} key={dataColumn.key}>{dataColumn.text}</Text>);
                            }
                            else if(dataColumn.type === 'th') {
                                columns.push(<Text selectable={true} selectionColor="#2252AB" style={[Styles.pBold, Styles.columnItem]} key={dataColumn.key}>{dataColumn.text}</Text>);                                
                            }
                            else if(dataColumn.type === 'a') {
                                columns.push(<Text selectable={true} onPress={ () => {self.goToLink(dataColumn.href)} } style={[Styles.pA, Styles.columnItem]} key={dataColumn.key}>{dataColumn.text}</Text>);
                            }
                            else {
                                columns.push(<Text selectable={true} selectionColor="#2252AB" style={[Styles.p, Styles.columnItem]} key={dataColumn.key}>{dataColumn.text}</Text>);
                            }
                    });

                    rows.push(<View key = {dataRow.key} style={{borderBottomColor: 'black', borderBottomWidth: StyleSheet.hairlineWidth}}/>);
                    self.formatColumns(columns).forEach((splitColumns, index) => {
                        rows.push(
                            <View key={dataRow.key + "." + index} style={{ flex: 1, alignSelf: 'stretch', flexDirection: 'row' }}>
                                {splitColumns}
                            </View>
                        );
                    });
                });

                infoItems.push(
                    <View key={dataItem.key} style={{ flex: 1 }}>
                        {rows}
                    </View>);
            }
            else if(dataItem.type == 'p') {
                this.getTextViews(dataItem, infoItems);
            }
            else {
                console.error("Not recognized type", dataItem.type);
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
                                    <Text numberOfLines={2} style={Styles.h2informationminus}>{this.props.title}</Text>
                                </View>
                                <View style={Styles.info2}>
                                    <Ionicons style={Styles.minusbutton} name="md-remove" size={30} />
                                </View>
                            </View>
                    }
                </TouchableOpacity>

                <View style={Styles.informationcontainer}>
                    {
                        this.state.status ? infoItems : null
                    }
                </View>
            </View>
        )
    }
}

