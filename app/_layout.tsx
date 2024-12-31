import { Stack } from "expo-router";
import React from "react";
import { LogBox } from "react-native";
import { StatusBar } from "expo-status-bar";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import * as SplashScreen from 'expo-splash-screen';
import { Drawer } from "expo-router/drawer";
import { Slot } from "expo-router";
LogBox.ignoreAllLogs(true);
SplashScreen.preventAutoHideAsync();
setTimeout(SplashScreen.hideAsync, 5000);

export default function RootLayout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
       <Slot />
    {/* <Drawer>
      <Drawer.Screen
        name="index" // This is the name of the page and must match the url from root
        options={{
          drawerLabel: 'Home',
          title: 'overview',
        }}
      />
      <Drawer.Screen
        name="user/[id]" // This is the name of the page and must match the url from root
        options={{
          drawerLabel: 'User',
          title: 'overview',
        }}
      />
    </Drawer> */}
    {/* <Stack>
        <Stack.Screen
          name="(tabs)"
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen name="+not-found" options={{}} />
      </Stack>  */}
      
  </GestureHandlerRootView>
  );
}
