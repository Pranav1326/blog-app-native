import axios from "axios";

const baseUrl = `https://blog-api-c8j7.onrender.com/api`;

// fetch all comments of Article
export const fetchAllComments = async (articleId, setData) => {
    try {
        const res = await axios.get(`${baseUrl}/comment/article/${articleId}`);
        setData(res.data);
    } catch (error) {
        console.log(error);
    }
}

// post a comment
export const addComment = async (data) => {
    try {
        const res = await axios.post(`${baseUrl}/comment/add`, data);
        alert("Comment added!");
    } catch (error) {
        console.log(error);
    }
}

// Delete a comment
export const deleteComment = async (id) => {
    try {
        const res = await axios.delete(`${baseUrl}/comment/delete/${id}`);
        alert("Comment Deleted!");
    } catch (error) {
        console.log(error);
    }
}