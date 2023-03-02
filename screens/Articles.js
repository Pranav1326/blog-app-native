import * as React from "react";
import { View, StyleSheet, Pressable, Image, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import ArticleCard from './ArticleCard';
import GlobalStyles from "../GlobalStyles";
import { ScrollView } from "react-native-gesture-handler";
import { fetchAllArticles } from "../api/article";
import Footer from "../components/Footer";

const Articles = () => {
  const navigation = useNavigation();
  
  const [ data, setData ] = React.useState([]);

  React.useEffect(() => {
    fetchAllArticles(setData);
  }, []);
  
  const renderArtices = data.map((article, id) => {
    return(
      <ArticleCard
        key={id}
        articleId={article._id}
        authorId={article.authorId}
        author={article.author}
        createdAt={new Date(article.createdAt).toDateString()}
        title={article.title}
        tags={article.tags}
        comments={article.comments.length}
      />
    );
  });
  
  if(!data){
    return(
      <View styles={styles.articles}>
        <Text styles={styles.loadingText}>Loading...</Text>
      </View>
    );
  }
  
  return (
    <ScrollView style={styles.articles}>
      <View>
        <Text style={styles.mainHeading}>Articles</Text>
          {renderArtices}
          <Footer />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  articlesLayout: {
    width: '100%',
    // height: '100%',
    // position: "absolute",
  },
  profilePosition: {
    top: 0,
    left: 0,
  },
  articleShadowBox: {
    height: 208,
    width: 382,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 4,
      height: 4,
    },
    shadowColor: "#000",
    left: 16,
  },
  articleShadowBox1: {
    position: "absolute",
    height: 208,
    width: 382,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 4,
      height: 4,
    },
    shadowColor: "#000",
    left: 16,
  },
  readingLayout: {
    height: 22,
    width: 90,
    top: 174,
    position: "absolute",
  },
  iconLayout: {
    width: 22,
    height: 22,
    top: 0,
    position: "absolute",
  },
  likesLayout: {
    width: 34,
    height: 22,
    top: 174,
    position: "absolute",
  },
  textTypo: {
    width: 8,
    fontSize: GlobalStyles.FontSize.size_base,
    left: 26,
    color: GlobalStyles.Color.white,
    textAlign: "left",
    fontFamily: GlobalStyles.FontFamily.hammersmithOne,
    position: "absolute",
  },
  tagsPosition: {
    height: 20,
    top: 142,
    left: 12,
    position: "absolute",
  },
  tagLayout1: {
    width: '100%',
    height: 20,
  },
  tagBg: {
    backgroundColor: GlobalStyles.Color.gray_500,
    borderRadius: GlobalStyles.Border.br_sm,
  },
  programmingLayout: {
    width: 77,
    left: 9,
  },
  tagLayout: {
    width: 62,
    height: 20,
    top: 0,
    position: "absolute",
  },
  webdevTypo: {
    height: 18,
    top: 1,
    color: GlobalStyles.Color.white,
    fontSize: GlobalStyles.FontSize.size_base,
    textAlign: "left",
    fontFamily: GlobalStyles.FontFamily.hammersmithOne,
    position: "absolute",
  },
  whyTypo: {
    fontSize: GlobalStyles.FontSize.size_3xl,
    top: 64,
    left: 12,
    color: GlobalStyles.Color.white,
    textAlign: "left",
    fontFamily: GlobalStyles.FontFamily.hammersmithOne,
    position: "absolute",
  },
  profileLayout: {
    height: 40,
    position: "absolute",
  },
  pranavPosition: {
    marginTop: 150,
    left: 0,
    textAlign: "left",
    fontFamily: GlobalStyles.FontFamily.hammersmithOne,
    // position: "absolute",
  },
  webdevLayout: {
    width: 46,
    left: 8,
  },
  javascriptPosition: {
    left: 8,
    width: 56,
  },
  webdev2Typo: {
    height: 16,
    top: 2,
    color: GlobalStyles.Color.white,
    fontSize: GlobalStyles.FontSize.size_base,
    textAlign: "left",
    fontFamily: GlobalStyles.FontFamily.hammersmithOne,
    position: "absolute",
  },
  navPosition: {
    height: 96,
    width: '100%',
    marginTop: 20,
  },
  blogPosition: {
    top: 27,
    position: "absolute",
  },
  articlesBg: {
    backgroundColor: "rgba(255, 255, 255, 0)",
    height: '100%',
  },
  bg: {
    backgroundColor: GlobalStyles.Color.black,
    borderRadius: GlobalStyles.Border.br_sm,
    height: 208,
    width: 382,
    top: 0,
    left: 0,
    position: "absolute",
  },
  bookmarkOutlineIcon: {
    left: 68,
  },
  minRead: {
    fontSize: GlobalStyles.FontSize.size_sm,
    width: 56,
    textAlign: "left",
    color: GlobalStyles.Color.gray_200,
    fontFamily: GlobalStyles.FontFamily.hammersmithOne,
    top: 4,
    left: 0,
    position: "absolute",
  },
  readingTime: {
    left: 276,
  },
  text: {
    top: 4,
  },
  oppositeOpinionIcon: {
    left: 0,
  },
  comments: {
    left: 62,
  },
  text1: {
    top: 3,
  },
  likes: {
    left: 12,
  },
  tag1: {
    left: 0,
  },
  tag: {
    left: 149,
  },
  tag3: {
    left: 0,
  },
  tag2: {
    left: 80,
  },
  tagPosition: {
    width: 72,
    height: 20,
    top: 0,
    left: 0,
    position: "absolute",
  },
  tags: {
    width: 243,
  },
  whyCookieIsPreferableCompa: {
    width: 358,
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  profile: {
    width: 40,
  },
  pranav: {
    fontSize: GlobalStyles.FontSize.size_2xl,
    width: 53,
    color: GlobalStyles.Color.white,
    top: 4,
  },
  aug2022: {
    top: 23,
    fontSize: GlobalStyles.FontSize.size_xs,
    width: 61,
    color: GlobalStyles.Color.gray_200,
    left: 44,
  },
  profileUsernamePublish: {
    top: 12,
    width: 105,
    left: 12,
  },
  article: {
    top: 676,
  },
  webdev1Typo: {
    height: 14,
    top: 2,
    color: GlobalStyles.Color.white,
    fontSize: GlobalStyles.FontSize.size_base,
    textAlign: "left",
    fontFamily: GlobalStyles.FontFamily.hammersmithOne,
    position: "absolute",
  },
  article1: {
    top: 456,
  },
  readingTime2: {
    left: 277,
  },
  programming2: {
    width: 78,
    left: 9,
    height: 16,
  },
  tags2: {
    width: 93,
  },
  whyCookieIsPreferableCompa2: {
    width: 359,
  },
  article2: {
    top: 20,
    borderWidth: 2,
    borderColor: '#fff',
    borderRadius: 5,
  },
  articles1: {
    top: 96,
    height: '100%',
    left: 0,
  },
  navBg: {
    backgroundColor: "#000",
  },
  blog: {
    fontSize: GlobalStyles.FontSize.size_10xl,
    width: 143,
    textShadowColor: "#00466f",
    textShadowOffset: {
      width: 2,
      height: 2,
    },
    textShadowRadius: 1,
    color: GlobalStyles.Color.white,
    textAlign: "left",
    fontFamily: GlobalStyles.FontFamily.hammersmithOne,
    top: 16,
    left: 16,
  },
  profile4: {
    left: 334,
    width: 64,
    height: 64,
  },
  articles: {
    paddingBottom: 100,
    height: '100%',
    width: '100%',
    backgroundColor: GlobalStyles.Color.gray_700,
    paddingBottom: 90,
  },
  mainHeading: {
    color: GlobalStyles.Color.white,
    fontSize: GlobalStyles.FontSize.size_10xl,
    fontFamily: GlobalStyles.FontFamily.hammersmithOne,
    textAlign: 'center',
    marginTop: 5,
    marginBottom: -10,
  },
  loadingText: {
    color: GlobalStyles.Color.white,
    fontSize: GlobalStyles.FontSize.size_10xl,
    fontFamily: GlobalStyles.FontFamily.hammersmithOne,
    textAlign: 'center',
  },
});

export default Articles;
