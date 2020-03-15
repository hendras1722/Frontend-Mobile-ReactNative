import React, { Component } from 'react'
import { InputGroup, View, Container, Header, Item, Input, Button, Card, CardItem, Body } from 'native-base';
import { Text, Image, ScrollView, StatusBar, TouchableOpacity } from 'react-native'
import { TextInput } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

class OrderanScreen extends Component {
    static navigationOptions = {
        headerShown: false
    };
    render() {
        console.disableYellowBox = true
        return (
            <View style={{ flex: 1 }}>
                <View style={{ flex: 1 }}>
                    <StatusBar backgroundColor="#35B829" barStyle="light-content" />
                    <View >
                        {/* <StatusBar hidden={route.statusBarHidden} /> */}
                        <View style={{ backgroundColor: '#35B829', height: 60, flexDirection: 'row' }}>
                            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                                <Text style={{ fontSize: 22, color: 'white' }}>Order</Text>
                            </View>
                        </View>

                        <ScrollView  >
                            <View style={{ flex: 1, marginTop: 0, marginHorizontal: 20 }}>
                                {/* bagian sini yang ditambah */}
                                <Text>Hello</Text>
                                <Image
                                    source={require('../../../../android/img/082399700_1444710907-tomat-rsmadkotakediri.jpg')}
                                />
                            </View>
                        </ScrollView>
                    </View>
                </View >

                {/* footer */}
                <View style={{ height: 54, flexDirection: 'row', backgroundColor: 'white' }}>
                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                        <Icon name="home" style={{ fontSize: 32, color: '#848484' }} onPress={() => this.props.navigation.navigate('Home')}></Icon>
                        <Text>Home</Text></View>
                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                        <Icon name="cart" style={{ fontSize: 32, color: '#35B829' }}></Icon>
                        <Text style={{ fontSize: 12 }}>Order</Text>
                    </View>
                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                        <Icon name="script-text" style={{ fontSize: 32, color: '#848484' }}></Icon>
                        <Text>Transaction</Text>
                    </View>
                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                        <Icon name="account" style={{ fontSize: 32, color: '#848484' }}></Icon>

                        <Text>Account</Text></View>
                </View>
                <View></View>

                {/* <Text>Hello</Text> */}
            </View >
        )
    }
}

export default OrderanScreen