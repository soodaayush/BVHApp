import { StyleSheet, Text, TouchableOpacity } from "react-native";

import Constants from "../../constants/constants";

const CalenderEvent = (props) => {
  return (
    <TouchableOpacity style={styles.container}>
      <Text style={styles.title}>{props.event.title}</Text>
      <Text style={styles.date}>
        {props.event.date} at {props.event.time}
      </Text>
    </TouchableOpacity>
  );
};

export default CalenderEvent;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    padding: 20,
    marginBottom: 20,
    borderRadius: 10,
    borderColor: Constants.textDark,
    flexDirection: "column",
    justifyContent: "start",
    backgroundColor: Constants.contentBackgroundDark,
  },
  title: {
    color: Constants.textDark,
    fontFamily: Constants.fontFamily,
    marginLeft: 10,
    fontSize: 20,
  },
  date: {
    color: Constants.textDark,
    fontFamily: Constants.fontFamily,
    marginLeft: 10,
    fontSize: 16,
  },
});
