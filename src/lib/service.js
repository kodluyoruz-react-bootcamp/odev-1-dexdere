import * as axios from 'axios';

const ENDPOINT = "https://jsonplaceholder.typicode.com";

async function getData(userID){

    const {data: users} = await axios.get(`${ENDPOINT}/users/${userID}`);
    const {data: posts} = await axios.get(`${ENDPOINT}/posts?userId=${userID}`);

    return {user : users, posts: posts};
}

export default getData