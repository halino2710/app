import { StyleSheet } from "react-native";
import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";

import { HomeScreen } from "../Screens/HomeScreen";
import { ServiceScreen } from "../Screens/ServiceScreen";
import { MemberScreen } from "../Screens/MemberScreen";
import { AboutScreen } from "../Screens/AboutScreen";

const Drawer = createDrawerNavigator();

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
