import { StyleSheet, View, FlatList } from "react-native";
import { useGlobalSearchParams } from "expo-router";

import Header from "../components/misc/Header";
import DirectoryItem from "../components/directory/DirectoryItem";

import Constants from "../constants/constants";

const DirectoryCategory = () => {
  const { data, name } = useGlobalSearchParams();
  const parsedData = JSON.parse(data);

  return (
    <>
      <Header title={name} />
      <View style={styles.container}>
        <FlatList
          contentContainerStyle={styles.directory}
          data={parsedData}
          renderItem={({ item }) => <DirectoryItem data={item} />}
        />
      </View>
    </>
  );
};

export default DirectoryCategory;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Constants.backgroundDark,
  },
  directory: {
    alignItems: "stretch",
    justifyContent: "flex-start",
    padding: 20,
  },
});
