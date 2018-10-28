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
                        <h1>FAQs</h1>
                            <ul className="list-group">
                            <li className="list-group-item">About CRESTO</li>
                            <li className="list-group-item">Account setting </li>
                            <li className="list-group-item">   Risks</li>
                            <li className="list-group-item">Investing procedure </li>
                            <li className="list-group-item">STO procedure </li>
                            <li className="list-group-item">  Profitability </li>
                            </ul>
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
