import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { Provider } from 'react-redux'

import store from './src/Components/redux/store';
import HomeScreen from './src/Components/screen/Home/HomeScreen';
import SearchScreen from './src/Components/screen/Search/SearchScreen'
import OrderanScreen from './src/Components/screen/Order/OrderScreen';
import TransactionScreen from './src/Components/screen/transaction/TransactionScreen'
import DetailTransaction from './src/Components/screen/transaction/Detailtransaction'
import AccountScreen from './src/Components/screen/Account/AccountScreen'
import InfoAkun from './src/Components/screen/Layout/InfoAkun'
import LoginScreen from './src/Components/screen/Login/LoginScreen'
import PasswordScreen from './src/Components/screen/Layout/ChangePassword'
import Password1Screen from './src/Components/screen/Layout/ChangePasswordlogin'
import BuatAkunScreen from './src/Components/screen/BuatAkun/BuatAkunScreen'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';


const tabNavigator = createBottomTabNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <Icon name="home" color={tintColor} style={{ fontSize: 30, color: '#848484' }}></Icon>
        )
      }
    },
    Transaction: {
      screen: TransactionScreen,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <Icon name="script-text" style={{ fontSize: 30, color: '#848484' }}></Icon>
        )
      }
    },
    Account: {
      screen: AccountScreen,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <Icon name="account" style={{ fontSize: 30, color: '#848484' }}></Icon>
        )
      },
    },
  }
)

const homeNavigator = createStackNavigator(
  {
    Home: {
      screen: tabNavigator,
      navigationOptions: {
        headerShown: false
      }
    },
    Search: {
      screen: SearchScreen,
      navigationOptions: {
        tabBarVisible: false,
        tabbar: ({ state }) => ({
          visible: false
        })
      },
    },
    Order: OrderanScreen,
    Transaction: TransactionScreen,
    DetailTransaction: DetailTransaction,
    Account: AccountScreen,
    InfoAkun: InfoAkun,
    UbahPassword: PasswordScreen,
    UbahPassword1: Password1Screen,
    BuatAkun: BuatAkunScreen
  }
)
const AppNavigator = createSwitchNavigator(
  {
    Home: homeNavigator,
    Login: LoginScreen,
    Search: SearchScreen
  },
  {
    initialRouteName: 'Login',
  }
);


const AppContainer = createAppContainer(AppNavigator);

function App() {
  return (
    <Provider store={store}>
      <AppContainer />
    </Provider>
  )
}

export default App;