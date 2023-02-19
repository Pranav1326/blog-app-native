import * as React from "react";
import { StyleSheet, View, Text, Image, Pressable } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import GlobalStyles from "../GlobalStyles";
import { ScrollView } from "react-native-gesture-handler";
import Footer from "../components/Footer";
import { fetchArticle } from "../api/article";
import Markdown from 'react-native-simple-markdown'
import Comments from "../components/Comments";

const Article = ({ route }) => {
  const navigation = useNavigation();
  const { id } = route.params;

  const [ article, setData ] = React.useState(null);

  React.useEffect(() => {
    fetchArticle(id, setData);
  }, []);

  if(!article){
    return (
      <View style={styles.article}>
        <Text style={styles.loadingText}>Loading...</Text>
      </View>
    );
  }
  
  const renderTags = article && article.tags.map(tag => {
    return(
      <View style={styles.tagPosition}>
        <Text style={[styles.tagText, styles.webdevPosition]}>
          {tag}
        </Text>
      </View>
    );
  })
  
  return (
    <ScrollView>
      <View style={styles.article}>
        <View style={[styles.article1, styles.articlePosition]}>
          <LinearGradient
            style={[styles.articleBg, styles.articlePosition]}
            locations={[0, 1]}
            colors={["rgba(14, 215, 191, 0.5)", "rgba(0, 70, 111, 0.5)"]}
          />

          {/* Article Head */}
          <View style={[styles.articldeHeader, styles.articlePosition]}>
          
            {/* Cover Image */}
            <Image
              style={[styles.coverImageIcon, styles.articlePosition]}
              resizeMode="cover"
              source={require("../assets/cover-image.png")}
            />

            {/* Author Details */}
            <View
              style={[
                styles.profileUsernamePublish,
                styles.profileLayout,
                styles.tagsShadowBox,
              ]}
            >
              <Image
                style={styles.profilePictureLayout}
                resizeMode="cover"
                source={require("../assets/profile123x.png")}
              />
              <View style={styles.authorDate}>
                <Text style={[styles.pranav, styles.pranavPosition]}
                  onPress={() => navigation.navigate("AuthorProfile", {id: article.authorId})}
                >{article.author}</Text>
                <Text style={[styles.postedOn18Aug2022, styles.pranavPosition]}>
                  {new Date(article.createdAt).toDateString()}
                </Text>
              </View>
            </View>

            {/* Title */}
            <Text style={[styles.whyCookieIsPreferableCompa, styles.blogTypo]}>
              {article.title}
            </Text>

            {/* Tags */}
            <View style={[styles.tags, styles.tagsShadowBox]}>
              {renderTags}
            </View>
          </View>

          {/* Article Body */}
          <View style={[styles.articleBody, styles.tagsShadowBox]}>
            {/* <ReactMarkdown children={article.content} /> */}
              <Markdown styles={markdownStyles}>
                {article.content}
              </Markdown>
          </View>

        </View>
      </View>
      <Comments articleTitle={article.title} articleId={id} />
      <Footer />
    </ScrollView>

  );
};

const markdownStyles = {
  View: {
    backgroundColor: '#fff'
  },
  heading1: {
    fontSize: GlobalStyles.FontSize.size_7xl,
    color: GlobalStyles.Color.white,
    marginTop: 15,
    marginBottom: 15,
    fontWeight: '700',
  },
  heading2: {
    fontSize: GlobalStyles.FontSize.size_7xl,
    color: GlobalStyles.Color.white,
    fontWeight: '700',
    marginTop: 15,
    marginBottom: 15,
  },
  heading3: {
    fontSize: GlobalStyles.FontSize.size_7xl,
    color: GlobalStyles.Color.white,
    fontWeight: '700',
    marginTop: 15,
    marginBottom: 15,
  },
  heading4: {
    fontSize: GlobalStyles.FontSize.size_7xl,
    color: GlobalStyles.Color.white,
    fontWeight: '700',
    marginTop: 15,
    marginBottom: 15,
  },
  heading5: {
    fontSize: GlobalStyles.FontSize.size_7xl,
    color: GlobalStyles.Color.white,
    marginTop: 15,
    marginBottom: 15,
    fontWeight: '700',
  },
  heading6: {
    fontSize: GlobalStyles.FontSize.size_7xl,
    color: GlobalStyles.Color.white,
    marginTop: 15,
    marginBottom: 15,
    fontWeight: '700',
  },
  link: {
    marginTop: 5,
    marginBottom: 5,
    color: GlobalStyles.Color.white,
    backgroundColor: 'rgba(255,255,255,0.15)',
    paddingLeft: 5,
    paddingRight: 5,
  },
  mailTo: {
    color: GlobalStyles.Color.white,
  },
  text: {
    color: GlobalStyles.Color.white,
    fontSize: GlobalStyles.FontSize.size_4xl,
    marginTop: 1,
  },
  strong: {
    fontWeight: '700',
  },
  blockQuote: {
    marginTop: 10,
    marginBottom: 10,
    paddingTop: 5,
  },
  inlineCode: {
    marginTop: 10,
    marginBottom: 10,
    padding: 5,
    backgroundColor: 'rgba(255,255,255,0.15)',
  }
}

const styles = StyleSheet.create({
  articlePosition: {
    width: '100%',
    left: 0,
  },
  tagsShadowBox: {
    shadowOpacity: 1,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
  },
  localstoragesetitemyourtokeTypo: {
    width: 374,
    fontSize: GlobalStyles.FontSize.size_xl,
    textAlign: "left",
    color: GlobalStyles.Color.white,
    fontFamily: GlobalStyles.FontFamily.ubuntuMono,
    left: 8,
    position: "absolute",
  },
  articleLayout: {
    width: 104,
    height: 20,
    backgroundColor: GlobalStyles.Color.gray_400,
    borderRadius: GlobalStyles.Border.br_sm,
    position: "absolute",
  },
  inThisArticleIWillBreakTypo: {
    fontSize: GlobalStyles.FontSize.size_2xl,
    textAlign: "left",
    color: GlobalStyles.Color.white,
    width: 390,
    left: 4,
    position: "absolute",
  },
  comparisonTypo: {
    fontSize: GlobalStyles.FontSize.size_5xl,
    width: 243,
    fontFamily: GlobalStyles.FontFamily.hammersmithOne,
    textAlign: "left",
    color: GlobalStyles.Color.white,
    left: 4,
  },
  tagLayout1: {
    width: 94,
    height: 20,
    top: 0,
  },
  tagBg: {
    backgroundColor: GlobalStyles.Color.gray_500,
    borderRadius: GlobalStyles.Border.br_sm,
  },
  tagLayout: {
    width: 62,
    height: 20,
    top: 0,
    // position: "absolute",
  },
  webdevPosition: {
    top: 3,
    fontSize: GlobalStyles.FontSize.size_2xl,
    fontFamily: GlobalStyles.FontFamily.hammersmithOne,
    backgroundColor: GlobalStyles.Color.gray_500,
    borderRadius: GlobalStyles.Border.br_sm,
    textAlign: "center",
    color: GlobalStyles.Color.white,
    overflow: 'hidden',
  },
  blogTypo: {
    textShadowOffset: {
      width: 0,
      height: 4,
    },
    fontFamily: GlobalStyles.FontFamily.hammersmithOne,
    textAlign: "left",
    color: GlobalStyles.Color.white,
  },
  profileLayout: {
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  profilePictureLayout: {
    width: 60,
    height: 60,
    marginRight: 20,
  },
  pranavPosition: {
    fontFamily: GlobalStyles.FontFamily.hammersmithOne,
    textAlign: "left",
  },
  blogPosition: {
    top: 16,
    // position: "absolute",
  },
  articleBg: {
    top: 192,
    height: '100%',
    position: 'absolute',
    backgroundColor: "transparent",
  },
  codeChild: {
    backgroundColor: GlobalStyles.Color.gray_400,
    borderRadius: GlobalStyles.Border.br_sm,
    top: 0,
    height: 54,
    width: 390,
    left: 0,
  },
  localstoragesetitemyourtoke: {
    top: 8,
  },
  localstoragegetitemyourtoke: {
    top: 31,
  },
  code: {
    top: 342,
    height: 54,
    left: 4,
    width: 390,
  },
  articleBodyChild: {
    top: 308,
    height: 20,
    left: 0,
  },
  articleBodyItem: {
    top: 283,
    left: 58,
    height: 20,
  },
  toUse: {
    fontFamily: GlobalStyles.FontFamily.hammersmithOne,
  },
  localstorage: {
    fontFamily: GlobalStyles.FontFamily.ubuntuMono,
  },
  toUseLocalstorageJustSim: {
    top: 280,
    lineHeight: 25,
  },
  localStorage: {
    top: 239,
  },
  comparison: {
    top: 198,
  },
  inThisArticleIWillBreak: {
    top: 148,
    fontFamily: GlobalStyles.FontFamily.hammersmithOne,
  },
  weKnowAboutJwtOrJsonWeb: {
    top: 41,
    fontFamily: GlobalStyles.FontFamily.hammersmithOne,
  },
  introduction: {
    top: 0,
  },
  articleBody: {
    top: 20,
    height: '100%',
    width: '95%',
    marginBottom: 60,
    marginLeft: 10,
    marginRight: 10,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    color: GlobalStyles.Color.white,
  },
  tag1: {
    left: 0,
  },
  programming: {
    top: 2,
    left: 9,
    width: 77,
    height: 15,
    fontSize: GlobalStyles.FontSize.size_base,
    fontFamily: GlobalStyles.FontFamily.hammersmithOne,
    textAlign: "left",
    color: GlobalStyles.Color.white,
    position: "absolute",
  },
  tag: {
    left: 149,
  },
  tag3: {
    left: 0,
  },
  webdev: {
    width: 46,
  },
  tag2: {
    left: 80,
  },
  tagPosition: {
    top: 20,
    left: 0,
  },
  tagText: {
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 10,
    paddingRight: 10,
    marginRight: 10,
  },
  tags: {
    marginTop: 10,
    marginBottom: 20,
    left: 12,
    display: 'flex',
    flexDirection: "row",
  },
  whyCookieIsPreferableCompa: {
    top: 25,
    fontSize: GlobalStyles.FontSize.size_9xl,
    textShadowColor: "rgba(0, 0, 0, 0.25)",
    textShadowRadius: 4,
    left: 12,
    textShadowOffset: {
      width: 0,
      height: 4,
    },
  },
  postedOn18Aug2022: {
    marginLeft: 60,
    marginTop: 5,
    color: GlobalStyles.Color.gray_100,
    fontSize: GlobalStyles.FontSize.size_lg,
  },
  pranav: {
    fontSize: 24,
    color: GlobalStyles.Color.white,
    marginLeft: 60,
    top: 0,
  },
  profileIcon: {
    width: 46,
    top: 0,
    left: 0,
  },
  profileUsernamePublish: {
    top: 12,
    left: 12,
  },
  coverImageIcon: {
    top: 0,
  },
  articldeHeader: {
    top: 0,
  },
  article1: {
    height: '100%',
  },
  navBg: {
    backgroundColor: "transparent",
  },
  blog: {
    left: 16,
    fontSize: GlobalStyles.FontSize.size_10xl,
    width: 143,
    textShadowColor: "#00466f",
    textShadowRadius: 1,
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  profile: {
    left: 334,
    width: 64,
    height: 64,
  },
  article: {
    backgroundColor: GlobalStyles.Color.gray_700,
    flex: 1,
    height: '100%',
    overflow: "hidden",
    width: "100%",
  },
  authorDate: {
    display: 'flex',
    flexDirection: 'column',
    marginTop: -55,
    marginLeft: 10,
  },
  title: {
    position: 'absolute',
    top: 10,
  },
  loadingText: {
    color: GlobalStyles.Color.white,
    fontSize: GlobalStyles.FontSize.size_10xl,
    fontFamily: GlobalStyles.FontFamily.hammersmithOne,
    textAlign: 'center',
  },
});

export default Article;
