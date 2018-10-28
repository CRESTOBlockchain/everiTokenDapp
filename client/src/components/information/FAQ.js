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
                            <ul class="list-group">
                                <li class="list-group-item">About CRESTO</li>
                                <li class="list-group-item">Account setting </li>
                                <li class="list-group-item">   Risks</li>
                                <li class="list-group-item">Investing procedure </li>
                                <li class="list-group-item">STO procedure </li>
                                <li class="list-group-item">  Profitability</li>
                            </ul>
                            <p>Coming sooner than you know!</p>
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
