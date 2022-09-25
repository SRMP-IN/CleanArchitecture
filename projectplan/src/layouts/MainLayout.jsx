import React from 'react'
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import PageContainer from './PageContainer';
import Footer from './Footer';

import { Routes, Route } from "react-router-dom";
import AppRouter, { AppRouterPageLayout } from "../services/AppRouter";
import { useAuthContext } from '../context/AuthContext';
import Login from '../pages/Login';


function MainLayout() {
    console.log("Main Layout Start")
    const {currentUser,pageLayout}= useAuthContext();
    console.log("Main Layout -currentUser", currentUser)
    console.log("Main Layout -pageLayout", pageLayout)

    if (pageLayout)
        return ( 
        <PageContainer>
            <Routes>
                {AppRouterPageLayout.map((route, index) => {
                    const { element, ...rest } = route;
                    return <Route key={index} {...rest} element={element} />;
                })}
            </Routes>
        </PageContainer>)
    else
        return (
            < >

                <Navbar></Navbar>
                <div className="container-fluid page-body-wrapper">
                    <Sidebar></Sidebar>
                    <div className="main-panel">
                        <div className="content-wrapper">
                            <PageContainer>
                                <Routes>
                                    {AppRouter.map((route, index) => {
                                        const { element, ...rest } = route;
                                        return <Route key={index} {...rest} element={element} />;
                                    })}
                                </Routes>
                            </PageContainer>
                        </div>
                        <Footer></Footer>
                    </div>
                </div>
            </>
        )
}

export default MainLayout

 // const location = useLocation();
    // const [isFullPageLayout, setIsFullPageLayout] = useState(false)
    // useEffect(() => {
    //     console.log('main layout load', location.pathname)
    //     const fullPageLayoutRoutes = ['/login', '/register', '/user-pages/lockscreen', '/error-pages/error-404', '/error-pages/error-500', '/general-pages/landing-page'];

    //     for (let i = 0; i < fullPageLayoutRoutes.length; i++) {
    //         if (location.pathname.toLowerCase() === fullPageLayoutRoutes[i].toLowerCase()) {
    //             setIsFullPageLayout(true)
    //             document.querySelector('.page-body-wrapper').classList.add('full-page-wrapper');
    //             break;
    //         }
    //     }
    // }, [])

           // isFullPageLayout ?
        //     <div>
        //         <Login></Login>
        //     </div> :