import * as React from "react";
import { StyleSheet, View, Text, Image, Pressable, ScrollView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import GlobalStyles from "../GlobalStyles";
import UserCard from "./UserCard";

const About = () => {
  const navigation = useNavigation();

    return (
      <ScrollView>
        <View style={styles.about}>
          {/* Heading Text */}
          <Text style={[styles.aboutHeadingText, styles.shadow]}>About</Text>
          {/* About Text Card */}
          <View style={styles.aboutSection}>
            <LinearGradient
              start={{x: 0, y: 0}}
              end={{x: 1, y: 1}}
              colors={["rgba(14, 215, 191, 0.5)", "rgba(0, 70, 111, 0.4)"]}
              style={styles.bg}
            />
            <Text style={[styles.aboutText, styles.shadow]}>
              A blog post is any article, news piece, or guide that's published in the blog section of a website. A blog post typically covers a specific topic or query, is educational in nature, ranges from 600 to 2,000+ words, and contains other media types such as images, videos, infographics, and interactive charts.
            </Text>
            <Text style={[styles.aboutText, styles.shadow]}>
              Blog posts allow you and your business to publish insights, thoughts, and stories on your website about any topic. They can help you boost brand awareness, credibility, conversions, and revenue. Most importantly, they can help you drive traffic to your website.
            </Text>
          </View>
          <View style={styles.creatorsInfoBox}>
            <LinearGradient
              start={{x: 0, y: 0}}
              end={{x: 1, y: 1}}
              colors={["rgba(14, 215, 191, 0.5)", "rgba(0, 70, 111, 0.4)"]}
              style={styles.creatorBg}
            />
            <Text style={[styles.creatorsHeading, styles.shadow]}>
              About Us Creators And Owners:
            </Text>
            <View style={[styles.creator, styles.shadow]}>
              <Text style={[styles.creatorName, styles.shadow]}>Sanjana Butani : </Text>
              <Text style={[styles.creatorEmail, styles.shadow]}>sanjanabutani14@gmail.com</Text>
            </View>
            <View style={styles.creator}>
              <Text style={[styles.creatorName, styles.shadow]}>Pranav Visavadia : </Text>
              <Text style={[styles.creatorEmail, styles.shadow]}>visavadiapa@gmail.com</Text>
            </View>
          </View>
          {/* Creator Cards */}
          <View style={styles.creatorCardView}>
            <UserCard 
              username={"Pranav"} 
              bio={"Full Stack Developer || MERN Stack Developer || Student"} 
              joinedDate={"10 Aug 2022"}
              noOfArticles={21} 
              noOfComments={32}
            />
            <UserCard 
              username={"Sanjana"} 
              bio={"Creator || Artist"} 
              joinedDate={"12 Aug 2022"}
              noOfArticles={11} 
              noOfComments={7}
            />
          </View>
        </View>
      </ScrollView>
    );
};

const styles = StyleSheet.create({
  about: {
    height: '100%',
    width: '100%',
    backgroundColor: GlobalStyles.Color.black,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  aboutHeadingText: {
    color: GlobalStyles.Color.white,
    textAlign: 'center',
    fontSize: GlobalStyles.FontSize.size_8xl,
    top: 22,
    zIndex: 10,
  },
  aboutSection: {
    height: 410,
    width: 380,
    padding: 16,
    borderRadius: 7,
    marginBottom: 5,
  },
  bg: {
    height: 410,
    width: 380,
    position: "absolute",
    borderRadius: 7,
  },
  aboutText: {
    color: GlobalStyles.Color.white,
    textAlign: 'left',
    fontSize: GlobalStyles.FontSize.size_3xl,
    lineHeight: 22,
    marginBottom: 10,
    marginTop: 5,
  },
  creatorsHeading: {
    color: GlobalStyles.Color.white,
    textAlign: 'left',
    fontSize: GlobalStyles.FontSize.size_5xl,
  },
  creatorsInfoBox: {
    width: 380,
    height: 150,
    padding: 16,
    marginBottom: 10,
  },
  creatorBg: {
    width: 380,
    height: 150,
    position: "absolute",
    borderRadius: 7,
  },
  creator: {
    marginTop: 10,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  creatorName: {
    color: GlobalStyles.Color.white,
    fontSize: GlobalStyles.FontSize.size_2xl,
  },
  creatorEmail: {
    color: GlobalStyles.Color.white,
    fontSize: GlobalStyles.FontSize.size_2xl,
  },
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 3,
      height: 3,
    },
    shadowRadius: 5,
    shadowOpacity: 0.7,
    fontFamily: GlobalStyles.FontFamily.hammersmithOne,
  },
  creatorCardView: {
    marginBottom: 80,
  }
});

export default About;
