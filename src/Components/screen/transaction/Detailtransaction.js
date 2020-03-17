import React, { Component } from 'react'
import { InputGroup, View, Container, Header, Item, Input, Button, Card, CardItem, Body } from 'native-base';
import { Text, Image, ScrollView, StatusBar, TouchableOpacity } from 'react-native'
import { TextInput } from 'react-native-gesture-handler';
// import App from './src/Components/screen/Home/backgou';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

class SearchScreen extends Component {
    static navigationOptions = {
        headerShown: false,
        tabBarVisible: true,
        activeTintColor: 'blue',
        tabStyle: {
            backgroundColor: 'red'
        }
    };
    render() {
        console.disableYellowBox = true
        return (
            <View style={{ flex: 1 }}>
                <View style={{ flex: 1 }}>
                    <StatusBar backgroundColor="#35B829" barStyle="light-content" />
                    <View >
                        <View style={{ backgroundColor: '#35B829', height: 60, flexDirection: 'row' }} >
                            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }} onPress={() => this.props.navigation.navigate('Account')}>
                                <Icon onPress={() => this.props.navigation.navigate('Transaction')} name="arrow-left-circle" style={{ fontSize: 40, left: 10, color: 'white', position: 'absolute', top: 10 }}></Icon>

                            </View>
                            <View style={{ flex: 5, justifyContent: 'center' }}>
                                {/* <Icon name="cart" style={{ fontSize: 30, left: 16, color: 'white', position: 'absolute', top: 15 }}></Icon> */}
                                <View style={{ flex: 1, justifyContent: 'center' }}>
                                    <Text style={{ fontSize: 22, color: 'white' }}>Detail</Text>
                                </View>
                            </View>
                        </View>

                        <View style={{}}>
                            <View style={{ marginVertical: 10, backgroundColor: '#bbb3b361', padding: 10 }}>
                                <Text>Penerima</Text>
                            </View>
                            <View style={{ flex: 1, padding: 10 }}>
                                <Text>Nama Penerima</Text>
                                <Text>Alamat</Text>
                                <Text>Nomer Telephone</Text>
                            </View>
                            <View style={{ marginVertical: 10, backgroundColor: '#bbb3b361', padding: 10, top: 80 }}>
                                <Text>List Barang</Text>
                            </View>

                            {/* Mapping disini */}
                            <View style={{ top: 80, marginVertical: 5 }}>
                                <View style={{ padding: 0, flexDirection: 'row' }}>
                                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                                        {/* <Text>List Barang</Text> */}
                                        <Image source={require('../../../../android/img/5d492f045d831.jpg')} style={{ width: 50, height: 50, borderRadius: 5 }} />

                                    </View>
                                    <View style={{ flex: 3 }}>
                                        <Text>Wortel</Text>
                                        <Text style={{ top: 5 }}>Rp. 12000/50KG</Text>
                                    </View>
                                </View>
                            </View>

                        </View>

                    </View>
                </View>
            </View >
        )
    }
}

export default SearchScreen