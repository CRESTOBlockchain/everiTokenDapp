import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import hammerImg from '../../img/hammer.png'
import hands from '../../img/hands.png'
import tech from '../../img/tech.png'

class Landing extends Component {
  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push('/dashboard');
    }
  }

  render() {
    return (
        <div>
      <div className="landing">
        <div className="dark-overlay landing-inner text-light">
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-center">
                <h1 className="display-3 mb-4">Members Connector</h1>
                <p className="lead">
                  {' '}
                    CRESTO is a fintech solution on real estate investment market. CRESTO platform allows asset owners and developers tokenize their assets and hold initial sale of their tokenized securities. It is also a centralized platform for secondary trading of asset-backed tokens.
                </p>
                <hr/>

                <Link to="/register" className="btn btn-lg btn-info mr-2">
                  Sign Up
                </Link>
                <Link to="/login" className="btn btn-lg btn-light">
                  Login
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

          <div className=" text-white mt-5 p-4 text-center">
              <img src={hammerImg} alt="hammer"/><img/>
              <img src={hands} alt="hammer"/><img/>
              <img src={tech} alt="hammer"/><img/>
          </div>



        </div>
    );
  }
}

Landing.propTypes = {
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps)(Landing);
