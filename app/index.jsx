import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import { Link } from "expo-router";

import LinkButton from "../components/LinkButton";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <ScrollView contentContainerStyle={styles.links}>
        <Link href="/news">
          <LinkButton
            source={require("../assets/adaptive-icon.png")}
            name="News"
          />
        </Link>
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
        <LinkButton source={require("../assets/adaptive-icon.png")} name="AP" />
        <LinkButton source={require("../assets/adaptive-icon.png")} name="O2" />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
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
