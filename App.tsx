import React from "react";
import { createTheme, ThemeProvider } from "@rneui/themed";
import { SafeAreaView, Text, StatusBar } from "react-native";
import { Provider as PaperProvider } from "react-native-paper";

import Home from "./Components/Home";

import "react-native-gesture-handler";

const theme = createTheme({
  lightColors: {},
  darkColors: {},
});

export default function App() {
  return (
    <SafeAreaView>
      <ThemeProvider theme={theme}>
        <Home />
      </ThemeProvider>
    </SafeAreaView>
    //
  );
}
