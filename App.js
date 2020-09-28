import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import {Button } from 'react-native';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';
import Navigator from './routes/homeStack';

const getFont = () => {
  return Font.loadAsync({
    'RawlineSemiBold': require('./assets/fonts/rawline-600.ttf'),
    'RawlineMedium': require('./assets/fonts/rawline-500.ttf'),
  });
}

export const ThemeContext = React.createContext();

export default function App() {
  const [fontsLoaded, setFontLoaded] = useState(false);
  const [darkTheme, setDarkTheme] = useState(true);

  function toggleTheme() {
    setDarkTheme(prevDarkTheme => !prevDarkTheme)
  }

  if (fontsLoaded) {
    return (

      <ThemeContext.Provider value={darkTheme}>
        <Button style={{padding:10}}title="Toggle dark theme" onPress={toggleTheme} color="#F15A29"/>
        <Navigator />
      </ThemeContext.Provider>
    );
  }
  else {
    return (
      <AppLoading startAsync={getFont}
        onFinish={() => setFontLoaded(true)} />
    )
  }
}
