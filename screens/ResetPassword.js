import * as React from "react";
import { StyleSheet, View, Pressable, Text, Image, TextInput } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import GlobalStyles from "../GlobalStyles";

const ResetPassword = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.resetPassword}>
      {/* Main Background Gradient */}
      <LinearGradient 
        start={{x: 0, y: 0}}
        end={{x: 1, y: 1}}
        colors={["rgba(14, 215, 191, 0.5)", "rgba(0, 70, 111, 0.4)"]}
        style={styles.bg}
      />

      <View style={styles.mainBox}>

        {/* Header Title Logo */}
        <Image source={require('../assets/logo/ResetPassword.png')} style={{
          width: 330,
          height: 40,
          top: -20,
          // left: 120,
        }}/>

        {/* Password */}
        <View style={[styles.email, styles.emailPosition]}>
          <Text style={styles.emailText}>Password</Text>
          <TextInput style={styles.emailInput}></TextInput>
        </View>

        {/* Confirm Password */}
        <View style={[styles.confirmPassword, styles.emailPosition]}>
          <Text style={styles.emailText}>Confirm Password</Text>
          <TextInput style={styles.emailInput}></TextInput>
        </View>

        {/* Buttons */}
        <View style={styles.btns}>

          {/* Submit */}
          <View style={[styles.btnLayout1]}>
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
              onPress={() => navigation.navigate("Login")}
            >
              <Text style={[styles.register, styles.login1Typo, styles.registerTypo]}>Submit</Text>
            </Pressable>
          </View>
        </View>

      </View>
      
    </View>
  );
};

const styles = StyleSheet.create({
  resetPassword: {
    backgroundColor: '#000',
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  bg: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    backgroundColor: '#000',
    zIndex: -10,
  },
  mainBox: {
    width: 330,
    height: 250,
    backgroundColor: '#000',
    borderRadius: 7,
    top: -60,
  },
  email: {
    top: 0,
    height: 60,
    width: 310,
    borderWidth: 2,
    borderRadius: 10,
    borderColor: '#088',
  },
  confirmPassword: {
    top: 15,
    height: 60,
    width: 310,
    borderWidth: 2,
    borderRadius: 10,
    borderColor: '#088',
  },
  emailPosition: {
    left: 10,
  },
  emailText: {
    color: GlobalStyles.Color.gray_200,
    left: 14,
    position: 'absolute',
    top: -15,
    padding: 5,
    backgroundColor: '#000',
    borderRadius: 5,
    borderWidth: 1,
  },
  emailInput: {
    color: '#fff',
    fontSize: GlobalStyles.FontSize.size_4xl,
    top: 10,
    height: 40,
    paddingLeft: 12,
    paddingRight: 12,
    width: '100%'
  },
  btns: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    top: 35,
  },
  loginBtn: {
    left: 130,
  },
  btnLayout: {
    width: 80,
    height: 36,
  },
  btnBg: {
    top: 0,
    left: 0,
    position: 'absolute',
    borderRadius: 5
  },
  pressable: {
    shadowColor: "rgba(0, 0, 0, 0.5)",
    backgroundColor: "transparent",
    borderRadius: GlobalStyles.Border.br_sm,
  },
  iconLayout: {
    height: "100%",
    width: "100%",
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
  btnLayout1: {
    height: 36,
    width: 110,
  },
  btnBg: {
    top: 0,
    left: 0,
    position: 'absolute',
    borderRadius: 5
  },
  register: {
    width: 72,
  },
  registerTypo: {
    left: 18,
    top: 5,
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
});

export default ResetPassword;
