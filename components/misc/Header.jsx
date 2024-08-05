import {
  StyleSheet,
  Text,
  TouchableOpacity,
  Platform,
  Modal,
  View,
  Dimensions,
} from "react-native";
import { useRouter, usePathname } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { useState } from "react";

import Arrow from "../../assets/header-icons/arrow.svg";
import Hamburger from "../../assets/header-icons/hamburger.svg";

import HamburgerMenu from "./HamburgerMenu";

import Constants from "../../constants/constants";

const { width, height } = Dimensions.get("window");

const Header = (props) => {
  const [hamburgerMenu, setHamburgerMenu] = useState(false);

  const router = useRouter();
  const path = usePathname();

  function handleBackPress() {
    router.back();
  }

  function toggleHamburgerMenu() {
    setHamburgerMenu((prevState) => !prevState);
  }

  const isHomeScreen = path === "/";

  return (
    <SafeAreaView style={styles.container}>
      {!isHomeScreen && (
        <TouchableOpacity onPress={handleBackPress}>
          <Arrow style={styles.image} fill={Constants.textDark} />
        </TouchableOpacity>
      )}
      <Text style={styles.text}>{props.title}</Text>
      <TouchableOpacity onPress={toggleHamburgerMenu}>
        <Hamburger style={styles.image} fill={Constants.textDark} />
      </TouchableOpacity>
      <Modal
        visible={hamburgerMenu}
        animationType="slide"
        transparent={true}
        onRequestClose={toggleHamburgerMenu}
      >
        <View style={styles.overlay}>
          <View style={styles.hamburgerMenu}>
            <HamburgerMenu closeMenu={toggleHamburgerMenu} />
          </View>
        </View>
      </Modal>
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
    backgroundColor: Constants.headerFooterBackground,
    textAlign: "center",
    borderBottomWidth: 1,
    borderBottomColor: Constants.borderColor,
  },
  text: {
    fontFamily: Constants.fontFamily,
    color: Constants.textDark,
    fontSize: 18,
  },
  overlay: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "flex-end",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  hamburgerMenu: {
    width: width * 0.7,
    height: height,
    shadowColor: "#000",
    shadowOffset: { width: -1, height: 0 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  image: {
    height: 20,
    width: 20,
  },
});
