import React from "react";
import { createTheme, ThemeProvider } from "@rneui/themed";
import { SafeAreaView } from "react-native";

import Members from "./components/Members";

import "react-native-gesture-handler";

const theme = createTheme({
  lightColors: {},
  darkColors: {},
});

export default function App() {
  return (
    <SafeAreaView>
      <ThemeProvider theme={theme}>
        <Members />
      </ThemeProvider>
    </SafeAreaView>
    //
  );
}
