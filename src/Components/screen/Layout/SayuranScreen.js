import React, { Component } from 'react'
import { InputGroup, View, Container, Header, Item, Input, Button, Card, CardItem, Body } from 'native-base';
import { Text, Image, ScrollView, StatusBar, TouchableOpacity } from 'react-native'
import { TextInput } from 'react-native-gesture-handler';
// import App from './src/Components/screen/Home/backgou';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { connect } from 'react-redux';

import { readProduct, filterProduct } from '../../redux/actions/product'

class SayuranScreen extends Component {
    static navigationOptions = {
        headerShown: false,
        tabBarVisible: false,
        gesture: false,
        tabStyle: {
            backgroundColor: 'red'
        }
    };

    state = {
        product: '',
        category: ''
    };

    componentDidMount() {
        this.readProductAll()
    }

    onProduct = async product => {
        this.setState({ product });
        await this.props.dispatch(filterProduct(this.state.category, product))
    };

    onCategory = async category => {
        this.setState({ category });
        await this.props.dispatch(filterProduct(category, this.state.product))
    };

    async readProductAll() {
        await this.props.dispatch(readProduct())
    }
    render() {
        console.disableYellowBox = true
        const { products } = this.props
        return (
            // <Text>hello</Text>
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
                                    <Text style={{ fontSize: 22, color: 'white' }}>Sayuran</Text>
                                </View>
                            </View>
                        </View>
                        <ScrollView >
                            <View style={{ flex: 1, flexDirection: 'row', flexWrap: 'wrap', alignItems: 'flex-start' }} >
                                {products.map((item, index) =>
                                    <View style={{ height: 400, maxHeight: 300 }} key={index}>
                                        <Image
                                            style={{ width: 116, height: 72, top: 10, borderRadius: 10, marginHorizontal: 10 }}
                                            source={{ uri: item.image }}
                                        />
                                        <Text style={{ top: 20, left: 18 }}>{item.name_product}</Text>
                                        <Text style={{ top: 20, left: 18, fontSize: 9 }}>{item.cardDesc}</Text>
                                        <Text style={{ top: 25, left: 18, color: '#35B829' }}>Rp.{item.price}</Text>
                                        <Text style={{ top: 8, left: 88, fontSize: 11 }}>{item.ingredients}</Text>
                                        <Button
                                            style={{ width: 116, top: 20, alignItems: 'center', justifyContent: 'center', backgroundColor: '#35B829', borderRadius: 3, height: 35, left: 10 }}

                                        ><Text style={{ color: 'white' }}>order</Text></Button>
                                    </View>
                                )}
                            </View>
                        </ScrollView>
                    </View>
                </View>
            </View>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        products: state.products.products
    }
}

export default connect(mapStateToProps)(SayuranScreen);