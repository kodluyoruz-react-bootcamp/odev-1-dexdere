"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { newObj[key] = obj[key]; } } } newObj.default = obj; return newObj; } }var _axios = require('axios'); var axios = _interopRequireWildcard(_axios);

const ENDPOINT = "https://jsonplaceholder.typicode.com";

async function getData(userID){

    const {data: users} = await axios.get(`${ENDPOINT}/users/${userID}`);
    const {data: posts} = await axios.get(`${ENDPOINT}/posts?userId=${userID}`);

    return {user : users, posts: posts};
}

exports. default = getData