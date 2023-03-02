import * as React from "react";
import { StyleSheet, View, Image, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import GlobalStyles from "../GlobalStyles";
import { ScrollView } from "react-native-gesture-handler";
import ArticleCard from "./ArticleCard";
import Footer from "../components/Footer";
import { useSelector } from "react-redux";
import { logout } from "../api/userApi";
import { useDispatch } from "react-redux";
import { getAuthorArticles, getUser } from "../api/userProfile";
import axios from "axios";

const AuthorProfile = ({route}) => {
    const navigation = useNavigation();
    const { id } = route.params;

    const [ user, setUser ] = React.useState({});
    const [ articles, setArticles ] = React.useState(null);

    React.useEffect(() => {
        getUser(id, setUser, setArticles);
    }, []);
    console.log("articles of user", user.articles);
  
    const renderArtices = articles && articles.map((article, id) => {
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
    
    return (
        <ScrollView>
        <View style={styles.profile}>
            {/* Main Background */}
            <LinearGradient 
            start={{x: 0, y: 0}}
            end={{x: 1, y: 1}}
            colors={["rgba(14, 215, 191, 0.5)", "rgba(0, 70, 111, 0.4)"]}
            style={styles.bg}
            />
            
            <View
            style={[
                styles.profileBox,
                // styles.articleLayout,
                styles.articleShadowBox1,
            ]}
            >

            {/* User Profile-Pic */}
            <Image
                style={styles.profileIcon4}
                resizeMode="cover"
                source={ user && (user.profilepic === "" ? require("../assets/profile123x.png") : {uri: user.profilepic }) }
            />

            {/* Username */}
            <Text style={styles.username}>{user.username}</Text>

            {/* Email */}
            <Text
                style={styles.emailText}
            >
                {user.email}
            </Text>

            {/* Bio */}
            <View style={styles.fieldBox}>
                <LinearGradient 
                start={{x: 0, y: 0}}
                end={{x: 1, y: 1}}
                colors={["rgba(0, 70, 111, 0.4)", "rgba(14, 215, 191, 0.45)"]}
                style={styles.bgBio}
                /> 
                <View style={styles.fieldTitleParent}>
                <View style={styles.fieldTitleBgLayout} />
                <Text style={[styles.fieldTitle]}>
                    Bio
                </Text>
                </View>
                <View style={styles.joinedOnTextBg} />
                <Text
                style={styles.fieldValue}
                >
                {user.bio}
                </Text>
            </View>

            {/* Work */}
            <View style={styles.fieldBox}>
                <LinearGradient 
                start={{x: 0, y: 0}}
                end={{x: 1, y: 1}}
                colors={["rgba(0, 70, 111, 0.4)", "rgba(14, 215, 191, 0.45)"]}
                style={styles.bgBio}
                /> 
                <View style={styles.fieldTitleParentWork}>
                <View style={styles.fieldTitleBgLayout} />
                <Text style={styles.fieldTitle}>
                    Work
                </Text>
                </View>
                <View style={styles.joinedOnTextBg} />
                <Text
                style={styles.fieldValue}
                >
                {user.work}
                </Text>
            </View>

            {/* Location */}
            <View style={styles.fieldBox}>
                <LinearGradient 
                start={{x: 0, y: 0}}
                end={{x: 1, y: 1}}
                colors={["rgba(0, 70, 111, 0.4)", "rgba(14, 215, 191, 0.45)"]}
                style={styles.bgBio}
                /> 
                <View style={styles.fieldTitleParentLocation}>
                <View style={styles.fieldTitleBgLayout} />
                <Text style={styles.fieldTitle}>
                    Location
                </Text>
                </View>
                <View style={styles.joinedOnTextBg} />
                <Text
                style={styles.fieldValue}
                >
                {user.location}
                </Text>
            </View>

            {/* Joined On */}
            <View style={styles.fieldBox}>
                <LinearGradient 
                start={{x: 0, y: 0}}
                end={{x: 1, y: 1}}
                colors={["rgba(0, 70, 111, 0.4)", "rgba(14, 215, 191, 0.45)"]}
                style={styles.bgBio}
                /> 
                <View style={styles.fieldTitleParentJoinedon}>
                <View style={styles.fieldTitleBgLayout} />
                <Text style={styles.fieldTitle}>
                    Joined On
                </Text>
                </View>
                <View style={styles.joinedOnTextBg} />
                <Text
                style={styles.fieldValue}
                >
                {new Date(user.createdAt).toDateString()}
                </Text>
            </View>

            </View>

            <View style={styles.articleSection}>
            {/* User Articles */}
            <Text style={[styles.articles, styles.blogTypo]}>{user.articles===[] && "No "}Articles</Text>
            {articles ? 
            (articles !== [] ?
              renderArtices
              :
              <Text style={styles.noArticles}>No Articles written by {user.username}!</Text>
              ) : 
              <View style={styles.articles}>
                <Text style={styles.loadingText}>Loading...</Text>
              </View> 
            }
            </View>
            <Footer />
        </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
  articleLayout1: {
    width: 381,
    height: 208,
  },
  loadingText: {
    color: GlobalStyles.Color.white,
    fontSize: GlobalStyles.FontSize.size_9xl,
    fontFamily: GlobalStyles.FontFamily.hammersmithOne,
    textAlign: 'center',  
  },
  articleShadowBox1: {
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 10,
    shadowOffset: {
      width: 6,
      height: 6,
    },
    shadowColor: "rgba(0,0,0,1)",
  },
  bgBg: {
    backgroundColor: GlobalStyles.Color.black,
    borderRadius: GlobalStyles.Border.br_sm,
    left: 0,
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
    width: 94,
    height: 20,
    top: 0,
    position: "absolute",
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
    left: 44,
    textAlign: "left",
    fontFamily: GlobalStyles.FontFamily.hammersmithOne,
    position: "absolute",
  },
  articleLayout: {
    minWidth: 382,
    height: 445,
    position: "absolute",
    left: '10%',
  },
  articleShadowBox: {
    left: 1,
    width: 382,
    height: 208,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 4,
      height: 4,
    },
    shadowColor: "#000",
  },
  webdevLayout: {
    width: 46,
    left: 8,
  },
  javascriptPosition: {
    left: 8,
    width: 56,
  },
  blogTypo: {
    textShadowOffset: {
      width: 4,
      height: 4,
    },
    color: GlobalStyles.Color.white,
    fontFamily: GlobalStyles.FontFamily.hammersmithOne,
  },
  bioLayout: {
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#fff',
    width: '100%',
    height: 50,
    // position: "absolute",
  },
  studentTypo: {
    fontSize: GlobalStyles.FontSize.size_2xl,
  },
  studentTypo1: {
    textAlign: "center",
    fontSize: GlobalStyles.FontSize.size_4xl,
    color: GlobalStyles.Color.white,
    fontFamily: GlobalStyles.FontFamily.hammersmithOne,
  },
  joinedPosition: {
    top: 0,
    position: "absolute",
  },
  bio1Color: {
    color: GlobalStyles.Color.gray_300,
    fontFamily: GlobalStyles.FontFamily.hammersmithOne,
  },
  spanLayout: {
    height: 13,
    left: 20,
  },
  bioBgLayout: {
    backgroundColor: GlobalStyles.Color.black,
    left: 0,
  },
  locationPosition: {
    top: 0,
    position: "absolute",
  },
  bioPosition: {
    top: 0,
    position: "absolute",
  },
  editLayout: {
    height: 36,
    width: 110,
    position: "absolute",
  },
  logoutlayout: {
    height: 36,
    width: 80,
    position: "absolute",
  },
  navPosition: {
    height: 96,
    width: 414,
    top: 0,
    left: 0,
    position: "absolute",
  },
  blogPosition: {
    top: 16,
    position: "absolute",
  },
  bg: {
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    backgroundColor: '#000',
    height: 1300,
    position: 'absolute',
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
    left: 150,
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
    width: 357,
  },
  profileIcon: {
    width: 40,
    top: 0,
    left: 0,
  },
  pranav: {
    fontSize: GlobalStyles.FontSize.size_2xl,
    width: 53,
    color: GlobalStyles.Color.white,
    top: 4,
  },
  aug2022: {
    top: 23,
    width: 61,
    fontSize: GlobalStyles.FontSize.size_xs,
    color: GlobalStyles.Color.gray_200,
    left: 44,
  },
  profileUsernamePublish: {
    top: 12,
    width: 105,
    left: 12,
  },
  article: {
    top: 660,
    height: 208,
    left: 0,
  },
  article1: {
    top: 440,
    height: 208,
    left: 0,
  },
  bg2: {
    top: 0,
    height: 208,
  },
  readingTime2: {
    left: 278,
  },
  tags2: {
    width: 245,
  },
  whyCookieIsPreferableCompa2: {
    width: 359,
  },
  article2: {
    top: 220,
  },
  readingTime3: {
    left: 277,
  },
  webdev3Typo: {
    height: 14,
    top: 2,
    color: GlobalStyles.Color.white,
    fontSize: GlobalStyles.FontSize.size_base,
    textAlign: "left",
    fontFamily: GlobalStyles.FontFamily.hammersmithOne,
    position: "absolute",
  },
  tags3: {
    width: 244,
  },
  whyCookieIsPreferableCompa3: {
    width: 358,
  },
  article3: {
    top: 0,
  },
  profileArticles: {
    top: 600,
    left: 15,
    width: 383,
    height: 868,
    position: "absolute",
  },
  articles: {
    width: '100%',
    textAlign: 'center',
    fontSize: GlobalStyles.FontSize.size_7xl,
    textShadowColor: "#000",
    textShadowRadius: 10,
  },
  profileBg: {
    top: 58,
    height: 366,
  },
  joinedOnTextBg: {
    top: 6,
    borderRadius: GlobalStyles.Border.br_md,
    left: 0,
    position: "absolute",
  },
  aug20224: {
    textAlign: "left",
  },
  joinedOn1: {
    textAlign: "left",
    fontSize: GlobalStyles.FontSize.size_2xl,
    left: 0,
  },
  joinedOn: {
    top: 358,
  },
  gujaratIndia: {
    textAlign: "left",
  },
  location1: {
    textAlign: "left",
    fontSize: GlobalStyles.FontSize.size_2xl,
    left: 0,
  },
  location: {
    top: 300,
  },
  student: {
    textAlign: "left",
  },
  workPosition: {
    top: 0,
  },
  work1: {
    textAlign: "left",
    fontSize: GlobalStyles.FontSize.size_2xl,
    top: 0,
    left: 0,
    position: "absolute",
  },
  work: {
    top: 242,
  },
  fullStackDeveloper: {
    textAlign: "left",
  },
  bio1: {
    textAlign: "center",
    fontSize: GlobalStyles.FontSize.size_2xl,
    left: 0,
  },
  bio: {
    top: 184,
  },
  visavadiapagmailcom: {
    top: 155,
    left: 110,
    width: 163,
    textAlign: "left",
  },
  username: {
    top: 116,
    fontSize: GlobalStyles.FontSize.size_6xl,
    color: GlobalStyles.Color.white,
    textAlign: "center",
    fontFamily: GlobalStyles.FontFamily.hammersmithOne,
  },
  profileIcon4: {
    left: 134,
    width: 117,
    height: 116,
    top: 0,
    position: "absolute",
    borderRadius: '100%',
  },
  profileBox: {
    top: 60,
    minHeight: 530,
    minWidth: 380,
    backgroundColor: '#000',
    padding: 10,
    marginBottom: 70,
    borderRadius: GlobalStyles.Border.br_sm,
  },
  editProfileBtnChild: {
    shadowColor: "rgba(0, 0, 0, 0.5)",
    backgroundColor: "transparent",
    borderRadius: GlobalStyles.Border.br_sm,
    height: 36,
    width: 100,
    top: 0,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 2,
      height: 2,
    },
    left: 0,
  },
  editProfile: {
    top: 9,
    left: 14,
    textShadowColor: "rgba(0, 0, 0, 0.25)",
    textShadowRadius: 5,
  },
  editProfileBtn: {
    right: 0
  },
  navBg: {
    backgroundColor: "transparent",
  },
  blog: {
    fontSize: GlobalStyles.FontSize.size_10xl,
    width: 144,
    textShadowColor: "#00466f",
    textShadowRadius: 1,
    left: 16,
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  profile1: {
    left: 335,
    width: 64,
    height: 64,
  },
  profile: {
    backgroundColor: GlobalStyles.Color.gray_700,
    width: "100%",
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  bgBio: {
    height: '100%',
    width: '100%',
    borderRadius: 5
  },
  emailText: {
    color: GlobalStyles.Color.white,
    textAlign: 'center',
    top: 110
  },
  fieldTitle: {
    width: '100%',
    color: GlobalStyles.Color.gray_200,
    fontSize: GlobalStyles.FontSize.size_2xl,
    fontWeight: "600",
    backgroundColor: '#000',
    paddingLeft: 5,
    paddingRight: 5,
    textAlign: 'center',
  },
  fieldBox: {
    height: 60,
    top: 125,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: GlobalStyles.Color.white,
    display: 'flex',
    flexDirection: 'column',
    margin: 10,
    zIndex: 10,
  },
  fieldTitleParent: {
    width: 38,
    bottom: 70,
    left: 20,
    borderWidth: 1,
    borderRadius: 5,
  },
  fieldValue: {
    color: GlobalStyles.Color.white,
    fontSize: GlobalStyles.FontSize.size_4xl,
    // left: 20,
    paddingLeft: 15,
    top: -65,
    overflow: 'scroll',
  },
  fieldTitleParentWork: {
    width: 54,
    bottom: 70,
    left: 20,
    borderWidth: 1,
    borderRadius: 5,
  },
  fieldTitleParentLocation: {
    width: 82,
    bottom: 70,
    left: 20,
    borderWidth: 1,
    borderRadius: 5,
  },
  fieldTitleParentJoinedon: {
    width: 94,
    bottom: 70,
    left: 20,
    borderWidth: 1,
    borderRadius: 5,
  },
  articleSection: {
    width: '100%',
    heigh: '100%',
    marginBottom: 10,
  },
  noArticles: {
    color: GlobalStyles.Color.white,
    fontSize: GlobalStyles.FontSize.size_4xl,
    fontFamily: GlobalStyles.FontFamily.hammersmithOne,
    marginLeft: 20,
    marginTop: 5,
    textAlign: 'center',
  },
});

export default AuthorProfile;
