import { StyleSheet, Text, View } from "react-native";

const NewsArticle = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{props.title}</Text>
      <Text style={styles.content}>{props.content}</Text>
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
  },
  title: {
    fontSize: 25,
  },
  content: {
    fontSize: 15,
  },
});
