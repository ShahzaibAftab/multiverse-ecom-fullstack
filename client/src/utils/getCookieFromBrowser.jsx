const getCookieFromBrowser = async () => {
    try {
        const cookie = document.cookie.split(";").find((cookie) => cookie.trim().startsWith("auth"));
        const cookieValue = cookie ? cookie.split("=")[1] : null;
        return cookieValue
    } catch (error) {
        console.log("Error getting cookies", error)
    }
}
export default getCookieFromBrowser;