import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Constants from "../../constants/constants";

import Person from "../../assets/directory-icons/person.svg";

const DirectoryItem = (props) => {
  return (
    <TouchableOpacity style={styles.container}>
      <Person height={40} width={40} fill={Constants.imageColor} />
      <View>
        <Text style={styles.text}>{props.data.name}</Text>
        <Text style={styles.text}>{props.data.role}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default DirectoryItem;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    padding: 20,
    marginBottom: 20,
    borderRadius: 10,
    borderColor: Constants.textDark,
    flexDirection: "row",
    justifyContent: "start",
    alignItems: "center",
    backgroundColor: Constants.contentBackgroundDark,
  },
  text: {
    color: Constants.textDark,
    fontFamily: Constants.fontFamily,
    marginLeft: 10,
    fontSize: 16,
  },
});
