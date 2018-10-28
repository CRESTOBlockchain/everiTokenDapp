import React, {Component} from 'react';
import {PropTypes} from 'prop-types';
import {connect} from 'react-redux';
import {faHandshake, faWifi} from "@fortawesome/free-solid-svg-icons/index";


class Team extends Component {

    render() {
        return (
            <div>
                <h1 className="display-3 mb-4 text-center">TEAM</h1>
                <div className="container">
                    <div className="row">
                        <div className="col text-center" >
                            <img src='https://user-images.githubusercontent.com/21117852/47596471-15a34980-d9b9-11e8-8bae-62340e200124.png'/>
                        </div>
                        <div className="col text-center">
                            <img src='https://user-images.githubusercontent.com/21117852/47596486-42576100-d9b9-11e8-8044-883a162d5308.png'/>
                        </div>
                        <div className="col text-center">
                            <img src='https://user-images.githubusercontent.com/21117852/47596526-73379600-d9b9-11e8-9abc-965cf50f5f98.png'/>
                        </div>
                    </div>
                </div>
                <hr/>

                <div className="container">
                    <div className="row">
                        <div className="col text-center" >
                            <img src=''/>
                        </div>
                        <div className="col text-center">
                            <img src=''/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

Team.propTypes = {
    auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(mapStateToProps)(Team);
