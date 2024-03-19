import { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom'

const PrivateRoutes = () => {
    const navigate = useNavigate()
    const getCookieFromBrowser = async () => {
        try {
            const cookie = document.cookie.split(";").find((cookie) => cookie.trim().startsWith("auth"));
            const cookieValue = cookie ? cookie.split("=")[1] : null;
           if(!cookieValue)
           {
            navigate('/admin-login')
           }
        } catch (error) {
            console.log("Error getting cookies", error)
        }
    }
    
    useEffect(() => {
        getCookieFromBrowser()
    }, []);

    return <Outlet />;
}

export default PrivateRoutes