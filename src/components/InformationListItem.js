import React from 'react'
import {
    Text, View, TouchableOpacity,
    ActivityIndicator, StyleSheet, TouchableWithoutFeedback
} from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import Styles from './../styles/Styles';
import { WebBrowser } from 'expo';

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
                console.log("Opening " + href)
                if (href.startsWith("/")) {
                    WebBrowser.openBrowserAsync("http://www.ljosmaedrafelag.is"+href);
                }
                else {
                    WebBrowser.openBrowserAsync(href);
                }
            }
           catch(e) {
               console.error(e);
           }
        }

        console.log("Getting style for ", data);
        switch (data.type) {
            case 'p': return <Text style={Styles.p} key={data.key}>{data.text}</Text>;
            case 'a': return <Text onPress={ () => {goToLink(data.href)} } style={Styles.pA} key={data.key}>{data.text}</Text>;
            case 'strong': return <Text style={Styles.pBold} key={data.key}>{data.text}</Text>;
            case 'a href': return <Text style={Styles.pBoldCenter} key={data.key}>{data.text}</Text>;
            case 'p a': return <Text style={Styles.pBold} key={data.key}>{data.text}</Text>;
            case 'span': return <Text style={Styles.pBoldCenter} key={data.key}>{data.text}</Text>;
            case 'href': return <Text style={Styles.p} key={data.key}>{data.text}</Text>;
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
                <Text key={ paragraphs.key+"."+index++ } >{texts}</Text>
            );
        });
        return views;
    }

    formatColumns(columns) {
        var result = [];
        while (columns[0]) {
            result.push(columns.splice(0,3));
        }
        return result;
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
                        if(dataColumn.text.trim().length > 1) {
                            if (dataColumn.type === 'strong') {
                                columns.push(<Text style={[Styles.pBoldCenter, Styles.columnItem]} key={dataColumn.key}>{dataColumn.text}</Text>);
                            }
                            else {
                                columns.push(<Text style={[Styles.p, Styles.columnItem]} key={dataColumn.key}>{dataColumn.text}</Text>);
                            }
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
                        this.state.status ? infoItems : null
                    }
                </View>
            </View>
        )
    }
}

