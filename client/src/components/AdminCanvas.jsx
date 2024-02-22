import React from 'react';
import {
    CDBSidebar,
    CDBSidebarContent,
    CDBSidebarHeader,
    CDBSidebarMenu,
    CDBSidebarMenuItem,
    CDBSidebarFooter,
} from 'cdbreact';

const AdminCanvas = () => {
    return (
        <>
            <CDBSidebar style={{ height: '100vh' }}>
                <CDBSidebarHeader prefix={<i className="fa fa-bars" />}>Admin Panel</CDBSidebarHeader>
                <CDBSidebarContent>
                    <CDBSidebarMenu>
                        <CDBSidebarMenuItem className='menu-button' icon="fas fa-th-large">Dashboard</CDBSidebarMenuItem>
                        <CDBSidebarMenuItem className='menu-button' icon="fas fa-sticky-note">Orders</CDBSidebarMenuItem>
                        <CDBSidebarMenuItem className='menu-button' icon="fas fa-user" iconType="solid">
                            Consumer account
                        </CDBSidebarMenuItem>
                        <CDBSidebarMenuItem className='menu-button' icon="fas fa-credit-card" iconType="solid">
                            Product Details
                        </CDBSidebarMenuItem>
                        <CDBSidebarMenuItem className='menu-button' icon="fas fa-cogs" iconType="solid">
                            Product Operations
                        </CDBSidebarMenuItem>
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
            </CDBSidebar>
        </>
    );
};

export default AdminCanvas;