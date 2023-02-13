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
