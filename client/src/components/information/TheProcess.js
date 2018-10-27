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
                                        <img src='https://user-images.githubusercontent.com/21117852/47596138-dbd14380-d9b6-11e8-9814-343bd00c6229.png'/>
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
