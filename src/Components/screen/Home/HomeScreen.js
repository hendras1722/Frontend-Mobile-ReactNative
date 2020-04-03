import React, { Component, Fragment } from 'react'
import { InputGroup, View, Container, Header, Item, Input, Button, Card, CardItem, Body, Badge } from 'native-base';
import { Text, Image, ScrollView, StatusBar, FlatList, TouchableOpacity } from 'react-native'
import { TextInput } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { connect } from 'react-redux';
import { readProduct, readProductImport, readProductLocal } from '../../redux/actions/product'
import { addToCart } from '../../redux/actions/cart'

class HomeScreen extends Component {
    static navigationOptions = {
        headerShown: false,
        tabBarOptions: {
            activeTintColor: 'green',
            inactiveTintColor: 'gray',
        }
    };

    state = {
        count: 0
    }

    componentDidMount() {
        this.readProductAll()
    }

    async readProductAll() {
        await this.props.dispatch(readProduct())
        await this.props.dispatch(readProductImport())
        await this.props.dispatch(readProductLocal())
    }

    addToCart = async data => {
        await this.props.dispatch(addToCart(data))
    }

    render() {
        const { products, productsImport, productsLocal, carts } = this.props
        console.disableYellowBox = true
        // console.log('statusBarHeight: ', StatusBar.currentHeight); untuk menghitung ukuran status bar
        return (
            <Fragment >
                <View style={{ flex: 1 }}>
                    <View style={{ flex: 1 }}>
                        <StatusBar backgroundColor="#35B829" barStyle="light-content" />
                        <View >
                            {/* <StatusBar hidden={route.statusBarHidden} /> */}
                            <View style={{ backgroundColor: '#35B829', height: 60, flexDirection: 'row' }}>
                                <View style={{ flex: 4, justifyContent: 'center', alignItems: 'center' }}>
                                    <TouchableOpacity
                                        style={{ backgroundColor: 'transparent', justifyContent: 'center', alignItems: 'center' }} onPress={() => this.props.navigation.navigate('Search')}
                                    >
                                        <Button onPress={() => this.props.navigation.navigate('Search')} style={{ borderWidth: 1, borderColor: 'rgba(0, 0, 0, 0.1)', width: 260, height: 36, borderRadius: 5, paddingLeft: 35, paddingRight: 18, backgroundColor: "white", height: 40 }}><Text style={{ color: '#84878A' }}>Butuh Apa Ni??</Text>
                                            <Image source={require('../../../../android/img/drawable-mdpi/ic_magnify.png')} style={{ position: 'absolute', width: 25, height: 25, left: 5, top: 6 }} onPress={() => this.props.navigation.navigate('Search')} />
                                        </Button>
                                    </TouchableOpacity>
                                </View>
                                <View style={{ flex: 1, justifyContent: 'center' }}>
                                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Order')}
                                        style={{ backgroundColor: 'transparent', padding: 8, justifyContent: 'center', alignItems: 'center' }}
                                    >
                                        <Icon name="cart" onPress={() => this.props.navigation.navigate('Order')} style={{ fontSize: 30, left: 16, color: 'white', position: 'absolute', top: -8 }}></Icon>
                                        {/* <Badge style={{ padding: 5, position: 'absolute', left: 30, justifyContent: 'center', alignItems: 'center', borderRadius: 50 }}> */}
                                        <Icon name="alert-octagram" style={{ fontSize: 18, left: 30, color: this.state.count === this.props.carts.length ? "black" : "red", position: 'absolute', top: -10 }} value={this.state.count}></Icon>
                                        {/* </Badge> */}
                                    </TouchableOpacity>
                                </View>

                            </View>

                            <ScrollView  >
                                <View>
                                    <View style={{ flex: 1, top: 20 }}>
                                        <ScrollView horizontal={true}>
                                            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                                                <Image source={require('../../../../android/img/promo-new_1580523127422_2000x800.jpg')} width={100} style={{ resizeMode: 'cover', left: 20 }} />
                                            </View>
                                        </ScrollView>
                                    </View>

                                </View>

                                <View style={{ marginVertical: 120, top: -100, bottom: 80 }}>
                                    <Text style={{ top: 10, left: 20 }}>Menu Favorite</Text>
                                    <View style={{ height: 20, marginVertical: 20, width: 310, height: 142, left: 20, flexDirection: 'row' }}>
                                        <View style={{ flex: 1 }}>
                                            <Image source={require('../../../../android/img/32367broccoli_98849.png')} style={{ position: 'absolute', width: 38, height: 38, left: 17, top: 10 }} onPress={() => this.props.navigation.navigate('Sayuran')} />
                                            <Text style={{ top: 50, position: 'absolute', marginHorizontal: 10 }} onPress={() => this.props.navigation.navigate('Sayuran')}>Sayuran</Text>
                                            <Image source={require('../../../../android/img/new_25355.png')} style={{ position: 'absolute', width: 38, height: 38, left: 17, top: 80 }} />
                                            <Text style={{ top: 120, position: 'absolute', marginHorizontal: 10 }}>Terbaru</Text>
                                        </View>
                                        <View style={{ flex: 1 }}>
                                            <Image source={require('../../../../android/img/orangefruit_122731.png')} style={{ position: 'absolute', width: 38, height: 38, left: 17, top: 10 }} />
                                            <Text style={{ top: 50, position: 'absolute', marginHorizontal: 20 }}>Buah</Text>
                                            <Image source={require('../../../../android/img/32390egg_98878.png')} style={{ position: 'absolute', width: 38, height: 38, left: 17, top: 80 }} />
                                            <Text style={{ top: 120, position: 'absolute', marginHorizontal: 10, left: 5 }}>Protein</Text>
                                        </View>
                                        <View style={{ flex: 1 }}>
                                            <Image source={require('../../../../android/img/22333sheafofrice_98735.png')} style={{ position: 'absolute', width: 38, height: 38, left: 17, top: 10 }} />
                                            < Text style={{ top: 50, position: 'absolute', left: 20 }}>Pokok</Text>
                                            <Image source={require('../../../../android/img/bottlemilk_122719.png')} style={{ position: 'absolute', width: 38, height: 38, left: 17, top: 80 }} />
                                            <Text style={{ top: 120, position: 'absolute', marginHorizontal: 10, left: 10 }}>Susu</Text>
                                        </View>
                                        <View style={{ flex: 1 }}>
                                            <Image source={require('../../../../android/img/fish_122720.png')} style={{ position: 'absolute', width: 38, height: 38, left: 17, top: 10 }} />
                                            < Text style={{ top: 50, position: 'absolute', left: 20 }}>Ikan</Text>
                                            {/* lanjut */}
                                        </View>
                                    </View>
                                </View>

                                <View style={{ flex: 1, marginTop: -230, marginHorizontal: 20, bottom: -20 }}>
                                    <Text>New Product</Text>
                                    <ScrollView horizontal={true} >
                                        <View style={{ maxHeight: 230, height: 230, flexDirection: 'row' }}>
                                            {products.map((item, index) =>
                                                <View style={{ padding: 10, width: 130, marginHorizontal: 10 }} key={index}>
                                                    <Image
                                                        style={{ width: 116, height: 72, top: 10, borderRadius: 10 }}
                                                        source={{ uri: item.image }}
                                                    />
                                                    <Text style={{ top: 20, left: 10 }} ellipsizeMode='tail' numberOfLines={1}>{item.name_product}</Text>
                                                    <Text style={{ top: 20, left: 10, fontSize: 9 }} ellipsizeMode='tail' numberOfLines={1}>{item.cardDesc}</Text>
                                                    <Text style={{ top: 25, left: 5, color: '#35B829' }} ellipsizeMode='tail' numberOfLines={1}>Rp. {item.price}/<Text style={{ color: 'black', fontSize: 8 }}>{item.ingredients}</Text></Text>
                                                    {/* <Text style={{ top: 8, left: 75, fontSize: 11 }} ellipsizeMode='tail' numberOfLines={1}>{item.ingredients}</Text> */}
                                                    <Button
                                                        style={{ width: 116, top: 30, alignItems: 'center', justifyContent: 'center', backgroundColor: '#35B829', borderRadius: 3, height: 35 }}
                                                        onPress={() => this.addToCart(item)}><Text style={{ color: 'white' }}>order</Text></Button>
                                                </View>
                                            )}
                                        </View>
                                    </ScrollView>

                                    <View style={{ marginVertical: 20, top: -20 }}>
                                        {/* <Text>hello</Text> */}
                                        <Text>Import</Text>
                                        <ScrollView horizontal={true} >
                                            <View style={{ maxHeight: 230, height: 230, flexDirection: 'row' }}>
                                                {productsImport.map((item, index) =>
                                                    <View style={{ padding: 10, width: 130, marginHorizontal: 10 }} key={index}>
                                                        <Image
                                                            style={{ width: 116, height: 72, top: 10, borderRadius: 10 }}
                                                            source={{ uri: item.image }}
                                                        />
                                                        <Text style={{ top: 20, left: 10 }} ellipsizeMode='tail' numberOfLines={1}>{item.name_product}</Text>
                                                        <Text style={{ top: 20, left: 10, fontSize: 9 }} ellipsizeMode='tail' numberOfLines={1}>{item.cardDesc}</Text>
                                                        <Text style={{ top: 25, left: 5, color: '#35B829' }} ellipsizeMode='tail' numberOfLines={1}>Rp. {item.price}/<Text style={{ color: 'black', fontSize: 8 }}>{item.ingredients}</Text></Text>
                                                        {/* <Text style={{ top: 8, left: 75, fontSize: 11 }}>{item.ingredients}</Text> */}
                                                        <Button
                                                            style={{ width: 116, top: 30, alignItems: 'center', justifyContent: 'center', backgroundColor: '#35B829', borderRadius: 3, height: 35 }}
                                                            onPress={() => this.addToCart(item)}><Text style={{ color: 'white' }}>order</Text></Button>
                                                    </View>
                                                )}
                                            </View>
                                        </ScrollView>
                                        {/* sini */}
                                    </View>
                                    <View style={{ marginVertical: 10, top: -50 }}>
                                        {/* <Text>hello</Text> */}
                                        <Text>Export</Text>
                                        <ScrollView horizontal={true} >
                                            <View style={{ maxHeight: 230, height: 230, flexDirection: 'row' }}>
                                                {productsLocal.map((item, index) =>
                                                    <View style={{ padding: 10, width: 130, marginHorizontal: 10 }} key={index}>
                                                        <Image
                                                            style={{ width: 116, height: 72, top: 10, borderRadius: 10 }}
                                                            source={{ uri: item.image }}
                                                        />
                                                        <Text style={{ top: 20, left: 10 }} ellipsizeMode='tail' numberOfLines={1}>{item.name_product}</Text>
                                                        <Text style={{ top: 20, left: 10, fontSize: 9 }} ellipsizeMode='tail' numberOfLines={1}>{item.cardDesc}</Text>
                                                        <Text style={{ top: 25, left: 5, color: '#35B829' }} ellipsizeMode='tail' numberOfLines={1}>Rp. {item.price}/<Text style={{ color: 'black', fontSize: 8 }}>{item.ingredients}</Text></Text>
                                                        {/* <Text style={{ top: 8, left: 75, fontSize: 11 }} ellipsizeMode='tail' numberOfLines={1}>{item.ingredients}</Text> */}
                                                        <Button
                                                            style={{ width: 116, top: 30, alignItems: 'center', justifyContent: 'center', backgroundColor: '#35B829', borderRadius: 3, height: 35 }}
                                                            onPress={() => this.addToCart(item)}><Text style={{ color: 'white' }}>order</Text></Button>
                                                    </View>
                                                )}
                                            </View>
                                        </ScrollView>
                                        {/* sini */}
                                    </View>
                                    {/* bagian sini yang ditambah */}
                                </View>
                            </ScrollView>
                        </View>
                    </View >

                </View>
            </Fragment>
        )
    }
    getBadgeClasses() {
        let classes = `color:`;
        classes += this.state.count === this.props.carts.length ? "#4f3961" : "#00000";
        return classes;
    }
}

const mapStateToProps = (state) => {
    return {
        carts: state.carts.carts,
        products: state.products.products,
        productsImport: state.products.productsImport,
        productsLocal: state.products.productsLocal
    }
}

export default connect(mapStateToProps)(HomeScreen);