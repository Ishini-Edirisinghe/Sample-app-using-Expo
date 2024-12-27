import { Stack } from "expo-router";
import React from "react";
import { LogBox } from "react-native";
import { StatusBar } from "expo-status-bar";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import * as SplashScreen from 'expo-splash-screen';


LogBox.ignoreAllLogs(true);
SplashScreen.preventAutoHideAsync();
setTimeout(SplashScreen.hideAsync, 5000);

export default function RootLayout() {
  return (
    <GestureHandlerRootView  style={{flex:1}}>
    <StatusBar style="light" />
      <Stack>
        <Stack.Screen
          name="(tabs)"
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen name="+not-found" options={{}} />
      </Stack>
    </GestureHandlerRootView>
  );
}
