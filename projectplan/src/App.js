
import './App.css';

function App() {
    return (

        <>
            <div className="container-scroller">

                <nav className="navbar col-lg-12 col-12 p-0 fixed-top d-flex flex-row">
                    <div className="navbar-brand-wrapper d-flex justify-content-center">
                        <div className="navbar-brand-inner-wrapper d-flex justify-content-between align-items-center w-100">
                            <a className="navbar-brand brand-logo" href="index.html"><img src="images/logo.svg" alt="logo" /></a>
                            <a className="navbar-brand brand-logo-mini" href="index.html"><img src="images/logo-mini.svg" alt="logo" /></a>
                            <button className="navbar-toggler navbar-toggler align-self-center" type="button" data-toggle="minimize">
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
                        <button className="navbar-toggler navbar-toggler-right d-lg-none align-self-center" type="button" data-toggle="offcanvas">
                            <span className="mdi mdi-menu"></span>
                        </button>
                    </div>
                </nav>
                <div className="container-fluid page-body-wrapper">
                    <nav className="sidebar sidebar-offcanvas" id="sidebar">
                        <ul className="nav">
                            <li className="nav-item">
                                <a className="nav-link" href="index.html">
                                    <i className="mdi mdi-home menu-icon"></i>
                                    <span className="menu-title">Dashboard</span>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" data-bs-toggle="collapse" href="#ui-basic" aria-expanded="false" aria-controls="ui-basic">
                                    <i className="mdi mdi-circle-outline menu-icon"></i>
                                    <span className="menu-title">UI Elements</span>
                                    <i className="menu-arrow"></i>
                                </a>
                                <div className="collapse" id="ui-basic">
                                    <ul className="nav flex-column sub-menu">
                                        <li className="nav-item"> <a className="nav-link" href="pages/ui-features/buttons.html">Buttons</a></li>
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
                    </nav>
                    <div className="main-panel">
                        <div className="content-wrapper">
                            <div className="row">

                                <div className="col-lg-12 grid-margin stretch-card">
                                    <div className="card">
                                        <div className="card-body">
                                            <h4 className="card-title">Bordered table</h4>
                                            <p className="card-description">
                                                Add class <code>.table-bordered</code>
                                            </p>
                                            <div className="table-responsive pt-3">
                                                <table className="table table-bordered">
                                                    <thead>
                                                        <tr>
                                                            <th>
                                                                #
                                                            </th>
                                                            <th>
                                                                First name
                                                            </th>
                                                            <th>
                                                                Progress
                                                            </th>
                                                            <th>
                                                                Amount
                                                            </th>
                                                            <th>
                                                                Deadline
                                                            </th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td>
                                                                1
                                                            </td>
                                                            <td>
                                                                Herman Beck
                                                            </td>
                                                            <td>
                                                                <div className="progress">
                                                                    <div className="progress-bar bg-success" role="progressbar" style={{ "width": "70%" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                                                </div>
                                                            </td>
                                                            <td>
                                                                $ 77.99
                                                            </td>
                                                            <td>
                                                                May 15, 2015
                                                            </td>
                                                        </tr>

                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <footer className="footer">
                            <div className="d-sm-flex justify-content-center justify-content-sm-between">
                                <span className="text-muted text-center text-sm-left d-block d-sm-inline-block">Copyright � <a href="https://www.bootstrapdash.com/" target="_blank">bootstrapdash.com </a>2021</span>
                                <span className="float-none float-sm-right d-block mt-1 mt-sm-0 text-center">Only the best <a href="https://www.bootstrapdash.com/" target="_blank"> Bootstrap dashboard  </a> templates</span>
                            </div>
                        </footer>
                    </div>
                </div>

            </div>
        </>
    );
}

export default App;
