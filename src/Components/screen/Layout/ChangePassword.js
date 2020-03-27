import React, { Component } from 'react'
import { InputGroup, View, Container, Header, Item, Input, Button, Card, CardItem, Body, Picker } from 'native-base';
import { Text, Image, ScrollView, StatusBar, TouchableOpacity } from 'react-native'
import { TextInput } from 'react-native-gesture-handler';
// import App from './src/Components/screen/Home/backgou';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

class LoginScreen extends Component {
    static navigationOptions = {
        headerShown: false,
        tabBarVisible: true,
        activeTintColor: 'blue',
        tabStyle: {
            backgroundColor: 'red'
        }
    };

    state = {
        selected: undefined,
        icon: "eye-off",
        hidePassword: true
    }

    setPasswordVisibility = () => {
        this.setState({ hidePassword: !this.state.hidePassword });
    }

    onValueChange(event) {
        this.setState({
            selected: event
        });
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
                                <Text style={{ fontSize: 22, color: 'white' }}>Ganti Passowrd</Text>
                            </View>
                        </View>

                        {/* mPping disini */}
                        <ScrollView >
                            <View style={{ top: 20, height: 120, marginHorizontal: 10 }}>
                                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                                    <Text>Ganti Password</Text>
                                </View>
                                <View >
                                    <Item >
                                        <Input placeholder="Passwordmu" />
                                    </Item>
                                </View>
                            </View>
                            <View style={{ top: -60, marginHorizontal: 10, flexDirection: 'row', height: 200 }}>
                                <View style={{ flex: 1, justifyContent: "center", alignItems: 'center' }}>
                                    <Button style={{ width: 100, justifyContent: "center", alignItems: 'center', backgroundColor: '#D71149' }} onPress={() => this.props.navigation.navigate('Account')}>
                                        <Text style={{ color: 'white' }}>Cancel</Text>
                                    </Button>
                                </View>
                                <View style={{ flex: 1, justifyContent: "center", alignItems: 'center' }}>
                                    <Button style={{ width: 100, justifyContent: "center", alignItems: 'center', backgroundColor: '#35B829' }}>
                                        <Text style={{ color: 'white' }}>Save</Text>
                                    </Button>
                                </View>

                            </View>
                        </ScrollView>
                    </View>
                </View>
            </View>
        )
    }
}

export default LoginScreen