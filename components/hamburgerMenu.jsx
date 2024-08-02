import { StyleSheet, Text, View, ScrollView } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Drawer } from "expo-router/drawer";

const HamburgerMenu = () => {
  return (
    <GestureHandlerRootView>
      <Drawer>
        <Drawer.Screen
          name="index" // This is the name of the page and must match the url from root
          options={{
            drawerLabel: "Home",
            title: "overview",
          }}
        />
        <Drawer.Screen
          name="user/[id]" // This is the name of the page and must match the url from root
          options={{
            drawerLabel: "User",
            title: "overview",
          }}
        />
      </Drawer>
    </GestureHandlerRootView>
  );
};

export default HamburgerMenu;

const styles = StyleSheet.create({});
