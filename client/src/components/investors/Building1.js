import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {PropTypes} from 'prop-types';
import {connect} from 'react-redux';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faHome, faChartLine, faMapSigns, faUserFriends} from '@fortawesome/free-solid-svg-icons'

import Navbar from './InvestorsNavbar'
import './css/sidebar.css';

class Building1 extends Component {

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
                                    <li className="nav-item">
                                        <Link className="nav-link active" to='InvestorsDashboard'>
                                            <FontAwesomeIcon icon={faHome} className='iconCSS'/>
                                            Dashboard <span className="sr-only">(current)</span>
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">
                                            <FontAwesomeIcon icon={faChartLine} className='iconCSS'/>
                                            Charts<span className="badge badge-primary" style={{marginLeft: "15px"}}>8</span>
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">

                                            <FontAwesomeIcon icon={faMapSigns} className='iconCSS'/>Maps
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">
                                            <FontAwesomeIcon icon={faUserFriends} className='iconCSS'/>Leasers
                                        </a>
                                    </li>
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

                            {/*<canvas className="my-4 w-100" id="myChart" width="900" height="380"></canvas>*/}

                            <h2>Buildings 1</h2>
<p>This building is really awesome and you should invest in it</p>
                            <p>Trust me I am a business man so I know a deal.</p>

                            <Link to='building1' className="card">
                                <img className="card-img-top" src="https://user-images.githubusercontent.com/21117852/47975662-b72d4800-e0e9-11e8-8420-c7073e5ebbc1.jpg" alt="Card image cap"/>
                                <div className="card-body">
                                    <h5 className="card-title">Hangzhou Xintiandi Office Towers</h5>
                                    <p className="card-text">This is a wider card with supporting text below as
                                        a natural lead-in to additional content. This content is a little bit
                                        longer.</p>
                                </div>
                                <div className="card-footer">
                                    <small className="text-muted">Hangzhou Xintiandi Office Towers, China</small>
                                </div>
                            </Link>
                            <button className="btn btn-primary">invest</button>
                        </main>
                    </div>
                </div>
            </div>
        );
    }
}

Building1.propTypes = {
    auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(mapStateToProps)(Building1);
