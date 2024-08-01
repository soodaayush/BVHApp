import { StyleSheet, View, FlatList } from "react-native";
import { useGlobalSearchParams } from "expo-router";

import Header from "../components/Header";
import DirectoryItem from "../components/DirectoryItem";

import Colors from "../constants/colors";

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
    backgroundColor: Colors.backgroundDark,
  },
  directory: {
    alignItems: "stretch",
    justifyContent: "flex-start",
    padding: 20,
  },
});
