import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";

import Constants from "../../constants/constants";

const NewsArticle = (props) => {
  const router = useRouter();

  const getFirstXWords = (text, limit) => {
    const words = text.split(" ");
    if (words.length <= limit) return text;
    return words.slice(0, limit).join(" ") + "...";
  };

  function showArticle() {
    if (props.article) {
      router.push({
        pathname: "/newsArticleInfo",
        params: { data: JSON.stringify(props.article) },
      });
    }
  }

  return (
    <TouchableOpacity style={styles.container} onPress={showArticle}>
      <Text style={styles.title}>{props.article.title}</Text>
      <Text style={styles.content}>
        {getFirstXWords(props.article.content, 10)}
      </Text>
      <Text style={styles.date}>{props.article.date}</Text>
    </TouchableOpacity>
  );
};

export default NewsArticle;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    marginBottom: 20,
    borderRadius: 10,
    backgroundColor: Constants.contentBackgroundDark,
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
