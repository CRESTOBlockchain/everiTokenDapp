import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {PropTypes} from 'prop-types';
import {connect} from 'react-redux';
// import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
// import {faUserShield, faMoneyCheck, faMoneyBill, faWarehouse,faCode, faHourglass, faCoffee, faHandsHelping, faBriefcase} from '@fortawesome/free-solid-svg-icons'
// import './css/landing.css';

class RealEstateBroker extends Component {

    // This checks if user authenticated if yes automatically sends to dashboard - if enabled
    componentDidMount() {
        if (this.props.auth.isAuthenticated) {
            // this.props.history.push('/dashboard');
        }
    }

    render() {
        return (
            <div>
                <div id="wrapper">

                    <div className="topbar">

                        <!-- LOGO -->
                        <div className="topbar-left">
                            <div className="text-center">
                                <a href="#"><img className="navbar-brand logo"
                                                 src="assets/images/chain-estate-dark.png"/></a>
                            </div>
                        </div>
                        <nav className="navbar-custom">

                            <ul className="list-inline float-right mb-0">

                                <li className="list-inline-item notification-list hide-phone">
                                    <a className="nav-link waves-light waves-effect" href="#" id="btn-fullscreen">
                                        <i className="mdi mdi-crop-free noti-icon"></i>
                                    </a>
                                </li>

                                <li className="list-inline-item notification-list">
                                    <a className="nav-link right-bar-toggle waves-light waves-effect" href="#">
                                        <i className="mdi mdi-dots-horizontal noti-icon"></i>
                                    </a>
                                </li>

                                <li className="list-inline-item dropdown notification-list">
                                    <a className="nav-link dropdown-toggle arrow-none waves-light waves-effect"
                                       data-toggle="dropdown" href="#" role="button"
                                       aria-haspopup="false" aria-expanded="false">
                                        <i className="mdi mdi-bell noti-icon"></i>
                                        <span className="badge badge-pink noti-icon-badge">4</span>
                                    </a>
                                    <div className="dropdown-menu dropdown-menu-right dropdown-arrow dropdown-menu-lg"
                                         aria-labelledby="Preview">

                                        <div className="dropdown-item noti-title">
                                            <h5 className="font-16"><span
                                                className="badge badge-danger float-right">5</span>Notification</h5>
                                        </div>

                                        <a href="javascript:void(0);" className="dropdown-item notify-item">
                                            <div className="notify-icon bg-success"><i
                                                className="mdi mdi-comment-account"></i></div>
                                            <p className="notify-details">Robert S. Taylor commented on Admin
                                                <small className="text-muted">1 min ago</small>
                                            </p>
                                        </a>

                                        <a href="javascript:void(0);" className="dropdown-item notify-item">
                                            <div className="notify-icon bg-info"><i className="mdi mdi-account"></i>
                                            </div>
                                            <p className="notify-details">New user registered.
                                                <small className="text-muted">1 min ago</small>
                                            </p>
                                        </a>

                                        <a href="javascript:void(0);" className="dropdown-item notify-item">
                                            <div className="notify-icon bg-danger"><i className="mdi mdi-airplane"></i>
                                            </div>
                                            <p className="notify-details">Carlos Crouch liked <b>Admin</b>
                                                <small className="text-muted">1 min ago</small>
                                            </p>
                                        </a>

                                        <a href="javascript:void(0);" className="dropdown-item notify-item notify-all">
                                            View All
                                        </a>

                                    </div>
                                </li>

                                <li className="list-inline-item dropdown notification-list">
                                    <a className="nav-link dropdown-toggle waves-effect waves-light nav-user"
                                       data-toggle="dropdown" href="#" role="button"
                                       aria-haspopup="false" aria-expanded="false">
                                        <img src="assets/images/users/avatar-1.jpg" alt="user"
                                             className="rounded-circle"/>
                                    </a>
                                    <div className="dropdown-menu dropdown-menu-right profile-dropdown "
                                         aria-labelledby="Preview">
                                        <!-- item-->
                                        <div className="dropdown-item noti-title">
                                            <h5 className="text-overflow">
                                                <small>Welcome ! John</small>
                                            </h5>
                                        </div>

                                        <a href="javascript:void(0);" className="dropdown-item notify-item">
                                            <i className="mdi mdi-account"></i> <span>Profile</span>
                                        </a>

                                        <a href="javascript:void(0);" className="dropdown-item notify-item">
                                            <i className="mdi mdi-settings"></i> <span>Settings</span>
                                        </a>

                                        <a href="javascript:void(0);" className="dropdown-item notify-item">
                                            <i className="mdi mdi-lock-open"></i> <span>Lock Screen</span>
                                        </a>

                                        <a href="javascript:void(0);" className="dropdown-item notify-item">
                                            <i className="mdi mdi-logout"></i> <span>Logout</span>
                                        </a>

                                    </div>
                                </li>

                            </ul>

                            <ul className="list-inline menu-left mb-0">
                                <li className="float-left">
                                    <button className="button-menu-mobile open-left waves-light waves-effect">
                                        <i className="mdi mdi-menu"></i>
                                    </button>
                                </li>
                                <li className="hide-phone app-search">
                                    <form role="search" className="">
                                        <input type="text" placeholder="Search..." className="form-control"/>
                                            <a href=""><i className="fa fa-search"/></a>
                                    </form>
                                </li>
                            </ul>

                        </nav>

                    </div>
                    <!-- Top Bar End -->


                    <!-- ========== Left Sidebar Start ========== -->

                    <div className="left side-menu">
                        <div className="sidebar-inner slimscrollleft">
                            <!--- Divider -->
                            <div id="sidebar-menu">
                                <ul>
                                    <li>
                                        <a href="real-estate-broker.html" className="waves-effect waves-primary">
                                            <i className="ti-home"></i><span> Dashboard </span>
                                        </a>
                                    </li>
                                    <li className="has_sub">
                                        <a href="javascript:void(0);" className="waves-effect waves-primary">
                                            <i className="ti-stats-up"></i><span> Charts </span>
                                            <span className="badge badge-primary pull-right">8</span>
                                        </a>
                                        <ul className="list-unstyled">
                                            <li><a href="chart-flot.html">Flot Chart</a></li>
                                            <li><a href="chart-morris.html">Morris Chart</a></li>
                                            <li><a href="chart-chartist.html">Chartist chart</a></li>
                                            <li><a href="chart-nvd3.html">Nvd3 charts</a></li>
                                            <li><a href="chart-chartjs.html">Chartjs charts</a></li>
                                            <li><a href="chart-peity.html">Peity Charts</a></li>
                                            <li><a href="chart-sparkline.html">Sparkline Charts</a></li>
                                            <li><a href="chart-other.html">Other Chart</a></li>
                                        </ul>
                                    </li>
                                    <li className="has_sub">
                                        <a href="javascript:void(0);" className="waves-effect waves-primary">
                                            <i className="ti-map"></i><span> Maps </span>
                                            <span className="menu-arrow"></span>
                                        </a>
                                        <ul className="list-unstyled">
                                            <li><a href="map-google.html"> Google Maps</a></li>
                                            <li><a href="map-vector.html"> Vector Maps</a></li>
                                            <li><a href="map-mapael.html"> Mapael Maps</a></li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="leaser.html" className="waves-effect waves-primary">
                                            <i className="mdi mdi-account-multiple"></i><span> Leasers </span>
                                        </a>
                                    </li>
                                </ul>

                                <div className="clearfix"></div>
                            </div>
                            <div className="clearfix"></div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

RealEstateBroker.propTypes = {
    auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(mapStateToProps)(RealEstateBroker);
