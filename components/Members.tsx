import {
  FlatList,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { MaterialIcons } from "@expo/vector-icons";

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
            <View style={styles.socialContainer}>
              <TouchableOpacity
                style={styles.social}
                onPress={() => console.log("Facebook")}
              >
                {item.facebook}
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.social}
                onPress={() => console.log("Twitter")}
              >
                {item.twitter}
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.social}
                onPress={() => console.log("Github")}
              >
                {item.github}
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.social}
                onPress={() => console.log("LinkedIn")}
              >
                {item.linkedin}
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.social}
                onPress={() => console.log("Instagram")}
              >
                {item.instagram}
              </TouchableOpacity>
            </View>
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

  socialContainer: {
    flexDirection: "row",
    marginTop: 5,
    justifyContent: "space-between",
  },

  social: {
    marginHorizontal: 7,
  },

  position: {
    fontSize: 20,
  },

  content: {
    height: 130,
    fontSize: 15,
  },
});
