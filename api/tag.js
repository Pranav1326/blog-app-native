import axios from "axios";

const baseUrl = `https://blog-api-c8j7.onrender.com/api`;

// fetch all comments
export const fetchAllTags = async (setData) => {
    try {
        const res = await axios.get(`${baseUrl}/tags`);
        setData(res.data);
    } catch (error) {
        console.log(error);
    }
}

// fetch article by tag (query params)
export const fetchArticleByTag = async (tag, setData) => {
    try {
        if(tag === "All Posts"){
            const res = await axios.get(`${baseUrl}/articles`);
            setData(res.data);
        }
        else{
            const res = await axios.get(`${baseUrl}/articles?tag=${tag}`);
            setData(res.data);
        }
    } catch (error) {
        console.log(error);
    }
}
