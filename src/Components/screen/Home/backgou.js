import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
// import { Provider } from 'react-redux';

import HomeScreen from './src/Components/screen/Home/HomeScreen';

const homeNavigator = createStackNavigator(
    {
        Home: HomeScreen
    }
)

const AppNavigator = createSwitchNavigator(
    {
        Home: homeNavigator,
    }
);

const AppContainer = createAppContainer(AppNavigator);

function App() {
    return (
        <AppContainer />

    )
}

export default App;