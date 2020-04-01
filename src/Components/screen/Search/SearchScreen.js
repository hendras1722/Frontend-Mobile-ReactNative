import React, { Component } from 'react'
import { InputGroup, View, Container, Header, Item, Input, Button, Card, CardItem, Body } from 'native-base';
import { Text, Image, ScrollView, StatusBar, TouchableOpacity } from 'react-native'
import { TextInput } from 'react-native-gesture-handler';
// import App from './src/Components/screen/Home/backgou';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { connect } from 'react-redux';

import { readProduct, filterProduct } from '../../redux/actions/product'
import { readCategory } from '../../redux/actions/category'

class SearchScreen extends Component {
    static navigationOptions = {
        headerShown: false,
        tabBarVisible: false,
        gesture: false,
        tabStyle: {
            backgroundColor: 'red'
        }
    };

    state = {
        group: '',
        product: '',
        category: ''
    };

    componentDidMount() {
        this.readProductAll()
        this.readCategoryAll()
    }

    onSort = async group => {
        this.setState({ group });
        await this.props.dispatch(filterProduct(group, this.state.category, this.state.product))
    };

    onProduct = async product => {
        this.setState({ product });
        await this.props.dispatch(filterProduct(this.state.group, this.state.category, product))
    };

    onCategory = async category => {
        this.setState({ category });
        await this.props.dispatch(filterProduct(this.state.group, category, this.state.product))
    };

    async readCategoryAll() {
        await this.props.dispatch(readCategory())
    }

    async readProductAll() {
        await this.props.dispatch(readProduct())
    }
    render() {
        console.disableYellowBox = true
        const { products, categorys } = this.props
        console.log(this.props)
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
                                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                                    <TextInput placeholder='Butuh apa ni ...?' style={{ borderWidth: 1, borderColor: 'rgba(0, 0, 0, 0.1)', width: 260, height: 36, borderRadius: 5, paddingLeft: 35, left: -10, paddingRight: 18, backgroundColor: "white", height: 40 }} onChangeText={this.onProduct} />
                                    <Image source={require('../../../../android/img/drawable-mdpi/ic_magnify.png')} style={{ position: 'absolute', width: 25, height: 25, left: 15, top: 17 }} />
                                </View>
                            </View>
                        </View>
                        <View style={{ marginVertical: 10, padding: 10 }}>
                            <View style={{ flexDirection: 'row', width: 400 }}>
                                <Button style={{ marginRight: 24, padding: 10, borderRadius: 50, backgroundColor: '#35B829', left: 30 }} onPress={() => (this.onSort("1"))}><Text style={{ color: 'white' }}>Import</Text></Button>
                                <Button style={{ padding: 10, borderRadius: 50, backgroundColor: '#35B829', left: 20 }} onPress={() => (this.onSort("2"))}><Text style={{ color: 'white' }} >Lokal</Text></Button>

                            </View>
                        </View>
                        <ScrollView horizontal={false}>
                            <View style={{ marginVertical: -2, backgroundColor: '#bbb3b361', padding: 10 }}>
                                <Text>Search By Category</Text>
                            </View>
                            {/* <ScrollView horizontal={true}> */}
                            <View style={{ flexDirection: 'row' }}>
                                <View style={{ padding: 10, flexDirection: 'row', flex: 1, flexWrap: 'wrap', alignItems: 'flex-start', justifyContent: 'center', alignItems: 'center' }}>

                                    {/* Mapping disini */}
                                    <View >
                                        <Button style={{ width: 50, borderRadius: 10, backgroundColor: "transparent", justifyContent: 'center', alignItems: 'center', borderColor: '#35B829', borderWidth: 3.0, marginVertical: 5, marginHorizontal: 5 }} onPress={() => (this.onCategory(""))}>
                                            <Text style={{ color: '#35B829' }} value="">All</Text>
                                        </Button>
                                    </View>


                                </View>

                            </View>
                            <View style={{ marginVertical: 2, backgroundColor: '#bbb3b361', padding: 10 }}>

                                <Text>Search By All Product</Text>
                            </View>
                            {/* mPping disini */}

                            <View style={{ flex: 1, flexDirection: 'row', flexWrap: 'wrap', alignItems: 'flex-start', justifyContent: 'center', alignItems: 'center' }} >
                                {products.map((item, index) =>
                                    <View style={{ padding: 10, width: 130, marginHorizontal: 10, marginVertical: 10 }} key={index}>
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
                    </View>
                </View>
            </View>
        )
    }
}


const mapStateToProps = (state) => {
    console.log(state)
    return {
        products: state.products.products,
        // categorys: state.categorys.categorys
    }
}

export default connect(mapStateToProps)(SearchScreen);