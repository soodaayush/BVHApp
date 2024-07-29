import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { useState } from "react";
import { Agenda } from "react-native-calendars";

import Header from "../components/Header";

import Colors from "../constants/colors";

const Events = () => {
  const [selectedDate, setSelectedDate] = useState(null);

  const events = {
    "2024-07-26": [
      { name: "Prom", time: "2024-07-26 - 8:00 PM", marked: true },
      { name: "AfterParty", time: "2024-07-26 - 10:00 PM", marked: true },
    ],
    "2024-07-27": [
      { name: "Exams", time: "2024-07-27 - 2:00 PM", marked: true },
    ],
    "2024-07-28": [
      { name: "Graduation", time: "2024-07-28 - 8:00 PM", marked: true },
    ],
    "2024-09-05": [
      { name: "Schools Open!", time: "2024-09-05 - 8:00 PM", marked: true },
    ],
  };

  const renderItem = (item) => (
    <TouchableOpacity style={styles.item}>
      <Text style={styles.titleText}>{item.name}</Text>
      <Text style={styles.itemText}>{item.time}</Text>
    </TouchableOpacity>
  );

  const renderEmptyDate = () => (
    <TouchableOpacity style={styles.item}>
      <Text style={styles.titleText}>No Events</Text>
    </TouchableOpacity>
  );

  const markedDates = Object.keys(events).reduce((acc, date) => {
    acc[date] = { marked: true };
    return acc;
  }, {});

  const filteredEvents = selectedDate
    ? { [selectedDate]: events[selectedDate] || [] }
    : events;

  return (
    <>
      <Header title="Events" />
      <View style={styles.container}>
        <View style={styles.agendaWrapper}>
          <Agenda
            items={filteredEvents}
            selected={selectedDate}
            renderItem={renderItem}
            renderEmptyDate={renderEmptyDate}
            markedDates={markedDates}
            onDayPress={(day) => {
              setSelectedDate(day.dateString);
            }}
            theme={{
              agendaDayTextColor: "#000",
              agendaDayNumColor: "#000",
              agendaTodayColor: "#000",
              agendaKnobColor: Colors.textDark,
              backgroundColor: Colors.backgroundDark,
              calendarBackground: Colors.backgroundDark,
              textSectionTitleColor: Colors.textDark,
              dayTextColor: Colors.textDark,
              monthTextColor: Colors.textDark,
              selectedDayBackgroundColor: "#a1cff0",
              selectedDayTextColor: Colors.textDark,
              todayTextColor: "#a1cff0",
              dotColor: "#a1cff0",
              selectedDotColor: Colors.backgroundDark,
              agendaBackgroundColor: Colors.contentBackgroundDark,
            }}
            style={styles.agenda}
          />
        </View>
      </View>
    </>
  );
};

export default Events;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
    backgroundColor: Colors.backgroundDark,
  },
  agendaWrapper: {
    flex: 1,
  },
  item: {
    backgroundColor: Colors.backgroundDark,
    borderRadius: 5,
    padding: 10,
    marginRight: 15,
    marginTop: 32,
  },
  titleText: {
    fontSize: 20,
    color: Colors.textDark,
    fontFamily: Colors.fontFamily,
  },
  itemText: {
    color: Colors.textDark,
    fontFamily: Colors.fontFamily,
  },
});
