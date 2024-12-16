import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Navigation from './src/navigation';
import { store } from './src/store/store';
import { Provider } from 'react-redux';



const App =() => {
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
}

export default App;
