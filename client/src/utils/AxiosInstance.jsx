import axios from "axios";
import { BASEURL } from "../App.js";
import getCookieFromBrowser from "./getCookieFromBrowser";

const browserCookie = await getCookieFromBrowser()

const axiosInstance = axios.create({
    baseURL: 'http://localhost:5000',
    headers: {
        "auth": `auth=${browserCookie}`,
        'Content-Type': 'multipart/form-data'
    }
});
export default axiosInstance;