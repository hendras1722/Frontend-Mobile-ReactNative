import React, { Component } from 'react'
import { InputGroup, View, Container, Header, Item, Input, Button, Card, CardItem, Body } from 'native-base';
import { Text, Image, ScrollView, StatusBar, TouchableOpacity } from 'react-native'
import { TextInput } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import AsyncStorage from '@react-native-community/async-storage';

class Account extends Component {
    static navigationOptions = {
        headerShown: false,
        tabBarVisible: true,
        tabBarOptions: {
            activeTintColor: 'green',
            inactiveTintColor: 'gray',
        }
    };

    state = {
        id: null,
        email: null,
        first_name: null,
        last_name: null,
        id_province: null,
        id_city: null,
        id_sub_city: null,
        address: null,
        no_telephone: null,
        image: null,
        role: null,
        token: null
    }


    componentDidMount() {
        this.get()
        // if (!this.state.token === null)
        //     this.props.navigation.navigate('Login')
        // else {
        //     //
        // }
        // this.clear()
    }

    async get() {
        try {
            let getId = await AsyncStorage.getItem("id")
            let getEmail = await AsyncStorage.getItem("email")
            let getFirst_name = await AsyncStorage.getItem("first_name")
            let getLast_name = await AsyncStorage.getItem("last_name")
            let getId_province = await AsyncStorage.getItem("id_province")
            let getId_city = await AsyncStorage.getItem("id_city")
            let getId_sub_city = await AsyncStorage.getItem("id_sub_city")
            let getAddress = await AsyncStorage.getItem("address")
            let getNo_telephone = await AsyncStorage.getItem("no_telephone")
            let getImage = await AsyncStorage.getItem("image")
            let getRole = await AsyncStorage.getItem("role")
            let getToken = await AsyncStorage.getItem("token")

            let dataId = JSON.parse(getId)
            let dataEmail = JSON.parse(getEmail)
            let dataFirst_name = JSON.parse(getFirst_name)
            let dataLast_name = JSON.parse(getLast_name)
            let dataId_province = JSON.parse(getId_province)
            let dataId_city = JSON.parse(getId_city)
            let dataId_sub_city = JSON.parse(getId_sub_city)
            let dataAddress = JSON.parse(getAddress)
            let dataNo_telephone = JSON.parse(getNo_telephone)
            let dataImage = JSON.parse(getImage)
            let dataRole = JSON.parse(getRole)
            let dataToken = JSON.parse(getToken)
            this.setState({
                id: dataId,
                email: dataEmail,
                first_name: dataFirst_name,
                last_name: dataLast_name,
                id_province: dataId_province,
                id_city: dataId_city,
                id_sub_city: dataId_sub_city,
                address: dataAddress,
                no_telephone: dataNo_telephone,
                image: dataImage,
                role: dataRole,
                token: dataToken
            })
        } catch (error) {
            console.log(error)
        }
    }

    async clear() {
        try {
            await AsyncStorage.removeItem("id")
            await AsyncStorage.removeItem("email")
            await AsyncStorage.removeItem("first_name")
            await AsyncStorage.removeItem("last_name")
            await AsyncStorage.removeItem("id_province")
            await AsyncStorage.removeItem("id_city")
            await AsyncStorage.removeItem("id_sub_city")
            await AsyncStorage.removeItem("address")
            await AsyncStorage.removeItem("no_telephone")
            await AsyncStorage.removeItem("image")
            await AsyncStorage.removeItem("role")
            await AsyncStorage.removeItem("token")
            // this.props.navigation.navigate('Login')
        } catch (error) {
            console.log(error)
        }
    }

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
                                    source={{ uri: this.state.image }}
                                />
                                <View style={{ backgroundColor: '#FFFFFF', padding: 5, top: 15, borderRadius: 20, borderColor: 'none' }}>
                                    <Text>{this.state.first_name}</Text>
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
                                    <Text style={{ left: 20, top: 20 }} onPress={() => this.props.navigation.navigate('Login') && this.clear()}>Keluar  </Text>
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