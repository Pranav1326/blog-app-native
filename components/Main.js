import React from 'react';
import { useSelector } from 'react-redux';
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Pressable, TouchableOpacity, StyleSheet } from "react-native";
// Screens
import Articles from "../screens/Articles";
import Navbar from "../screens/Navbar";
import Users from "../screens/Users";
import Error404 from "../screens/Error404";
import ResetPassword from "../screens/ResetPassword";
import OTP from "../screens/OTP";
import ForgotPassword from "../screens/ForgotPassword";
import Register from "../screens/Register";
import Login from "../screens/Login";
import About from "../screens/About";
import EditProfile from "../screens/EditProfile";
import Article from "../screens/Article";
import Profile from "../screens/Profile";
import AuthorProfile from "../screens/AuthorProfile";
import Template from "../screens/Template";
import SearchArticle from "../screens/SearchArticle";
import SavedArticles from "../screens/SavedArticles";
import CreateArticle from "../screens/CreateArticle";
import BottomNav from "./BottomNav";
// Components
import Footer from "../components/Footer";

const Stack = createNativeStackNavigator();

const Main = () => {
  // State
  const user = useSelector(state => state.userReducer.user);

  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);
  const [fontsLoaded] = useFonts({
    "Hammersmith One": require("../assets/fonts/Hammersmith_One.ttf"),
    "Ubuntu Mono": require("../assets/fonts/Ubuntu_Mono.ttf"),
    "Courier": require("../assets/fonts/CourierPrime-Regular.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.main}>
        <NavigationContainer>
          <Navbar />
          {hideSplashScreen ? (
            <Stack.Navigator screenOptions={{ headerShown: false }}>
              <Stack.Screen
                name="Articles"
                component={Articles}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="Navbar"
                component={Navbar}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="Users"
                component={Users}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="Error404"
                component={Error404}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="ResetPassword"
                component={ResetPassword}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="OTP"
                component={OTP}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="ForgotPassword"
                component={ForgotPassword}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="Register"
                component={Register}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="Login"
                component={Login}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="About"
                component={About}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="EditProfile"
                component={user ? EditProfile : Login}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="Article"
                component={Article}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="Profile"
                component={user ? Profile : Login}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="AuthorProfile"
                // component={user ? Profile : Login}
                component={AuthorProfile}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="Search"
                component={SearchArticle}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="Saved"
                component={user ? SavedArticles : Login}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="Create"
                component={user ? CreateArticle : Login}
                options={{ headerShown: false }}
              />
            </Stack.Navigator>
          ) : null}
          <BottomNav />
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    minHeight: '100%',
    width: '100%',
  }
});

export default Main;