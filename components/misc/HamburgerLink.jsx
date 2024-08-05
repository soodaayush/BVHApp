import { StyleSheet, Text, TouchableOpacity } from "react-native";
import * as WebBrowser from "expo-web-browser";
import { useRouter, usePathname } from "expo-router";

import Constants from "../../constants/constants";

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
      <props.image height={40} width={40} fill={Constants.imageColor} />
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
    borderColor: Constants.textDark,
    flexDirection: "row",
    justifyContent: "start",
    alignItems: "center",
    width: 160,
  },
  name: {
    flex: 1,
    marginLeft: 10,
    textAlign: "left",
    fontFamily: Constants.fontFamily,
    color: Constants.textDark,
    fontSize: 16,
    flexWrap: "wrap",
  },
});
