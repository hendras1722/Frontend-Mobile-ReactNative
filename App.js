import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { Provider } from 'react-redux'

import store from './src/Components/redux/store';
import HomeScreen from './src/Components/screen/Home/HomeScreen';

const homeNavigator = createStackNavigator(
  {
    Home: HomeScreen
  }
)

// const AppNavigator = createSwitchNavigator(
//   {
//     Home: homeNavigator,
//   }
// );

const AppContainer = createAppContainer(homeNavigator);

function App() {
  return (
    <Provider store={store}>
      <AppContainer />
    </Provider>
  )
}

export default App;