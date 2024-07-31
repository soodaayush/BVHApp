import { StyleSheet, Text, TouchableOpacity, Platform } from "react-native";
import { useRouter, usePathname } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

import Arrow from "../assets/header-icons/arrow.svg";
import Hamburger from "../assets/header-icons/hamburger.svg";

import Colors from "../constants/colors";

const Header = (props) => {
  const router = useRouter();
  const path = usePathname();

  function handleBackPress() {
    router.back();
  }

  const isHomeScreen = path === "/";

  return (
    <SafeAreaView style={styles.container}>
      {!isHomeScreen && (
        <TouchableOpacity onPress={handleBackPress}>
          <Arrow style={styles.image} fill={Colors.textDark} />
        </TouchableOpacity>
      )}
      <Text style={styles.text}>{props.title}</Text>
      <Hamburger style={styles.image} fill={Colors.textDark} />
    </SafeAreaView>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    paddingTop: Platform.OS === "android" ? 0 : 10,
    paddingBottom: Platform.OS === "android" ? 30 : 0,
    paddingRight: 20,
    paddingLeft: 20,
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: Colors.headerFooterBackground,
    textAlign: "center",
    borderBottomWidth: 1,
    borderBottomColor: Colors.borderColor,
  },
  text: {
    fontFamily: Colors.fontFamily,
    color: Colors.textDark,
    fontSize: 18,
  },
  image: {
    height: 20,
    width: 20,
  },
});
