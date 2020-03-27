import React, { Component } from 'react'
import { InputGroup, View, Container, Header, Item, Input, Button, Card, CardItem, Body } from 'native-base';
import { Text, Image, ScrollView, StatusBar, TouchableOpacity } from 'react-native'
import { TextInput } from 'react-native-gesture-handler';
// import App from './src/Components/screen/Home/backgou';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { connect } from 'react-redux';

import { readProduct, filterProduct } from '../../redux/actions/product'

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
                        <ScrollView >
                            <View style={{ marginVertical: -2, backgroundColor: '#bbb3b361', padding: 10 }}>
                                <Text>Search By Category</Text>
                            </View>
                            <View style={{ flexDirection: 'row' }}>
                                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', padding: 10 }}>
                                    <Button style={{ width: 50, borderRadius: 10, backgroundColor: "transparent", justifyContent: 'center', alignItems: 'center', borderColor: '#35B829', borderWidth: 3.0, marginVertical: 5 }} onPress={() => (this.onCategory(""))}>
                                        <Text style={{ color: '#35B829' }} value="">All</Text>
                                    </Button>
                                    <Button style={{ width: 65, borderRadius: 10, backgroundColor: "transparent", justifyContent: 'center', alignItems: 'center', borderColor: '#35B829', borderWidth: 3.0, marginVertical: 5 }} onPress={() => (this.onCategory("1"))}>
                                        <Text style={{ color: '#35B829' }} value="1" >Sayuran</Text>
                                    </Button>
                                </View>
                                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', padding: 10 }}>
                                    <Button style={{ width: 60, borderRadius: 10, backgroundColor: "transparent", justifyContent: 'center', alignItems: 'center', borderColor: '#35B829', borderWidth: 3.0, marginVertical: 5 }} onPress={() => (this.onCategory("2"))}>
                                        <Text style={{ color: '#35B829' }} value="2">Buah</Text>
                                    </Button>
                                    <Button style={{ width: 60, borderRadius: 10, backgroundColor: "transparent", justifyContent: 'center', alignItems: 'center', borderColor: '#35B829', borderWidth: 3.0, marginVertical: 5 }} onPress={() => (this.onCategory("3"))}>
                                        <Text style={{ color: '#35B829' }} value="3">Pokok</Text>
                                    </Button>
                                </View>
                                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', padding: 10 }}>
                                    <Button style={{ width: 60, borderRadius: 10, backgroundColor: "transparent", justifyContent: 'center', alignItems: 'center', borderColor: '#35B829', borderWidth: 3.0, marginVertical: 5 }} onPress={() => (this.onCategory("4"))}>
                                        <Text style={{ color: '#35B829' }} value="4">Ikan</Text>
                                    </Button>
                                    <Button style={{ width: 65, borderRadius: 10, backgroundColor: "transparent", justifyContent: 'center', alignItems: 'center', borderColor: '#35B829', borderWidth: 3.0, marginVertical: 5 }} onPress={() => (this.onCategory("5"))}>
                                        <Text style={{ color: '#35B829' }} value="5">Protein</Text>
                                    </Button>
                                </View>
                                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', padding: 10 }}>
                                    <Button style={{ width: 60, borderRadius: 10, backgroundColor: "transparent", justifyContent: 'center', alignItems: 'center', borderColor: '#35B829', borderWidth: 3.0, marginVertical: 5 }} onPress={() => (this.onCategory("6"))}>
                                        <Text style={{ color: '#35B829' }} value="6">Susu</Text>
                                    </Button>
                                    <Button style={{ width: 60, borderRadius: 10, backgroundColor: "transparent", justifyContent: 'center', alignItems: 'center', borderColor: '#35B829', borderWidth: 3.0, marginVertical: 5 }} onPress={() => (this.onCategory("7"))}>
                                        <Text style={{ color: '#35B829' }} value="7">Bumbu</Text>
                                    </Button>
                                </View>
                                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', padding: 10 }}>
                                    <Button style={{ width: 80, borderRadius: 10, backgroundColor: "transparent", justifyContent: 'center', alignItems: 'center', borderColor: '#35B829', borderWidth: 3.0, marginVertical: 5 }} onPress={() => (this.onCategory("8"))}>
                                        <Text style={{ color: '#35B829' }} value="8">Karbohidrat</Text>
                                    </Button>
                                    <Button style={{ width: 80, borderRadius: 10, backgroundColor: "transparent", justifyContent: 'center', alignItems: 'center', borderColor: '#35B829', borderWidth: 3.0, marginVertical: 5 }} onPress={() => (this.onCategory("9"))}>
                                        <Text style={{ color: '#35B829' }} value="9">Umbi-Umbi</Text>
                                    </Button>
                                </View>
                            </View>
                            <View style={{ marginVertical: 2, backgroundColor: '#bbb3b361', padding: 10 }}>
                                <Text>Search By All Product</Text>
                            </View>
                            {/* mPping disini */}

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

export default connect(mapStateToProps)(SearchScreen);