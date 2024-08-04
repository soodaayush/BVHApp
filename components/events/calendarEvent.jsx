import { StyleSheet, Text, TouchableOpacity } from "react-native";

import Colors from "../../constants/colors";

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
    borderColor: Colors.textDark,
    flexDirection: "column",
    justifyContent: "start",
    backgroundColor: Colors.contentBackgroundDark,
  },
  title: {
    color: Colors.textDark,
    fontFamily: Colors.fontFamily,
    marginLeft: 10,
    fontSize: 20,
  },
  date: {
    color: Colors.textDark,
    fontFamily: Colors.fontFamily,
    marginLeft: 10,
    fontSize: 16,
  },
});
