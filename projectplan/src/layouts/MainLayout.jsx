import React from 'react'
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import PageContainer from './PageContainer';
import Footer from './Footer';

function MainLayout() {
    return (
        <>
            <div className="container-scroller">
                <Navbar></Navbar>
                <div className="container-fluid page-body-wrapper">
                    <Sidebar></Sidebar>
                    <div className="main-panel">
                        <div className="content-wrapper">
                            <PageContainer></PageContainer>
                        </div>
                        <Footer></Footer>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MainLayout