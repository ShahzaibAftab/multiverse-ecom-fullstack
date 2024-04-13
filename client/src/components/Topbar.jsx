import React from 'react'
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { toast } from 'react-toastify';
import {  useNavigate } from 'react-router-dom'
const Topbar = () => {
    const navigate = useNavigate()

    const LogmeOut = () => {

        const clearCookie = (name) => {
            document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/`;
        };

        clearCookie('auth');
        setTimeout(() => {
            toast.success('Logged out Successfully')
            navigate('/Admin-login');
        }, 1500);
    };

    return (
        <>
            <div className='d-flex'>
                <DropdownButton id="user-dropdown" title={<img style={{ height: '20px', width: '20px', borderRadius: '50%' }} src='https://fastly.picsum.photos/id/27/3264/1836.jpg?hmac=p3BVIgKKQpHhfGRRCbsi2MCAzw8mWBCayBsKxxtWO8g' alt='profile' />} variant="light">
                    <Dropdown.Item onClick={LogmeOut}>Logout</Dropdown.Item>
                </DropdownButton>
            </div>
        </>
    );
}


export default Topbar
