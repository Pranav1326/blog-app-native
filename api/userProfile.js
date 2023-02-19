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
export const getUser = async (userId, setData) => {
    try {
        const res = await axios.get(`${baseUrl}/user/${userId}`);
        setData(res.data);
    } catch (error) {
        console.log(error);
    }
}

// Get Author Articles
export const getAuthorArticles = async (userId, setData) => {
    var userArticles = [];
    try {
        await axios.get(`${baseUrl}/user/${userId}`)
        .then(res => res.data.articles.forEach(async (id) => {
            await axios.get(`${baseUrl}/articles/${id}`)
            .then(res => {
                userArticles.push(res.data);
                console.log("inside", userArticles);
            })
            .catch(e => console.log(e));
        }))
        .catch(e => console.log(e));
        // const userData = user.data;
        // userData && userData.articles.forEach(async (articleId) => {
        //     const res = await axios.get(`${baseUrl}/articles/${articleId}`);
        //     if(res.data){
        //         userArticles.push(res.data);
        //         console.log("inside",userArticles);
        //     }
        // });
        console.log("outside", userArticles);
        // setData(userArticles);
    // return userArticles;
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
