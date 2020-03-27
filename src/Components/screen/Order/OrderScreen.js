import React, { Component, Fragment } from 'react'
import { InputGroup, View, Container, Header, Item, Input, Button, Card, CardItem, Body, Footer } from 'native-base';
import { Text, Image, ScrollView, StatusBar, TouchableOpacity, Form } from 'react-native'
import { TextInput } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { connect } from 'react-redux';
import { addQty, reduceQty, deleteCart, cancleCart } from '../../redux/actions/cart'
import { purchaseCheckout } from '../../redux/actions/purchase'

class OrderanScreen extends Component {
    static navigationOptions = {
        headerShown: false
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

    onAddQty = (id) => {
        this.props.dispatch(addQty(id))
    }

    onReduceQty = (id) => {
        this.props.dispatch(reduceQty(id))
    }

    onDeleteCart = (id) => {
        this.props.dispatch(deleteCart(id))
    }

    onCancleCart = (data) => {
        this.props.dispatch(cancleCart(data))
    }

    generateUUID() { // Public Domain/MIT
        var d = new Date().getTime();//Timestamp
        var d2 = (performance && performance.now && (performance.now() * 1000)) || 0;//Time in microseconds since page-load or 0 if unsupported
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            var r = Math.random() * 16;//random number between 0 and 16
            if (d > 0) {//Use timestamp until depleted
                r = (d + r) % 16 | 0;
                d = Math.floor(d / 16);
            } else {//Use microseconds since page-load if supported
                r = (d2 + r) % 16 | 0;
                d2 = Math.floor(d2 / 16);
            }
            return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16);
        });
    }

    onSubmit = (event) => {
        event.preventDefault()
        const data = {
            id_purchase: "MAK-YUR-912314",
            id_account: this.state.id,
            name_reciver: "PENERIMA",
            email: this.state.email,
            no_telephone: this.state.no_telephone,
            id_province: this.state.id_province,
            id_city: this.state.id_city,
            id_sub_city: this.state.id_sub_city,
            address: this.state.address,
            fax: this.state.fax,
            tax: this.state.tax,
            shipping: 0,
            shipped: 0,
            total: this.props.total,
            product: this.props.carts
        }
        this.props.dispatch(purchaseCheckout(data))
    }

    render() {
        console.disableYellowBox = true
        const { carts } = this.props
        return (
            <Fragment>
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
                                        <Text style={{ fontSize: 22, color: 'white' }}>PURCHASE</Text>
                                    </View>
                                </View>
                            </View>

                            <View style={{ height: 420, maxHeight: 420 }}>
                                <ScrollView  >
                                    {carts.map((item, index) =>
                                        <View style={{ flexDirection: 'row' }} key={index}>
                                            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                                                <Image source={{ uri: item.image }} style={{ width: 80, height: 80, borderRadius: 5 }} />
                                            </View>
                                            <View style={{ flex: 3 }}>
                                                <Text >{item.name_product}</Text>
                                                <Text >{item.price}/{item.ingredients}</Text>
                                                <View style={{ flexDirection: 'row' }}>
                                                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                                                        <Button style={{ justifyContent: 'center', alignItems: 'center', borderRadius: 50, width: 30, height: 30, backgroundColor: '#35B829' }}>
                                                            <Text style={{ color: 'white', fontSize: 20 }} onPress={() => (this.onReduceQty(item.id))}>-</Text>
                                                        </Button>
                                                    </View>
                                                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                                                        <Item>
                                                            <Input style={{ justifyContent: 'center', alignItems: 'center' }} keyboardType={'numeric'} maxLength={20}>{item.quantity}</Input>
                                                        </Item>
                                                    </View>
                                                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                                                        <Button style={{ justifyContent: 'center', alignItems: 'center', borderRadius: 50, width: 30, height: 30, backgroundColor: '#35B829' }} >
                                                            <Text style={{ color: 'white', fontSize: 20 }} onPress={() => (this.onAddQty(item.id))}>+</Text>
                                                        </Button>
                                                    </View>
                                                    <View style={{ flex: 3 }}>
                                                        {/* <Text>hello</Text> */}
                                                        <Icon name="delete" style={{ fontSize: 40, left: 16, color: '#35B829', position: 'absolute', top: 2 }} onPress={() => (this.onDeleteCart(item.id))}></Icon>
                                                    </View>
                                                </View>
                                            </View>
                                        </View>
                                    )}
                                </ScrollView>
                            </View>
                            <View>
                                <View style={{ backgroundColor: '#35B829', height: 72, justifyContent: 'center', alignItems: 'center' }}>
                                    <Text>Total Harga : </Text>
                                    <View style={{ flexDirection: 'row' }}>
                                        <Button style={{ padding: 10, left: -10, backgroundColor: 'white', borderRadius: 20 }} onPress={() => (this.onCancleCart(carts))}><Text>Cancel</Text></Button>
                                        <Button style={{ padding: 10, left: 10, backgroundColor: 'white', borderRadius: 20 }} onPress={this.onSubmit}><Text>Checkout</Text></Button>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View >
                </View >
            </Fragment >
        )
    }
}

const mapStateToProps = (state) => {
    return {
        carts: state.carts.carts,
        total: state.carts.total
    }
}

export default connect(mapStateToProps)(OrderanScreen);