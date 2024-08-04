import { StyleSheet, Text, ScrollView, View } from "react-native";
import { useGlobalSearchParams } from "expo-router";

import Header from "../components/misc/Header";

import Colors from "../constants/colors";

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
    backgroundColor: Colors.backgroundDark,
  },
  article: {
    padding: 20,
  },
  title: {
    fontSize: 25,
    fontFamily: Colors.fontFamily,
    marginBottom: 10,
    color: Colors.textDark,
  },
  content: {
    fontSize: 15,
    fontFamily: Colors.fontFamily,
    marginBottom: 10,
    color: Colors.textDark,
  },
  date: {
    fontFamily: Colors.fontFamily,
    color: Colors.dateColor,
  },
});
