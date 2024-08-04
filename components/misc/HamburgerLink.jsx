import { StyleSheet, Text, TouchableOpacity } from "react-native";
import * as WebBrowser from "expo-web-browser";
import { useRouter, usePathname } from "expo-router";

import Colors from "../../constants/colors";

const HamburgerLink = (props) => {
  const router = useRouter();
  const path = usePathname();

  async function open() {
    if (props.link && path !== props.link) {
      router.push(props.link);
      props.closeMenu();
    }

    if (props.url) {
      const url = props.url;
      let result = await WebBrowser.openBrowserAsync(url);
      props.closeMenu();
    }
  }

  return (
    <TouchableOpacity style={styles.container} onPress={open}>
      <props.image height={40} width={40} fill={Colors.imageColor} />
      <Text style={styles.name}>{props.name}</Text>
    </TouchableOpacity>
  );
};

export default HamburgerLink;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    marginBottom: 20,
    borderRadius: 10,
    borderColor: Colors.textDark,
    flexDirection: "row",
    justifyContent: "start",
    alignItems: "center",
  },
  name: {
    marginLeft: 10,
    textAlign: "center",
    fontFamily: Colors.fontFamily,
    color: Colors.textDark,
    fontSize: 16,
  },
});
