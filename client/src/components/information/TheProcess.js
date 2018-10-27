import React, {Component} from 'react';
import {PropTypes} from 'prop-types';
import {connect} from 'react-redux';

class TheProcess extends Component {

    render() {
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <h1>The Process</h1>
                            <hr/>
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-12 text-center">
                                        <img src='https://user-images.githubusercontent.com/21117852/47609337-05e63c80-da6f-11e8-87c6-a4fc9de7755c.png'/>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        );
    }
}

TheProcess.propTypes = {
    auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(mapStateToProps)(TheProcess);
