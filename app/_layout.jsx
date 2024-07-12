import { SplashScreen, Stack } from "expo-router";
import { useEffect } from "react";
import { useFonts } from "expo-font";
import Footer from "../components/Footer";

const RootLayout = () => {
  const [fontsLoaded] = useFonts({
    "OpenSans-Regular": require("../assets/Font/OpenSans-Regular.ttf"),
  });

  return (
    <>
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="news" options={{ headerShown: false }} />
      </Stack>
      <Footer />
    </>
  );
};

export default RootLayout;
