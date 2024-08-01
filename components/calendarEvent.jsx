import { StyleSheet, Text, TouchableOpacity } from "react-native";

import Colors from "../constants/colors";

const CalenderEvent = (props) => {
  return (
    <TouchableOpacity style={styles.container}>
      <Text style={styles.text}>{props.event.title}</Text>
      <Text style={styles.text}>
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
  text: {
    color: Colors.textDark,
    fontFamily: Colors.fontFamily,
    marginLeft: 10,
    fontSize: 16,
  },
});
