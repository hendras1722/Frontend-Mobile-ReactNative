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
                            <TouchableOpacity onPress={() => this.props.navigation.navigate('DetailTransaction')} >
                                <Card onPress={() => this.props.navigation.navigate('DetailTransaction')}>
                                    <CardItem onPress={() => this.props.navigation.navigate('DetailTransaction')}>
                                        <Body style={{ padding: 10, padding: 0 }} onPress={() => this.props.navigation.navigate('DetailTransaction')}>
                                            <View style={{ width: 300 }} onPress={() => this.props.navigation.navigate('DetailTransaction')}>
                                                <Text>ID Purchase : MK00212993 </Text>
                                                <Text>Tanggal Pembelian : 16 Maret 2020</Text>
                                                <Text style={{ fontSize: 10, top: 5, left: 230 }}>Status : <Text style={{ color: '#35B829' }}>Berhasil</Text></Text>
                                            </View>
                                        </Body>
                                    </CardItem>
                                </Card>
                            </TouchableOpacity>
                        </View>

                    </View>
                </View>
            </View >
        )
    }
}

export default TransactionScreen