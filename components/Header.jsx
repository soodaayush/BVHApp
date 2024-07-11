import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { useRouter, useSegments } from "expo-router";

const Header = () => {
  const router = useRouter();
  const segments = useSegments();

  function handleBackPress() {
    router.back();
  }

  console.log(segments[0]);

  const isHomeScreen = segments[0] === "index";

  return (
    <View style={styles.container}>
      {!isHomeScreen && (
        <TouchableOpacity onPress={handleBackPress}>
          <Image style={styles.image} source={require("../assets/arrow.png")} />
        </TouchableOpacity>
      )}
      <Text>Bay View High School</Text>
      <Image style={styles.image} source={require("../assets/hamburger.png")} />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    paddingTop: 60,
    paddingBottom: 30,
    paddingRight: 20,
    paddingLeft: 20,
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#a1cff0",
  },
  image: {
    height: 20,
    width: 20,
  },
});
