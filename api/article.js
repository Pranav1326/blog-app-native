import axios from 'axios';

const baseUrl = `https://blog-api-c8j7.onrender.com/api`;

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