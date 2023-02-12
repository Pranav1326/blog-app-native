import * as React from "react";
import { StyleSheet, View, Text, Image, Pressable } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import GlobalStyles from "../GlobalStyles";

const Error404 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.error404}>
      <LinearGradient
        style={styles.mainBg}
        locations={[0, 1]}
        colors={["#0ed7bf", "#00466f"]}
      />
      <View style={styles.returnHomeBtn}>
        <LinearGradient
          style={styles.btnBg}
          locations={[0, 1]}
          colors={["#0ed7bf", "#00466f"]}
        />
        <Text style={[styles.returnHome, styles.blogTypo]}>Return Home</Text>
      </View>
      <Text
        style={[
          styles.sorryThePageYouAreLooking,
          styles.theTypo,
          styles.theColor,
        ]}
      >
        Sorry the page you are looking for doesn’t exist
      </Text>
      <Text
        style={[styles.oopsThePageIsNotFound, styles.theTypo, styles.theColor]}
      >
        Oops! the page is not found!
      </Text>
      <Text style={[styles.text, styles.theTypo]}>404</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  blogTypo: {
    textShadowOffset: {
      width: 0,
      height: 4,
    },
    textAlign: "left",
    fontFamily: GlobalStyles.FontFamily.hammersmithOne,
    color: GlobalStyles.Color.white,
  },
  theTypo: {
    width: 350,
    textAlign: "center",
    left: 32,
    fontFamily: GlobalStyles.FontFamily.hammersmithOne,
    position: "absolute",
  },
  theColor: {
    color: GlobalStyles.Color.white,
    textAlign: "center",
    left: 32,
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
  mainBg: {
    top: 112,
    width: 382,
    height: 400,
    backgroundColor: "transparent",
    left: 16,
    position: "absolute",
  },
  btnBg: {
    borderRadius: GlobalStyles.Border.br_sm,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    left: 0,
    top: 0,
    height: 36,
    width: 100,
    backgroundColor: "transparent",
    position: "absolute",
  },
  returnHome: {
    top: 9,
    left: 7,
    fontSize: GlobalStyles.FontSize.size_lg,
    textShadowColor: "rgba(0, 0, 0, 0.25)",
    textShadowRadius: 5,
    position: "absolute",
  },
  returnHomeBtn: {
    top: 321,
    left: 157,
    height: 36,
    width: 100,
    position: "absolute",
  },
  sorryThePageYouAreLooking: {
    top: 288,
    fontSize: GlobalStyles.FontSize.size_base,
    textTransform: "lowercase",
  },
  oopsThePageIsNotFound: {
    top: 252,
    fontSize: GlobalStyles.FontSize.size_4xl,
    textTransform: "uppercase",
  },
  text: {
    top: 128,
    fontSize: 96,
    height: 100,
  },
  navBg: {
    backgroundColor: "transparent",
  },
  blog: {
    fontSize: GlobalStyles.FontSize.size_10xl,
    width: 143,
    textShadowColor: "#00466f",
    textShadowRadius: 1,
    left: 16,
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
  error404: {
    backgroundColor: GlobalStyles.Color.gray_700,
    flex: 1,
    height: 896,
    overflow: "hidden",
    width: "100%",
  },
});

export default Error404;
