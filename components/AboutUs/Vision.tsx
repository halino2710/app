import { StyleSheet, Text, View, Image, StatusBar } from "react-native";
import React from "react";

import { ScrollView } from "react-native";

const Vision = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.contentContainer}>
        <Image
          source={require("../../assets/images/mission.png")}
          style={{
            width: 300,
            height: 300,
          }}
        />
        <View style={styles.bodyContainer}>
          <Text style={styles.header}>VISION</Text>
          <Text style={styles.visionStatememt}>
            Our vision, ultimately, is to become the number one technology
            solutions provider for all of academia in the continent and beyond.
          </Text>
          <Text style={styles.body}>
            At SchoolAll, our vision is to revolutionize the education industry
            through digital transformation. We strive to be a leading provider
            of innovative and customized technology solutions for schools,
            colleges, and universities across the globe. Our ultimate goal is to
            become the go-to technology partner for academic institutions, not
            just in our continent but also beyond. We envision a future where
            every school has access to the latest technology and tools needed to
            provide an exceptional learning experience for their students. We
            believe that by creating customized, scalable and sustainable
            solutions, we can help academic institutions achieve their strategic
            goals, reduce costs, and improve the overall educational experience.
            As we continue to expand our reach and grow our business, we are
            committed to upholding our core values of innovation, excellence,
            and customer satisfaction. We are dedicated to staying at the
            forefront of emerging technologies, and constantly improving our
            solutions to ensure that they meet the evolving needs of our
            clients.
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default Vision;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
  },

  contentContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "100%",
    marginTop: 50,
  },

  bodyContainer: { height: "80%", width: "100%", marginHorizontal: 10 },

  header: {
    textAlign: "center",
    fontSize: 40,
    fontWeight: "bold",
    color: "#000",
    textDecorationLine: "underline",
  },

  visionStatememt: {
    fontStyle: "italic",
    fontSize: 22,
    marginHorizontal: 10,
    marginVertical: 10,
    textAlign: "justify",
    textDecorationLine: "underline",
  },

  body: {
    textAlign: "justify",
    justifyContent: "center",
    alignItems: "center",
    color: "#000",
    marginHorizontal: 10,
    fontSize: 20,
    lineHeight: 25,
    fontFamily: "Roboto",
  },
});
