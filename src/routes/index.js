import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Welcome from '../pages/Welcome';
import SelectTraining from '../pages/SelectTraining';
import Pomodoro from '../pages/Pomodoro';
import FastReading from '../pages/FastReading';
// import StudySchedule from '../pages/StudySchedule';
import Memorization from '../pages/Memorization';

const Routes = () => {
  const {Navigator, Screen} = createStackNavigator();

  return (
    <NavigationContainer>
      <Navigator
        initialRouteName="Welcome"
        screenOptions={{
          headerShown: false,
        }}>
        <Screen name="Welcome" component={Welcome} />
        <Screen name="SelectTraining" component={SelectTraining} />
        <Screen name="FastReading" component={FastReading} />
        <Screen name="Pomodoro" component={Pomodoro} />
        <Screen name="Memorization" component={Memorization} />
        {/* <Screen name="StudySchedule" component={StudySchedule} /> */}
      </Navigator>
    </NavigationContainer>
  );
};

export default Routes;
