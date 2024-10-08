import { StyleSheet, Text, TouchableOpacity } from "react-native";
import * as WebBrowser from "expo-web-browser";
import { useRouter } from "expo-router";

import Constants from "../../constants/constants";

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
      <props.image height={40} width={40} fill={Constants.imageColor} />
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
  name: {
    marginTop: 5,
    textAlign: "center",
    fontFamily: Constants.fontFamily,
    color: Constants.textDark,
    fontSize: 16,
  },
});
