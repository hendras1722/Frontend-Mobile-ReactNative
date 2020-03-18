import React, { Component } from 'react'
import { InputGroup, View, Container, Header, Item, Input, Button, Card, CardItem, Body, Footer } from 'native-base';
import { Text, Image, ScrollView, StatusBar, TouchableOpacity, Form } from 'react-native'
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
                        <View style={{ backgroundColor: '#35B829', height: 60, flexDirection: 'row' }} >
                            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }} onPress={() => this.props.navigation.navigate('Account')}>
                                <Icon onPress={() => this.props.navigation.navigate('Home')} name="arrow-left-circle" style={{ fontSize: 40, left: 10, color: 'white', position: 'absolute', top: 10 }}></Icon>
                            </View>
                            <View style={{ flex: 5, justifyContent: 'center' }}>
                                {/* <Icon name="cart" style={{ fontSize: 30, left: 16, color: 'white', position: 'absolute', top: 15 }}></Icon> */}
                                <View style={{ flex: 1, justifyContent: 'center' }}>
                                    <Text style={{ fontSize: 22, color: 'white' }}>Akun Baru</Text>
                                </View>
                            </View>
                        </View>

                        <View style={{ height: 420, maxHeight: 420 }}>
                            <ScrollView  >
                                {/* mapping disin */}
                                <View style={{ flexDirection: 'row' }}>
                                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                                        <Image source={require('../../../../android/img/5d492f045d831.jpg')} style={{ width: 80, height: 80, borderRadius: 5 }} />
                                    </View>
                                    <View style={{ flex: 3 }}>
                                        <Text >Wortel</Text>
                                        <Text >Rp.12000/50Ton</Text>
                                        <View style={{ flexDirection: 'row' }}>
                                            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                                                <Button style={{ justifyContent: 'center', alignItems: 'center', borderRadius: 50, width: 30, height: 30, backgroundColor: '#35B829' }}>
                                                    <Text style={{ color: 'white', fontSize: 20 }}>-</Text>
                                                </Button>
                                            </View>
                                            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                                                <Item>
                                                    <Input style={{ justifyContent: 'center', alignItems: 'center' }} keyboardType={'numeric'} maxLength={20} />
                                                </Item>
                                            </View>
                                            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                                                <Button style={{ justifyContent: 'center', alignItems: 'center', borderRadius: 50, width: 30, height: 30, backgroundColor: '#35B829' }} >
                                                    <Text style={{ color: 'white', fontSize: 20 }}>+</Text>
                                                </Button>
                                            </View>
                                            <View style={{ flex: 3 }}>
                                                {/* <Text>hello</Text> */}
                                                <Icon name="delete" onPress={() => this.props.navigation.navigate('Order')} style={{ fontSize: 40, left: 16, color: '#35B829', position: 'absolute', top: 2 }}></Icon>
                                            </View>
                                        </View>
                                    </View>
                                </View>
                            </ScrollView>
                        </View>
                        <View>
                            <View style={{ backgroundColor: '#35B829', height: 72, justifyContent: 'center', alignItems: 'center' }}>
                                <Text>Total Harga : </Text>
                                <View style={{ flexDirection: 'row' }}>
                                    <Button style={{ padding: 10, left: -10, backgroundColor: 'white', borderRadius: 20 }}><Text>cancel</Text></Button>
                                    <Button style={{ padding: 10, left: 10, backgroundColor: 'white', borderRadius: 20 }}><Text>proses</Text></Button>
                                </View>
                            </View>
                        </View>
                    </View>
                </View >
            </View >
        )
    }
}

export default OrderanScreen