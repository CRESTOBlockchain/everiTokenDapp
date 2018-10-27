import React, {Component} from 'react';
import {PropTypes} from 'prop-types';
import {connect} from 'react-redux';

class Blog extends Component {

    render() {
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <h1>Blog</h1>
                            <p>write some articles and share information</p>
                            <p>Coming sooner than you know</p>

                        </div>

                    </div>
                </div>
            </div>
        );
    }
}

Blog.propTypes = {
    auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(mapStateToProps)(Blog);
