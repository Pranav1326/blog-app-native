import * as React from "react";
import { StyleSheet, View, Pressable, Text, Image, TextInput } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import GlobalStyles from "../GlobalStyles";

const Register = () => {
  const navigation = useNavigation();

  return (
    <View stye={styles.registerMain}>
      <LinearGradient 
        start={{x: 0, y: 0}}
        end={{x: 1, y: 1}}
        colors={["rgba(14, 215, 191, 0.5)", "rgba(0, 70, 111, 0.4)"]}
        style={styles.bg}
      />
      {/* Main Registration Box */}
      <View style={[styles.registerBox, styles.pressableShadowBox]}>

        {/* REGISTER Title */}
        <View style={[styles.registerTitle, styles.registerPosition]}>
          {/* Title Logo */}
          <Image source={require('../assets/logo/Register.png')} style={{
            width: 200,
            height: 80,
            position: 'absolute',
            top: -35,
            zIndex: 5
          }}/>
        </View>

        {/* Username */}
        <View style={[styles.username, styles.passwordPosition]}>
          <Text style={styles.usernameText}>Username</Text>
          <TextInput style={styles.userInput}></TextInput>
        </View>

        {/* Email */}
        <View style={[styles.email, styles.emailPosition]}>
          <Text style={styles.usernameText}>Email</Text>
          <TextInput style={styles.userInput}></TextInput>
        </View>

        {/* Password */}
        <View style={[styles.password, styles.passwordPosition]}>
          <Text style={styles.usernameText}>Password</Text>
          <TextInput style={styles.userInput}></TextInput>
        </View>

        {/* Confirm Password */}
        <View style={[styles.confirmPassword, styles.confirmPasswordPosition]}>
          <Text style={styles.usernameText}>Confirm Password</Text>
          <TextInput style={styles.userInput}></TextInput>
        </View>

        {/* Buttons */}
        <View style={styles.btns}>
          
          {/* Login */}
          <View style={[styles.loginBtn, styles.btnLayout]}>
            <LinearGradient
              style={[styles.btnBg, styles.btnLayout]}
              start={{x: 0, y: 0}}
              end={{x: 1, y: 1}}
              colors={["rgba(14, 215, 191, 0.7)", "rgba(0, 70, 111, 0.7)"]}
            >
            </LinearGradient>
            <Pressable
              style={[
                styles.pressable,
                styles.iconLayout,
                styles.loginBoxShadowBox,
              ]}
              onPress={() => navigation.navigate("Articles")}
            >
              <Text style={[styles.login1, styles.login1Typo]}>Login</Text>
            </Pressable>
          </View>

          {/* Register */}
          <View style={[styles.registerBtn, styles.btnLayout1]}>
            <LinearGradient
              style={[styles.btnBg, styles.btnLayout1]}
              start={{x: 0, y: 0}}
              end={{x: 1, y: 1}}
              colors={["rgba(14, 215, 191, 0.7)", "rgba(0, 70, 111, 0.7)"]}
            >
            </LinearGradient>
            <Pressable
              style={[
                styles.pressable,
                styles.iconLayout,
                styles.loginBoxShadowBox,
              ]}
              onPress={() => navigation.navigate("Register")}
            >
              <Text style={[styles.register, styles.login1Typo, styles.registerTypo]}>Register</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  registerMain: {
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  bg: {
    // position: 'absolute',
    width: '100%',
    height: 900,
    backgroundColor: '#000',
  },
  usernameText: {
    color: GlobalStyles.Color.gray_200,
    left: 14,
    position: 'absolute',
    top: -15,
    padding: 5,
    backgroundColor: '#000',
    borderRadius: 5,
    borderWidth: 1,
  },
  userInput: {
    color: '#fff',
    fontSize: GlobalStyles.FontSize.size_4xl,
    top: 10,
    height: 40,
    paddingLeft: 12,
    paddingRight: 12,
    width: '100%'
  },
  pressableShadowBox: {
    shadowOpacity: 1,
    shadowRadius: 4,
    shadowOffset: {
      width: 4,
      height: 4,
    },
  },
  passwordPosition: {
    left: 14,
    position: "absolute",
  },
  emailPosition: {
    left: 14,
    position: 'absolute',
  },
  btnLayout1: {
    height: 36,
    width: 110,
  },
  iconLayout: {
    height: "100%",
    width: "100%",
  },
  btnLayout: {
    width: 80,
    height: 36,
  },
  registerPosition: {
    // height: 56,
    top: -5,
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
  pressable: {
    shadowColor: "rgba(0, 0, 0, 0.5)",
    backgroundColor: "transparent",
    borderRadius: GlobalStyles.Border.br_sm,
  },
  login: {
    left: 18,
    width: 44,
  },
  loginBtn: {
    left: 90,
    top: 120,
  },
  registerBtn: {
    right: 150,
    top: 120,
  },
  confirmPassword: {
    top: 225,
  },
  password: {
    top: 200,
    height: 60,
    width: 310,
    borderWidth: 2,
    borderRadius: 10,
    borderColor: '#088',
  },
  confirmPassword: {
    top: 275,
    height: 60,
    width: 310,
    borderWidth: 2,
    borderRadius: 10,
    borderColor: '#088',
  },
  confirmPasswordPosition: {
    left: 14,
    position: 'absolute'
  },
  email: {
    top: 126,
    height: 60,
    width: 310,
    borderWidth: 2,
    borderRadius: 10,
    borderColor: '#088',
  },
  username: {
    top: 50,
    width: 310,
    height: 60,
    borderWidth: 2,
    borderRadius: 10,
    borderColor: '#088',
  },
  register2: {
    left: 2,
    fontSize: GlobalStyles.FontSize.size_9xl,
    width: 193,
    textAlign: "left",
    fontFamily: GlobalStyles.FontFamily.hammersmithOne,
    height: 56,
  },
  registerTitle: {
    left: 68,
  },
  registerBox: {
    top: 100,
    left: 41,
    shadowColor: "#000",
    height: 400,
    width: 330,
    position: "absolute",
    shadowRadius: 4,
    shadowOffset: {
      width: 4,
      height: 4,
    },
    height: 420,
    width: 335,
    backgroundColor: '#000',
  },
  register: {
    width: 86,
  },
  btns: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    position: 'absolute',
    top: 240,
    left: 40,
  },
  btnBg: {
    top: 0,
    left: 0,
    position: 'absolute',
    borderRadius: 5
  },
  loginBoxShadowBox: {
    shadowOpacity: 1,
    shadowRadius: 4,
    shadowOffset: {
      width: 4,
      height: 4,
    },
  },
  login1: {
    left: 18,
    width: 60,
  },
  login1Typo: {
    textShadowRadius: 5,
    textShadowColor: "rgba(0, 0, 0, 0.05)",
    fontSize: GlobalStyles.FontSize.size_4xl,
    top: 3,
    left: 7,
    textShadowOffset: {
      width: 1,
      height: 1,
    },
    textAlign: "center",
    color: GlobalStyles.Color.white,
    fontFamily: GlobalStyles.FontFamily.hammersmithOne,
  },
  registerTypo: {
    left: 12,
  },
});

export default Register;
