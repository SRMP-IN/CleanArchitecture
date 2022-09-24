import React from 'react'
import { NavLink } from 'react-router-dom'

function Sidebar() {
    //console.log('Sidebar start')
    // const { locationPathName } = props;

    // function isPathActive(path) {
    //     return locationPathName.toLowerCase().startsWith(path.toLowerCase());
    // }

    return (
        <>
            <nav className="sidebar sidebar-offcanvas" id="sidebar" >
                <ul className="nav">
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/">
                            <i className="mdi mdi-home menu-icon"></i>
                            <span className="menu-title">Dashboard</span>
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/error404">
                            <i className="mdi mdi-home menu-icon"></i>
                            <span className="menu-title">error404</span>
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/login">
                            <i className="mdi mdi-home menu-icon"></i>
                            <span className="menu-title">login</span>
                        </NavLink>
                    </li>
                    <li className="nav-item">

                        <a className="nav-link" data-bs-toggle="collapse" href="#ui-basic" aria-expanded="false" aria-controls="ui-basic">
                            <i className="mdi mdi-circle-outline menu-icon"></i>
                            <span className="menu-title">UI Elements</span>
                            <i className="menu-arrow"></i>
                        </a>
                        <div className="collapse" id="ui-basic">
                            <ul className="nav flex-column sub-menu">

                                <li className="nav-item">
                                    <a className="nav-link" href="pages/tables/basic-table.html">
                                        <i className="mdi mdi-grid-large menu-icon"></i>
                                        Tables
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="pages/ui-features/buttons.html">Buttons</a>
                                </li>
                                <li className="nav-item"> <a className="nav-link" href="pages/ui-features/typography.html">Typography</a></li>
                            </ul>
                        </div>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="pages/forms/basic_elements.html">
                            <i className="mdi mdi-view-headline menu-icon"></i>
                            <span className="menu-title">Form elements</span>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="pages/charts/chartjs.html">
                            <i className="mdi mdi-chart-pie menu-icon"></i>
                            <span className="menu-title">Charts</span>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="pages/tables/basic-table.html">
                            <i className="mdi mdi-grid-large menu-icon"></i>
                            <span className="menu-title">Tables</span>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="pages/icons/mdi.html">
                            <i className="mdi mdi-emoticon menu-icon"></i>
                            <span className="menu-title">Icons</span>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" data-bs-toggle="collapse" href="#auth" aria-expanded="false" aria-controls="auth">
                            <i className="mdi mdi-account menu-icon"></i>
                            <span className="menu-title">User Pages</span>
                            <i className="menu-arrow"></i>
                        </a>
                        <div className="collapse" id="auth">
                            <ul className="nav flex-column sub-menu">
                                <li className="nav-item"> <a className="nav-link" href="pages/samples/login.html"> Login </a></li>
                                <li className="nav-item"> <a className="nav-link" href="pages/samples/login-2.html"> Login 2 </a></li>
                                <li className="nav-item"> <a className="nav-link" href="pages/samples/register.html"> Register </a></li>
                                <li className="nav-item"> <a className="nav-link" href="pages/samples/register-2.html"> Register 2 </a></li>
                                <li className="nav-item"> <a className="nav-link" href="pages/samples/lock-screen.html"> Lockscreen </a></li>
                            </ul>
                        </div>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="documentation/documentation.html">
                            <i className="mdi mdi-file-document-box-outline menu-icon"></i>
                            <span className="menu-title">Documentation</span>
                        </a>
                    </li>
                </ul>
            </nav></>
    )
}

export default Sidebar