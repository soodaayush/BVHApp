import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";

import Folder from "../../assets/directory-icons/folder.svg";

import Constants from "../../constants/constants";

const DirectoryCategoryLink = (props) => {
  const router = useRouter();

  function passData() {
    if (props.data) {
      router.push({
        pathname: "/directoryCategory",
        params: { data: JSON.stringify(props.data), name: props.name },
      });
    }
  }

  return (
    <TouchableOpacity style={styles.container} onPress={passData}>
      <Folder height={40} width={40} fill={Constants.imageColor} />
      <Text style={styles.text}>{props.name}</Text>
    </TouchableOpacity>
  );
};

export default DirectoryCategoryLink;

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
