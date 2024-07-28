import { StyleSheet, View, ScrollView, Image } from "react-native";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";

import Header from "../components/Header";
import LinkButton from "../components/LinkButton";

import News from "../assets/home-icons/news.svg";
import Events from "../assets/home-icons/calendar.svg";
import Directory from "../assets/home-icons/directory.svg";
import QuickLinks from "../assets/home-icons/quick-links.svg";
import GuidanceCounsellingOffice from "../assets/home-icons/guidance-counselling-office.svg";
import BellSchedule from "../assets/home-icons/bell-schedule.svg";
import Athletics from "../assets/home-icons/athletics.svg";
import Merchandise from "../assets/home-icons/merchandise.svg";
import Photos from "../assets/home-icons/photos.svg";
import YouthHealthCentre from "../assets/home-icons/youth-health-centre.svg";
import ClubsAndCommittees from "../assets/home-icons/clubs-and-committees.svg";
import SocialMedia from "../assets/home-icons/social-media.svg";
import Tutoring from "../assets/home-icons/tutoring.svg";
import AP from "../assets/home-icons/AP.svg";
import O2 from "../assets/home-icons/O2.svg";

import Colors from "../constants/colors";

SplashScreen.preventAutoHideAsync();

export default function App() {
  useEffect(() => {
    const hideSplashScreen = async () => {
      await new Promise((resolve) => setTimeout(resolve, 3000));
      await SplashScreen.hideAsync();
    };

    hideSplashScreen();
  }, []);

  return (
    <>
      <Header title="Bay View High School" />

      <View style={styles.container}>
        <ScrollView>
          <Image
            style={styles.image}
            source={require("../assets/home-icons/bvh-banner.png")}
          />
          <View style={styles.links}>
            <LinkButton name="News" link="/news" image={News} />
            <LinkButton name="Events" link="/events" image={Events} />
            <LinkButton name="Directory" image={Directory} />
            <LinkButton
              name="Quick Links"
              link="/quickLinks"
              image={QuickLinks}
            />
            <LinkButton
              name="Guidance Counselling"
              url="https://sites.google.com/gnspes.ca/sjaguidance/home"
              image={GuidanceCounsellingOffice}
            />
            <LinkButton name="Bell Schedule" image={BellSchedule} />
            <LinkButton name="Athletics" image={Athletics} />
            <LinkButton name="Youth Health Centre" image={YouthHealthCentre} />
            <LinkButton name="Merchandise" image={Merchandise} />
            <LinkButton name="Photos" image={Photos} />
            <LinkButton name="Clubs & Committees" image={ClubsAndCommittees} />
            <LinkButton name="Social Media" image={SocialMedia} />
            <LinkButton name="Tutoring" image={Tutoring} />
            <LinkButton
              name="AP"
              url="https://ap.collegeboard.org/"
              image={AP}
            />
            <LinkButton
              name="O2"
              url="https://careerpathways.ednet.ns.ca/options-opportunities"
              image={O2}
            />
          </View>
        </ScrollView>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.backgroundDark,
  },
  links: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "wrap",
    gap: 20,
    marginTop: 40,
  },
  image: {
    height: 200,
    width: "100%",
  },
});
