import React from 'react';
import {SafeAreaView, ScrollView, StatusBar, Text} from 'react-native';
import Pomodoro from './pages/Pomodoro';

const App = () => {
  return (
    <SafeAreaView>
      <StatusBar barStyle={'light-content'} />
      <Pomodoro />
    </SafeAreaView>
  );
};

export default App;
