import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { logoutUser } from '../../actions/authActions';
import { clearCurrentProfile } from '../../actions/profileActions';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faPhone, faPaperclip} from '@fortawesome/free-solid-svg-icons'
import {faGithub} from '@fortawesome/free-brands-svg-icons'

class Navbar extends Component {
  onLogoutClick(e) {
    e.preventDefault();
    this.props.clearCurrentProfile();
    this.props.logoutUser();
  }

  render() {
    const { isAuthenticated, user } = this.props.auth;

    const authLinks = (
      <ul className="navbar-nav ml-auto">
        {/*<li className="nav-item">*/}
          {/*<Link className="nav-link" to="/feed">*/}
            {/*Post Feed*/}
          {/*</Link>*/}
        {/*</li>*/}
        {/*<li className="nav-item">*/}
          {/*<Link className="nav-link" to="/dashboard">*/}
            {/*Dashboard*/}
          {/*</Link>*/}
        {/*</li>*/}
        <li className="nav-item">
          <a
            href=""
            onClick={this.onLogoutClick.bind(this)}
            className="nav-link"
          >
            <img
              className="rounded-circle"
              src={user.avatar}
              alt={user.name}
              style={{ width: '25px', marginRight: '5px' }}
              title="You must have a Gravatar connected to your email to display an image"
            />{' '}
            Logout
          </a>
        </li>
      </ul>
    );

    const guestLinks = (
      <ul className="navbar-nav ml-auto">
        {/*<li className="nav-item">*/}
          {/*<Link className="nav-link" to="/register">*/}
            {/*Sign Up*/}
          {/*</Link>*/}
        {/*</li>*/}
        {/*<li className="nav-item">*/}
          {/*<Link className="nav-link" to="/login">*/}
            {/*Login*/}
          {/*</Link>*/}
        {/*</li>*/}
      </ul>
    );

    return (
        <div>
            <div className="tagline">
                <div className="container">
                    <div className="float-left">
                        <div className="phone">
                           <FontAwesomeIcon icon={faPhone}/> +1 800 123 45 67
                        </div>
                        <div className="email">
                            <a href="mailto:#">
                                <FontAwesomeIcon icon={faPaperclip}/> info@degron.io
                            </a>
                        </div>
                    </div>
                    <div className="float-right">
                        <ul className="top_socials">
                            <li><a href="https://github.com/CRESTOBlockchain/everiTokenDapp"
                                   target="_blank"> <FontAwesomeIcon icon={faGithub}/></a></li>
                        </ul>
                    </div>
                    <div className="clearfix"></div>
                </div>
            </div>

      <nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
        <div className="container">
          <Link className="navbar-brand" to="/">
              Degron
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#mobile-nav"
          >
            <span className="navbar-toggler-icon" />
          </button>

          <div className="collapse navbar-collapse" id="mobile-nav">
            <ul className="navbar-nav mr-auto">

                <li className="nav-item">
                    <Link className="nav-link" to="/team">
                        {' '}
                        Team
                    </Link>
                </li>


                <li className="nav-item">
                    <Link className="nav-link" to="InvestorsDashboard">
                        {' '}
                        Investors
                    </Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/OwnersDashboard">
                        {' '}
                        Owners
                    </Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/OwnersDashboard">
                        {' '}
                        How the process works
                    </Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/OwnersDashboard">
                        {' '}
                        For Property Owners
                    </Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/OwnersDashboard">
                        {' '}
                        Blog
                    </Link>
                </li>
            </ul>
            {isAuthenticated ? authLinks : guestLinks}
          </div>
        </div>
      </nav>
        </div>
    );
  }
}

Navbar.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps, { logoutUser, clearCurrentProfile })(
  Navbar
);
