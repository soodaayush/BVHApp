import { StyleSheet, View, ScrollView } from "react-native";

import Header from "../components/misc/Header";
import QuickLink from "../components/quick-links/QuickLink";

import PowerSchool from "../assets/quick-links-icons/powerschool.svg";
import Announcements from "../assets/quick-links-icons/announcements.svg";
import Library from "../assets/quick-links-icons/library.svg";
import SchoolCashOnline from "../assets/quick-links-icons/schoolcashonline.svg";
import TechnologyHelpDesk from "../assets/quick-links-icons/technology-help-desk.svg";

import Constants from "../constants/constants";

const QuickLinks = () => {
  return (
    <>
      <Header title="Quick Links" />
      <View style={styles.container}>
        <ScrollView contentContainerStyle={styles.link}>
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
            title="Library"
            url="https://hrce.insigniails.com/Library/Home?LibraryID=0232&Language=English"
            image={Library}
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
        </ScrollView>
      </View>
    </>
  );
};

export default QuickLinks;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Constants.backgroundDark,
  },
  link: {
    alignItems: "stretch",
    justifyContent: "flex-start",
    padding: 20,
  },
});
