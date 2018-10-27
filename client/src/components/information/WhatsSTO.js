import React, {Component} from 'react';
import {PropTypes} from 'prop-types';
import {connect} from 'react-redux';

class WhatsSTO extends Component {

    render() {
        return (
            <div>
                <div className="whatsSTOpage">
                    <div className="dark-overlay landing-inner text-light">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12 text-center">
                                    <h1 className="display-3 mb-4">What IS STO</h1>
                                    <p className="lead">
                                        {' '}
                                        “Security tokens are digital assets that are compliant with federal securities laws and run on the blockchain … STOs, offer a new, compliant way for companies to raise capital. The beauty of an STO is that any company can run one: a blockchain company, non-blockchain company, startup or enterprise.”   —— Darren Marble
                                    </p>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <hr/>
                <hr/>
                <hr/>
                <hr/>

                <div className="container">
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <img src='https://user-images.githubusercontent.com/21117852/47595798-aaf00f00-d9b4-11e8-98a7-0c204a0c1a4c.png'/>

                        </div>
                    </div>
                </div>
                <hr/>

                <div className="container">
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <img src='https://user-images.githubusercontent.com/21117852/47595699-31582100-d9b4-11e8-8f45-88d62d23d7ee.png'/>

                        </div>
                    </div>
                </div>
                <hr/>

                <div className="container">
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <h4 className="display-5 mb-4">Security Token = Utility Token + Venture Capital</h4>
                            <img src='https://user-images.githubusercontent.com/21117852/47596078-6f564480-d9b6-11e8-816e-845591f890e8.png'/>

                        </div>
                    </div>
                </div>

                <hr/>

            </div>
        );
    }
}

WhatsSTO.propTypes = {
    auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(mapStateToProps)(WhatsSTO);
