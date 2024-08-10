import { StyleSheet, Text, TouchableOpacity } from "react-native";
import * as WebBrowser from "expo-web-browser";

import Constants from "../../constants/constants";

const QuickLink = (props) => {
  async function openURL() {
    const url = props.url;
    let result = await WebBrowser.openBrowserAsync(url);
  }

  return (
    <TouchableOpacity style={styles.container} onPress={openURL}>
      <props.image height={40} width={40} fill={Constants.imageColor} />
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
    borderColor: Constants.textDark,
    flexDirection: "row",
    justifyContent: "start",
    alignItems: "center",
    backgroundColor: Constants.contentBackgroundDark,
  },
  text: {
    color: Constants.textDark,
    fontFamily: Constants.fontFamily,
    marginLeft: 10,
    fontSize: 16,
  },
});
