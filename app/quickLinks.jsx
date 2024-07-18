import { StyleSheet, Text, View } from "react-native";
import Header from "../components/Header";

import Colors from "../constants/colors";

const QuickLinks = () => {
  return (
    <>
      <Header title="Quick Links" />
      <View style={styles.container}>
        <Text>QuickLinks</Text>
      </View>
    </>
  );
};

export default QuickLinks;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: Colors.backgroundDark,
    alignItems: "stretch",
    justifyContent: "flex-start",
    fontFamily: "OpenSans-Regular",
  },
});
