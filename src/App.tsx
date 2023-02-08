import { useEffect, useState } from 'react';
import { StatusBar, useColorScheme } from 'react-native';
import SplashScreen from 'react-native-splash-screen';

import { ThemeProvider } from 'styled-components/native';

import { Routes } from './routes';
import { dark, light } from './theme';

export const App = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const [isDark, setIsDark] = useState(isDarkMode);

  useEffect(() => setIsDark(isDarkMode), [isDarkMode]);

  useEffect(() => {
    setTimeout(() => SplashScreen.hide(), 1000);
  }, []);

  return (
    <ThemeProvider theme={isDark ? dark : light}>
      <StatusBar
        barStyle={isDark ? 'light-content' : 'dark-content'}
        backgroundColor="transparent"
        translucent
      />

      <Routes />
    </ThemeProvider>
  );
};
