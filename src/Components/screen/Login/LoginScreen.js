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
        selected: undefined
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
                                <Text style={{ fontSize: 22, color: 'white' }}>Akun</Text>
                            </View>
                        </View>

                        {/* mPping disini */}
                        <ScrollView >
                            <View style={{ padding: 10, top: 20, height: 550 }}>
                                <View style={{ top: -5, justifyContent: 'center', alignItems: 'center' }}>
                                    <Image
                                        style={{ width: 100, height: 100, borderRadius: 10, marginHorizontal: 10, borderRadius: 80 }}
                                        source={require('../../../../android/img/img_avatar.png')}
                                    />
                                </View>
                                <View style={{ flexDirection: 'row', top: 10 }}>
                                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', height: 30 }}>
                                        <Item style={{ width: 150 }}>
                                            <Input placeholder="Nama Depan" />
                                        </Item>
                                    </View>
                                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', height: 30 }}>
                                        <Item style={{ width: 150 }} >
                                            <Input placeholder="Nama Belakang" />
                                        </Item>
                                    </View>
                                </View>
                                <View style={{ top: 10, padding: 10 }}>
                                    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                                        <Item >
                                            <Input placeholder="Email" />
                                        </Item>
                                    </View>
                                    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                                        <Item >
                                            <Input placeholder="Nomer Telephone" keyboardType={'numeric'} />
                                        </Item>
                                    </View>
                                    <View style={{ justifyContent: 'center', alignItems: 'center', top: 10, flexDirection: 'row' }}>
                                        <View style={{ flex: 1 }}>
                                            <Picker
                                                mode="dropdown"
                                                iosIcon={<Icon name="arrow-down" />}
                                                placeholder="Choose"
                                                placeholderStyle={{ color: "#bfc6ea" }}
                                                placeholderIconColor="#007aff"
                                                style={{ width: undefined }}
                                                selectedValue={this.state.selected}
                                                onValueChange={this.onValueChange.bind(this)}
                                            >
                                                <Picker.Item label="DKI Jakarta" value="key0" />
                                            </Picker>
                                        </View>
                                        <View style={{ flex: 1 }}>
                                            <Picker
                                                mode="dropdown"
                                                iosIcon={<Icon name="arrow-down" />}
                                                placeholder="Choose"
                                                placeholderStyle={{ color: "#bfc6ea" }}
                                                placeholderIconColor="#007aff"
                                                style={{ width: undefined }}
                                                selectedValue={this.state.selected}
                                                onValueChange={this.onValueChange.bind(this)}
                                            >
                                                <Picker.Item label="Jakarta Pusat" value="key0" />
                                                <Picker.Item label="Jakarta Barat" value="key1" />
                                            </Picker>
                                        </View>
                                        <View style={{ flex: 1 }}>
                                            <Picker
                                                mode="dropdown"
                                                iosIcon={<Icon name="arrow-down" />}
                                                placeholder="Choose"
                                                placeholderStyle={{ color: "#bfc6ea" }}
                                                placeholderIconColor="#007aff"
                                                style={{ width: undefined }}
                                                selectedValue={this.state.selected}
                                                onValueChange={this.onValueChange.bind(this)}
                                            >
                                                <Picker.Item label="Cingkareng" value="key0" />
                                            </Picker>
                                        </View>
                                    </View>
                                    <View style={{ justifyContent: 'center', alignItems: 'center', top: 10 }}>
                                        <Item >
                                            <Input placeholder="Alamat Lengkap" />
                                        </Item>
                                    </View>
                                </View>
                                <View style={{ top: 40, marginHorizontal: 10, flexDirection: 'row', height: 50 }}>
                                    <View style={{ flex: 1, justifyContent: "center", alignItems: 'center' }}>
                                        <Button style={{ width: 100, justifyContent: "center", alignItems: 'center', backgroundColor: '#D71149' }} onPress={() => this.props.navigation.navigate('Home')}>
                                            <Text style={{ color: 'white' }}>Cancel</Text>
                                        </Button>
                                    </View>
                                    <View style={{ flex: 1, justifyContent: "center", alignItems: 'center' }}>
                                        <Button style={{ width: 100, justifyContent: "center", alignItems: 'center', backgroundColor: '#35B829' }}>
                                            <Text style={{ color: 'white' }}>Save</Text>
                                        </Button>
                                    </View>

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