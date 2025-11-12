import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import React from "react";

const TabsLayout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "red",
        tabBarInactiveTintColor: "green",
        tabBarStyle:{
          backgroundColor:"#1e293b",
          borderTopWidth:1,
          borderTopColor:"yellow",
          height:90,
          paddingBottom:30,
          paddingTop:10
        },
        tabBarLabelStyle:{
          fontSize:12,
          fontWeight:"600"
        },
        headerShown:false
      }}
    >
      {/* Todo Icon */}
      <Tabs.Screen
        name="index"
        options={{
          title: "todo",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="flash-outline" size={size} color={color} />
          ),
        }}
      />

      {/* Settings Icon */}
      <Tabs.Screen
        name="settings"
        options={{
          title: "settings",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="settings" size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
};

export default TabsLayout;
