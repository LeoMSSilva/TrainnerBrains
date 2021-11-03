import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Pomodoro from '../pages/Pomodoro';
import Welcome from '../pages/Welcome';

const Routes = () => {
  const {Navigator, Screen} = createStackNavigator();

  return (
    <NavigationContainer>
      <Navigator
        initialRouteName="Welcome"
        screenOptions={{
          headerMode: 'none',
        }}>
        <Screen name="Welcome" component={Welcome} />
        <Screen name="Pomodoro" component={Pomodoro} />
      </Navigator>
    </NavigationContainer>
  );
};

export default Routes;
