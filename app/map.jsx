import { StyleSheet, Text, View, Image } from "react-native";

import MapView, { Marker } from "react-native-maps";

import Header from "../components/Header";

import Colors from "../constants/colors";

const Map = () => {
  const latitude = "44.699090200647994";
  const longitude = "-63.86441076531011";
  const latitudeDelta = 0.005;
  const longitudeDelta = 0.005;

  return (
    <>
      <Header title="Map" />
      <View style={styles.container}>
        <View style={styles.information}>
          <Image
            style={styles.image}
            source={require("../assets/branding/icon.png")}
          />
          <View style={styles.textContainer}>
            <Text style={styles.text}>Bay View High School</Text>
            <Text style={styles.text}>
              31 Scholars Rd, Upper Tantallon, NS B3Z 0C3
            </Text>
          </View>
        </View>
        <MapView
          style={styles.map}
          scrollEnabled={false}
          zoomEnabled={false}
          rotateEnabled={false}
          initialRegion={{
            latitude: latitude,
            longitude: longitude,
            latitudeDelta: latitudeDelta,
            longitudeDelta: longitudeDelta,
          }}
        >
          <Marker
            coordinate={{
              latitude: latitude,
              longitude: longitude,
            }}
            title={"Target Location"}
            description={""}
          />
        </MapView>
      </View>
    </>
  );
};

export default Map;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.backgroundDark,
  },
  information: {
    flexDirection: "row",
    backgroundColor: Colors.backgroundDark,
    justifyContent: "start",
    alignItems: "center",
    padding: 20,
  },
  image: {
    height: 150,
    width: 150,
  },
  textContainer: {
    flexWrap: "wrap",
  },
  text: {
    color: Colors.textDark,
    fontFamily: Colors.fontFamily,
    flexWrap: "wrap",
  },
  map: {
    width: "100%",
    height: "100%",
  },
});
