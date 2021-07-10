import axios from "axios";

const getData = async (userId) => {

    let userInfo;
    let userPosts;

    const getInfo = async (id) => {
        await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`).then((res) => {
            userInfo = res.data;
        });
    }

    const getPosts = async (id) => {
        await axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${id}`).then((res) => {
            userPosts = res.data;
        });
    }

    
    return Promise.all([
        getInfo(userId),
        getPosts(userId)
    ]).then(() => {
        const userObj = {
            userInfo,
            posts: userPosts
        }
        return userObj;
    });

}

export default getData;