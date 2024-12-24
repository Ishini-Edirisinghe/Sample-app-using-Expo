import { Tabs } from "expo-router";
import React from "react";
import {Ionicons} from '@expo/vector-icons';

export default function TabsLayout() {
  return (
  <Tabs
  screenOptions={{
    tabBarActiveTintColor:"#AA336A",
    headerStyle : {
      backgroundColor: "#AA336A",
    },
    headerShadowVisible:false,
    headerTintColor:"#fff",
    tabBarStyle :{
      backgroundColor :"#FFFFFF",
    }
  }}
  
  >

  <Tabs.Screen name="index"
  options={{
    headerTitle:"Sticker Smash",
   tabBarIcon:({focused,color}) => 
   <Ionicons name={focused ? "home-sharp" : "home-outline"} 
   color={color}
   size={25}/>,
  }}
  />
  <Tabs.Screen name="about"
   options={{
    headerTitle:"About",
    tabBarIcon:({focused,color}) => 
      <Ionicons name={focused ? "information-circle" : "information-circle-outline"} 
      color={color}
      size={24}/>,
  }}
   />
  

  <Tabs.Screen name="+not-found"
    options={{}}
    /> 
  </Tabs>
  );
}
