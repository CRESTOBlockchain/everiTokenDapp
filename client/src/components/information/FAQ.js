import React, {Component} from 'react';
import {PropTypes} from 'prop-types';
import {connect} from 'react-redux';

class FAQ extends Component {

    render() {
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <h1>FAQ</h1>
                            <hr/>
                            <p>About CRESTO
                                …
                                …
                                Account setting

                                Profitability
                                …
                                …</p>
                            <p>Coming sooner than you know</p>

                        </div>

                    </div>
                </div>
            </div>
        );
    }
}

FAQ.propTypes = {
    auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(mapStateToProps)(FAQ);
