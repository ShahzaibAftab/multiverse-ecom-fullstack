import { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom'

const PrivateRoutes = () => {
    const navigate = useNavigate()
    const token = localStorage.getItem('token');
    
    useEffect(() => {
        if (token !== '1') {
            navigate('/Admin-login');
        }
    }, [token]);

    return <Outlet />;
}

export default PrivateRoutes