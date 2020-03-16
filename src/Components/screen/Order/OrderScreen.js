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
                            <View style={{ flex: 1, justifyContent: 'center', padding: 10 }}>
                                <Text style={{ fontSize: 22, color: 'white' }}>Order</Text>
                            </View>
                        </View>

                        <ScrollView  >
                            <View style={{ flex: 1, marginTop: -30, marginHorizontal: 20, marginVertical: 5, top: 20, height: 120 }}>
                                <View style={{ top: 20, flexDirection: 'row' }}>
                                    <Image
                                        style={{ width: 116, height: 80, borderRadius: 10, marginHorizontal: 10 }}
                                        source={require('../../../../android/img/082399700_1444710907-tomat-rsmadkotakediri.jpg')}
                                    />

                                    <View>
                                        <Text>Tomat</Text>
                                        <Text>Rp. 12000</Text>
                                        <View style={{ flexDirection: 'row' }}>
                                            <View style={{ padding: 10 }}><Button style={{ width: 20, justifyContent: 'center', alignItems: 'center', height: 30, backgroundColor: '#35B829' }}><Text>-</Text></Button></View>
                                            <View style={{ padding: 10, justifyContent: 'center', alignItems: 'center' }}><Text style={{ fontSize: 22 }}>3</Text></View>
                                            <View style={{ padding: 10 }}><Button style={{ width: 20, justifyContent: 'center', alignItems: 'center', height: 30, backgroundColor: '#35B829' }}><Text>+</Text></Button></View>
                                            <View><Button style={{ padding: 5, backgroundColor: '#35B829', left: 15, width: 60, height: 70, top: -30, position: 'absolute', justifyContent: 'center', alignItems: 'center', borderRadius: 10 }}><Text style={{ color: 'white' }}>hapus</Text></Button></View>
                                        </View>
                                    </View>
                                </View>
                            </View>

                        </ScrollView>
                    </View>
                </View >


                <View></View>

                {/* <Text>Hello</Text> */}
            </View >
        )
    }
}

export default OrderanScreen