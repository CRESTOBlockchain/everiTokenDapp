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
                    <div className="d-flex flex-wrap">
                        <div className=" text-center" >
                            <img src='https://user-images.githubusercontent.com/21117852/47626168-be41dc80-db64-11e8-8b0e-40f71bc09495.png'/>
                        </div>
                        <div className=" text-center">
                            <img src='https://user-images.githubusercontent.com/21117852/47626182-cc8ff880-db64-11e8-8ad9-923fd10fb9db.png'/>
                        </div>
                        <div className=" text-center">
                            <img src='https://user-images.githubusercontent.com/21117852/47626197-d7e32400-db64-11e8-963c-ef489b7be89c.png'/>
                        </div>
                        <div className=" text-center">
                            <img src='https://user-images.githubusercontent.com/21117852/47626208-e3364f80-db64-11e8-912d-f2b43c198ce9.png'/>
                        </div>

                        <div className=' text-center'>
                            <img src="https://user-images.githubusercontent.com/21117852/47626225-f3e6c580-db64-11e8-996c-9747c1401f3e.png"/>
                        </div>
                        <div className=' text-center'>
                            <img src="https://user-images.githubusercontent.com/21117852/47626242-05c86880-db65-11e8-934a-e7fdcf91e96f.png"/>
                        </div>
                        <div className=' text-center'>
                            <img src="https://user-images.githubusercontent.com/21117852/47626258-14af1b00-db65-11e8-9bb1-6ad387bd11a1.png"/>
                        </div>
                        <div className=' text-center'>
                            <img src="https://user-images.githubusercontent.com/21117852/47626269-2690be00-db65-11e8-97a1-805dae774e8d.png"/>
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
