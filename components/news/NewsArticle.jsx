import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";

import Colors from "../../constants/colors";

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
    backgroundColor: Colors.contentBackgroundDark,
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
