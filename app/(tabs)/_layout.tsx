import { Tabs } from "expo-router";
import React from "react";

export default function TabsLayout() {
  return (
  <Tabs>
  <Tabs.Screen name="index"
  options={{
    headerTitle:"Sticker Smash",
    headerLeft: () =><></>
  }}
  />
  <Tabs.Screen name="about"
   options={{
    headerTitle:"About",
  }}
   />
  

  <Tabs.Screen name="+not-found"
    options={{}}
    /> 
  </Tabs>
  );
}
