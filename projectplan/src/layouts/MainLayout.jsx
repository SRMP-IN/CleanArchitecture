import React, { useEffect } from 'react'
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import PageContainer from './PageContainer';
import Footer from './Footer';
import { useLocation } from 'react-router-dom';
import { useState } from 'react';
import Login from '../pages/Login';

function MainLayout() {
    const location = useLocation();
    const [isFullPageLayout, setIsFullPageLayout] = useState(false)
    useEffect(() => {
        console.log('main layout load', location.pathname)
        const fullPageLayoutRoutes = ['/login', '/register', '/user-pages/lockscreen', '/error-pages/error-404', '/error-pages/error-500', '/general-pages/landing-page'];

        for (let i = 0; i < fullPageLayoutRoutes.length; i++) {
            if (location.pathname.toLowerCase() === fullPageLayoutRoutes[i].toLowerCase()) {
                setIsFullPageLayout(true)
                document.querySelector('.page-body-wrapper').classList.add('full-page-wrapper');
                break;
            }
        }
    }, [])


    return (
        isFullPageLayout ?
            <div>
                <Login></Login>
            </div> :
            <div className="container-scroller">
                <Navbar></Navbar>
                <div className="container-fluid page-body-wrapper">
                    <Sidebar locationPathName={location.pathname}></Sidebar>
                    <div className="main-panel">
                        <div className="content-wrapper">
                            <PageContainer></PageContainer>
                        </div>
                        <Footer></Footer>
                    </div>
                </div>
            </div>
    )
}

export default MainLayout