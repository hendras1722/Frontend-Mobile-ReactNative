import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux';
import { InputGroup, View, Container, Header, Item, Input, Button, Card, CardItem, Body } from 'native-base';
import { Text, Image, ScrollView, StatusBar, FlatList, TouchableOpacity } from 'react-native'
import { TextInput } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { readProduct, readProductImport, readProductLocal } from '../../redux/actions/product'

class HomeScreen extends Component {
    static navigationOptions = {
        headerShown: false
    };

    componentDidMount() {
        this.readProductAll()
    }

    async readProductAll() {
        await this.props.dispatch(readProduct())
        await this.props.dispatch(readProductImport())
        await this.props.dispatch(readProductLocal())
    }

    render() {
        const { products, productsImport, productsLocal } = this.props
        console.disableYellowBox = true
        return (
            <Fragment>
                <View style={{ flex: 1 }}>
                    <View style={{ flex: 1 }}>
                        <StatusBar backgroundColor="#35B829" barStyle="light-content" />
                        <View >
                            {/* <StatusBar hidden={route.statusBarHidden} /> */}
                            <View style={{ backgroundColor: '#35B829', height: 60, flexDirection: 'row' }}>
                                <View style={{ flex: 4, justifyContent: 'center', alignItems: 'center' }}>
                                    <TouchableOpacity
                                        style={{ backgroundColor: 'transparent', padding: 8, justifyContent: 'center', alignItems: 'center' }}
                                    >
                                        <Button onPress={() => this.props.navigation.navigate('Search')} style={{ borderWidth: 1, borderColor: 'rgba(0, 0, 0, 0.1)', width: 260, height: 36, borderRadius: 5, paddingLeft: 35, paddingRight: 18, backgroundColor: "white", height: 40 }}><Text style={{ color: '#84878A' }}>Butuh Apa Ni??</Text>
                                            <Image source={require('../../../../android/img/drawable-mdpi/ic_magnify.png')} style={{ position: 'absolute', width: 25, height: 25, left: 5, top: 6 }} />
                                        </Button>
                                    </TouchableOpacity>
                                </View>
                                <View style={{ flex: 1, justifyContent: 'center' }}>
                                    <Icon name="cart" style={{ fontSize: 30, left: 16, color: 'white', position: 'absolute', top: 15 }}></Icon>
                                </View>

                            </View>

                            <ScrollView  >
                                <View>
                                    <View style={{ flex: 1, top: 20 }}>
                                        <ScrollView horizontal={true}>
                                            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                                                <Image source={require('../../../../android/img/promo-new_1580523127422_2000x800.jpg')} style={{ resizeMode: 'cover', left: 20 }} />
                                            </View>
                                        </ScrollView>
                                    </View>

                                </View>

                                <View style={{ marginVertical: 120, top: -100, bottom: 80 }}>
                                    <Text style={{ top: 10, left: 20 }}>Menu Favorite</Text>
                                    <View style={{ height: 20, marginVertical: 20, width: 310, height: 142, left: 20, flexDirection: 'row' }}>
                                        <View style={{ flex: 1 }}>
                                            <Image source={require('../../../../android/img/32367broccoli_98849.png')} style={{ position: 'absolute', width: 38, height: 38, left: 17, top: 10 }} />
                                            <Text style={{ top: 50, position: 'absolute', marginHorizontal: 10 }}>Sayuran</Text>
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

                                <View style={{ flex: 1, marginTop: -75, marginHorizontal: 20, bottom: -20 }}>
                                    <Text>New Product</Text>
                                    <ScrollView horizontal={true} >
                                        <View style={{ maxHeight: 230, height: 230, flexDirection: 'row' }}>
                                            {products.map((item, index) =>
                                                <View style={{ padding: 10 }} key={index}>
                                                    <Image
                                                        style={{ width: 116, height: 72, top: 10, borderRadius: 10 }}
                                                        source={{ uri: item.image }}
                                                    />
                                                    <Text style={{ top: 20, left: 10 }}>{item.name_product}</Text>
                                                    <Text style={{ top: 20, left: 10, fontSize: 9 }}>{item.shortDesc}</Text>
                                                    <Text style={{ top: 25, left: 10, color: '#35B829' }}>Rp. {item.price}</Text>
                                                    <Text style={{ top: 8, left: 75, fontSize: 11 }}>{item.ingredients}</Text>
                                                    <Button
                                                        style={{ width: 116, top: 20, alignItems: 'center', justifyContent: 'center', backgroundColor: '#35B829', borderRadius: 3, height: 35 }}
                                                    ><Text style={{ color: 'white' }}>order</Text></Button>
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
                                                    <View style={{ padding: 10 }} key={index}>
                                                        <Image
                                                            style={{ width: 116, height: 72, top: 10, borderRadius: 10 }}
                                                            source={{ uri: item.image }}
                                                        />
                                                        <Text style={{ top: 20, left: 10 }}>{item.name_product}</Text>
                                                        <Text style={{ top: 20, left: 10, fontSize: 9 }}>{item.shortDesc}</Text>
                                                        <Text style={{ top: 25, left: 10, color: '#35B829' }}>Rp. {item.price}</Text>
                                                        <Text style={{ top: 8, left: 75, fontSize: 11 }}>{item.ingredients}</Text>
                                                        <Button
                                                            style={{ width: 116, top: 20, alignItems: 'center', justifyContent: 'center', backgroundColor: '#35B829', borderRadius: 3, height: 35 }}
                                                        ><Text style={{ color: 'white' }}>order</Text></Button>
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
                                                    <View style={{ padding: 10 }} key={index}>
                                                        <Image
                                                            style={{ width: 116, height: 72, top: 10, borderRadius: 10 }}
                                                            source={{ uri: item.image }}
                                                        />
                                                        <Text style={{ top: 20, left: 10 }}>{item.name_product}</Text>
                                                        <Text style={{ top: 20, left: 10, fontSize: 9 }}>{item.shortDesc}</Text>
                                                        <Text style={{ top: 25, left: 10, color: '#35B829' }}>Rp. {item.price}</Text>
                                                        <Text style={{ top: 8, left: 75, fontSize: 11 }}>{item.ingredients}</Text>
                                                        <Button
                                                            style={{ width: 116, top: 20, alignItems: 'center', justifyContent: 'center', backgroundColor: '#35B829', borderRadius: 3, height: 35 }}
                                                        ><Text style={{ color: 'white' }}>order</Text></Button>
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

                    {/* footer */}
                    <View style={{ height: 54, flexDirection: 'row', backgroundColor: 'white' }}>
                        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                            <Icon name="home" style={{ fontSize: 32, color: '#35B829' }}></Icon>
                            <Text>Home</Text></View>
                        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                            <Icon name="cart" style={{ fontSize: 32, color: '#848484' }} onPress={() => this.props.navigation.navigate('Order')}></Icon>
                            <Text style={{ fontSize: 12 }}>Order</Text>
                        </View>
                        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                            <Icon name="script-text" style={{ fontSize: 32, color: '#848484' }}></Icon>
                            <Text>Transaction</Text>
                        </View>
                        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                            <Icon name="account" style={{ fontSize: 32, color: '#848484' }}></Icon>

                            {/* <Text>Hello</Text> */}
                        </View >
                    </View>
                </View>
            </Fragment>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        products: state.products.products,
        productsImport: state.products.productsImport,
        productsLocal: state.products.productsLocal
    }
}

export default connect(mapStateToProps)(HomeScreen);