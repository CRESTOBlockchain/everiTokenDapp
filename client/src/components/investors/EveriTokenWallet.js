//import "./evt.js";
//import "./DegronEvt.js";
import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {PropTypes} from 'prop-types';
import {connect} from 'react-redux';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faHome, faChartLine, faMapSigns, faUserFriends} from '@fortawesome/free-solid-svg-icons'

import Navbar from './InvestorsNavbar'
import './css/sidebar.css';
import { investEVT, importWallet } from './DegronEvt.js'


class Building1 extends Component {

    // This checks if user authenticated if yes automatically sends to dashboard - if enabled
    componentDidMount() {
        if (this.props.auth.isAuthenticated) {
            // this.props.history.push('/dashboard');
        }

        const script = document.createElement("script");

        script.src = "./evt.min.js";

        script.type = 'text/javascript';
        script.async = true;

        document.body.appendChild(script);
        window.addEventListener('load', this.loadEVT);
        //loadEVT();

    }
    componentWillMount (){

    }

    render() {
        return (
            <div>

                                    <section>
                                        <p className="card-text">Status of Everitoken blockchain&nbsp; <input type="text" id="status" value="Unconnected"/></p>

                                        <p className='card-text'>Step 1: Load Wallet </p>
                                        <p className='card-text'>Investor: Michael &nbsp;&nbsp;<button className="btn btn-primary" onClick={importWallet} >Load Wallet</button></p>
                                        <p className='card-text'><b>Michael's Wallet</b>: Everitoken (EVTs): <input type="text" value="" id="evt"></input> Degron(Degs): <input type="text" id="deg"></input>
                                            <p className='card-text'>Version of Everitoken blockchain &nbsp;
                                                <input type="text" id="version"/>

                                                <hr/>
                                                <p className='card-text'>Step 2: Type in amount you wish to invest and click Invest button </p></p>
                                        </p>
                                        <p>Using Everitoken(<b>EVT</b>) you can now invest in real estate, invest your EVT and get Degron token(<b>Deg</b>) and safeguard your money and future"</p>
                                        <p>Invest EVT amount in this property (example: 20): <input type="text" id="sendEVT"></input> <button className="btn btn-primary" onClick={investEVT} >invest</button></p> <p id="investClear"></p>
                                    </section>


            </div>
        );
    }
}

Building1.propTypes = {
    auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(mapStateToProps)(Building1);
