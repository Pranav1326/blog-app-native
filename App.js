const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import Articles from "./screens/Articles";
import Navbar from "./screens/Navbar";
import Users from "./screens/Users";
import Error404 from "./screens/Error404";
import ResetPassword from "./screens/ResetPassword";
import OTP from "./screens/OTP";
import ForgotPassword from "./screens/ForgotPassword";
import Register from "./screens/Register";
import Login from "./screens/Login";
import About from "./screens/About";
import EditProfile from "./screens/EditProfile";
import Article from "./screens/Article";
import Profile from "./screens/Profile";
import Template from "./screens/Template";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Pressable, TouchableOpacity } from "react-native";
import BottomNav from "./components/BottomNav";
import SearchArticle from "./screens/SearchArticle";
import SavedArticles from "./screens/SavedArticles";
import CreateArticle from "./screens/CreateArticle";
import Footer from "./components/Footer";
import { Provider } from 'react-redux';
import { store } from './app/store';
import Main from "./components/Main";

const App = () => {

  return (
    <Provider store={store} >
      <>
        {/* <NavigationContainer>
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
                component={EditProfile}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="Article"
                component={Article}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="Profile"
                component={Profile}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="Search"
                component={SearchArticle}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="Saved"
                component={SavedArticles}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="Create"
                component={CreateArticle}
                options={{ headerShown: false }}
              />
            </Stack.Navigator>
          ) : null}
          <BottomNav />
        </NavigationContainer> */}
        <Main />
      </>
    </Provider>
  );
};
export default App;
