import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Home from "../components/Home";
import Services from "../components/Services";
import Members from "../components/Members";
import AboutUs from "../Navigations/BottomTab";

const Drawer = createDrawerNavigator();

const Stack = createBottomTabNavigator();

const HomeScreen = () => {
  return <Home />;
};
const ServiceScreen = () => {
  return <Services />;
};
const MemberScreen = () => {
  return <Members />;
};

const AboutScreen = () => {
  return <AboutUs />;
};

const TabNavigation = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        screenOptions={{
          headerTitleAlign: "center",
        }}
      >
        <Drawer.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{ headerTitle: "Home", title: "Home" }}
        />
        <Drawer.Screen
          name="ServiceScreen"
          component={ServiceScreen}
          options={{ headerTitle: "Our Services", title: "Services" }}
        />
        <Drawer.Screen
          name="MemberScreen"
          component={MemberScreen}
          options={{ headerTitle: "Meet the Team", title: "Members" }}
        />

        <Drawer.Screen
          name="AboutScreen"
          component={AboutScreen}
          options={{ headerTitle: "About Us", title: "About" }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default TabNavigation;

const styles = StyleSheet.create({});
