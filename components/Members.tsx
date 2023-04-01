import {
  FlatList,
  StyleSheet,
  Text,
  View,
  Image,
  StatusBar,
} from "react-native";
import React from "react";

import { memeberData } from "../Model/data";

const Members = () => {
  return (
    <View style={styles.mainContainer}>
      <FlatList
        data={memeberData}
        keyExtractor={(items) => items.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <Image source={item.image} style={styles.image} />
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.position}>{item.position}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default Members;

const styles = StyleSheet.create({
  mainContainer: {
    paddingTop: 25,
    margin: 10,
  },

  itemContainer: {
    alignItems: "center",
    margin: 10,
    padding: 10,
    shadowColor: "#52006A",
    elevation: 20,
    backgroundColor: "white",
    borderRadius: 10,
  },

  image: {
    width: 200,
    height: 200,
    borderRadius: 10,
  },

  name: {
    fontSize: 25,
    fontWeight: "bold",
    marginTop: 10,
    padding: 5,
  },

  position: {
    fontSize: 20,
  },

  content: {
    height: 130,
    fontSize: 15,
  },
});
