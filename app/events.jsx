import { StyleSheet, View, FlatList, Text } from "react-native";
import { useState, useEffect } from "react";
import CalendarPicker from "react-native-calendar-picker";

import Header from "../components/Header";
import CalenderEvent from "../components/calendarEvent";

import Colors from "../constants/colors";

const Events = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [currentMonth, setCurrentMonth] = useState(null);

  const events = [
    {
      id: 1,
      date: "2024-08-01",
      title: "Test",
      time: "8:00 PM",
    },
    {
      id: 2,
      date: "2024-08-26",
      title: "Prom",
      time: "8:00 PM",
    },
    {
      id: 3,
      date: "2024-08-26",
      title: "AfterParty",
      time: "10:00 PM",
    },
    {
      id: 4,
      date: "2024-08-27",
      title: "Exams",
      time: "2:00 PM",
    },
    {
      id: 5,
      date: "2024-08-28",
      title: "Graduation",
      time: "8:00 PM",
    },
    {
      id: 6,
      date: "2024-09-05",
      title: "Schools Open!",
      time: "8:00 PM",
    },
  ];

  const handleDateChange = (date) => {
    const formattedDate = date.toISOString().split("T")[0];
    setSelectedDate(formattedDate);
  };

  const handleMonthChange = (date) => {
    const newMonth = date.toISOString().slice(0, 7);
    if (currentMonth && newMonth !== currentMonth) {
      setSelectedDate(null);
    }
    setCurrentMonth(newMonth);
  };

  useEffect(() => {
    const initialMonth = new Date().toISOString().slice(0, 7);
    setCurrentMonth(initialMonth);
  }, []);

  const getEventsForDate = (date) => {
    return events.filter((event) => event.date === date);
  };

  const eventDates = new Set(events.map((event) => event.date));
  const customDatesStyles = (date) => {
    const formattedDate = date.toISOString().split("T")[0];
    return eventDates.has(formattedDate)
      ? {
          style: { backgroundColor: Colors.borderColor },
          textStyle: { color: Colors.textDark },
        }
      : {};
  };

  const eventList = getEventsForDate(selectedDate);

  return (
    <>
      <Header title="Events" />
      <View style={styles.container}>
        <View style={styles.agendaWrapper}>
          <CalendarPicker
            minDate={"2024-07-01"}
            maxDate={"2025-06-31"}
            onMonthChange={handleMonthChange}
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
            selectedDayColor={Colors.calendarSelectedColor}
            customDatesStyles={customDatesStyles}
          />
          {selectedDate && (
            <View style={styles.eventContainer}>
              {eventList.length > 0 ? (
                <FlatList
                  contentContainerStyle={styles.events}
                  data={eventList}
                  keyExtractor={(item) => item.id}
                  renderItem={({ item }) => (
                    <CalenderEvent valid={true} event={item} />
                  )}
                />
              ) : (
                <Text style={styles.noEventsText}>No events for this day</Text>
              )}
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
  noEventsText: {
    color: Colors.textDark,
    fontSize: 16,
    textAlign: "center",
    marginTop: 20,
  },
  border: {
    borderColor: Colors.textDark,
  },
});
