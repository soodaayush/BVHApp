import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Platform,
} from "react-native";
import MapView, { Marker } from "react-native-maps";
import * as Linking from "expo-linking";

import Header from "../components/misc/Header";

import Constants from "../constants/constants";

import Directions from "../assets/map-icons/directions.svg";

const Map = () => {
  const latitude = 44.699090200647994;
  const longitude = -63.86441076531011;
  const latitudeDelta = 0.005;
  const longitudeDelta = 0.005;

  function openMap() {
    const url = Platform.select({
      ios: `maps:0,0?q=${latitude},${longitude}&dirflg=d`,
      android: `google.navigation:q=${latitude},${longitude}`,
    });

    Linking.openURL(url);
  }

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
            <Text style={styles.school}>Bay View High School</Text>
            <Text style={styles.address}>
              31 Scholars Rd, Upper Tantallon, NS B3Z 0C3
            </Text>
            <TouchableOpacity onPress={openMap}>
              <Directions style={styles.svg} fill={Constants.textDark} />
            </TouchableOpacity>
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
    backgroundColor: Constants.backgroundDark,
  },
  information: {
    flexDirection: "row",
    backgroundColor: Constants.backgroundDark,
    justifyContent: "flex-start",
    alignItems: "center",
    padding: 10,
  },
  image: {
    height: 150,
    width: 150,
    marginRight: 10,
  },
  svg: {
    height: 30,
    width: 30,
    marginTop: 10,
  },
  textContainer: {
    flex: 1,
  },
  school: {
    color: Constants.textDark,
    fontFamily: Constants.fontFamily,
    width: "100%",
    fontSize: 20,
    marginBottom: 10,
  },
  address: {
    color: Constants.textDark,
    fontFamily: Constants.fontFamily,
    width: "100%",
  },
  map: {
    width: "100%",
    height: "100%",
  },
});
