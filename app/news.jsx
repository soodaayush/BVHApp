import { StyleSheet, View, FlatList } from "react-native";
import { parse, compareDesc } from "date-fns";

import Header from "../components/misc/Header";
import NewsArticle from "../components/news/NewsArticle";

import Colors from "../constants/colors";

const News = () => {
  let newsArticles = [
    {
      id: "1",
      title: "Exams",
      content:
        "Nulla venenatis erat non elit eleifend, nec aliquam lectus finibus. Praesent dignissim, risus eget hendrerit varius, leo nisl elementum arcu, a accumsan ante mi aliquam est. Nulla vitae consectetur risus. Proin non dui tempor, malesuada lacus ut, tempus massa. Praesent sagittis feugiat ex quis hendrerit. Fusce eu enim nec magna blandit facilisis id eu nibh. Nam condimentum sit amet ligula non suscipit. Pellentesque aliquam sit amet leo vel euismod. ",
      date: "June 4, 2024 at 9:00 am",
      sortDate: "2024-06-04 9:00 AM",
    },
    {
      id: "2",
      title: "School Dance",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae velit in sapien pulvinar tincidunt non eu magna. Sed eget tempor justo. Integer ac mi quis diam viverra euismod nec eu mi. Suspendisse at orci mattis",
      date: "June 12, 2024 at 12:00 pm",
      sortDate: "2024-06-12 12:00 PM",
    },
    {
      id: "3",
      title: "Graduation",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae velit in sapien pulvinar tincidunt non eu magna. Sed eget tempor justo. Integer ac mi quis diam viverra euismod nec eu mi. Suspendisse at orci mattis, mattis nulla vitae, porttitor mi. Cras varius eleifend ultrices. Cras tempor tortor justo, nec volutpat ante lobortis id. Donec bibendum ligula sed leo vulputate tempus. Nullam nec nisl enim. Ut ornare tellus sit amet risus tempus, ut accumsan nisl accumsan. Fusce quam ex, gravida vel interdum vulputate, interdum non dolor. Nullam mollis est massa, sed ullamcorper velit viverra sit amet. Sed elementum, tellus in bibendum pulvinar, risus lectus sagittis turpis, nec luctus orci quam quis nibh. Praesent ut fermentum mi, at elementum tortor. Sed eget eros porta, tincidunt turpis ac, tincidunt lectus.",
      date: "June 19, 2024 at 3:00 pm",
      sortDate: "2024-06-19 3:00 PM",
    },
  ];

  const parseDate = (dateString) =>
    parse(dateString, "yyyy-MM-dd h:mm a", new Date());

  newsArticles.sort((a, b) =>
    compareDesc(parseDate(a.sortDate), parseDate(b.sortDate))
  );

  return (
    <>
      <Header title="News" />
      <View style={styles.container}>
        <FlatList
          contentContainerStyle={styles.articles}
          data={newsArticles}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <NewsArticle article={item} />}
        />
      </View>
    </>
  );
};

export default News;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.backgroundDark,
  },
  articles: {
    alignItems: "stretch",
    padding: 20,
  },
});
