import * as React from "react";
import { StyleSheet, View, Pressable, Text, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import GlobalStyles from "../GlobalStyles";
import { useSelector } from "react-redux";
import { SvgUri, SvgXml } from "react-native-svg";
import BlogLogo from '../assets/svgs/BlogLogo';

const Navbar = () => {
  const navigation = useNavigation();
  const user = useSelector(state => state.userReducer.user);
  console.log(user);

  return (
    <View style={styles.navPosition}>
      <LinearGradient
        style={[styles.navBg, styles.navPosition]}
        start={{x: 1, y: 0}}
        end={{x: 0, y: 1}}
        colors={["rgba(14, 215, 191, 0.63)", "rgba(0, 70, 111, 0.63)"]}
      />
      <Pressable 
        onPress={() => navigation.navigate("Articles")}
        style={styles.blogIcon}
      >
        <SvgXml xml={BlogLogo} style={[ styles.blog, styles.blogPosition ]} />
      </Pressable>
      {
        user ? 
          <Pressable
            style={[styles.profile4, styles.userProfilePic]}
            onPress={() => navigation.navigate("Profile")}
          >
            <Image
              resizeMode="cover"
              style={styles.profilepic}
              source={ user && (user.profilepic === "" ? require("../assets/profile123x.png") : {uri: user.profilepic }) }
              // source={require('../assets/logo/user.png')}
            />
          </Pressable>
        :
          null
      }
    </View>
  );
};

const styles = StyleSheet.create({
  navbarLayout: {
    height: 800,
    width: 252,
    position: "absolute",
  },
  navbarBgPosition: {
    left: 0,
    top: 0,
  },
  aboutLayout: {
    height: 40,
    width: 244,
    position: "absolute",
  },
  homeShadowBox: {
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 4,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    left: 4,
    width: 244,
  },
  blogTypo: {
    textAlign: "left",
    color: GlobalStyles.Color.white,
    fontFamily: GlobalStyles.FontFamily.hammersmithOne,
  },
  home1Typo: {
    fontSize: GlobalStyles.FontSize.size_2xl,
    top: 10,
    color: GlobalStyles.Color.white,
    fontFamily: GlobalStyles.FontFamily.hammersmithOne,
    position: "absolute",
  },
  navPosition: {
    height: 100,
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
  },
  blogPosition: {
    top: 45,
  },
  navbarBg: {
    backgroundColor: "#000",
  },
  aboutChild: {
    borderRadius: GlobalStyles.Border.br_sm,
    backgroundColor: GlobalStyles.Color.gray_600,
    borderStyle: "solid",
    borderColor: "#fff",
    borderWidth: 1,
  },
  about1: {
    left: 100,
  },
  about: {
    top: 756,
  },
  allUsers1: {
    left: 90,
  },
  allUsers: {
    top: 148,
  },
  profile1: {
    left: 99,
  },
  profile: {
    top: 100,
  },
  home1: {
    left: 101,
  },
  home: {
    top: 52,
  },
  searchIcon: {
    top: 6,
    left: 210,
    width: 28,
    height: 28,
    position: "absolute",
  },
  search: {
    top: 4,
  },
  navbar1: {
    top: 96,
    left: 162,
  },
  navBg: {
    backgroundColor: "#000",
  },
  blog: {
    shadowColor: "#000",
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowRadius: 1,
    top: 16,
    left: 16,
  },
  profileIcon: {
    left: 334,
    width: 64,
    height: 64,
  },
  navbar: {
    backgroundColor: GlobalStyles.Color.gray_700,
    flex: 1,
    width: "100%",
    height: 896,
    overflow: "hidden",
  },
  profile4: {
    right: 100,
    width: 64,
    height: 64,
  },
  blogIcon: {
    position: 'absolute'
  },
  userProfilePic: {
    top: 20,
  },
  profilepic: {
    width: 64,
    height: 64,
    top: 10,
    borderRadius: 100,
  }
});

export default Navbar;
