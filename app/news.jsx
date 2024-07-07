import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Link } from "expo-router";

const News = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>News</Text>
      <Link href="/">Index</Link>
    </SafeAreaView>
  );
};

export default News;

const styles = StyleSheet.create({
  container: {
    padding: 30,
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "start",
  },
});
