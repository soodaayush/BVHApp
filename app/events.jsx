import { StyleSheet, View, FlatList } from "react-native";
import { useState } from "react";
import CalendarPicker from "react-native-calendar-picker";

import Header from "../components/Header";
import CalenderEvent from "../components/calendarEvent";

import Colors from "../constants/colors";

const Events = () => {
  const [selectedDate, setSelectedDate] = useState(null);

  const events = [
    {
      date: "2024-08-26",
      title: "Prom",
      time: "8:00 PM",
    },
    {
      date: "2024-08-26",
      title: "AfterParty",
      time: "10:00 PM",
    },
    {
      date: "2024-08-27",
      title: "Exams",
      time: "2:00 PM",
    },
    {
      date: "2024-08-28",
      title: "Graduation",
      time: "8:00 PM",
    },
    {
      date: "2024-09-05",
      title: "Schools Open!",
      time: "8:00 PM",
    },
  ];

  const handleDateChange = (date) => {
    const formattedDate = date.toISOString().split("T")[0];
    setSelectedDate(formattedDate);
  };

  const getEventsForDate = (date) => {
    return events.filter((event) => event.date === date);
  };

  return (
    <>
      <Header title="Events" />
      <View style={styles.container}>
        <View style={styles.agendaWrapper}>
          <CalendarPicker
            onDateChange={handleDateChange}
            textStyle={styles.text}
            headerWrapperStyle={styles.header}
            todayTextStyle={styles.text}
            selectedDayTextStyle={styles.text}
            dayLabelsWrapper={styles.border}
            monthTitleStyle={styles.text}
            previousTitleStyle={styles.text}
            nextTitleStyle={styles.text}
            yearTitleStyle={styles.text}
            todayBackgroundColor={Colors.headerFooterBackground}
            selectedDayColor="#a1cff0"
          />
          {selectedDate && (
            <View style={styles.eventContainer}>
              <FlatList
                contentContainerStyle={styles.events}
                data={getEventsForDate(selectedDate)}
                keyExtractor={(item) => item.title}
                renderItem={({ item }) => <CalenderEvent event={item} />}
              />
            </View>
          )}
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
  text: {
    fontFamily: Colors.fontFamily,
    color: Colors.textDark,
  },
  events: {
    marginTop: 20,
  },
  border: {
    borderColor: "#fff",
  },
});
