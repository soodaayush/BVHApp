import { StyleSheet, Text, View } from "react-native";
import React from "react";

const NewsArticle = (props) => {
  return (
    <View style={styles.container}>
      <Text>{props.title}</Text>
    </View>
  );
};

export default NewsArticle;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    alignSelf: "stretch",
    width: "100%",
    padding: 20,
    borderWidth: 1,
  },
});
