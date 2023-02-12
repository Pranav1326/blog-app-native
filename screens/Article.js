import * as React from "react";
import { StyleSheet, View, Text, Image, Pressable } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import GlobalStyles from "../GlobalStyles";
import { ScrollView } from "react-native-gesture-handler";
import Footer from "../components/Footer";

const Article = () => {
  const navigation = useNavigation();

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
                style={styles.profileLayout}
                resizeMode="cover"
                source={require("../assets/profile16.png")}
              />
              <View style={styles.authorDate}>
                <Text style={[styles.pranav, styles.pranavPosition]}
                  onPress={() => navigation.navigate("Profile")}
                >Pranav</Text>
                <Text style={[styles.postedOn18Aug2022, styles.pranavPosition]}>
                  Posted on 18 Aug 2022
                </Text>
              </View>
            </View>

            {/* Title */}
            <Text style={[styles.whyCookieIsPreferableCompa, styles.blogTypo]}>
              Why cookie is preferable compared to localStorage when it comes to
              authentication
            </Text>

            {/* Tags */}
            <View style={[styles.tags, styles.tagsShadowBox]}>
              <View style={styles.tagPosition}>
                <Text style={[styles.tagText, styles.webdevPosition]}>
                  javascript
                </Text>
              </View>
            </View>
          </View>

          {/* Article Body */}
          <View style={[styles.articleBody, styles.tagsShadowBox]}>
            <View style={styles.code}>
              <View style={styles.codeChild} />
              <Text
                style={[
                  styles.localstoragesetitemyourtoke,
                  styles.localstoragesetitemyourtokeTypo,
                ]}
              >
                localStorage.setItem("yourTokenName", yourToken);
              </Text>
              <Text
                style={[
                  styles.localstoragegetitemyourtoke,
                  styles.localstoragesetitemyourtokeTypo,
                ]}
              >
                localStorage.getItem("yourTokenName", yourToken);
              </Text>
            </View>
            <View style={[styles.articleBodyChild, styles.articleLayout]} />
            <View style={[styles.articleBodyItem, styles.articleLayout]} />
            <Text
              style={[
                styles.toUseLocalstorageJustSim,
                styles.inThisArticleIWillBreakTypo,
              ]}
            >
              <Text style={styles.toUse}>{`To use  `}</Text>
              <Text style={styles.localstorage}>localStorage</Text>
              <Text
                style={styles.toUse}
              >{` , just simply call use the           `}</Text>
              <Text style={styles.localstorage}>localStorage</Text>
              <Text style={styles.toUse}> object</Text>
            </Text>
            <Text
              style={[
                styles.localStorage,
                styles.tagsLayout,
                styles.comparisonTypo,
              ]}
            >
              Local Storage
            </Text>
            <Text
              style={[
                styles.comparison,
                styles.tagsLayout,
                styles.comparisonTypo,
              ]}
            >
              Comparison
            </Text>
            <Text
              style={[
                styles.inThisArticleIWillBreak,
                styles.inThisArticleIWillBreakTypo,
              ]}
            >
              In this article, I will break down 2 common places to store tokens.
              Cookies and LocalStorage
            </Text>
            <Text
              style={[
                styles.weKnowAboutJwtOrJsonWeb,
                styles.inThisArticleIWillBreakTypo,
              ]}
            >
              We know about JWT, or JSON Web Token, as an industry standard RFC
              7519 method for representing claims securely between two parties.
              JWT is very common nowadays. But where should we store them in the
              front end?
            </Text>
            <Text
              style={[
                styles.introduction,
                styles.title,
                styles.comparisonTypo,
              ]}
            >
              Introduction
            </Text>
          </View>

        </View>
      </View>
      <Footer />
    </ScrollView>

  );
};

const styles = StyleSheet.create({
  articlePosition: {
    width: '100%',
    left: 0,
  },
  tagsShadowBox: {
    shadowOpacity: 1,
    elevation: 4,
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
    fontSize: GlobalStyles.FontSize.size_base,
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
    height: 1000,
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
    height: 500,
    left: 10,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
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
    top: -230,
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
    top: 502,
    left: 12,
    display: 'flex',
    flexDirection: "row",
  },
  whyCookieIsPreferableCompa: {
    top: 266,
    fontSize: GlobalStyles.FontSize.size_7xl,
    textShadowColor: "rgba(0, 0, 0, 0.25)",
    textShadowRadius: 4,
    left: 12,
    width: 390,
    textShadowOffset: {
      width: 0,
      height: 4,
    },
    position: "absolute",
  },
  postedOn18Aug2022: {
    marginLeft: 54,
    marginTop: 5,
    color: GlobalStyles.Color.gray_100,
    fontSize: GlobalStyles.FontSize.size_lg,
  },
  pranav: {
    fontSize: 24,
    height: 23,
    color: GlobalStyles.Color.white,
    marginLeft: 54,
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
    height: 522,
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
    marginTop: -45,
  },
  title: {
    position: 'absolute',
    top: 10,
  }
});

export default Article;
