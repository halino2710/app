import React from "react";
import { createTheme, ThemeProvider } from "@rneui/themed";
import { SafeAreaView } from "react-native";

import Mision from "./components/AboutUs/Mission";

import "react-native-gesture-handler";

const theme = createTheme({
  lightColors: {},
  darkColors: {},
});

export default function App() {
  return (
    <SafeAreaView>
      <ThemeProvider theme={theme}>
        <Mision />
      </ThemeProvider>
    </SafeAreaView>
    //
  );
}
