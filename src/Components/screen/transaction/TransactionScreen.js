import React, { Component } from 'react'
import { InputGroup, View, Container, Header, Item, Input, Button, Card, CardItem, Body } from 'native-base';
import { Text, Image, ScrollView, StatusBar, TouchableOpacity } from 'react-native'
import { TextInput } from 'react-native-gesture-handler';
// import App from './src/Components/screen/Home/backgou';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

class TransactionScreen extends Component {
    static navigationOptions = {
        headerShown: false,
        tabBarVisible: true,
        activeTintColor: 'green',
        tabStyle: {
            backgroundColor: 'blue'
        }
    };
    render() {
        console.disableYellowBox = true
        return (
            // <Text>hello</Text>
            <View style={{ flex: 1 }}>
                <View style={{ flex: 1 }}>
                    <StatusBar backgroundColor="#35B829" barStyle="light-content" />
                    <View >
                        <View style={{ backgroundColor: '#35B829', height: 60, flexDirection: 'row', alignItems: 'center', padding: 10 }}>
                            <Text style={{ fontSize: 22, color: 'white' }}>Transaksi</Text>
                        </View>
                        <View style={{ marginVertical: 10, padding: 10 }}>
                            <Card>
                                <CardItem>
                                    <Body style={{ padding: 10, padding: 0 }}>
                                        <View style={{ flex: 1, flexDirection: 'row' }}>
                                            <Text>Id Booking : </Text>
                                            <Text>MK00212993</Text>
                                        </View>
                                        <View style={{ flex: 1, flexDirection: 'column' }}>
                                            <Text>Tanggal : </Text>
                                            <Text>16 Maret 2020</Text>
                                        </View>

                                    </Body>
                                </CardItem>
                            </Card>
                        </View>

                    </View>
                </View>
            </View >
        )
    }
}

export default TransactionScreen