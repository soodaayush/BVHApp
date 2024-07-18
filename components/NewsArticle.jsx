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
    borderWidth: 1,
    marginBottom: 20,
    borderRadius: 10,
    borderColor: Colors.textDark,
  },
  title: {
    fontSize: 25,
    fontFamily: "OpenSans-Regular",
    marginBottom: 10,
    color: Colors.textDark,
  },
  content: {
    fontSize: 15,
    fontFamily: "OpenSans-Regular",
    marginBottom: 10,
    color: Colors.textDark,
  },
  date: {
    fontFamily: "OpenSans-Regular",
    color: Colors.textDark,
  },
});
