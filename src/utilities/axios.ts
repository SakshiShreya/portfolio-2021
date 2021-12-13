import originalAxios from "axios";

const local = "http://localhost:5000/api";
const dev = "https://portfolio-mw-sakshi.herokuapp.com/api";
const prod = "https://portfolio-mw-sakshi.herokuapp.com/api";

const baseURL = process.env.REACT_APP_ENV === "local" ? local : process.env.NODE_ENV === "production" ? prod : dev;

const axios = originalAxios.create({ baseURL });

export default axios;
