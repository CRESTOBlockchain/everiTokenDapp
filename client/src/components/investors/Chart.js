import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {PropTypes} from 'prop-types';
import {connect} from 'react-redux';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faHome, faChartLine, faMapSigns, faUserFriends} from '@fortawesome/free-solid-svg-icons'

import Navbar from './InvestorsNavbar'
import './css/sidebar.css';

class Chart extends Component {

    // This checks if user authenticated if yes automatically sends to dashboard - if enabled
    componentDidMount() {
        if (this.props.auth.isAuthenticated) {
            // this.props.history.push('/dashboard');
        }
    }

    render() {
        return (
            <div>
                <Navbar/>
                <div className="container-fluid">
                    <div className="row">
                        <nav className="col-md-2 d-none d-md-block bg-light sidebar">
                            <div className="sidebar-sticky">
                                <ul className="nav flex-column">
                                    <Link className="nav-link active" to='InvestorsDashboard'>
                                        <FontAwesomeIcon icon={faHome} className='iconCSS'/>
                                        Dashboard <span className="sr-only">(current)</span>
                                    </Link>
                                    <li className="nav-item">
                                        <Link className="nav-link" to='chart'>
                                            <FontAwesomeIcon icon={faChartLine} className='iconCSS'/>
                                            Charts<span className="badge badge-primary" style={{marginLeft: "15px"}}>8</span>
                                        </Link>
                                    </li>
                                    {/*<li className="nav-item">*/}
                                        {/*<a className="nav-link" href="#">*/}

                                            {/*<FontAwesomeIcon icon={faMapSigns} className='iconCSS'/>Maps*/}
                                        {/*</a>*/}
                                    {/*</li>*/}
                                    {/*<li className="nav-item">*/}
                                        {/*<a className="nav-link" href="#">*/}
                                            {/*<FontAwesomeIcon icon={faUserFriends} className='iconCSS'/>Leasers*/}
                                        {/*</a>*/}
                                    {/*</li>*/}
                                </ul>



                            </div>
                        </nav>

                        <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-4">
                            <div
                                className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                                <h1 className="h2">Degron | Dashboard Real Estate Owner</h1>
                                <div className="btn-toolbar mb-2 mb-md-0">
                                    <div className="btn-group mr-2">

                                    </div>

                                    <div className="dropdown show">
                                        <a className="btn btn-secondary dropdown-toggle" href="#" role="button"
                                           id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true"
                                           aria-expanded="false">
                                            Sort
                                        </a>

                                        <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                            <a className="dropdown-item" href="#">Buildings</a>
                                            <a className="dropdown-item" href="#">Offices</a>
                                            <a className="dropdown-item" href="#">Large Spaces</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </main>
                    </div>

                    <div className='container text-center'>
                        <h2>Charts</h2>

                        <img src='https://user-images.githubusercontent.com/21117852/48180737-c7e6f380-e35f-11e8-83e5-fafea9364811.png'/>
                    </div>


                </div>
            </div>
        );
    }
}

Chart.propTypes = {
    auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(mapStateToProps)(Chart);
