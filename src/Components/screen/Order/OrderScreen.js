import React, { Component, Fragment } from 'react'
import { InputGroup, View, Container, Header, Item, Input, Button, Card, CardItem, Body, Footer } from 'native-base';
import { Text, Image, ScrollView, StatusBar, TouchableOpacity, Form } from 'react-native'
import { TextInput } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { connect } from 'react-redux';
import { addQty, reduceQty, deleteCart, cancleCart, clearCart } from '../../redux/actions/cart'
import { purchaseCheckout } from '../../redux/actions/purchase'

class OrderanScreen extends Component {
    static navigationOptions = {
        headerShown: false
    };


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

    onSubmit = async (event) => {
        // event.preventDefault()
        const data = {
            id_account: this.props.auth.id,
            name_reciver: this.props.auth.first_name,
            email: this.props.auth.email,
            no_telephone: this.props.auth.no_telephone,
            id_province: this.props.auth.id_province,
            id_city: this.props.auth.id_city,
            id_sub_city: this.props.auth.id_sub_city,
            address: this.props.auth.address,
            codepass: 0,
            fax: 0,
            tax: 0,
            arrived: 0,
            total: this.props.total,
            product: this.props.carts
        }
        await this.props.dispatch(purchaseCheckout(data))
        await this.props.dispatch(clearCart(event))
    }

    render() {
        console.disableYellowBox = true
        const { carts, total } = this.props
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
                                                        <Button style={{ justifyContent: 'center', alignItems: 'center', borderRadius: 50, width: 30, height: 30, backgroundColor: '#35B829' }} onPress={() => (this.onReduceQty(item.id))}>
                                                            <Text style={{ color: 'white', fontSize: 20 }}>-</Text>
                                                        </Button>
                                                    </View>
                                                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                                                        <Item>
                                                            <Input style={{ justifyContent: 'center', alignItems: 'center' }} keyboardType={'numeric'} maxLength={20}>{item.qty}</Input>
                                                        </Item>
                                                    </View>
                                                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                                                        <Button style={{ justifyContent: 'center', alignItems: 'center', borderRadius: 50, width: 30, height: 30, backgroundColor: '#35B829' }} onPress={() => (this.onAddQty(item.id))}>
                                                            <Text style={{ color: 'white', fontSize: 20 }}>+</Text>
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
                                <View style={{ backgroundColor: '#35B829', height: 75, justifyContent: 'center', alignItems: 'center' }}>
                                    <Text style={{ marginVertical: 5 }}>Total Harga : {total}</Text>
                                    <View style={{ flexDirection: 'row' }}>
                                        <View style={{ flex: 1 }}>
                                            <Button style={{ backgroundColor: 'white', justifyContent: 'center', alignItems: 'center', backgroundColor: '#45e936' }} onPress={() => (this.onCancleCart(carts))}><Text style={{}}>Cancel</Text></Button>
                                        </View>
                                        <View style={{ flex: 1 }}>
                                            <Button style={{ backgroundColor: 'green', justifyContent: 'center', alignItems: 'center' }} onPress={() => (this.onSubmit(carts))}><Text style={{ color: 'white' }}>Checkout</Text></Button>
                                        </View>
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
        auth: state.auth.profile,
        carts: state.carts.carts,
        total: state.carts.total
    }
}

export default connect(mapStateToProps)(OrderanScreen);