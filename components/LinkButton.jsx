import { StyleSheet, Text, View, Image } from "react-native";

const LinkButton = (props) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={props.source} />
      <Text style={styles.name}>{props.name}</Text>
    </View>
  );
};

export default LinkButton;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    justifyContent: "start",
    alignItems: "center",
    height: 110,
    width: 110,
  },
  image: {
    height: 60,
    width: 60,
  },
  name: {
    textAlign: "center",
    fontFamily: "OpenSans-Regular",
  },
});
