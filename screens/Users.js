import * as React from "react";
import { StyleSheet, View, Text, Image, Pressable } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import GlobalStyles from "../GlobalStyles";
import UserCard from "./UserCard";
import { ScrollView } from "react-native-gesture-handler";
import Footer from "../components/Footer";
import { fetchAllUsers } from "../api/userApi";

const Users = () => {

  const [ data, setData ] = React.useState(null);
  
  React.useEffect(() => {
    fetchAllUsers(setData);
  }, []);
  
  const usercard = data && data.map(e => {
    return(
      <UserCard 
        key={e._id}
        username={e.username}
        bio={e.bio}
        joinedDate={new Date(e.createdAt).toDateString()} 
        noOfArticles={e.articles.length}
        noOfComments={e.comments.length}
        profilepic={e.profilepic}
      />
    );
  });
  
  if(!data){
    return (
      <View style={styles.users}>
        <Text style={styles.loadingText}>Loading...</Text>
      </View>
    );
  }
  
  return (
    <ScrollView>
      <View style={styles.users}>
        <View style={styles.usersView}>
          <Text style={styles.allUsersText}>All Users</Text>
          {usercard}
        </View> 
        <Footer />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  profileShadowBox: {
    height: 158,
    width: 390,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 4,
      height: 4,
    },
    shadowColor: "#000",
    left: 12,
    position: "absolute",
  },
  commentsLayout: {
    height: 21,
    width: 110,
    position: "absolute",
  },
  commentsShadowBox: {
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 4,
      height: 4,
    },
  },
  commentsPosition: {
    top: 125,
    shadowColor: "rgba(0, 0, 0, 0.25)",
  },
  textLayout: {
    height: 16,
    position: "absolute",
  },
  textTypo: {
    textAlign: "left",
    fontFamily: GlobalStyles.FontFamily.hammersmithOne,
  },
  textTypo1: {
    color: GlobalStyles.Color.white,
    fontSize: GlobalStyles.FontSize.size_lg,
    top: 2,
    height: 16,
    textAlign: "left",
    fontFamily: GlobalStyles.FontFamily.hammersmithOne,
  },
  articlesLayout: {
    width: 100,
    height: 21,
    position: "absolute",
  },
  atticleBorder: {
    borderWidth: 1,
    backgroundColor: GlobalStyles.Color.teal,
    borderColor: "#fff",
    borderStyle: "solid",
    borderRadius: GlobalStyles.Border.br_sm,
    left: 0,
    top: 0,
  },
  pranav2Text: {
    textShadowRadius: 4,
    textShadowColor: "rgba(0, 0, 0, 0.25)",
    textShadowOffset: {
      width: 0,
      height: 4,
    },
  },
  profileLayout1: {
    width: 213,
    top: 8,
    height: 52,
    left: 8,
  },
  profileLayout: {
    height: 52,
    position: "absolute",
  },
  blogTypo: {
    textShadowOffset: {
      width: 0,
      height: 4,
    },
    textAlign: "left",
    color: GlobalStyles.Color.white,
    fontFamily: GlobalStyles.FontFamily.hammersmithOne,
  },
  navPosition: {
    height: 96,
    width: 414,
    left: 0,
    top: 0,
    position: "absolute",
  },
  blogPosition: {
    top: 16,
    position: "absolute",
  },
  profileBg: {
    backgroundColor: "transparent",
    borderRadius: GlobalStyles.Border.br_sm,
    left: 0,
    top: 0,
    height: 158,
    width: 390,
    position: "absolute",
  },
  comments1: {
    left: 34,
    width: 69,
  },
  commentsChild: {
    top: 3,
    left: 28,
    borderRightWidth: 1,
    width: 1,
    height: 16,
    borderColor: "#fff",
    borderStyle: "solid",
  },
  text: {
    left: 6,
    width: 18,
  },
  comments: {
    left: 128,
  },
  articles1: {
    left: 40,
    width: 48,
  },
  text1: {
    width: 13,
    left: 8,
  },
  articles: {
    left: 8,
  },
  iAmAReactDeveloperAndCur: {
    top: 68,
    fontSize: GlobalStyles.FontSize.size_base,
    color: GlobalStyles.Color.gray_100,
    width: 366,
    textAlign: "left",
    fontFamily: GlobalStyles.FontFamily.hammersmithOne,
    textShadowColor: "rgba(0, 0, 0, 0.25)",
    left: 12,
    position: "absolute",
  },
  joinedPosition: {
    color: GlobalStyles.Color.gray_200,
    left: 60,
    top: 28,
    textAlign: "left",
    fontFamily: GlobalStyles.FontFamily.hammersmithOne,
    fontSize: GlobalStyles.FontSize.size_lg,
    position: "absolute",
  },
  pranavTypo: {
    height: 22,
    width: 75,
    fontSize: GlobalStyles.FontSize.size_5xl,
    top: 4,
    left: 60,
    textAlign: "left",
    color: GlobalStyles.Color.white,
    fontFamily: GlobalStyles.FontFamily.hammersmithOne,
    position: "absolute",
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  profile1: {
    width: 52,
    height: 52,
    left: 0,
    top: 0,
  },
  profile: {
    top: 488,
  },
  profile2: {
    top: 318,
  },
  profile5: {
    left: -4,
    width: 60,
    height: 60,
    top: 0,
    position: "absolute",
  },
  profile4: {
    top: 148,
  },
  allUsers: {
    top: 104,
    left: 135,
    fontSize: GlobalStyles.FontSize.size_7xl,
    width: 145,
    height: 36,
    textShadowColor: "#000",
    textShadowRadius: 2,
    position: "absolute",
    textShadowOffset: {
      width: 0,
      height: 4,
    },
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
  profile6: {
    left: 334,
    width: 64,
    height: 64,
  },
  users: {
    backgroundColor: GlobalStyles.Color.gray_700,
    height: '100%',
    width: "100%",
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  usersView: {
    marginTop: 10,
    marginBottom: 10,
    minHeight: 900,
    width: '100%',
    backgroundColor: '#000',
  },
  allUsersText: {
    color: GlobalStyles.Color.white,
    fontSize: GlobalStyles.FontSize.size_8xl,
    fontFamily: GlobalStyles.FontFamily.hammersmithOne,
    textAlign: 'center',
  },
  loadingText: {
    color: GlobalStyles.Color.white,
    fontSize: GlobalStyles.FontSize.size_9xl,
    fontFamily: GlobalStyles.FontFamily.hammersmithOne,
    textAlign: 'center',  
  },
});

export default Users;
