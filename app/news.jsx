import { StyleSheet, View, FlatList } from "react-native";

import Header from "../components/Header";
import NewsArticle from "../components/NewsArticle";

import Colors from "../constants/colors";

const News = () => {
  const newsArticles = [
    {
      id: "1",
      name: "Exams",
      content:
        "Nulla venenatis erat non elit eleifend, nec aliquam lectus finibus. Praesent dignissim, risus eget hendrerit varius, leo nisl elementum arcu, a accumsan ante mi aliquam est. Nulla vitae consectetur risus. Proin non dui tempor, malesuada lacus ut, tempus massa. Praesent sagittis feugiat ex quis hendrerit. Fusce eu enim nec magna blandit facilisis id eu nibh. Nam condimentum sit amet ligula non suscipit. Pellentesque aliquam sit amet leo vel euismod. ",
      date: "June 4, 2024 at 9:00 am",
    },
    {
      id: "2",
      name: "School Dance",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae velit in sapien pulvinar tincidunt non eu magna. Sed eget tempor justo. Integer ac mi quis diam viverra euismod nec eu mi. Suspendisse at orci mattis",
      date: "June 12, 2024 at 12:00 pm",
    },
    {
      id: "3",
      name: "Graduation",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae velit in sapien pulvinar tincidunt non eu magna. Sed eget tempor justo. Integer ac mi quis diam viverra euismod nec eu mi. Suspendisse at orci mattis, mattis nulla vitae, porttitor mi. Cras varius eleifend ultrices. Cras tempor tortor justo, nec volutpat ante lobortis id. Donec bibendum ligula sed leo vulputate tempus. Nullam nec nisl enim. Ut ornare tellus sit amet risus tempus, ut accumsan nisl accumsan. Fusce quam ex, gravida vel interdum vulputate, interdum non dolor. Nullam mollis est massa, sed ullamcorper velit viverra sit amet. Sed elementum, tellus in bibendum pulvinar, risus lectus sagittis turpis, nec luctus orci quam quis nibh. Praesent ut fermentum mi, at elementum tortor. Sed eget eros porta, tincidunt turpis ac, tincidunt lectus.",
      date: "June 19, 2024 at 3:00 pm",
    },
  ];

  return (
    <>
      <Header title="News" />
      <View style={styles.container}>
        <FlatList
          contentContainerStyle={styles.articles}
          data={newsArticles.reverse()}
          renderItem={({ item }) => (
            <NewsArticle
              title={item.name}
              content={item.content}
              date={item.date}
            />
          )}
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
    justifyContent: "flex-start",
    alignItems: "center",
    padding: 20,
  },
  news: {
    width: "100%",
  },
});
