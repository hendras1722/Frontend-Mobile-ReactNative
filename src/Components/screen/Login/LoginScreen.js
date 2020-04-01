import React, { Component } from 'react'
import { InputGroup, View, Container, Header, Item, Input, Button, Card, CardItem, Body, Picker } from 'native-base';
import { Text, Image, ScrollView, StatusBar, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { connect } from 'react-redux';
import { login } from '../../redux/actions/auth'

class LoginScreen extends Component {
    static navigationOptions = {
        headerShown: false,
        tabBarVisible: true,
        activeTintColor: 'blue',
        tabStyle: {
            backgroundColor: 'red'
        }
    };

    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: ''
        }
    }

    componentDidMount() {
        if (this.props.auth.isAuthenticated) {
            this.props.navigation.navigate('Home')
        }
    }

    onSubmit = async event => {
        event.preventDefault()
        const data = {
            email: this.state.email,
            password: this.state.password
        }
        await this.props.dispatch(login(data))
        await this.props.navigation.navigate('Home')
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
                        </View>

                        {/* mPping disini */}
                        <ScrollView >
                            <View style={{ padding: 10, top: 20, height: 550 }}>
                                <View style={{ top: -5, justifyContent: 'center', alignItems: 'center' }}>
                                    <Image
                                        style={{ width: 100, height: 100, borderRadius: 10, marginHorizontal: 10, borderRadius: 80 }}
                                        source={require('../../../../android/img/logo-makyur-01.png')}
                                    />
                                </View>
                                <View style={{ top: 10, padding: 10 }}>
                                    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                                        <Item >
                                            <Input placeholder="Email" onChangeText={(text) => this.setState({ email: text })} />
                                        </Item>
                                    </View>
                                    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                                        <Item >
                                            <Input placeholder="Kata Sandi" secureTextEntry={true} onChangeText={(text) => this.setState({ password: text })} />
                                        </Item>
                                    </View>
                                </View>
                                <View style={{ top: 30, marginHorizontal: 10, height: 100 }}>
                                    <View style={{ flex: 1, justifyContent: "center", alignItems: 'center', top: 10 }}>
                                        <Button style={{ width: 320, justifyContent: "center", alignItems: 'center', backgroundColor: '#35B829', borderRadius: 5 }} onPress={this.onSubmit}>
                                            <Text style={{ color: 'white' }}>Masuk</Text>
                                        </Button>
                                        <Text onPress={() => this.props.navigation.navigate('UbahPassword1')} style={{ top: 20, fontSize: 18, color: '#35B829' }}>Lupa Kata Sandi?</Text>
                                    </View>
                                    <View style={{ flex: 1, justifyContent: "center", alignItems: 'center', top: 40 }}>
                                        <View>
                                            <Text style={{ color: '#aeb3b9', top: 15 }}> ────────  <Text style={{ color: 'black' }}>Atau</Text>  ──────── </Text>
                                        </View>
                                        <View>
                                            <Button onPress={() => this.props.navigation.navigate('BuatAkun')} style={{ top: 30, width: 200, justifyContent: 'center', alignItems: 'center', borderRadius: 5, backgroundColor: 'transparent', borderWidth: 2, borderColor: '#35B829' }}>
                                                <Text style={{ color: '#35B829' }} >Buat Akun Baru</Text>
                                            </Button>
                                        </View>
                                    </View>
                                </View>
                            </View>
                        </ScrollView>
                    </View>
                </View>
            </View >
        )
    }
}

const mapStateToProps = (state) => {
    return {
        auth: state.auth
    }
}

export default connect(mapStateToProps)(LoginScreen);