import { Stack } from "expo-router";
import Header from "../components/Header";
import Footer from "../components/Footer";

const RootLayout = () => {
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
