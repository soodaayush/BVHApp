import { StyleSheet, Text, View, ScrollView } from "react-native";

import Header from "../components/Header";
import DirectoryItem from "../components/directoryItem";

import Colors from "../constants/colors";

const Directory = () => {
  return (
    <>
      <Header title="Directory" />
      <View style={styles.container}>
        <ScrollView contentContainerStyle={styles.directory}>
          <DirectoryItem name="Administration" />
          <DirectoryItem name="Student Services" />
          <DirectoryItem name="Teaching Staff" />
          <DirectoryItem name="EPA's" />
          <DirectoryItem name="Student Council" />
        </ScrollView>
      </View>
    </>
  );
};

export default Directory;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.backgroundDark,
  },
  directory: {
    alignItems: "stretch",
    justifyContent: "flex-start",
    padding: 20,
  },
});
