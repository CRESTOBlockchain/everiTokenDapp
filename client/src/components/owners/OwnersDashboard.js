import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {PropTypes} from 'prop-types';
import {connect} from 'react-redux';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faHome, faChair, faMapSigns, faUserFriends} from '@fortawesome/free-solid-svg-icons'

import OwnersNavbar from './OwnersNavbar'
import './css/sidebar.css';

class OwnersDashboard extends Component {

    // This checks if user authenticated if yes automatically sends to dashboard - if enabled
    componentDidMount() {
        if (this.props.auth.isAuthenticated) {
            // this.props.history.push('/dashboard');
        }
    }

    render() {
        return (
            <div>
                <OwnersNavbar/>

                <div className="container-fluid">
                    <div className="row">
                        <nav className="col-md-2 d-none d-md-block bg-light sidebar">
                            <div className="sidebar-sticky">
                                <ul className="nav flex-column">
                                    <li className="nav-item">
                                        <Link className="nav-link active" to="OwnersDashboard">
                                            <FontAwesomeIcon icon={faHome} className='iconCSS'/>
                                            Dashboard <span className="sr-only">(current)</span>
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="CreateProperty">
                                            <FontAwesomeIcon icon={faChair} className='iconCSS'/>
                                            Create Property
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
                                <h1 className="h2">Degron | Property Owner’s Dashboard</h1>
                                <div className="btn-toolbar mb-2 mb-md-0">
                                    <div className="btn-group mr-2">

                                    </div>

                                </div>
                            </div>

                             <div className="container">
                                <div className="row">
                                    <div className="col-sm-12 text-center">
                                        <h2>Create a property</h2>
                                        <p>This page is for creating a property for investors to look at.</p>
                                        <div className="home-wrapper ">


                                            <Link className='btn btn-primary btn-rounded w-lg animated fadeInDown wow' to="CreateProperty">
                                                Create Property
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </main>
                    </div>
                </div>
            </div>
        );
    }
}

OwnersDashboard.propTypes = {
    auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(mapStateToProps)(OwnersDashboard);
