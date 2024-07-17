import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, ScrollView } from "react-native";
import { Link } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import { useFonts } from "expo-font";

import Header from "../components/Header";
import LinkButton from "../components/LinkButton";

SplashScreen.preventAutoHideAsync();

export default function App() {
  useEffect(() => {
    const hideSplashScreen = async () => {
      await new Promise((resolve) => setTimeout(resolve, 3000));
      await SplashScreen.hideAsync();
    };

    hideSplashScreen();
  }, []);

  return (
    <>
      <Header title="Bay View High School" />
      <View style={styles.container}>
        <StatusBar style="auto" />
        <ScrollView contentContainerStyle={styles.links}>
          <LinkButton
            source={require("../assets/adaptive-icon.png")}
            name="News"
            link="/news"
          />
          <LinkButton
            source={require("../assets/adaptive-icon.png")}
            name="Events"
          />
          <LinkButton
            source={require("../assets/adaptive-icon.png")}
            name="Directory"
          />
          <LinkButton
            source={require("../assets/adaptive-icon.png")}
            name="Quick Links"
          />
          <LinkButton
            source={require("../assets/adaptive-icon.png")}
            name="Guidance Counselling Office"
            url="https://sites.google.com/gnspes.ca/sjaguidance/home"
          />
          <LinkButton
            source={require("../assets/adaptive-icon.png")}
            name="Bell Schedule"
          />
          <LinkButton
            source={require("../assets/adaptive-icon.png")}
            name="Athletics"
          />
          <LinkButton
            source={require("../assets/adaptive-icon.png")}
            name="Youth Health Centre"
          />
          <LinkButton
            source={require("../assets/adaptive-icon.png")}
            name="Merchandise"
          />
          <LinkButton
            source={require("../assets/adaptive-icon.png")}
            name="Photos"
          />
          <LinkButton
            source={require("../assets/adaptive-icon.png")}
            name="Clubs & Committees"
          />
          <LinkButton
            source={require("../assets/adaptive-icon.png")}
            name="Social Media"
          />
          <LinkButton
            source={require("../assets/adaptive-icon.png")}
            name="Tutoring"
          />
          <LinkButton
            source={require("../assets/adaptive-icon.png")}
            name="AP"
          />
          <LinkButton
            source={require("../assets/adaptive-icon.png")}
            name="O2"
          />
        </ScrollView>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
    backgroundColor: "#121212",
  },
  links: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "wrap",
    gap: 20,
    marginTop: 20,
  },
});
