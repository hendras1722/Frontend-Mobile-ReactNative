import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { Provider } from 'react-redux'

import store from './src/Components/redux/store';
import HomeScreen from './src/Components/screen/Home/HomeScreen';
import SearchScreen from './src/Components/screen/Search/SearchScreen'
import OrderScreen from './src/Components/screen/Order/OrderScreen'
import OrderanScreen from './src/Components/screen/Order/OrderScreen';

const homeNavigator = createStackNavigator(
  {
    Home: HomeScreen,
    Search: SearchScreen,
    Order: OrderanScreen
  }
)
const tabNavigator = createBottomTabNavigator(
  {
    Home: HomeScreen,
    Search: SearchScreen
  }
)

const AppContainer = createAppContainer(tabNavigator);

function App() {
  return (
    <Provider store={store}>
      <AppContainer />
    </Provider>
  )
}

export default App;