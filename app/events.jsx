import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { useState, useEffect } from "react";
import { Calendar, Agenda, AgendaList } from "react-native-calendars";

import Header from "../components/Header";

import Colors from "../constants/colors";

const Events = () => {
  const now = new Date();

  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, "0");
  const day = String(now.getDate()).padStart(2, "0");

  const dateString = `${year}-${month}-${day}`;

  const [selectedDate, setSelectedDate] = useState(null);

  const events = {
    "2024-07-26": [
      { name: "Prom", time: "8:00 PM", marked: true },
      { name: "Something Else", time: "8:00 PM", marked: true },
    ],
    "2024-07-27": [{ name: "Exams", time: "8:00 PM", marked: true }],
    "2024-07-28": [{ name: "Graduation", time: "8:00 PM", marked: true }],
  };

  const renderItem = (item) => (
    <View style={styles.item}>
      <Text style={styles.itemText}>{item.name}</Text>
      <Text style={styles.itemText}>{item.time}</Text>
    </View>
  );

  const renderEmptyDate = () => (
    <View style={styles.item}>
      <Text style={styles.itemText}>No Events</Text>
    </View>
  );

  // Get all dates with events for marking
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
              agendaKnobColor: "#fff",
              backgroundColor: Colors.backgroundDark,
              calendarBackground: Colors.backgroundDark,
              textSectionTitleColor: "#fff",
              dayTextColor: "#fff",
              monthTextColor: "#fff",
              selectedDayBackgroundColor: "#a1cff0",
              selectedDayTextColor: Colors.textDark,
              todayTextColor: "#a1cff0",
              dotColor: "#a1cff0",
              selectedDotColor: Colors.backgroundDark,
              agendaBackgroundColor: "#121212",
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
    backgroundColor: "#000", // Background color for the Agenda itself
  },
  item: {
    backgroundColor: Colors.backgroundDark,
    borderRadius: 5,
    padding: 10,
    marginRight: 15,
    marginTop: 32,
  },
  itemText: {
    color: Colors.textDark,
  },
  agenda: {
    backgroundColor: "#ccc",
  },
});
