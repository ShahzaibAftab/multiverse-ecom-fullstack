import React from 'react'
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

const Topbar = () => {
    return (
        <>
            <div className='d-flex'>
                <DropdownButton id="user-dropdown" title={<img style={{ height: '20px', width: '20px', borderRadius: '50%' }} src='https://fastly.picsum.photos/id/27/3264/1836.jpg?hmac=p3BVIgKKQpHhfGRRCbsi2MCAzw8mWBCayBsKxxtWO8g' alt='profile' />} variant="light">
                    <Dropdown.Item>Logout</Dropdown.Item>
                </DropdownButton>
            </div>
        </>
    );
}


export default Topbar
