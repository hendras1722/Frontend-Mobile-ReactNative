import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
// import { Provider } from 'react-redux';

import HomeScreen from './src/Components/screen/Home/HomeScreen';
import SearchScreen from './src/Components/screen/Search/SearchScreen'

const homeNavigator = createStackNavigator(
    {
        Home: HomeScreen,
        Search: SearchScreen
    }
)

const AppContainer = createAppContainer(homeNavigator);

function App() {
    return (
        <AppContainer />

    )
}

export default App;