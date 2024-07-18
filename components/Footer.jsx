import { StyleSheet, Text, View } from "react-native";

import Colors from "../constants/colors";

const Footer = () => {
  return (
    <View style={styles.container}>
      <Text>Footer</Text>
    </View>
  );
};

export default Footer;

const styles = StyleSheet.create({
  container: {
    paddingTop: 30,
    paddingBottom: 30,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.headerFooterBackground,
  },
});
