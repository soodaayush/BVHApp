import { StyleSheet, View } from "react-native";

import Header from "../components/Header";
import QuickLink from "../components/quickLink";

import PowerSchool from "../assets/quick-links-icons/powerschool.svg";
import Announcements from "../assets/quick-links-icons/announcements.svg";
import SchoolCashOnline from "../assets/quick-links-icons/schoolcashonline.svg";
import TechnologyHelpDesk from "../assets/quick-links-icons/technology-help-desk.svg";

import Colors from "../constants/colors";

const QuickLinks = () => {
  return (
    <>
      <Header title="Quick Links" />
      <View style={styles.container}>
        <QuickLink
          title="PowerSchool"
          url="https://sishrsb.ednet.ns.ca/public/home.html"
          image={PowerSchool}
        />
        <QuickLink
          title="Announcements"
          url="https://sites.google.com/gnspes.ca/bvhsannouncements/"
          image={Announcements}
        />
        <QuickLink
          title="SchoolCashOnline"
          url="https://hrce.schoolcashonline.com/"
          image={SchoolCashOnline}
        />
        <QuickLink
          title="Technology Help Desk"
          url="https://helpdesk.hrce.ca/TrackIt/SelfService/Account/LogIn"
          image={TechnologyHelpDesk}
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
    fontFamily: Colors.fontFamily,
  },
});
