import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  StatusBar,
  Animated,
} from "react-native";
import React from "react";

const Home = () => {
  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <Image
          source={require("../assets/images/logo.png")}
          style={{ width: 25, height: 45, marginLeft: 20 }}
        />
        <Text
          style={{
            fontSize: 30,
            fontWeight: "bold",
            color: "white",
            marginLeft: 10,
          }}
        >
          School
        </Text>
        <Text
          style={{
            fontSize: 30,
            color: "#A15CFF",
            fontWeight: "bold",
          }}
        >
          All
        </Text>
      </View>
      <View style={styles.imageContainer}>
        <Image
          source={require("../assets/images/banner.png")}
          style={styles.logo}
        />
      </View>
      <Text
        style={{
          color: "white",
          opacity: 1,
          fontWeight: "bold",
          fontSize: 30,
          lineHeight: 40,
          textAlign: "justify",
          marginHorizontal: 20,
          marginTop: 50,
        }}
      >
        We offer digital services to schools
      </Text>
      <Text
        style={{
          textAlign: "justify",
          color: "grey",
          marginVertical: 8,
          marginHorizontal: 20,
          fontSize: 20,
        }}
      >
        SchoolAll Company Here to Digitize Education
      </Text>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    top: StatusBar.currentHeight,
    backgroundColor: "#21005D",
    width: "100%",
    height: "100%",
    alignItems: "center",
  },

  imageContainer: {
    marginTop: 20,
    width: "100%",
    height: "50%",
  },

  logo: {
    width: "95%",
    height: "100%",
  },
});
