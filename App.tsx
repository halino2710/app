import React from "react";
import { createTheme, ThemeProvider } from "@rneui/themed";
import { SafeAreaView, Text } from "react-native";

import "react-native-gesture-handler";
const theme = createTheme({
  lightColors: {},
  darkColors: {},
});

export default function App() {
  return (
    <SafeAreaView>
      <SafeAreaView>
        <ThemeProvider theme={theme}>
          <Text>Hello, world</Text>
        </ThemeProvider>
      </SafeAreaView>
    </SafeAreaView>
    //
  );
}
