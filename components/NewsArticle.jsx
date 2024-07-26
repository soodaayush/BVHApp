import { StyleSheet, Text, View } from "react-native";

import Colors from "../constants/colors";

const NewsArticle = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{props.title}</Text>
      <Text style={styles.content}>{props.content}</Text>
      <Text style={styles.date}>{props.date}</Text>
    </View>
  );
};

export default NewsArticle;

const styles = StyleSheet.create({
  container: {
    width: "100%",
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
    color: Colors.textDark,
  },
});
