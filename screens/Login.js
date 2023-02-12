import * as React from "react";
import { StyleSheet, View, Pressable, Text, Image, TextInput } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import GlobalStyles from "../GlobalStyles";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../api/userApi";

const Login = () => {
  const navigation = useNavigation();
  const error = useSelector(state => state.userReducer.error);
  const dispatch = useDispatch();

  const [ username, setUsername ] = React.useState("");
  const [ password, setPassword ] = React.useState("");

  const handleLogin = e => {
    login({username, password}, dispatch, navigation);
  }
  
  return (
    <View style={styles.login}>
      <LinearGradient 
        start={{x: 0, y: 0}}
        end={{x: 1, y: 1}}
        colors={["rgba(14, 215, 191, 0.5)", "rgba(0, 70, 111, 0.4)"]}
        style={styles.bg}
      />
      <View
        style={[styles.loginBox, styles.loginLayout, styles.loginBoxShadowBox]}
      >
        <View
          style={[styles.loginBg, styles.loginPosition1, styles.loginLayout]}
        />

        {/* Login Heading Logo */}
        <Image source={require('../assets/logo/Login.png')} style={{
          width: 140,
          height: 80,
          position: 'absolute',
          top: -40,
          left: 100,
          zIndex: 5
        }}/>

        {/* Username */}
        <View style={[styles.username, styles.passwordPosition]}>
          <Text style={styles.usernameText}>Username</Text>
          <TextInput style={styles.userInput} value={username} onChangeText={text => setUsername(text)}></TextInput>
        </View>
        
        {/* Password */}
        <View style={[styles.password, styles.passwordPosition]}>
          <Text style={styles.usernameText}>Password</Text>
          <TextInput style={styles.userInput} value={password} onChangeText={text => setPassword(text)}></TextInput>
        </View>

        {/* Forgot Password */}
        <Pressable
          style={styles.forgotPassword}
          onPress={() => navigation.navigate("ForgotPassword")}
        >
          <Text style={[styles.forgotPassword1, styles.login2Typo, styles.forgotPasswordText]}>
            Forgot Password
          </Text>
        </Pressable>

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
              onPress={handleLogin}
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
  bg: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    backgroundColor: '#000',
  },
  loginLayout: {
    width: 340,
    height: 300,
  },
  loginBoxShadowBox: {
    shadowOpacity: 1,
    shadowRadius: 4,
    shadowOffset: {
      width: 4,
      height: 4,
    },
  },
  loginPosition1: {
    backgroundColor: GlobalStyles.Color.black,
  },
  btnLayout1: {
    height: 36,
    width: 110,
  },
  iconLayout: {
    height: "100%",
    width: "100%",
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
  btnLayout: {
    width: 80,
    height: 36,
  },
  login2Typo: {
    fontFamily: GlobalStyles.FontFamily.hammersmithOne,
    color: '#fff',
  },
  passwordPosition: {
    left: 14,
    position: "absolute",
  },
  textPosition: {
    borderRadius: GlobalStyles.Border.br_md,
    top: 6,
    width: 302,
    left: 0,
    position: "absolute",
  },
  passwordLayout: {
    height: 10,
    width: 52,
    left: 0,
    position: "absolute",
  },
  loginPosition: {
    width: '100%',
    textAlign: 'center',
    top: -345,
  },
  loginBg: {
    height: 210,
    backgroundColor: GlobalStyles.Color.black,
    borderRadius: GlobalStyles.Border.br_sm,
    left: 0,
  },
  pressable: {
    shadowColor: "rgba(0, 0, 0, 0.5)",
    backgroundColor: "transparent",
    borderRadius: GlobalStyles.Border.br_sm,
  },
  btnBg: {
    top: 0,
    left: 0,
    position: 'absolute',
    borderRadius: 5
  },
  register: {
    width: 86,
  },
  registerBtn: {
    top: 0,
  },
  btnBg1: {
    top: 0,
    left: 0,
  },
  login1: {
    left: 18,
    width: 60,
  },
  loginBtn: {
    left: -70,
    top: 0,
  },
  forgotPassword1: {
    fontSize: GlobalStyles.FontSize.size_3xl,
    textAlign: "left",
  },
  forgotPassword: {
    left: 35,
    top: 200,
    position: "absolute",
  },
  passwordTextBg: {
    height: 34,
  },
  passwordBg: {
    top: 1,
    backgroundColor: GlobalStyles.Color.black,
  },
  password1: {
    fontSize: GlobalStyles.FontSize.size_xs,
    color: GlobalStyles.Color.gray_300,
    textAlign: "center",
    fontFamily: GlobalStyles.FontFamily.hammersmithOne,
    height: 10,
    top: 0,
  },
  passwordSpan: {
    left: 17,
    height: 11,
    width: 52,
    top: 0,
    position: "absolute",
  },
  password: {
    top: 126,
    height: 60,
    width: 310,
    borderWidth: 2,
    borderRadius: 10,
    borderColor: '#088',
  },
  usernameTextBg: {
    height: 35,
  },
  username: {
    top: 50,
    width: 310,
    height: 60,
    borderWidth: 2,
    borderRadius: 10,
    borderColor: '#088',
  },
  login2: {
    fontSize: GlobalStyles.FontSize.size_9xl,
  },
  loginBox: {
    top: -60,
    shadowColor: "#000",
  },
  login: {
    backgroundColor: GlobalStyles.Color.gray_600,
    flex: 1,
    height: '100%',
    width: "100%",
    overflow: "hidden",
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
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
  registerTypo: {
    left: 12,
  },
  forgotPasswordText: {
    color: GlobalStyles.Color.gray_200,
  },
});

export default Login;
