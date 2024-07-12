import { StyleSheet, View, ScrollView } from "react-native";

import Header from "../components/Header";
import NewsArticle from "../components/NewsArticle";

const News = () => {
  return (
    <>
      <Header title="News" />
      <View style={styles.container}>
        <ScrollView contentContainerStyle={styles.news}>
          <NewsArticle
            title="Graduation"
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae velit in sapien pulvinar tincidunt non eu magna. Sed eget tempor justo. Integer ac mi quis diam viverra euismod nec eu mi. Suspendisse at orci mattis, mattis nulla vitae, porttitor mi. Cras varius eleifend ultrices. Cras tempor tortor justo, nec volutpat ante lobortis id. Donec bibendum ligula sed leo vulputate tempus. Nullam nec nisl enim. Ut ornare tellus sit amet risus tempus, ut accumsan nisl accumsan. Fusce quam ex, gravida vel interdum vulputate, interdum non dolor. Nullam mollis est massa, sed ullamcorper velit viverra sit amet. Sed elementum, tellus in bibendum pulvinar, risus lectus sagittis turpis, nec luctus orci quam quis nibh. Praesent ut fermentum mi, at elementum tortor. Sed eget eros porta, tincidunt turpis ac, tincidunt lectus."
          />
          <NewsArticle
            title="School Dance"
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae velit in sapien pulvinar tincidunt non eu magna. Sed eget tempor justo. Integer ac mi quis diam viverra euismod nec eu mi. Suspendisse at orci mattis"
          />
          <NewsArticle
            title="Exams"
            content="Nulla venenatis erat non elit eleifend, nec aliquam lectus finibus. Praesent dignissim, risus eget hendrerit varius, leo nisl elementum arcu, a accumsan ante mi aliquam est. Nulla vitae consectetur risus. Proin non dui tempor, malesuada lacus ut, tempus massa. Praesent sagittis feugiat ex quis hendrerit. Fusce eu enim nec magna blandit facilisis id eu nibh. Nam condimentum sit amet ligula non suscipit. Pellentesque aliquam sit amet leo vel euismod. "
          />
        </ScrollView>
      </View>
    </>
  );
};

export default News;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
    alignItems: "stretch",
    justifyContent: "flex-start",
  },
  news: {
    width: "100%",
  },
});
