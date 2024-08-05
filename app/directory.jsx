import { StyleSheet, View, ScrollView } from "react-native";

import Header from "../components/misc/Header";
import DirectoryCategoryLink from "../components/directory/DirectoryCategoryLink";

import Constants from "../constants/constants";

const Directory = () => {
  const admin = [
    {
      name: "John Doe",
      role: "Principal",
    },
    {
      name: "Jane Doe",
      role: "Vice Principal",
    },
  ];

  const studentServices = [
    {
      name: "John Doe",
      role: "Guidance Counsellor A-M",
    },
    {
      name: "Jane Doe",
      role: "Guidance Counsellor N-Z",
    },
  ];

  const teachers = [
    {
      name: "John Doe",
      role: "Math Head",
    },
    {
      name: "Jane Doe",
      role: "Science Head",
    },
  ];

  const epas = [
    {
      name: "John Doe",
      role: "Learning Centre Support",
    },
    {
      name: "Jane Doe",
      role: "Children Specialist",
    },
  ];

  const studentCouncil = [
    {
      name: "John Doe",
      role: "President",
    },
    {
      name: "Jane Doe",
      role: "Arts Rep",
    },
  ];

  return (
    <>
      <Header title="Directory" />
      <View style={styles.container}>
        <ScrollView contentContainerStyle={styles.directory}>
          <DirectoryCategoryLink name="Administration" data={admin} />
          <DirectoryCategoryLink
            name="Student Services"
            data={studentServices}
          />
          <DirectoryCategoryLink name="Teaching Staff" data={teachers} />
          <DirectoryCategoryLink name="EPA's" data={epas} />
          <DirectoryCategoryLink name="Student Council" data={studentCouncil} />
        </ScrollView>
      </View>
    </>
  );
};

export default Directory;

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
