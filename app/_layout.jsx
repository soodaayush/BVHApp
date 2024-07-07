import { Stack } from "expo-router";
import Header from "../components/Header";
import Footer from "../components/Footer";

const RootLayout = () => {
  return (
    <>
      <Header />
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="news" options={{ headerShown: false }} />
      </Stack>
      <Footer />
    </>
  );
};

export default RootLayout;
