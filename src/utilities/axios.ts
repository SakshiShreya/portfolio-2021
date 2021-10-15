import originalAxios from "axios";

const local = "http://localhost:5000";
const prod = "https://morning-sierra-84003.herokuapp.com";

const baseURL = process.env.NODE_ENV === "production" ? prod : local;

const axios = originalAxios.create({ baseURL });

export default axios;
