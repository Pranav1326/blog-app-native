import axios from 'axios';
import { useSelector } from 'react-redux';

const baseUrl = `https://blog-api-c8j7.onrender.com/api`;

const getFromStorage = async () => {
    try {
        const bToken = await AsyncStorage.getItem("token");
        if(bToken !== null){ 
            return JSON.parse(bToken);
        }
    } catch (error) {
        console.log(error);
    }
}

const token = getFromStorage();
const headersList = {
    "Accept": "*/*",
    "Authorization": `Bearer ${token}`,
    "Content-Type": "application/json" 
}

// Get All Articles
export const fetchAllArticles = async (setData) => {
    try {
        const res = await axios.get(`${baseUrl}/articles`);
        setData(res.data);
    } catch (error) {
        console.log(error);
    }
}

// Get Single Article by _id
export const fetchArticle = async (id, setData) => {
    try {
        const res = await axios.get(`${baseUrl}/articles/${id}`);
        setData(res.data);
    } catch (error) {
        console.log(error);
    }
}

// Create new Article
export const createArticle = async (data, token, navigation) => {
    const config = {
        method: 'POST',
        url: `${baseUrl}/articles/create`,
        headers: {
            'Authorization': `Bearer ${token}`, 
            'Content-Type': 'application/json'
        },
        data : data
    };
    console.log(data)
    try {
        const res = await axios.request(config);
        console.log(res.data);
        navigation.navigate(`Article`, {id: res.data._id});
    } catch (error) {
        console.log(error);
    }
}