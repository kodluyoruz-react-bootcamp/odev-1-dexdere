import getData from "./lib/service.js";

const data = getData(1);

data.then((result) => console.log(result));