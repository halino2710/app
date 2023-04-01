import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";

const Home = () => {
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image
          source={require("../assets/images/logo.png")}
          style={styles.logo}
        />
        <Text style={styles.logoSchool}>School</Text>
        <Text style={styles.logoAll}>All</Text>
      </View>
      <View style={styles.imageContainer}>
        <Image
          source={require("../assets/images/banner.png")}
          style={styles.image}
        />
      </View>
      <Text style={styles.introMain}>We offer digital services to schools</Text>
      <Text style={styles.introSub}>
        SchoolAll Company Here to Digitize Education
      </Text>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#21005D",
    width: "100%",
    height: "100%",
  },

  logoContainer: {
    flexDirection: "row",
    alignItems: "center",
  },

  logo: {
    width: 25,
    height: 45,
    marginLeft: 20,
  },

  logoSchool: {
    fontSize: 30,
    fontWeight: "bold",
    color: "white",
    marginLeft: 10,
  },

  logoAll: {
    fontSize: 30,
    color: "#A15CFF",
    fontWeight: "bold",
  },

  imageContainer: {
    marginTop: 20,
    width: "100%",
    height: "60%",
  },

  image: {
    width: "95%",
    height: "100%",
  },

  introMain: {
    color: "white",
    opacity: 1,
    fontWeight: "bold",
    fontSize: 30,
    lineHeight: 40,
    textAlign: "justify",
    marginHorizontal: 20,
    marginTop: 20,
  },

  introSub: {
    textAlign: "justify",
    color: "grey",
    marginVertical: 8,
    marginHorizontal: 20,
    fontSize: 20,
  },
});
