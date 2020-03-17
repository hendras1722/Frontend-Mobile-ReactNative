import React, { Component } from 'react'
import { InputGroup, View, Container, Header, Item, Input, Button, Card, CardItem, Body } from 'native-base';
import { Text, Image, ScrollView, StatusBar, TouchableOpacity } from 'react-native'
import { TextInput } from 'react-native-gesture-handler';
// import App from './src/Components/screen/Home/backgou';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

class Account extends Component {
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
            // <Text>hello</Text>
            <View style={{ flex: 1 }}>
                <View style={{ flex: 1 }}>
                    <StatusBar backgroundColor="#35B829" barStyle="light-content" />
                    <View >
                        {/* <StatusBar hidden={route.statusBarHidden} /> */}
                        <View style={{ backgroundColor: '#35B829', height: 60, flexDirection: 'row' }}>
                            <View style={{ flex: 1, justifyContent: 'center', padding: 10 }}>
                                <Text style={{ fontSize: 22, color: 'white' }}>Account</Text>
                            </View>
                        </View>
                        <View style={{ backgroundColor: '#2b9023' }}>
                            <View style={{ padding: 20, justifyContent: 'center', alignItems: 'center', height: 150 }}>
                                <Image
                                    style={{ width: 100, height: 100, borderRadius: 10, marginHorizontal: 10, borderRadius: 80 }}
                                    source={require('../../../../android/img/img_avatar.png')}
                                />
                                <View style={{ backgroundColor: '#FFFFFF', padding: 5, top: 15, borderRadius: 20, borderColor: 'none' }}>
                                    <Text>Alan Walker gak suka jalan</Text>
                                </View>
                            </View>
                        </View>

                        {/* mPping disini */}
                        <ScrollView >
                            <View style={{ padding: 20 }}>
                                <Text>Settings</Text>
                            </View>
                            <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                                <View style={{ flex: 6, height: 100 }}>
                                    <Text style={{ left: 20 }} onPress={() => this.props.navigation.navigate('InfoAkun')} >Info Akun  </Text>
                                    <Text style={{ left: 20, top: 10 }} onPress={() => this.props.navigation.navigate('UbahPassword')}>Ubah Password  </Text>
                                    <Text style={{ left: 20, top: 20 }} onPress={() => this.props.navigation.navigate('Login')}>Keluar  </Text>
                                </View>

                                <View style={{ flex: 1, height: 100 }}>
                                    <Icon name="arrow-right-drop-circle" onPress={() => this.props.navigation.navigate('InfoAkun')} style={{ fontSize: 20, left: 20, color: '#35B829', position: 'absolute', right: -10 }}></Icon>
                                    <Icon name="arrow-right-drop-circle" onPress={() => this.props.navigation.navigate('')} style={{ fontSize: 20, left: 20, color: '#35B829', position: 'absolute', right: -10, top: 28 }}></Icon>
                                    <Icon name="arrow-right-drop-circle" onPress={() => this.props.navigation.navigate('')} style={{ fontSize: 20, left: 20, color: '#35B829', position: 'absolute', right: -10, top: 56 }}></Icon>
                                </View>
                            </View>

                        </ScrollView>
                    </View>
                </View>
            </View>
        )
    }
}

export default Account