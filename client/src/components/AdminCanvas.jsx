import React from 'react';
import {
    CDBSidebar,
    CDBSidebarContent,
    CDBSidebarHeader,
    CDBSidebarMenu,
    CDBSidebarMenuItem,
    CDBSidebarFooter,
} from 'cdbreact';
import { Link } from 'react-router-dom';

const AdminCanvas = () => {
    return (
        <>
            <CDBSidebar style={{ height: '100vh' }}>
                <CDBSidebarHeader prefix={<i className="fa fa-bars" />}>Admin Panel</CDBSidebarHeader>
                <CDBSidebarContent>
                    <CDBSidebarMenu>
                        <Link to='/add-product'>   <CDBSidebarMenuItem className='menu-button' icon="fas fa-th-large">Dashboard</CDBSidebarMenuItem></Link>
                        <Link to={'/Customer-order'}>
                            <CDBSidebarMenuItem className='menu-button' icon="fas fa-sticky-note">Orders
                            </CDBSidebarMenuItem>
                        </Link>
                        <Link to={'/customer-account-list'}>
                        <CDBSidebarMenuItem className='menu-button' icon="fas fa-user" iconType="solid">
                            Consumer account
                        </CDBSidebarMenuItem>
                    </Link>
                    <Link to={'/product-return'}><CDBSidebarMenuItem className='menu-button' icon="fas fa-credit-card" iconType="solid">
                        Product returns
                    </CDBSidebarMenuItem>
                    </Link>
                    <Link to={'/Admin-Product-operation'}>      <CDBSidebarMenuItem className='menu-button' icon="fas fa-cogs" iconType="solid">
                        Product Operations
                    </CDBSidebarMenuItem></Link>
                    <CDBSidebarMenuItem className='menu-button' icon="fas fa-exclamation-circle" iconType="solid">
                        Consumer Complains
                    </CDBSidebarMenuItem>
                    <hr />
                    <CDBSidebarMenuItem className='menu-button' icon="fas fa-user" iconType="solid">
                        Personal Details
                    </CDBSidebarMenuItem>
                </CDBSidebarMenu>

            </CDBSidebarContent>
            <CDBSidebarFooter style={{ textAlign: 'center' }}>
                <div
                    className="sidebar-btn-wrapper"
                    style={{ padding: '20px 5px' }}
                >
                    Sidebar Footer
                </div>
            </CDBSidebarFooter>
        </CDBSidebar >
        </>
    );
};

export default AdminCanvas;