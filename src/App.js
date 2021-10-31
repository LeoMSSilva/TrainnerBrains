import React, {useEffect} from 'react';
import {SafeAreaView, ScrollView, StatusBar, Text} from 'react-native';
import Pomodoro from './pages/Pomodoro';
import SplashScreen from 'react-native-splash-screen';

const App = () => {
  useEffect(() => SplashScreen.hide(), []);
  return (
    <SafeAreaView>
      <StatusBar barStyle={'light-content'} />
      <Pomodoro />
    </SafeAreaView>
  );
};

export default App;
