import { StyleSheet, Text, TouchableOpacity } from "react-native";
import * as WebBrowser from "expo-web-browser";

import Colors from "../constants/colors";

const QuickLink = (props) => {
  async function openURL() {
    const url = props.url;
    let result = await WebBrowser.openBrowserAsync(url);
  }

  return (
    <TouchableOpacity style={styles.container} onPress={openURL}>
      <props.image height={50} width={50} fill={Colors.imageColor} />
      <Text style={styles.text}>{props.title}</Text>
    </TouchableOpacity>
  );
};

export default QuickLink;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    padding: 20,
    marginBottom: 20,
    borderRadius: 10,
    borderColor: Colors.textDark,
    flexDirection: "row",
    justifyContent: "start",
    alignItems: "center",
    backgroundColor: Colors.contentBackgroundDark,
  },
  text: {
    color: Colors.textDark,
    fontFamily: Colors.fontFamily,
    marginLeft: 10,
  },
});
