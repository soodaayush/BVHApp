import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";

import Colors from "../constants/colors";

const DirectoryItem = (props) => {
  return (
    <TouchableOpacity style={styles.container}>
      <Text style={styles.text}>{props.name}</Text>
    </TouchableOpacity>
  );
};

export default DirectoryItem;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    padding: 20,
    marginBottom: 20,
    borderRadius: 10,
    borderColor: Colors.textDark,
    flexDirection: "row",
    justifyContent: "start",
    alignItems: "center",
    backgroundColor: Colors.contentBackgroundDark,
  },
  text: {
    color: Colors.textDark,
    fontFamily: Colors.fontFamily,
    marginLeft: 10,
    fontSize: 16,
  },
});
