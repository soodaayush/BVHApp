import { StyleSheet, Text, View, ScrollView } from "react-native";

import Header from "../components/Header";
import NewsArticle from "../components/NewsArticle";

const News = () => {
  return (
    <>
      <Header title="News" />
      <View style={styles.container}>
        <ScrollView contentContainerStyle={styles.news}>
          <NewsArticle title="Bay View High" />
        </ScrollView>
      </View>
    </>
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
  news: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    width: 350,
    alignSelf: "stretch",
  },
});
