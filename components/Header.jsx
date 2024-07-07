import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import React from "react";

const Header = () => {
  return (
    <View style={styles.container}>
      <Text>Bay View High School</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    paddingTop: 60,
    paddingBottom: 30,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#a1cff0",
  },
});
