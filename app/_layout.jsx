import { StatusBar } from "expo-status-bar";
import { Stack } from "expo-router";
import { useFonts } from "expo-font";
import Footer from "../components/Footer";
import * as SplashScreen from "expo-splash-screen";

SplashScreen.preventAutoHideAsync();

const RootLayout = () => {
  let [fontsLoaded] = useFonts({
    Wotfard: require("../assets/font/Wotfard.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  } else {
    SplashScreen.hideAsync();
  }

  return (
    <>
      <StatusBar style="light" />
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="news" options={{ headerShown: false }} />
        <Stack.Screen name="quickLinks" options={{ headerShown: false }} />
        <Stack.Screen name="events" options={{ headerShown: false }} />
        <Stack.Screen name="map" options={{ headerShown: false }} />
        <Stack.Screen name="directory" options={{ headerShown: false }} />
      </Stack>
      <Footer />
    </>
  );
};

export default RootLayout;
