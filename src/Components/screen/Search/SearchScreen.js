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
            backgroundColor: 'blue'
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
                            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                                <Button onPress={() => this.props.navigation.navigate('Home')}>
                                    <Icon onPress={() => this.props.navigation.navigate('Home')} name="arrow-left-circle" style={{ fontSize: 30, left: -12, color: 'white', position: 'absolute', top: 10 }}></Icon>
                                </Button>
                            </View>
                            <View style={{ flex: 5, justifyContent: 'center' }}>
                                {/* <Icon name="cart" style={{ fontSize: 30, left: 16, color: 'white', position: 'absolute', top: 15 }}></Icon> */}
                                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                                    <TextInput placeholder='Butuh apa ni ...?' style={{ borderWidth: 1, borderColor: 'rgba(0, 0, 0, 0.1)', width: 260, height: 36, borderRadius: 5, paddingLeft: 35, left: -10, paddingRight: 18, backgroundColor: "white", height: 40 }} />
                                    <Image source={require('../../../../android/img/drawable-mdpi/ic_magnify.png')} style={{ position: 'absolute', width: 25, height: 25, left: 15, top: 17 }} />
                                </View>
                            </View>
                        </View>
                        <View style={{ marginVertical: 10, backgroundColor: '#bbb3b361', padding: 10 }}>
                            <Text>Search By Category</Text>
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', padding: 10 }}>
                                <Button style={{ width: 100, borderRadius: 10, backgroundColor: "transparent", justifyContent: 'center', alignItems: 'center', borderColor: '#35B829', borderWidth: 3.0, marginVertical: 5 }}>
                                    <Text style={{ color: '#35B829' }}>Sayur</Text>
                                </Button>
                                <Button style={{ width: 100, borderRadius: 10, backgroundColor: "transparent", justifyContent: 'center', alignItems: 'center', borderColor: '#35B829', borderWidth: 3.0, marginVertical: 5 }}>
                                    <Text style={{ color: '#35B829' }}>Sayur</Text>
                                </Button>
                            </View>
                            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', padding: 10 }}>
                                <Button style={{ width: 100, borderRadius: 10, backgroundColor: "transparent", justifyContent: 'center', alignItems: 'center', borderColor: '#35B829', borderWidth: 3.0, marginVertical: 5 }}>
                                    <Text style={{ color: '#35B829' }}>Sayur</Text>
                                </Button>
                                <Button style={{ width: 100, borderRadius: 10, backgroundColor: "transparent", justifyContent: 'center', alignItems: 'center', borderColor: '#35B829', borderWidth: 3.0, marginVertical: 5 }}>
                                    <Text style={{ color: '#35B829' }}>Sayur</Text>
                                </Button>
                            </View>
                            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', padding: 10 }}>
                                <Button style={{ width: 100, borderRadius: 10, backgroundColor: "transparent", justifyContent: 'center', alignItems: 'center', borderColor: '#35B829', borderWidth: 3.0, marginVertical: 5 }}>
                                    <Text style={{ color: '#35B829' }}>Sayur</Text>
                                </Button>
                                <Button style={{ width: 100, borderRadius: 10, backgroundColor: "transparent", justifyContent: 'center', alignItems: 'center', borderColor: '#35B829', borderWidth: 3.0, marginVertical: 5 }}>
                                    <Text style={{ color: '#35B829' }}>Sayur</Text>
                                </Button>
                            </View>
                        </View>
                        <View style={{ marginVertical: 10, backgroundColor: '#bbb3b361', padding: 10 }}>
                            <Text>Search By All Product</Text>
                        </View>
                        <View style={{ height: 200 }}>
                            <Image
                                style={{ width: 116, height: 72, top: 10, borderRadius: 10, marginHorizontal: 10 }}
                                source={require('../../../../android/img/082399700_1444710907-tomat-rsmadkotakediri.jpg')}
                            />
                            <Text style={{ top: 20, left: 18 }}>Tomat</Text>
                            <Text style={{ top: 20, left: 18, fontSize: 9 }}>Organik</Text>
                            <Text style={{ top: 25, left: 18, color: '#35B829' }}>Rp.19.900</Text>
                            <Text style={{ top: 8, left: 88, fontSize: 11 }}>/500 gr</Text>
                            <Button
                                style={{ width: 116, top: 20, alignItems: 'center', justifyContent: 'center', backgroundColor: '#35B829', borderRadius: 3, height: 35, left: 10 }}

                            ><Text style={{ color: 'white' }}>order</Text></Button>
                        </View>
                    </View>
                </View>
            </View>
        )
    }
}

export default SearchScreen