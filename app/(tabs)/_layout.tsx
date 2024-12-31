import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Index from ".";
import AboutScreen from "./about";

const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: "#AA336A",
        headerStyle: { backgroundColor: "#AA336A" },
        headerTintColor: "#fff",
        tabBarStyle: { backgroundColor: "#FFFFFF" },
      }}
    >
      <Tab.Screen name="Home" component={Index} />
      <Tab.Screen name="About" component={AboutScreen} />
    </Tab.Navigator>
  );
}

function DrawerNavigator() {
  return (
    <Drawer.Navigator
      screenOptions={{
        drawerActiveTintColor: "#AA336A",
        drawerStyle: { backgroundColor: "#f9f9f9" },
        headerStyle: { backgroundColor: "#AA336A" },
        headerTintColor: "#fff",
        drawerLabelStyle: { fontSize: 16 },
      }}
    >
      {/* Include both Index and AboutScreen in the Drawer */}
      <Drawer.Screen name="Home" component={Index} />
      <Drawer.Screen name="About" component={AboutScreen} />
      
      {/* Include TabNavigator in the Drawer */}
      <Drawer.Screen name="Tabs" component={TabNavigator} />
    </Drawer.Navigator>
  );
}

export default function App() {
  return <DrawerNavigator />;
}
