import { StyleSheet, View, ScrollView, TouchableOpacity } from "react-native";
import { useRouter, usePathname } from "expo-router";

import HamburgerLink from "./HamburgerLink";

import Home from "../../assets/header-icons/home.svg";
import Settings from "../../assets/header-icons/settings.svg";
import Close from "../../assets/header-icons/close.svg";

import News from "../../assets/home-icons/news.svg";
import Events from "../../assets/home-icons/calendar.svg";
import Directory from "../../assets/home-icons/directory.svg";
import QuickLinks from "../../assets/home-icons/quick-links.svg";
import GuidanceCounsellingOffice from "../../assets/home-icons/guidance-counselling-office.svg";
import BellSchedule from "../../assets/home-icons/bell-schedule.svg";
import Athletics from "../../assets/home-icons/athletics.svg";
import Merchandise from "../../assets/home-icons/merchandise.svg";
import Photos from "../../assets/home-icons/photos.svg";
import YouthHealthCentre from "../../assets/home-icons/youth-health-centre.svg";
import ClubsAndCommittees from "../../assets/home-icons/clubs-and-committees.svg";
import SocialMedia from "../../assets/home-icons/social-media.svg";
import Tutoring from "../../assets/home-icons/tutoring.svg";
import AP from "../../assets/home-icons/AP.svg";
import O2 from "../../assets/home-icons/O2.svg";

import Constants from "../../constants/constants";

const HamburgerMenu = (props) => {
  const router = useRouter();
  const path = usePathname();

  function goHome() {
    if (path !== "/") {
      router.push("/");
    }

    props.closeMenu();
  }

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.hamburgerHeader}>
          <View style={{ flexDirection: "row" }}>
            <TouchableOpacity onPress={goHome}>
              <Home
                height={40}
                width={40}
                fill={Constants.textDark}
                style={{ marginRight: 10 }}
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={props.closeMenu}>
              <Settings
                height={40}
                width={40}
                fill={Constants.textDark}
                style={{ marginRight: 10 }}
              />
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity onPress={props.closeMenu}>
              <Close
                height={40}
                width={40}
                fill={Constants.textDark}
                style={{ marginRight: 10 }}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.links}>
          <HamburgerLink
            image={News}
            name="News"
            link="/news"
            closeMenu={props.closeMenu}
          />
          <HamburgerLink
            image={Events}
            name="Events"
            link="/events"
            closeMenu={props.closeMenu}
          />
          <HamburgerLink
            image={Directory}
            name="Directory"
            link="/directory"
            closeMenu={props.closeMenu}
          />
          <HamburgerLink
            image={QuickLinks}
            name="Quick Links"
            link="/quickLinks"
            closeMenu={props.closeMenu}
          />
          <HamburgerLink
            image={GuidanceCounsellingOffice}
            name="Guidance Counselling Office"
            url="https://sites.google.com/gnspes.ca/sjaguidance/home"
            closeMenu={props.closeMenu}
          />
          <HamburgerLink
            image={BellSchedule}
            name="Bell Schedule"
            closeMenu={props.closeMenu}
          />
          <HamburgerLink
            image={Athletics}
            name="Athletics"
            closeMenu={props.closeMenu}
          />
          <HamburgerLink
            image={Merchandise}
            name="Merchandise"
            closeMenu={props.closeMenu}
          />
          <HamburgerLink
            image={Photos}
            name="Photos"
            closeMenu={props.closeMenu}
          />
          <HamburgerLink
            image={YouthHealthCentre}
            name="Youth Health Centre"
            closeMenu={props.closeMenu}
          />
          <HamburgerLink
            image={ClubsAndCommittees}
            name="Clubs and Committees"
            closeMenu={props.closeMenu}
          />
          <HamburgerLink
            image={SocialMedia}
            name="Social Media"
            closeMenu={props.closeMenu}
          />
          <HamburgerLink
            image={Tutoring}
            name="Tutoring"
            closeMenu={props.closeMenu}
          />
          <HamburgerLink
            image={AP}
            name="Advanced Placement"
            url="https://ap.collegeboard.org/"
            closeMenu={props.closeMenu}
          />
          <HamburgerLink
            image={O2}
            name="Options and Opportunities"
            url="https://careerpathways.ednet.ns.ca/options-opportunities"
            closeMenu={props.closeMenu}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default HamburgerMenu;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Constants.backgroundDark,
    flex: 1,
  },
  hamburgerHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderBottomWidth: 1,
    borderBottomColor: Constants.borderColor,
    paddingTop: 45,
    padding: 20,
  },
  links: {
    alignItems: "stretch",
    justifyContent: "flex-start",
    padding: 20,
  },
});
