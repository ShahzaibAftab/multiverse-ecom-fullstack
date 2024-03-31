const getCookieFromBrowser = async () => {
    try {
        return new Promise((resolve, reject) => {
            const cookie = document.cookie.split(";").find((cookie) => cookie.trim().startsWith("auth"));
            const cookieValue = cookie ? cookie.split("=")[1] : null;
            resolve(cookieValue);
        });
    } catch (error) {
        console.log("Error getting cookies", error);
        throw error; // Rethrow the error to propagate it to the caller
    }
};

export default getCookieFromBrowser;
