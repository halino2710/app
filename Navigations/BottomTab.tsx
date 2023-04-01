import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { MaterialIcons, MaterialCommunityIcons } from "@expo/vector-icons";

import Background from "../components/AboutUs/Background";
import Mision from "../components/AboutUs/Mission";
import Vision from "../components/AboutUs/Vision";

const Bottom = createBottomTabNavigator();

const BackgroundScreen = () => {
  return <Background />;
};

const MissionScreen = () => {
  return <Mision />;
};

const VisionScreen = () => {
  return <Vision />;
};

const BottomTab = () => {
  return (
    <Bottom.Navigator
      screenOptions={{
        tabBarActiveBackgroundColor: "purple",
        tabBarActiveTintColor: "#fff",
        tabBarInactiveTintColor: "#000",
        tabBarInactiveBackgroundColor: "#fff",
        headerShown: false,
      }}
    >
      <Bottom.Screen
        name="BackgroundScreen"
        component={BackgroundScreen}
        options={{
          tabBarIcon: ({ size, color }) => (
            <MaterialIcons name="home" size={size} color={color} />
          ),
        }}
      />
      <Bottom.Screen
        name="MissionScreen"
        component={MissionScreen}
        options={{
          tabBarIcon: ({ size, color }) => (
            <MaterialIcons name="home" size={size} color={color} />
          ),
        }}
      />
      <Bottom.Screen
        name="VisionScreen"
        component={VisionScreen}
        options={{
          tabBarIcon: ({ size, color }) => (
            <MaterialIcons name="home" size={size} color={color} />
          ),
        }}
      />
    </Bottom.Navigator>
  );
};

export default BottomTab;

const styles = StyleSheet.create({});
