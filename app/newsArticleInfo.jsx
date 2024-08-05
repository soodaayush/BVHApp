import { StyleSheet, Text, ScrollView, View } from "react-native";
import { useGlobalSearchParams } from "expo-router";

import Header from "../components/misc/Header";

import Constants from "../constants/constants";

const NewsArticleInfo = () => {
  const { data } = useGlobalSearchParams();
  const parsedData = JSON.parse(data);

  return (
    <>
      <Header title="News Article" />
      <View style={styles.container}>
        <ScrollView contentContainerStyle={styles.article}>
          <Text style={styles.title}>{parsedData.title}</Text>
          <Text style={styles.content}>{parsedData.content}</Text>
          <Text style={styles.date}>{parsedData.date}</Text>
        </ScrollView>
      </View>
    </>
  );
};

export default NewsArticleInfo;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Constants.backgroundDark,
  },
  article: {
    padding: 20,
  },
  title: {
    fontSize: 25,
    fontFamily: Constants.fontFamily,
    marginBottom: 10,
    color: Constants.textDark,
  },
  content: {
    fontSize: 15,
    fontFamily: Constants.fontFamily,
    marginBottom: 10,
    color: Constants.textDark,
  },
  date: {
    fontFamily: Constants.fontFamily,
    color: Constants.dateColor,
  },
});
