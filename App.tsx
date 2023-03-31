import React from "react";
import { createTheme, ThemeProvider } from "@rneui/themed";
import { SafeAreaView } from "react-native";

import "react-native-gesture-handler";
import Services from "./components/Services";

const theme = createTheme({
  lightColors: {},
  darkColors: {},
});

export default function App() {
  return (
    <SafeAreaView>
      <ThemeProvider theme={theme}>
        <Services />
      </ThemeProvider>
    </SafeAreaView>
    //
  );
}
