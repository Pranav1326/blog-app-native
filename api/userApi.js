import axios from 'axios';
import { LOGIN_START, LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT, FORGOT_PASSWORD, FORGOT_PASSWORD_SUCCESS ,FORGOT_PASSWORD_FAILURE, RESET_PASSWORD_SUCCESS, RESET_PASSWORD, RESET_PASSWORD_FAILURE } from '../features/user/userSlice';
import AsyncStorage from '@react-native-async-storage/async-storage';

const baseUrl = `https://blog-api-c8j7.onrender.com/api`;

// Storing data in local storage
const storeData = async (key, value) => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem(key, jsonValue);
    } catch (e) {
        console.log(e);
    }
}

// Removing data in local storage
const removeData = async (key) => {
    try {
        await AsyncStorage.removeItem(key);
    } catch (error) {
        console.log(error);
    }
}

// Login
export const login = async (data, dispatch, navigation) => {
    dispatch(LOGIN_START());
    try {
        const res = await axios.post("https://blog-api-c8j7.onrender.com/api/user/login", data);
        dispatch(LOGIN_SUCCESS(res.data));
        storeData("user", res.data.userInfo);
        storeData("token", res.data.token);
        navigation.navigate('Articles');
    } catch (error) {
        console.log(error);
        error && alert(error.response.data);
        dispatch(LOGIN_FAILURE());
    }
}

// Logout
export const logout = async (dispatch, navigation) => {
    dispatch(LOGOUT());
    removeData("user");
    navigation.navigate('Articles');
}

// All Users
export const fetchAllUsers = async (setData) => {
    try {
        const res = await axios.get(`${baseUrl}/user`);
        setData(res.data);
    } catch (error) {
        console.log(error);
    }
}