import {
  StyleSheet,
  Text,
  View,
  Image,
  StatusBar,
  Dimensions,
} from "react-native";
import React from "react";

import { ScrollView } from "react-native";

const Background = () => {
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
          <Text style={styles.header}>Background</Text>
          <Text style={styles.body}>
            SchoolAll is a digital transformation company dedicated to helping
            academic institutions transition from manual and paper-based
            practices to fully automated and digital workflows. We understand
            that many schools lack the financial and human resources to develop
            in- house technology teams and keep up with the rapid pace of
            digital transformation. As a result, schools have been left behind
            other industries in adopting digital solutions. Our mission is to
            bridge this gap by building custom software solutions tailored to
            the unique needs of each school. Unlike other vendors who offer
            one-size-fits-all, off-the-shelf software solutions, we believe in
            creating bespoke software solutions that are fully managed and
            evolve with the needs of the school. Our team of experienced
            developers uses modern software development methodologies to build,
            manage and evolve digital solutions for academic institutions. This
            allows schools to focus on their core business of educating
            students, while we handle all the technical intricacies of
            maintaining the software. At SchoolAll, we are committed to
            providing high-quality, cost-effective and customized digital
            solutions to help schools keep up with the ever-evolving landscape
            of technology. We believe that digital transformation is not just a
            buzzword, but a necessary step in ensuring that our education system
            remains relevant and accessible to all.
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default Background;

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
