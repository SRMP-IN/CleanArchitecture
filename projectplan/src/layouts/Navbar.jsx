import React from 'react'
import { Link } from 'react-router-dom';

function Navbar() {
    //console.log('Navbar start')

    const menuToggle = () => {
        const body = document.querySelector('body');
        body.classList.toggle('sidebar-icon-only');
        if (body.classList.contains('sidebar-icon-only')) {
            document.querySelectorAll('.sidebar .nav-item').forEach((el) => {
                el.addEventListener('mouseover', function () {
                    el.classList.add('hover-open');
                });
                el.addEventListener('mouseout', function () {
                    el.classList.remove('hover-open');
                });
            });
        }
    }
    return (
        <>
            <nav className="navbar col-lg-12 col-12 p-0 fixed-top d-flex flex-row">
                <div className="navbar-brand-wrapper d-flex justify-content-center">
                    <div className="navbar-brand-inner-wrapper d-flex justify-content-between align-items-center w-100">
                        <Link className="navbar-brand brand-logo" to={'/Dashboard'}><img src="images/logo.svg" alt="logo" /></Link>
                        <Link className="navbar-brand brand-logo-mini" to={'/Dashboard'}><img src="images/logo-mini.svg" alt="logo" /></Link>
                        <button className="navbar-toggler navbar-toggler align-self-center" type="button" onClick={menuToggle} >
                            <span className="mdi mdi-sort-variant"></span>
                        </button>
                    </div>
                </div>
                <div className="navbar-menu-wrapper d-flex align-items-center justify-content-end">
                    <ul className="navbar-nav mr-lg-4 w-100">
                        <li className="nav-item nav-search d-none d-lg-block w-100">
                            <div className="input-group">
                                <div className="input-group-prepend">
                                    <span className="input-group-text" id="search">
                                        <i className="mdi mdi-magnify"></i>
                                    </span>
                                </div>
                                <input type="text" className="form-control" placeholder="Search now" aria-label="search" aria-describedby="search"></input>
                            </div>
                        </li>
                    </ul>
                    <ul className="navbar-nav navbar-nav-right">
                        <li className="nav-item dropdown me-1">
                            <a className="nav-link count-indicator dropdown-toggle d-flex justify-content-center align-items-center" id="messageDropdown" href="#" data-bs-toggle="dropdown">
                                <i className="mdi mdi-message-text mx-0"></i>
                                <span className="count"></span>
                            </a>
                            <div className="dropdown-menu dropdown-menu-right navbar-dropdown" aria-labelledby="messageDropdown">
                                <p className="mb-0 font-weight-normal float-left dropdown-header">Messages</p>
                                <a className="dropdown-item">
                                    <div className="item-thumbnail">
                                        <img src="images/faces/face4.jpg" alt="image" className="profile-pic" ></img>
                                    </div>
                                    <div className="item-content flex-grow">
                                        <h6 className="ellipsis font-weight-normal">
                                            David Grey
                                        </h6>
                                        <p className="font-weight-light small-text text-muted mb-0">
                                            The meeting is cancelled
                                        </p>
                                    </div>
                                </a>
                                <a className="dropdown-item">
                                    <div className="item-thumbnail">
                                        <img src="images/faces/face2.jpg" alt="image" className="profile-pic"></img>
                                    </div>
                                    <div className="item-content flex-grow" >
                                        <h6 className="ellipsis font-weight-normal">
                                            Tim Cook
                                        </h6>
                                        <p className="font-weight-light small-text text-muted mb-0">
                                            New product launch
                                        </p>
                                    </div>
                                </a>
                                <a className="dropdown-item">
                                    <div className="item-thumbnail">
                                        <img src="images/faces/face3.jpg" alt="image" className="profile-pic"></img>
                                    </div>
                                    <div className="item-content flex-grow">
                                        <h6 className="ellipsis font-weight-normal">
                                            Johnson
                                        </h6>
                                        <p className="font-weight-light small-text text-muted mb-0">
                                            Upcoming board meeting
                                        </p>
                                    </div>
                                </a>
                            </div>
                        </li>
                        <li className="nav-item dropdown me-4">
                            <a className="nav-link count-indicator dropdown-toggle d-flex align-items-center justify-content-center notification-dropdown" id="notificationDropdown" href="#" data-bs-toggle="dropdown">
                                <i className="mdi mdi-bell mx-0"></i>
                                <span className="count"></span>
                            </a>
                            <div className="dropdown-menu dropdown-menu-right navbar-dropdown" aria-labelledby="notificationDropdown">
                                <p className="mb-0 font-weight-normal float-left dropdown-header">Notifications</p>
                                <a className="dropdown-item">
                                    <div className="item-thumbnail">
                                        <div className="item-icon bg-success">
                                            <i className="mdi mdi-information mx-0"></i>
                                        </div>
                                    </div>
                                    <div className="item-content">
                                        <h6 className="font-weight-normal">Application Error</h6>
                                        <p className="font-weight-light small-text mb-0 text-muted">
                                            Just now
                                        </p>
                                    </div>
                                </a>
                                <a className="dropdown-item">
                                    <div className="item-thumbnail">
                                        <div className="item-icon bg-warning">
                                            <i className="mdi mdi-settings mx-0"></i>
                                        </div>
                                    </div>
                                    <div className="item-content">
                                        <h6 className="font-weight-normal">Settings</h6>
                                        <p className="font-weight-light small-text mb-0 text-muted">
                                            Private message
                                        </p>
                                    </div>
                                </a>
                                <a className="dropdown-item">
                                    <div className="item-thumbnail">
                                        <div className="item-icon bg-info">
                                            <i className="mdi mdi-account-box mx-0"></i>
                                        </div>
                                    </div>
                                    <div className="item-content">
                                        <h6 className="font-weight-normal">New user registration</h6>
                                        <p className="font-weight-light small-text mb-0 text-muted">
                                            2 days ago
                                        </p>
                                    </div>
                                </a>
                            </div>
                        </li>
                        <li className="nav-item nav-profile dropdown">
                            <a className="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown" id="profileDropdown">
                                <img src="images/faces/face5.jpg" alt="profile" />
                                <span className="nav-profile-name">Louis Barnett</span>
                            </a>
                            <div className="dropdown-menu dropdown-menu-right navbar-dropdown" aria-labelledby="profileDropdown">
                                <a className="dropdown-item">
                                    <i className="mdi mdi-settings text-primary"></i>
                                    Settings
                                </a>
                                <a className="dropdown-item">
                                    <i className="mdi mdi-logout text-primary"></i>
                                    Logout
                                </a>
                            </div>
                        </li>
                    </ul>
                    <button className="navbar-toggler navbar-toggler-right d-lg-none align-self-center" type="button" data-toggle="offcanvas" onClick={() => document.querySelector('.sidebar-offcanvas').classList.toggle('active')} >
                        <span className="mdi mdi-menu"></span>
                    </button>
                </div>
            </nav>
        </>
    )
}

export default Navbar