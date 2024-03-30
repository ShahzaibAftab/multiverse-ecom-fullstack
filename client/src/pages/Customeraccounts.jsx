import React from 'react'
import AdminCanvas from '../components/AdminCanvas'
import Customeraccountlist from '../components/Customeraccountlist'

const Customeraccounts = () => {
    return (
        <>
            <div className='addFlex'>
                <AdminCanvas />
                <Customeraccountlist />
            </div>
        </>
    )
}

export default Customeraccounts
