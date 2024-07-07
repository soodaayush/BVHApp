import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";

const Header = () => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require("../assets/arrow.png")} />
      <Text>Bay View High School</Text>
      <Image style={styles.image} source={require("../assets/hamburger.png")} />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    paddingTop: 60,
    paddingBottom: 30,
    paddingRight: 20,
    paddingLeft: 20,
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#a1cff0",
  },
  image: {
    height: 20,
    width: 20,
  },
});
