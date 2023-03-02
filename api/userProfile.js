import axios from 'axios';
import { UPDATE_USER } from '../features/user/userSlice';
import AsyncStorage from '@react-native-async-storage/async-storage';

const baseUrl = `https://blog-api-c8j7.onrender.com/api`;

const getFromStorage = async (key) => {
    try {
        const bToken = await AsyncStorage.getItem(key);
        // const token = JSON.parse(bToken);
        return bToken;
    } catch (error) {
        console.log(error);
    }
}

const token = getFromStorage("token");
const headersList = {
    "Accept": "*/*",
    "Authorization": `Bearer ${token}`,
    "Content-Type": "application/json" 
}

// Get a single user
export const getUser = async (userId, setData, setArticles) => {
    try {
        await axios.get(`${baseUrl}/user/${userId}`)
        .then(async (res) => {
            setData(res.data);
            const articles = await axios.get(`${baseUrl}/articles?user=${res.data.username}`);
            setArticles(articles.data);
        })
        .catch(err => console.log(err));
    } catch (error) {
        console.log(error);
    }
}

// Get Author Articles
export const getAuthorArticles = async (username, setData) => {
    try {
        const res = await axios.get(`${baseUrl}/articles?user=${username}`)
        setData(res.data);
    } catch (error) {
        console.log(error);
    }
}

// Update User Profile
export const updateUser = async (data, userId, username, dispatch, navigation) => {
    const config = {
        method: 'PUT',
        url: `${baseUrl}/user/update/${userId}`,
        headers: {
            'Authorization': `Bearer ${token}`, 
            'Content-Type': 'application/json'
        },
        data : {...data, userId}
    };
    try {
        console.log(headersList);
        const res = await axios.request(config);
        if(res) {
            alert(`User ${username} updated Successfully.`);
            dispatch(USER_UPDATE(res.data));
            navigate('/profile');
        } 
        dispatch(UPDATE_USER(res.data));
        navigation.navigate('/Profile');
    } catch (err) {
        console.log(err);
        alert(err.response.data.message);
    }
}
