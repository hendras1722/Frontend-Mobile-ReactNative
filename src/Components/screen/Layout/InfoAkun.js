import React, { Component } from 'react'
import { InputGroup, View, Container, Header, Item, Input, Button, Card, CardItem, Body, Picker } from 'native-base';
import { Text, Image, ScrollView, StatusBar, TouchableOpacity } from 'react-native'
import { TextInput } from 'react-native-gesture-handler';
// import App from './src/Components/screen/Home/backgou';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import ImagePicker from 'react-native-image-picker';

class InfoAkun extends Component {
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
        photo: null,
        namePhoto: ''
    }

    handleChoosePhoto = () => {
        const options = {
            noData: true,
        };
        ImagePicker.launchCamera(options, response => {
            if (response.uri) {
                this.setState({ photo: response, namePhoto: response.fileName });
            }
        });
    };

    handleUploadPhoto = () => {
        const options = {
            noData: true,
        };
        ImagePicker.launchImageLibrary(options, response => {
            if (response.uri) {
                this.setState({ photo: response, namePhoto: response.fileName });
            }
        });
    };

    onValueChange(event) {
        this.setState({
            selected: event
        });
    }
    render() {
        console.disableYellowBox = true
        const { photo } = this.state;
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
                            <View style={{ padding: 20, maxHeight: 800, height: 630 }}>
                                <View style={{ flexDirection: 'row' }}>
                                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                                        <Item style={{ width: 100 }}>
                                            <Input placeholder="Nama Depan" />
                                        </Item>
                                    </View>
                                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                                        <Item style={{ width: 100 }}>
                                            <Input placeholder="Nama Belakang" />
                                        </Item>
                                    </View>
                                </View>
                                <View>
                                    <Item >
                                        <Input placeholder="Email" />
                                    </Item>
                                </View>
                                <View>
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
                                <View>
                                    <Item >
                                        <Input placeholder="Alamat Lengkap" />
                                    </Item>
                                </View>
                                <View>

                                </View>
                                <View style={{ flexDirection: 'row', top: 10 }}>
                                    <View style={{ flex: 1 }}>
                                        <Icon name="camera" style={{ fontSize: 30, left: 10, color: '#35B829', top: 10 }} onPress={this.handleChoosePhoto}></Icon>
                                        <Icon name="file" style={{ fontSize: 30, left: 10, color: '#35B829', top: 30 }} onPress={this.handleUploadPhoto}></Icon>

                                    </View>
                                    <View style={{ flex: 2, flexDirection: 'column' }}>
                                        {/* <Text>hello</Text> */}
                                        {photo && (
                                            <Image
                                                source={{ uri: photo.uri }}
                                                style={{ width: 100, height: 100 }}
                                            />
                                        )}
                                        <Text style={{ flexWrap: 'nowrap' }}>{this.state.namePhoto}</Text>
                                    </View>
                                </View>
                                <View style={{ top: 50, marginHorizontal: 10, flexDirection: 'row' }}>
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
                            </View>
                        </ScrollView>
                    </View>
                </View>
            </View>
        )
    }
}

export default InfoAkun