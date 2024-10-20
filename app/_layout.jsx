import { Stack } from "expo-router";
import { useFonts } from "expo-font";
import { useState } from "react";
import {CreateJourneyContext} from '../context/CreateJourneyContext'

export default function RootLayout() {

  useFonts({
      'outfit' : require('./../assets/fonts/Outfit-Regular.ttf'),
      'outfit-black' : require('./../assets/fonts/Outfit-Black.ttf'),
      'outfit-bold' : require('./../assets/fonts/Outfit-Bold.ttf'),
      'outfit-extrab' : require('./../assets/fonts/Outfit-ExtraBold.ttf'),
      'outfit-extral' : require('./../assets/fonts/Outfit-ExtraLight.ttf'),
      'outfit-light' : require('./../assets/fonts/Outfit-Light.ttf'),
      'outfit-medium' : require('./../assets/fonts/Outfit-Medium.ttf'),
      'outfit-semib' : require('./../assets/fonts/Outfit-SemiBold.ttf'),
      'Robo' : require('./../assets/fonts/Robo.ttf'),
      'Robo2' : require('./../assets/images/Robo2.ttf')
  })

  const [userData, setUserData] = useState([]);

  return (
    <CreateJourneyContext.Provider value={{userData, setUserData}}>
      <Stack screenOptions={{headerShown: false}}>
        <Stack.Screen name="index" />
        {/* <Stack.Screen name="(tabs)" /> */}
      </Stack>
    </CreateJourneyContext.Provider>
  );
}
