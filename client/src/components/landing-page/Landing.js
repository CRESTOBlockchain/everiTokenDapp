import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {PropTypes} from 'prop-types';
import {connect} from 'react-redux';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faBalanceScale, faHandshake, faWifi} from '@fortawesome/free-solid-svg-icons'


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
                                    <h1 className="display-3 mb-4">CRESTO</h1>
                                    <p className="lead">
                                        {' '}
                                        CRESTO is a fintech solution on real estate investment market. CRESTO platform
                                        allows asset owners and developers tokenize their assets and hold initial sale
                                        of their tokenized securities. It is also a centralized platform for secondary
                                        trading of asset-backed tokens.
                                    </p>
                                    <hr/>

                                    {/*<Link to="/register" className="btn btn-lg btn-info mr-2">*/}
                                        {/*Sign Up*/}
                                    {/*</Link>*/}
                                    {/*<Link to="/login" className="btn btn-lg btn-light">*/}
                                        {/*Login*/}
                                    {/*</Link>*/}

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <hr/>
                <hr/>



                <div className="container">
                    <div className="row">
                        <div className="col text-center" >
                            <FontAwesomeIcon icon={faBalanceScale} size="6x" className='landingIcons '/><p>Full legal compliance</p>


                        </div>
                        <div className="col text-center">
                            <FontAwesomeIcon icon={faHandshake} size="6x" className='landingIcons'/><p>Cooperation instead of “disruption”</p>

                        </div>
                        <div className="col text-center">
                            <FontAwesomeIcon icon={faWifi} size="6x" className='landingIcons'/><p>Clients’ advantage through technology</p>
                        </div>
                    </div>
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
