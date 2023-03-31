import { StyleSheet, Text, View, Image, StatusBar } from "react-native";
import React from "react";

import { ScrollView } from "react-native";

const Mision = () => {
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
          <Text style={styles.header}>Mission</Text>
          <Text style={styles.missionStatememt}>
            Our mission is helping academic institutions – through digital
            transformation – transition away from traditional practices and
            adopt emerging technologies into their ecosystem.
          </Text>
          <Text style={styles.body}>
            At SchoolAll, our mission is to empower academic institutions with
            the tools and technology needed to keep pace with the rapidly
            evolving landscape of education. We believe that digital
            transformation is the key to unlocking new opportunities and
            providing a more seamless, efficient and effective learning
            experience. We are dedicated to partnering with academic
            institutions to help them transition away from traditional practices
            and adopt emerging technologies into their ecosystem. By leveraging
            modern software development methodologies, we build custom digital
            solutions that are tailored to meet the unique needs of each school.
            Our goal is to help schools streamline their operations, reduce
            costs, and improve the quality of education through the adoption of
            digital solutions. We believe that every student deserves access to
            the best possible education, and our mission is to help academic
            institutions achieve this goal through digital transformation.
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default Mision;

const styles = StyleSheet.create({
  container: {
    top: StatusBar.currentHeight,
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

  missionStatememt: {
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
