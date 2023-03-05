import { StatusBar } from "expo-status-bar";
import * as SplashScreen from 'expo-splash-screen';
import {
  useFonts,
  Overpass_300Light,
  Overpass_400Regular,
  Overpass_600SemiBold,
  Overpass_700Bold,
} from '@expo-google-fonts/overpass';
import Routes from './src/routes';
import React from 'react';

export default function App() {

  let [fontsLoaded] = useFonts({
    Overpass_300Light,
    Overpass_400Regular,
    Overpass_600SemiBold,
    Overpass_700Bold,
  });
  if (!fontsLoaded) {
    return null;
  } 
  
  SplashScreen.hideAsync()
  
  return (
    <>
      <StatusBar/>
      <Routes/>
    </>
  );
}
