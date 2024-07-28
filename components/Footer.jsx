import { StyleSheet, TouchableOpacity, View } from "react-native";
import * as WebBrowser from "expo-web-browser";
import * as Linking from "expo-linking";
import { router } from "expo-router";

import Colors from "../constants/colors";

import Map from "../assets/footer-icons/map.svg";
import Website from "../assets/footer-icons/website.svg";
import Phone from "../assets/footer-icons/phone.svg";

const Footer = () => {
  async function openURL(url) {
    let result = await WebBrowser.openBrowserAsync(url);
  }

  function callPhoneNumber(phoneNumber) {
    Linking.openURL(`tel:${phoneNumber}`);
  }

  function openMap() {
    router.push("/map");
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => callPhoneNumber("(902) 826-3222")}>
        <Phone style={styles.image} fill={Colors.textDark} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => openURL("https://bvh.hrce.ca/")}>
        <Website style={styles.image} fill={Colors.textDark} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => openMap()}>
        <Map style={styles.image} fill={Colors.textDark} />
      </TouchableOpacity>
    </View>
  );
};

export default Footer;

const styles = StyleSheet.create({
  container: {
    paddingBottom: 30,
    borderTopWidth: 1,
    borderTopColor: "#908EA5",
    paddingTop: 20,
    paddingRight: 60,
    paddingLeft: 60,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: "#1B3C5F",
  },
  image: {
    height: 25,
    width: 25,
  },
});
