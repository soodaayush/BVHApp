import { Stack } from "expo-router";
import { useFonts } from "expo-font";
import Footer from "../components/Footer";
import * as SplashScreen from "expo-splash-screen";

SplashScreen.preventAutoHideAsync();

const RootLayout = () => {
  let [fontsLoaded] = useFonts({
    "OpenSans-Regular": require("../assets/font/OpenSans-Regular.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  } else {
    SplashScreen.hideAsync();
  }

  return (
    <>
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="news" options={{ headerShown: false }} />
        <Stack.Screen name="quickLinks" options={{ headerShown: false }} />
        <Stack.Screen name="events" options={{ headerShown: false }} />
        <Stack.Screen name="map" options={{ headerShown: false }} />
      </Stack>
      <Footer />
    </>
  );
};

export default RootLayout;
