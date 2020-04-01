import React, { Component } from 'react'
import { InputGroup, View, Container, Header, Item, Input, Button, Card, CardItem, Body, Picker } from 'native-base';
import { Text, Image, ScrollView, StatusBar, TouchableOpacity } from 'react-native'
import { TextInput } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import ImagePicker from 'react-native-image-picker';

import { readProvince, readCity, readSubCity } from '../../redux/actions/region'
import { updateAccount, logout } from '../../redux/actions/auth'
import { connect } from 'react-redux';

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
        nameImage: '',
        id: this.props.auth.id,
        email: this.props.auth.email,
        first_name: this.props.auth.first_name,
        last_name: this.props.auth.last_name,
        id_province: this.props.auth.id_province,
        id_city: this.props.auth.id_city,
        id_sub_city: this.props.auth.id_sub_city,
        address: this.props.auth.address,
        no_telephone: this.props.auth.no_telephone,
        image: null //this.props.auth.image
    }

    componentDidMount() {
        this.props.dispatch(readProvince())
        this.props.dispatch(readCity())
        this.props.dispatch(readSubCity())
    }

<<<<<<< HEAD
=======
    async get() {
        try {
            let getId = await AsyncStorage.getItem("id")
            let getEmail = await AsyncStorage.getItem("email")
            let getFirst_name = await AsyncStorage.getItem("first_name")
            let getLast_name = await AsyncStorage.getItem("last_name")
            let getId_province = await AsyncStorage.getItem("id_province")
            let getId_city = await AsyncStorage.getItem("id_city")
            let getId_sub_city = await AsyncStorage.getItem("id_sub_city")
            let getAddress = await AsyncStorage.getItem("address")
            let getNo_telephone = await AsyncStorage.getItem("no_telephone")
            let getImage = await AsyncStorage.getItem("image")
            let getRole = await AsyncStorage.getItem("role")
            let getToken = await AsyncStorage.getItem("token")

            let dataId = JSON.parse(getId)
            let dataEmail = JSON.parse(getEmail)
            let dataFirst_name = JSON.parse(getFirst_name)
            let dataLast_name = JSON.parse(getLast_name)
            let dataId_province = JSON.parse(getId_province)
            let dataId_city = JSON.parse(getId_city)
            let dataId_sub_city = JSON.parse(getId_sub_city)
            let dataAddress = JSON.parse(getAddress)
            let dataNo_telephone = JSON.parse(getNo_telephone)
            let dataImage = JSON.parse(getImage)
            let dataRole = JSON.parse(getRole)
            let dataToken = JSON.parse(getToken)
            this.setState({
                id: dataId,
                email: dataEmail,
                first_name: dataFirst_name,
                last_name: dataLast_name,
                id_province: dataId_province,
                id_city: dataId_city,
                id_sub_city: dataId_sub_city,
                address: dataAddress,
                no_telephone: dataNo_telephone,
                // image: dataImage,
                role: dataRole,
                token: dataToken
            })
        } catch (error) {
            console.log(error)
        }
    }

>>>>>>> 1f76d540beb9188ead9a9e876594f1e06a706995
    handleChooseImage = () => {
        const options = {
            noData: true,
        };
        ImagePicker.launchCamera(options, response => {
            if (response.uri) {
                this.setState({ image: response, nameImage: response.fileName });
            }
        });
    };

    handleUploadImage = () => {
        const options = {
            noData: true,
        };
        ImagePicker.launchImageLibrary(options, response => {
            if (response.uri) {
                this.setState({ image: response, nameImage: response.fileName });
            }
        });
    };

    onSubmit = async (event) => {
        event.preventDefault()
        var data = new FormData()
        data.append('email', this.state.email)
        data.append('first_name', this.state.first_name)
        data.append('last_name', this.state.last_name)
        data.append('id_province', this.state.id_province)
        data.append('id_city', this.state.id_city)
        data.append('id_sub_city', this.state.id_sub_city)
        data.append('address', this.state.address)
        data.append('no_telephone', this.state.no_telephone)
        if ((this.state.image === null) === true) {
            alert('Silahkan Login Kembali!')
            await this.props.dispatch(updateAccount(this.state.id, data));
            await this.props.dispatch(logout());
            await this.props.navigation.navigate('Login');
        } else if ((this.state.image === null) === false) {
            let File = {
                name: this.state.image.fileName,
                type: this.state.image.type,
                uri: this.state.image.uri
            }
            data.append('image', File)
            alert('Silahkan Login Kembali bro!')
            await this.props.dispatch(updateAccount(this.state.id, data));
            await this.props.dispatch(logout());
            await this.props.navigation.navigate('Login');
        }
    }

    render() {
        console.disableYellowBox = true
        const { image } = this.state;
        const { province, city, subcity } = this.props
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
<<<<<<< HEAD
                                <View style={{ flexDirection: 'row' }}>
                                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                                        <Item style={{ width: 100 }}>
                                            <TextInput placeholder="Nama Depan" value={this.state.first_name} onChangeText={(text) => this.setState({ first_name: text })} />
                                        </Item>
                                    </View>
                                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                                        <Item style={{ width: 100 }}>
                                            <TextInput placeholder="Nama Belakang" value={this.state.last_name} onChangeText={(text) => this.setState({ last_name: text })} />
                                        </Item>
                                    </View>
=======
                                <View>
                                    <Item >
                                        <TextInput placeholder="Nama Depan" onChangeText={(text) => this.setState({ email: text })}>{this.state.email}</TextInput>
                                    </Item>
                                </View>
                                <View>
                                    <Item >
                                        <TextInput placeholder="Nama Belakang" onChangeText={(text) => this.setState({ email: text })}>{this.state.email}</TextInput>
                                    </Item>
>>>>>>> 1f76d540beb9188ead9a9e876594f1e06a706995
                                </View>
                                <View>
                                    <Item >
                                        <TextInput placeholder="Email" value={this.state.email} onChangeText={(text) => this.setState({ email: text })} />
                                    </Item>
                                </View>
                                <View>
                                    <Item >
                                        <TextInput placeholder="Nomer Telephone" keyboardType={'numeric'} value={this.state.no_telephone} onChangeText={(text) => this.setState({ no_telephone: text })} />
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
                                            selectedValue={(this.state && this.state.id_province)}
                                            onValueChange={(value) => {
                                                this.setState({ id_province: value });
                                            }}
                                        >
                                            {province.map((item, index) => {
                                                return (
                                                    <Picker.Item key={index} value={item.id} label={item.name_province} />
                                                )
                                            })}
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
                                            selectedValue={(this.state && this.state.id_city)}
                                            onValueChange={(value) => {
                                                this.setState({ id_city: value });
                                            }}
                                        >
                                            {city.map((item, index) => {
                                                return (
                                                    <Picker.Item key={index} value={item.id} label={item.name_city} />
                                                )
                                            })}
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
                                            selectedValue={(this.state && this.state.id_sub_city)}
                                            onValueChange={(value) => {
                                                this.setState({ id_sub_city: value });
                                            }}
                                        >
                                            {subcity.map((item, index) => {
                                                return (
                                                    <Picker.Item key={index} value={item.id} label={item.name_sub_city} />
                                                )
                                            })}
                                        </Picker>
                                    </View>
                                </View>
                                <View>
                                    <Item >
<<<<<<< HEAD
                                        <TextInput placeholder="Alamat Lengkap" value={this.state.address} onChangeText={(text) => this.setState({ address: text })} />
=======
                                        <TextInput placeholder="Alamat Lengkap" onChangeText={(text) => this.setState({ address: text })}>{this.state.address}</TextInput>
>>>>>>> 1f76d540beb9188ead9a9e876594f1e06a706995
                                    </Item>
                                </View>
                                <View>

                                </View>
                                <View style={{ flexDirection: 'row', top: 10, height: 130 }}>
                                    <View style={{ flex: 1 }}>
                                        <Text>Choose</Text>
                                        <Icon name="camera" style={{ fontSize: 30, left: 10, color: '#35B829', top: 10 }} onPress={this.handleChooseImage}></Icon>
                                        <Icon name="file" style={{ fontSize: 30, left: 10, color: '#35B829', top: 30 }} onPress={this.handleUploadImage}></Icon>

                                    </View>
                                    <View style={{ flex: 2, flexDirection: 'column' }}>
                                        {/* <Text>hello</Text> */}
                                        <Text>{image && (
                                            <Image
                                                source={{ uri: image.uri }}
                                                style={{ width: 100, height: 100 }}
                                            />
                                        )}</Text>
                                        <Text style={{ flexWrap: 'nowrap' }}>{this.state.nameImage}</Text>
                                    </View>
                                </View>
                                <View style={{ top: 30, marginHorizontal: 10, flexDirection: 'row' }}>
                                    <View style={{ flex: 1, justifyContent: "center", alignItems: 'center' }}>
                                        <Button style={{ width: 100, justifyContent: "center", alignItems: 'center', backgroundColor: '#D71149' }} onPress={() => this.props.navigation.navigate('Account')}>
                                            <Text style={{ color: 'white' }}>Cancel</Text>
                                        </Button>
                                    </View>
                                    <View style={{ flex: 1, justifyContent: "center", alignItems: 'center' }}>
                                        <Button style={{ width: 100, justifyContent: "center", alignItems: 'center', backgroundColor: '#35B829' }} onPress={this.onSubmit}>
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

const mapStateToProps = (state) => {
    return {
        auth: state.auth.profile,
        province: state.regions.province,
        city: state.regions.city,
        subcity: state.regions.subcity
    }
}

export default connect(mapStateToProps)(InfoAkun);