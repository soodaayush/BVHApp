import {
  StyleSheet,
  Text,
  TouchableOpacity,
  Platform,
  Modal,
  View,
  Animated,
  Dimensions,
} from "react-native";
import { useRouter, usePathname } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { useState, useRef } from "react";

import Arrow from "../assets/header-icons/arrow.svg";
import Hamburger from "../assets/header-icons/hamburger.svg";

import HamburgerMenu from "./hamburgerMenu";

import Colors from "../constants/colors";

const { width, height } = Dimensions.get("window"); // Get screen height

const Header = (props) => {
  const [hamburgerMenu, setHamburgerMenu] = useState(false);

  const router = useRouter();
  const path = usePathname();

  function handleBackPress() {
    router.back();
  }

  function toggleHamburgerMenu() {
    // setHamburgerMenu(!hamburgerMenu);
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
      <TouchableOpacity>
        <Hamburger
          style={styles.image}
          fill={Colors.textDark}
          onPress={toggleHamburgerMenu}
        />
      </TouchableOpacity>
      {hamburgerMenu && (
        <View style={styles.hamburgerMenu}>
          <HamburgerMenu />
        </View>
      )}
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
  hamburgerMenu: {
    position: "absolute",
    top: 0,
    right: 0,
    height: height, // Full screen height
    width: 300, // Adjust width as needed
    backgroundColor: "white",
    shadowColor: "#000",
    shadowOffset: { width: -1, height: 0 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
    zIndex: 2, // Ensure menu is above other components
  },
  menuContent: {
    flex: 1,
    padding: 20,
  },
  image: {
    height: 20,
    width: 20,
  },
});
