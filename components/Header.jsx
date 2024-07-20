import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { useRouter, usePathname } from "expo-router";

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
    <View style={styles.container}>
      {!isHomeScreen && (
        <TouchableOpacity onPress={handleBackPress}>
          <Arrow style={styles.image} />
        </TouchableOpacity>
      )}
      <Text style={styles.text}>{props.title}</Text>
      <Hamburger style={styles.image} />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    paddingTop: 60,
    paddingBottom: 30,
    paddingRight: 20,
    paddingLeft: 20,
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: Colors.headerFooterBackground,
    textAlign: "center",
  },
  text: {
    fontFamily: "OpenSans-Regular",
  },
  image: {
    height: 20,
    width: 20,
  },
});
