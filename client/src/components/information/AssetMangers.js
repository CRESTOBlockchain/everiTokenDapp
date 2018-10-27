import React, {Component} from 'react';
import {PropTypes} from 'prop-types';
import {connect} from 'react-redux';

class AssetMangers extends Component {

    render() {
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <h1>Asset Mangers</h1>
                            <img
                                src='https://user-images.githubusercontent.com/21117852/47597131-8e58d480-d9be-11e8-8b22-46c1e0cae450.png'/>

                        </div>

                    </div>
                </div>
            </div>
        );
    }
}

AssetMangers.propTypes = {
    auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(mapStateToProps)(AssetMangers);
