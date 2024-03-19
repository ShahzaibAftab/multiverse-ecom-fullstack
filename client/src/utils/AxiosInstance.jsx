import axios from "axios";
import { BASEURL } from "../App";
import getCookieFromBrowser from "./getCookieFromBrowser";

const browserCookie = getCookieFromBrowser()
const axiosInstance = axios.create({
    baseURL: BASEURL,
    headers: {
        "auth": `auth=${browserCookie}`,
        'Content-Type': 'multipart/form-data'
    }
});
export default axiosInstance;