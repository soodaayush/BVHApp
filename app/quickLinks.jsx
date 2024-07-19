import { StyleSheet, View } from "react-native";

import Header from "../components/Header";
import QuickLink from "../components/quickLink";

import Colors from "../constants/colors";

const QuickLinks = () => {
  return (
    <>
      <Header title="Quick Links" />
      <View style={styles.container}>
        <QuickLink
          title="PowerSchool"
          url="https://sishrsb.ednet.ns.ca/public/home.html"
        />
        <QuickLink
          title="Announcements"
          url="https://sites.google.com/gnspes.ca/bvhsannouncements/"
        />
        <QuickLink
          title="SchoolCashOnline"
          url="https://hrce.schoolcashonline.com/"
        />
        <QuickLink
          title="Technology Help Desk"
          url="https://helpdesk.hrce.ca/TrackIt/SelfService/Account/LogIn"
        />
      </View>
    </>
  );
};

export default QuickLinks;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: Colors.backgroundDark,
    alignItems: "stretch",
    justifyContent: "flex-start",
    fontFamily: "OpenSans-Regular",
  },
});
