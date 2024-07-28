import { StyleSheet, Text, TouchableOpacity } from "react-native";
import * as WebBrowser from "expo-web-browser";
import { useRouter } from "expo-router";

import Colors from "../constants/colors";

const LinkButton = (props) => {
  const router = useRouter();

  async function open() {
    if (props.link) {
      router.push(props.link);
    }

    if (props.url) {
      const url = props.url;
      let result = await WebBrowser.openBrowserAsync(url);
    }
  }

  return (
    <TouchableOpacity style={styles.container} onPress={open}>
      <props.image height={40} width={40} fill={Colors.textDark} />
      <Text style={styles.name}>{props.name}</Text>
    </TouchableOpacity>
  );
};

export default LinkButton;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    justifyContent: "start",
    alignItems: "center",
    height: 110,
    width: 110,
  },
  image: {
    height: 60,
    width: 60,
  },
  name: {
    marginTop: 5,
    textAlign: "center",
    fontFamily: Colors.fontFamily,
    color: Colors.textDark,
  },
});
