import React from 'react'
import AdminCanvas from '../components/AdminCanvas'
import Customerorderlist from '../components/Customerorderlist'
const Customerorders = () => {
    return (
        <div>
            <div className='d-flex'>
                <AdminCanvas />
                <Customerorderlist />
            </div>
        </div>
    )
}

export default Customerorders
