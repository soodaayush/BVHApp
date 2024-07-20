import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, ScrollView } from "react-native";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";

import Header from "../components/Header";
import LinkButton from "../components/LinkButton";

import News from "../assets/icons/news.svg";
import Events from "../assets/icons/calendar.svg";
import Directory from "../assets/icons/directory.svg";
import QuickLinks from "../assets/icons/quickLinks.svg";
import GuidanceCounsellingOffice from "../assets/icons/guidance-counselling-office.svg";
import BellSchedule from "../assets/icons/bell-schedule.svg";
import Athletics from "../assets/icons/athletics.svg";

import Colors from "../constants/colors";

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
            image={News}
          />
          <LinkButton
            source={require("../assets/adaptive-icon.png")}
            name="Events"
            image={Events}
          />
          <LinkButton
            source={require("../assets/adaptive-icon.png")}
            name="Directory"
            image={Directory}
          />
          <LinkButton
            source={require("../assets/adaptive-icon.png")}
            name="Quick Links"
            link="/quickLinks"
            image={QuickLinks}
          />
          <LinkButton
            source={require("../assets/adaptive-icon.png")}
            name="Guidance Counselling Office"
            url="https://sites.google.com/gnspes.ca/sjaguidance/home"
            image={GuidanceCounsellingOffice}
          />
          <LinkButton
            source={require("../assets/adaptive-icon.png")}
            name="Bell Schedule"
            image={BellSchedule}
          />
          <LinkButton
            source={require("../assets/adaptive-icon.png")}
            name="Athletics"
            image={Athletics}
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
    backgroundColor: Colors.backgroundDark,
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
