import React from 'react'
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import PageContainer from './PageContainer';
import Footer from './Footer';

function MainLayout(props) {
    console.log("Main Layout Start")
    return (
        <>
            <Navbar></Navbar>
            <div className="container-fluid page-body-wrapper">
                <Sidebar></Sidebar>
                <div className="main-panel">
                    <div className="content-wrapper">
                        <PageContainer children={props.children}></PageContainer>
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