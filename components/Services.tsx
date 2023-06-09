import {
  FlatList,
  StyleSheet,
  Text,
  View,
  Image,
  StatusBar,
} from "react-native";
import React from "react";

import { servicesData } from "../Model/data";

const Services = () => {
  return (
    <View style={styles.mainContainer}>
      <FlatList
        data={servicesData}
        keyExtractor={(items) => items.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <Image source={item.image} style={styles.image} />
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.content}>{item.content}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default Services;

const styles = StyleSheet.create({
  mainContainer: {
    marginHorizontal: 10,
  },

  itemContainer: {
    backgroundColor: "white",
    alignItems: "center",
    margin: 10,
    padding: 10,
    shadowColor: "#50062A",
    elevation: 10,
    borderRadius: 10,
  },

  image: {
    width: 300,
    height: 300,
    borderRadius: 5,
  },

  title: {
    fontSize: 25,
    fontWeight: "bold",
    marginTop: 10,
    padding: 5,
  },

  content: {
    height: 187,
    fontSize: 16,
  },
});
