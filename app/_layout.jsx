import { StatusBar } from "expo-status-bar";
import { Stack } from "expo-router";
import { useFonts } from "expo-font";

import Footer from "../components/misc/Footer";
import * as SplashScreen from "expo-splash-screen";

SplashScreen.preventAutoHideAsync();

const RootLayout = () => {
  let [fontsLoaded] = useFonts({
    Wotfard: require("../assets/font/Wotfard.ttf"),
  });

  if (!fontsLoaded) {
    return null;
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
        <Stack.Screen
          name="directoryCategory"
          options={{ headerShown: false }}
        />
        <Stack.Screen name="newsArticleInfo" options={{ headerShown: false }} />
      </Stack>
      <Footer />
    </>
  );
};

export default RootLayout;
