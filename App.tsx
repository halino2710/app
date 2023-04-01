import React from "react";
import { createTheme, ThemeProvider } from "@rneui/themed";
import { SafeAreaView } from "react-native";

import "react-native-gesture-handler";

import Drawer from "./Navigations/Drawer";
import BottomTab from "./Navigations/BottomTab";

const theme = createTheme({
  lightColors: {},
  darkColors: {},
});

export default function App() {
  return (
    <>
      <SafeAreaView>
        <ThemeProvider theme={theme}></ThemeProvider>
      </SafeAreaView>
      <Drawer />
    </>
    //
  );
}
