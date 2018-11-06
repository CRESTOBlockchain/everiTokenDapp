import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {logoutUser} from '../../actions/authActions';
import {clearCurrentProfile} from '../../actions/profileActions';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faSearch} from '@fortawesome/free-solid-svg-icons'
import {faGithub} from '@fortawesome/free-brands-svg-icons'

// import './css/sidebar.css';

class OwnersNavbar extends Component {
    onLogoutClick(e) {
        e.preventDefault();
        this.props.clearCurrentProfile();
        this.props.logoutUser();
    }

    render() {

        return (
            <div>
                {/*<nav className="navbar navbar-expand-sm navbar-dark bg-dark mb-4">*/}
                    {/*<div className="container">*/}
                        {/*<Link className="navbar-brand" to="/">*/}
                            {/*CRESTO*/}
                        {/*</Link>*/}
                        {/*<button*/}
                            {/*className="navbar-toggler"*/}
                            {/*type="button"*/}
                            {/*data-toggle="collapse"*/}
                            {/*data-target="#mobile-nav"*/}
                        {/*>*/}
                            {/*<span className="navbar-toggler-icon" />*/}
                        {/*</button>*/}

                        {/*<div className="collapse navbar-collapse" id="mobile-nav">*/}
                            {/*<ul className="navbar-nav mr-auto">*/}


                            {/*</ul>*/}

                        {/*</div>*/}
                    {/*</div>*/}
                {/*</nav>*/}






                <nav className="navbar navbar-expand-sm navbar-dark fixed-top bg-dark flex-md-wrap p-0 shadow navbarCSS">
                    <Link className="navbar-brand navbar-brandCSS mr-0" to="/">Degron</Link>

                    <button
                        className="navbar-toggler"
                        type="button"
                        data-toggle="collapse"
                        data-target="#mobile-nav"
                    >
                        <span className="navbar-toggler-icon"/>
                    </button>
                    <div className="collapse navbar-collapse" id="mobile-nav">
                        <ul className="navbar-nav mr-auto">


                            <li className="nav-item text-nowrap">
                                <Link className="nav-link" to="OwnersDashboard">Dashboard</Link>
                            </li>


                            <li className="nav-item text-nowrap">
                                <Link className="nav-link" to="CreateOffice">Create Property</Link>
                            </li>


                        </ul>

                    </div>
                </nav>
            </div>
        );
    }
}

OwnersNavbar.propTypes = {
    logoutUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(mapStateToProps, {logoutUser, clearCurrentProfile})(
    OwnersNavbar
);
